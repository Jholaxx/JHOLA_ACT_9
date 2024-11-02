(function(window, undefined) {
  var dictionary = {
    "9175cfa6-8aab-496a-b765-ef9b605489f1": "Balance",
    "69191d1e-e9f4-4ebb-9aaf-2bc12fee4879": "Home",
    "9e47a7ee-22ff-48c4-af68-5f420851fda4": "Profile",
    "7b2a66a9-331b-4ea5-be46-dcb5d6d4c1b2": "Transaction History",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Sign In",
    "7faad910-3fa8-488e-9bf8-f62cbb1a338d": "Transfer",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "Board 1"
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