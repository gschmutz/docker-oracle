define({"oj-message":{fatal:"嚴重",error:"錯誤",warning:"警告",info:"資訊",confirmation:"確認","compact-type-summary":"{0}: {1}"},"oj-converter":{summary:"值不是使用預期的格式.",detail:"輸入使用預期格式的值.","plural-separator":", ",hint:{summary:"範例: {exampleValue}",detail:"使用與此右側範例相同的格式輸入值: '{exampleValue}'","detail-plural":"使用與這些右側範例相同的格式輸入值: '{exampleValue}'"},optionHint:{detail:"'{propertyName}' 選項接受的值為 '{propertyValueValid}'.","detail-plural":"'{propertyName}' 選項接受的值為 '{propertyValueValid}'."},optionTypesMismatch:{summary:"當 '{propertyName}' 選項設為 '{propertyValue}' 時, 必須指定 '{requiredPropertyName}' 選項的值."},
optionTypeInvalid:{summary:"未在 '{propertyName}' 選項提供符合預期類型的值."},optionOutOfRange:{summary:"'{propertyName}' 選項的 {propertyValue} 值超出範圍."},optionValueInvalid:{summary:"為 '{propertyName}' 選項指定的 '{propertyValue}' 值無效."},number:{decimalFormatMismatch:{summary:"十進位 '{value}' 不是使用預期的格式."},currencyFormatMismatch:{summary:"幣別 '{value}' 不是使用預期的格式."},percentFormatMismatch:{summary:"百分比 '{value}' 不是使用預期的格式."}},datetime:{datetimeOutOfRange:{summary:"'{propertyName}' 的 '{value}' 值超出範圍.",detail:"輸入 '{minValue}' 到 '{maxValue}' 之間的值."},
dateFormatMismatch:{summary:"日期 '{value}' 不是使用預期的格式."},timeFormatMismatch:{summary:"時間 '{value}' 不是使用預期的格式."},datetimeFormatMismatch:{summary:"日期與時間 '{value}' 不是使用預期的格式."},dateToWeekdayMismatch:{summary:"日期 '{date}' 不是 '{weekday}'.",detail:"輸入與日期對應的一週天次."}}},"oj-validator":{length:{hint:{min:"輸入 {min} 個或更多的字元.",max:"輸入 {max} 個或更少的字元",inRange:"輸入 {min} 個或更多的字元, 但最多不能超過上限 {max} 個.",exact:"輸入 {length} 個字元."},messageDetail:{tooShort:"輸入 {min} 個或更多的字元, 不可少於此數目.",tooLong:"輸入 {max} 個或更少的字元, 不可超過此數目."},messageSummary:{tooShort:"字元太少.",
tooLong:"字元太多."}},range:{number:{hint:{min:"輸入大於或等於 {min} 的數字.",max:"輸入小於或等於 {max} 的數字.",inRange:"輸入 {min} 到 {max} 之間的數字."},messageDetail:{rangeUnderflow:"數字 {value} 必須大於或等於 {min}.",rangeOverflow:"數字 {value} 必須小於或等於 {max}."},messageSummary:{rangeUnderflow:"數字太小.",rangeOverflow:"數字太大."}},datetime:{hint:{min:"輸入等於或晚於 {min} 的日期與時間.",max:"輸入等於或早於 {max} 的日期與時間.",inRange:"輸入 {min} 到 {max} 之間的日期與時間."},messageDetail:{rangeUnderflow:"日期與時間必須等於或晚於 {min}.",rangeOverflow:"日期與時間必須等於或早於 {max}."},messageSummary:{rangeUnderflow:"日期與時間早於最早日期.",
rangeOverflow:"日期與時間晚於最晚日期."}}},restriction:{date:{dayMetaData:{summary:"日期是停用的項目.",detail:"日期 {value} 不可以是停用的項目."}}},regExp:{summary:"格式不正確.",detail:"值 '{value}' 必須符合此樣式: '{pattern}'"},required:{summary:"必須輸入值.",detail:"您必須輸入值."}},"oj-editableValue":{required:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputDate":{closeText:"完成",prevText:"上個月",nextText:"下個月",currentText:"今天",weekHeader:"週",weekText:"週",datePicker:"日期選擇器",inputHelp:"按向下鍵或向上鍵來存取行事曆",inputHelpBoth:"按向下鍵或向上鍵來存取行事曆, 以及按 Shift + 向下鍵或 Shift + 向上鍵來存取時間下拉式清單"},
"oj-ojInputTime":{inputHelp:"按向下鍵或向上鍵來存取時間下拉式清單"},"oj-ojDataGrid":{accessibleSortAscending:"以遞增順序排序 {id}",accessibleSortDescending:"以遞減順序排序 {id}",accessibleActionableMode:"進入可執行動作的模式",accessibleNavigationMode:"進入導覽模式",accessibleSummaryExact:"這是 {rownum} 個列與 {colnum} 個欄的資料網格",accessibleSummaryEstimate:"這是列與欄數目不明的資料網格",accessibleSummaryExpanded:"目前已展開 {num} 個列",accessibleInitialFocus:"按 Tab 鍵即可將焦點設定在目前的儲存格",accessibleRowExpanded:"已展開的列",accessibleRowCollapsed:"已收縮的列",accessibleRowSelected:"已選取第 {row} 列",
accessibleColumnSelected:"已選取第 {column} 欄",accessibleStateSelected:"已選取",accessibleMultiCellSelected:"已選取 {num} 個儲存格",accessibleRowContext:"列 {index}",accessibleColumnContext:"欄 {index}",accessibleRangeSelectModeOn:"新增選取的儲存格範圍模式開啟",accessibleRangeSelectModeOff:"新增選取的儲存格範圍模式關閉",accessibleFirstRow:"已到達第一列",accessibleLastRow:"已到達最後一列",accessibleFirstColumn:"已到達第一欄",accessibleLastColumn:"已到達最後一欄",msgFetchingData:"正在擷取資料...",msgNoData:"沒有資料可供顯示.",labelResize:"調整大小",labelResizeWidth:"調整寬度",labelResizeHeight:"調整高度",
labelSortRow:"排序列",labelSortRowAsc:"以遞增方式排序列",labelSortRowDsc:"以遞減方式排序列",labelSortCol:"排序欄",labelSortColAsc:"以遞增方式排序欄",labelSortColDsc:"以遞減方式排序欄",labelCut:"剪下",labelPaste:"貼上"},"oj-ojRowExpander":{accessibleRowDescription:"層次 {level}, 第 {num} 列 (共 {total} 列)",accessibleRowExpanded:"已展開的列",accessibleRowCollapsed:"已收縮的列",accessibleStateExpanded:"已展開",accessibleStateCollapsed:"已收縮"},"oj-_ojLabel":{tooltipHelp:"說明",tooltipRequired:"必要"},"oj-ojInputNumber":{numberRange:{hint:{min:"",max:"",inRange:""},
messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},tooltipDecrement:"遞減",tooltipIncrement:"遞增"},"oj-ojTable":{labelSelectRow:"選取列",labelSelectColumn:"選取欄",labelSort:"排序",labelSortAsc:"遞增排序",labelSortDsc:"遞減排序",msgFetchingData:"正在擷取資料...",msgNoData:"沒有資料可供顯示."},"oj-ojTabs":{removeCueText:"可移除"},"oj-ojSelect":{noMatchesFound:"找不到相符項目"},"oj-ojTree":{m_loading:"正在載入...",m_newnode:"新建節點",m_multisel:"多重選擇",m_edit:"編輯",m_create:"建立",m_cut:"剪下",m_copy:"複製",
m_paste:"貼上",m_remove:"移除",m_rename:"重新命名",m_emptyText:"沒有資料"},"oj-ojPagingControl":{labelAccPaging:"分頁",labelAccNavFirstPage:"第一頁",labelAccNavLastPage:"最後一頁",labelAccNavNextPage:"下一頁",labelAccNavPreviousPage:"上一頁",labelAccNavPage:"頁面",labelLoadMore:"顯示更多...",labelNavInputPage:"頁面",labelNavInputPageMax:"/ {pageMax}",labelNavInputPageSummary:"({pageSummary})",msgItemRange:"{pageFrom}-{pageTo} / {pageTotal} 頁的項目",msgItemRangeUnknown:"{pageFrom}-{pageTo} 頁的項目",tipNavInputPage:"移至頁面",tipNavPageLink:"移至頁面 {pageNum}",
tipNavNextPage:"下一頁",tipNavPreviousPage:"上一頁",tipNavFirstPage:"第一頁",tipNavLastPage:"最後一頁",pageInvalid:{summary:"輸入的頁面值無效.",detail:"請輸入大於 0 的值."},maxPageLinksInvalid:{summary:"maxPageLinks 的值無效.",detail:"請輸入大於 4 的值."}},"oj-ojChart":{labelDefaultGroupName:"{groupName} 群組",labelSeries:"序列: {seriesName}",labelGroup:"群組: {groupName}",labelValue:"值: {value}",labelTargetValue:"目標: {targetValue}",labelX:"X: {x}",labelY:"Y: {y}",labelZ:"Z: {z}",labelLow:"低: {low}",labelHigh:"高: {high}",labelOther:"其他",tooltipPan:"移動瀏覽",
tooltipSelect:"選框選取",tooltipZoom:"選框縮放"},"oj-ojSunburst":{labelColor:"顏色",labelSize:"大小"},"oj-ojTreemap":{labelColor:"顏色",labelSize:"大小"},"oj-dvtBaseComponent":{labelClearSelection:"清除選取範圍",labelScalingSuffixThousand:"K",labelScalingSuffixMillion:"M",labelScalingSuffixBillion:"B",labelScalingSuffixTrillion:"T",labelScalingSuffixQuadrillion:"Q",msgNoData:"沒有資料可供顯示",notReadyToRender:{summary:"此元件必須先附加至 DOM 的可見子樹狀結構之後才能轉換."},stateSelected:"已選取",stateUnselected:"已取消選取",stateMaximized:"最大化",stateMinimized:"最小化",
stateExpanded:"已展開",stateCollapsed:"已收縮",stateIsolated:"已隔離",stateHidden:"已隱藏",stateVisible:"可見"},"oj-ojPopup":{ariaLiveRegionInitialFocusFirstFocusable:"進入即現式視窗. 按下 F6 即可在即現式視窗與關聯的控制項之間瀏覽.",ariaLiveRegionInitialFocusNone:"即現式視窗已開啟. 按下 F6 即可在即現式視窗與關聯的控制項之間瀏覽."}});