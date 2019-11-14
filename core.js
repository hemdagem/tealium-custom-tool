if (window.utag) {

var LTV ={};

getLookupTable = function (extensionId) {
            var extensions = utag.handler.cfg_extend;
            for (var i = 0; i < extensions.length; i++) {
                if (extensionId === extensions[i].id) {
                    return JSON.parse(utag.handler.extend[i].toString().match(/c=(\[.*}])/)[1]
                        .replace(/'/g, "\"")
                        .replace(/\.\*|[\^]/g, "")
                        .replace(/\{/g, "{ \"name\" :")
                        .replace(/\"\:\"/g, "\", \"value\":\""));
                }
            }
        };
  
  LTV.ApplicationValues = getLookupTable("180");

	tealiumTools.send(LTV);
} else {
	tealiumTools.sendError('Error', 'There does not appear to be a uTag on the current webpage.');
}
