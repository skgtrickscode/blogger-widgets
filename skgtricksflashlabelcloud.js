/**
 * Auto Flash Label Cloud Script for Blogger
 * Author  : Shivam garg from skgtricks.blogspot.com
 * Version : 1.1
 * (c)2012 All Rights Reserved by Author
 *
 * 	==== Default Options ====
 * 	var SkgtricksFlashLabelSettings = {
 *		blogurl        : "http//" + location.host,
 *		color          : "000000",
 *		hoverColor     : "333333",
 *		backgroundColor: "FFFFFF",
 *		size           : 15,
 *		speed          : 100,
 *		width          : 250,
 *		height         : 300,
 *		transparency   : true
 *	};
 *
 */
if (typeof SkgtricksFlashLabelSettings == 'undefined') {
    var SkgtricksFlashLabelSettings = {}
}
var SkgtricksFlashLabelSettings = {
    blogurl: SkgtricksFlashLabelSettings.blogurl || 'http://' + location.host,
    color: SkgtricksFlashLabelSettings.color || '000000',
    hoverColor: SkgtricksFlashLabelSettings.hoverColor || '333333',
    backgroundColor: SkgtricksFlashLabelSettings.backgroundColor || 'FFFFFF',
    size: SkgtricksFlashLabelSettings.size || 15,
    speed: SkgtricksFlashLabelSettings.speed || 100,
    width: SkgtricksFlashLabelSettings.width || 250,
    height: SkgtricksFlashLabelSettings.height || 300,
    transparency: (typeof SkgtricksFlashLabelSettings.transparency == 'undefined') ? true : SkgtricksFlashLabelSettings.transparency
};

function generatelabels(json) {
    var SkgtricksFlashTags = '',
        Skgtrickstags = new Array('<tags>'),
        SkgtricksCat = json.feed.category;
    for (i = 0; i < SkgtricksCat.length; i++) {
        Skgtrickstags.push('<a href="' + SkgtricksFlashLabelSettings.blogurl + '/search/label/' + SkgtricksCat[i].term + '/" style="' + SkgtricksFlashLabelSettings.size + '">' + SkgtricksCat[i].term + '</a>')
    }
    Skgtrickstags.push('</tags>');
    SkgtricksFlashTags = encodeURIComponent(Skgtrickstags.join(''));
    var flashvars = {};
    flashvars.tcolor = '0x' + SkgtricksFlashLabelSettings.color;
    flashvars.hicolor = '0x' + SkgtricksFlashLabelSettings.hoverColor;
    flashvars.mode = 'tags';
    flashvars.distr = 'true';
    flashvars.tspeed = SkgtricksFlashLabelSettings.speed;
    flashvars.tagcloud = SkgtricksFlashTags;
    var params = {};
    if (SkgtricksFlashLabelSettings.transparency) {
        params.wmode = 'transparent'
    }
    params.bgcolor = '#' + SkgtricksFlashLabelSettings.backgroundColor;
    params.allowscriptaccess = 'always';
    var attributes = {};
    attributes.id = 'SkgtricksFlashLabels';
    swfobject.embedSWF('https://dl.dropbox.com/s/9jz6tzalqkxqchi/Skgtricks-tagcloud.swf', 'SkgtricksFlashContent', SkgtricksFlashLabelSettings.width, SkgtricksFlashLabelSettings.height, '9.0.0', 'http://swfobject.googlecode.com/svn-history/r322/trunk/swfobject/expressInstall.swf', flashvars, params, attributes)
}(function () {
    var SkgtricksBody = document.getElementsByTagName('head')[0];
    var SkgtricksswfObject = document.createElement('script');
    SkgtricksswfObject.type = 'text/javascript';
    SkgtricksswfObject.src = 'https://ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js';
    SkgtricksBody.appendChild(SkgtricksswfObject);
    var SkgtricksFlashElem = document.getElementById('SkgtricksFlashContent');
    if (SkgtricksFlashElem === null) {
        document.write('<div id=\'SkgtricksFlashContent\'></div>')
    }
    var SkgtricksJsonScript = document.createElement('script');
    SkgtricksJsonScript.type = 'text/javascript';
    SkgtricksJsonScript.src = SkgtricksFlashLabelSettings.blogurl + '/feeds/posts/summary?alt=json&callback=generatelabels&max-results=1';
    SkgtricksBody.appendChild(SkgtricksJsonScript)
})();
