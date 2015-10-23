define({root:{"oj-message":{fatal:"Fatal",error:"Error",warning:"Warning",info:"Info",confirmation:"Confirmation","compact-type-summary":"{0}: {1}"},"oj-converter":{summary:"Value is not in the expected format.",detail:"Enter a value in the expected format.","plural-separator":", ",hint:{summary:"Example: {exampleValue}",detail:"Enter a value in the same format as this example: '{exampleValue}'","detail-plural":"Enter a value in the same format as these examples: '{exampleValue}'"},optionHint:{detail:"An accepted value for option '{propertyName}' is '{propertyValueValid}'.",
"detail-plural":"Accepted values for option '{propertyName}' are '{propertyValueValid}'."},optionTypesMismatch:{summary:"A value for the option '{requiredPropertyName}' is required when the option '{propertyName}' is set to '{propertyValue}'."},optionTypeInvalid:{summary:"A value of the expected type was not provided for option '{propertyName}'."},optionOutOfRange:{summary:"Value {propertyValue} is out of range for the option '{propertyName}'."},optionValueInvalid:{summary:"An invalid value '{propertyValue}' was specified for the option '{propertyName}'."},
number:{decimalFormatMismatch:{summary:"'{value}' is not in the expected number format."},currencyFormatMismatch:{summary:"'{value}' is not in the expected currency format."},percentFormatMismatch:{summary:"'{value}' is not in the expected percent format."}},datetime:{datetimeOutOfRange:{summary:"Value '{value}' is out of range for the '{propertyName}'.",detail:"Enter a value between '{minValue}' and '{maxValue}'."},dateFormatMismatch:{summary:"'{value}' is not in the expected date format."},timeFormatMismatch:{summary:"'{value}' is not in the expected time format."},
datetimeFormatMismatch:{summary:"'{value}' is not in the expected date and time format."},dateToWeekdayMismatch:{summary:"Day '{date}' does not fall on a '{weekday}'.",detail:"Enter a weekday that corresponds with the date."}}},"oj-validator":{length:{hint:{min:"Enter {min} or more characters.",max:"Enter {max} or fewer characters",inRange:"Enter {min} or more characters, up to a maximum of {max}.",exact:"Enter {length} characters."},messageDetail:{tooShort:"Enter {min} or more characters, not fewer.",
tooLong:"Enter {max} or fewer characters, not more."},messageSummary:{tooShort:"There are too few characters.",tooLong:"There are too many characters."}},range:{number:{hint:{min:"Enter a number greater than or equal to {min}.",max:"Enter a number less than or equal to {max}.",inRange:"Enter a number between {min} and {max}."},messageDetail:{rangeUnderflow:"Number {value} must be greater than or equal to {min}.",rangeOverflow:"Number {value} must be less than or equal to {max}."},messageSummary:{rangeUnderflow:"Number is too low.",
rangeOverflow:"Number is too high."}},datetime:{hint:{min:"Enter a date and time on or after {min}.",max:"Enter a date and time on or before {max}.",inRange:"Enter a date and time between {min} and {max}."},messageDetail:{rangeUnderflow:"Date and time must be on or later than {min}.",rangeOverflow:"Date and time must be on or sooner than {max}."},messageSummary:{rangeUnderflow:"Date and time is earlier than the minimum date.",rangeOverflow:"Date and time is later than the maximum date."}}},restriction:{date:{dayMetaData:{summary:"Date is of a disabled entry.",
detail:"Date {value} should not be of a disabled entry."}}},regExp:{summary:"Format is incorrect.",detail:"Value '{value}' must match this pattern: '{pattern}'"},required:{summary:"Value is required.",detail:"You must enter a value."}},"oj-editableValue":{required:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputDate":{prevText:"Prev",nextText:"Next",currentText:"Today",weekHeader:"Wk",weekText:"Week",datePicker:"Date Picker",inputHelp:"Press Key down or Key up for access to Calendar",inputHelpBoth:"Press Key down or Key up for access to Calendar and Shift + Key down or Shift Key up for access to time drop down"},
"oj-ojInputTime":{inputHelp:"Press Key down or Key up for access to time drop down"},"oj-ojDataGrid":{accessibleSortAscending:"{id} sorted in ascending order",accessibleSortDescending:"{id} sorted in decending order",accessibleActionableMode:"Enter actionable mode",accessibleNavigationMode:"Enter navigation mode",accessibleSummaryExact:"This is a data grid with {rownum} rows and {colnum} columns",accessibleSummaryEstimate:"This is a data grid with unknown number of rows and columns",accessibleSummaryExpanded:"There are currently {num} rows expanded",
accessibleInitialFocus:"Press tab to focus on the current cell",accessibleRowExpanded:"Row expanded",accessibleRowCollapsed:"Row collapsed",accessibleRowSelected:"Row {row} selected",accessibleColumnSelected:"Column {column} selected",accessibleStateSelected:"selected",accessibleMultiCellSelected:"{num} cells selected",accessibleRowContext:"Row {index}",accessibleColumnContext:"Column {index}",accessibleRangeSelectModeOn:"Add selected range of cells mode on",accessibleRangeSelectModeOff:"Add selected range of cells mode off",
accessibleFirstRow:"You have reached the first row",accessibleLastRow:"You have reached the last row",accessibleFirstColumn:"You have reached the first column",accessibleLastColumn:"You have reached the last column",msgFetchingData:"Fetching Data...",msgNoData:"No data to display.",labelResize:"Resize",labelResizeWidth:"Resize Width",labelResizeHeight:"Resize Height",labelSortRow:"Sort Row",labelSortRowAsc:"Sort Row Ascending",labelSortRowDsc:"Sort Row Descending",labelSortCol:"Sort Column",labelSortColAsc:"Sort Column Ascending",
labelSortColDsc:"Sort Column Descending",labelCut:"Cut",labelPaste:"Paste"},"oj-ojRowExpander":{accessibleRowDescription:"Level {level}, Row {num} of {total}",accessibleRowExpanded:"Row expanded",accessibleRowCollapsed:"Row collapsed",accessibleStateExpanded:"expanded",accessibleStateCollapsed:"collapsed"},"oj-_ojLabel":{tooltipHelp:"Help",tooltipRequired:"Required"},"oj-ojInputNumber":{numberRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",
rangeOverflow:""}},tooltipDecrement:"Decrement",tooltipIncrement:"Increment"},"oj-ojTable":{labelSelectRow:"Select Row",labelSelectColumn:"Select Column",labelSort:"Sort",labelSortAsc:"Sort Ascending",labelSortDsc:"Sort Descending",msgFetchingData:"Fetching Data...",msgNoData:"No data to display."},"oj-ojTabs":{removeCueText:"Removable"},"oj-ojSelect":{noMatchesFound:"No matches found"},"oj-ojTree":{m_loading:"Loading...",m_newnode:"New Node",m_multisel:"Multiple Selection",m_edit:"Edit",m_create:"Create",
m_cut:"Cut",m_copy:"Copy",m_paste:"Paste",m_remove:"Remove",m_rename:"Rename",m_emptyText:"No data"},"oj-ojPagingControl":{labelAccPaging:"Pagination",labelAccNavFirstPage:"First Page",labelAccNavLastPage:"Last Page",labelAccNavNextPage:"Next Page",labelAccNavPreviousPage:"Previous Page",labelAccNavPage:"Page",labelLoadMore:"Show More...",labelNavInputPage:"Page",labelNavInputPageMax:"of {pageMax}",labelNavInputPageSummary:"({pageSummary})",msgItemRange:"{pageFrom}-{pageTo} of {pageTotal} items",
msgItemRangeUnknown:"{pageFrom}-{pageTo} items",tipNavInputPage:"Go To Page",tipNavPageLink:"Go To Page {pageNum}",tipNavNextPage:"Next",tipNavPreviousPage:"Previous",tipNavFirstPage:"First",tipNavLastPage:"Last",pageInvalid:{summary:"The page value entered is invalid.",detail:"Please enter a value greater than 0."},maxPageLinksInvalid:{summary:"Value for maxPageLinks is invalid.",detail:"Please enter a value greater than 4."}},"oj-ojChart":{labelDefaultGroupName:"Group {groupName}",labelSeries:"Series: {seriesName}",
labelGroup:"Group: {groupName}",labelValue:"Value: {value}",labelTargetValue:"Target: {targetValue}",labelX:"X: {x}",labelY:"Y: {y}",labelZ:"Z: {z}",labelLow:"Low: {low}",labelHigh:"High: {high}",labelOther:"Other",tooltipPan:"Pan",tooltipSelect:"Marquee select",tooltipZoom:"Marquee zoom",msgInvalidData:"Invalid data"},"oj-ojSunburst":{labelColor:"Color",labelSize:"Size"},"oj-ojTreemap":{labelColor:"Color",labelSize:"Size"},"oj-dvtBaseComponent":{labelClearSelection:"Clear Selection",labelScalingSuffixThousand:"K",
labelScalingSuffixMillion:"M",labelScalingSuffixBillion:"B",labelScalingSuffixTrillion:"T",labelScalingSuffixQuadrillion:"Q",msgNoData:"No data to display",notReadyToRender:{summary:"This component must be attached to a visible subtree of the DOM prior to rendering."},stateSelected:"Selected",stateUnselected:"Unselected",stateMaximized:"Maximized",stateMinimized:"Minimized",stateExpanded:"Expanded",stateCollapsed:"Collapsed",stateIsolated:"Isolated",stateHidden:"Hidden",stateVisible:"Visible"},"oj-ojPopup":{ariaLiveRegionInitialFocusFirstFocusable:"Entering popup. Press F6 to navigate between the popup and associated control.",
ariaLiveRegionInitialFocusNone:"Popup opened. Press F6 to navigate between the popup and associated control."}},"zh-Hant":1,it:1,fr:1,"zh-Hans":1,pt:1,ja:1,de:1,ko:1,es:1});