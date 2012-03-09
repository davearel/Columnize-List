(function($){
    
    $.columnizeList = function(el, options){
        // To avoid scope issues, use 'base' instead of 'this'
        // to reference this class from internal events and functions.
        var base = this;

        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el;

        // Add a reverse reference to the DOM object
        base.$el.data("columnizeList", base);

        base.init = function () {
            base.options = $.extend({},$.columnizeList.defaultOptions, options);
            base.createColumns();
            base.splitList();
        };

        base.createColumns = function () {
            // create out wrapper div and append it to the parent item
            var $listwrap = $('<div class="columnizedList" />').appendTo(base.$el.parent());
            // create a ul for each column
            for ( var i = 0; i < base.options.columns; i++ ) {
                $('<ul />').appendTo($listwrap);
            }
        };

        base.splitList = function () {

            var 
            // # of li's
            length = base.$el.find("li").size(),
            // # of clumns
            columns = base.options.columns,
            // # of items per column
            columnLength = Math.round(length / columns),
            
            $list,
            sliceStart = 0;
            sliceEnd = columnLength;

           
            // loop through each nested list
            base.$el.find('li > ul').each( function (index) {
                var 
                $this = $(this),
                $parentLi = $(this).parent('li'),
                // set nested class on nested li's
                $nestedItems = $this.find("> li").addClass('nestedItem');
                // append nested li's to parent list
                $nestedItems.insertAfter($parentLi);
                // remove any trace of the nested list
                $this.remove();
            });
            
            // get our list of li's
            $list = base.$el.find("li");
            
            // loop through each column
            for ( var i = 0; i < columns; i++ ) {
                
                // slice our li list for each column
                var slidedList = $list.slice(sliceStart, sliceEnd);

                // find this columns ul, then append a our sliced list items
                $('.columnizedList ul:eq(' + i + ')').append(slicedList);
 
                // up the slice start/end index points
                sliceEnd += columnLength;
                sliceStart += columnLength;
                
                // if next loop is the last loop
                if ( (i + 2) === columns ) {
                    // this will ensure all remaining 
                    // items are appended
                    sliceEnd = undefined;
                }
            }
            
            // remove original list
            base.$el.remove();
            
        };

        // Run initializer
        base.init();
    };

    $.columnizeList.defaultOptions = {
        columns: 2
    };

    $.fn.columnizeList = function(options){
        return this.each(function(){
            (new $.columnizeList(this, options));
        });
    };

})(jQuery);
