module.exports = {
    option: {
        oCaptionType: 'Complete',  // Set to Show Caption : None,Caption,Resource,Duration,Complete,            
        oQuarterColWidth: 36,
        oDateTaskDisplayFormat: 'day dd month yyyy', // Shown in tool tip box
        oDayMajorDateDisplayFormat: 'mon yyyy - Week ww',// Set format to display dates in the "Major" header of the "Day" view
        oWeekMinorDateDisplayFormat: 'dd mon', // Set format to display dates in the "Minor" header of the "Week" view
        oLang: 'en',
        oUseSingleCell: 10000, // Set the threshold at which we will only use one cell per table row (0 disables).  Helps with rendering performance for large charts.
        oShowRes: 1,
        oShowCost: 1,
        oShowAddEntries: 0,  //exibits a plus button (1/0)
        oShowComp: 1,
        oShowDur: 1,
        oShowStartDate: 1,
        oShowEndDate: 1,
        oShowPlanStartDate: 1,
        oShowPlanEndDate: 1,
        oAdditionalHeaders: "{category: {title: 'Category'},sector: {title: 'Sector'},importance: {title: 'Importance'}}",
        //oTotalHeight: ,  //CSS style height like "300px". Empty for auto height
        oMinDate: '2017-01-01',
        oMaxDate: '2017-12-31',
        oShowTaskInfoLink: 1, // Show link in tool tip (0/1)
        oShowEndWeekDate: 0,  // Show/Hide the date for the last day of the week in header for daily view (1/0)
        oShowWeekends: 1, // Show weekends days in the vFormat day
        oTooltipDelay: 150,
        //oTooltipTemplate:
        //  document.querySelector("#dynamicTooltip:checked") ?
        //    generateTooltip :
        //    newtooltiptemplate,
        oDebug: false,
        oEditable: true, // true or false
        oColumnOrder: [], // array or use [] for unsorted
        oScrollTo: 'today', // or new Date() or a Date object with a specific date
        oUseSort: true, // true or false
        oFormat: 'week',
        oFormatArr: "'Day', 'Week', 'Month', 'Quarter'", // Even with setUseSingleCell using Hour format on such a large chart can cause issues in some browsers
    }
};