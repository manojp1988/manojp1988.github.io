(function(window, undefined) {
  var dictionary = {
    "2ba810a2-3b3b-424f-b531-1c7951ec45da": "viewlist Customer Master",
    "32fd3b76-f5a2-45da-ad2b-7043279b3b9a": "receivables_IP",
    "7c4d2184-92f5-46e2-bf93-721664b6b3cf": "comparison_report",
    "c793a20c-38d0-4ed5-adc1-71ea06db489d": "receivables",
    "8ed9966f-637c-4394-a7ce-849d554cb211": "viewlist Vendor master",
    "e8f0853f-e925-4d5b-a778-9ed18711bc56": "vendor_processed",
    "17e4bed0-0ad5-499b-964e-87ba39cbbbeb": "vendor",
    "1742422d-f744-4cb0-9d98-081e807efa97": "viewlist history",
    "dff86f22-e1b8-406a-8fbe-5f1a3bfd4ab3": "reconcile_report",
    "b810ba57-ae6d-4b54-b6b3-e39595f72c8e": "details Summary By Customer",
    "f70805e0-f77d-4400-83b2-8cffc678792f": "historical_reports",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "login page",
    "bb7a5a5f-77f2-4ad1-ac25-43ea25150a20": "viewlist Statement",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);