const test = require('tap').test;
const Mime = require('../index');

const mimeHeaders = {
    "application/andrew-inset": ["ez"],
    "application/applixware": ["aw"],
    "application/atom+xml": ["atom"],
    "application/atomcat+xml": ["atomcat"],
    "application/atomsvc+xml": ["atomsvc"],
    "application/bdoc": ["bdoc"],
    "application/ccxml+xml": ["ccxml"],
    "application/cdmi-capability": ["cdmia"],
    "application/cdmi-container": ["cdmic"],
    "application/cdmi-domain": ["cdmid"],
    "application/cdmi-object": ["cdmio"],
    "application/cdmi-queue": ["cdmiq"],
    "application/cu-seeme": ["cu"],
    "application/dash+xml": ["mpd"],
    "application/davmount+xml": ["davmount"],
    "application/docbook+xml": ["dbk"],
    "application/dssc+der": ["dssc"],
    "application/dssc+xml": ["xdssc"],
    "application/ecmascript": ["ecma"],
    "application/emma+xml": ["emma"],
    "application/epub+zip": ["epub"],
    "application/exi": ["exi"],
    "application/font-tdpfr": ["pfr"],
    "application/font-woff": ["woff"],
    "application/font-woff2": ["woff2"],
    "application/geo+json": ["geojson"],
    "application/gml+xml": ["gml"],
    "application/gpx+xml": ["gpx"],
    "application/gxf": ["gxf"],
    "application/gzip": ["gz"],
    "application/hyperstudio": ["stk"],
    "application/inkml+xml": ["ink", "inkml"],
    "application/ipfix": ["ipfix"],
    "application/java-archive": ["jar", "war", "ear"],
    "application/java-serialized-object": ["ser"],
    "application/java-vm": ["class"],
    "application/javascript": ["js", "mjs"],
    "application/json": ["json", "map"],
    "application/json5": ["json5"],
    "application/jsonml+json": ["jsonml"],
    "application/ld+json": ["jsonld"],
    "application/lost+xml": ["lostxml"],
    "application/mac-binhex40": ["hqx"],
    "application/mac-compactpro": ["cpt"],
    "application/mads+xml": ["mads"],
    "application/manifest+json": ["webmanifest"],
    "application/marc": ["mrc"],
    "application/marcxml+xml": ["mrcx"],
    "application/mathematica": ["ma", "nb", "mb"],
    "application/mathml+xml": ["mathml"],
    "application/mbox": ["mbox"],
    "application/mediaservercontrol+xml": ["mscml"],
    "application/metalink+xml": ["metalink"],
    "application/metalink4+xml": ["meta4"],
    "application/mets+xml": ["mets"],
    "application/mods+xml": ["mods"],
    "application/mp21": ["m21", "mp21"],
    "application/mp4": ["mp4s", "m4p"],
    "application/msword": ["doc", "dot"],
    "application/mxf": ["mxf"],
    "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"],
    "application/oda": ["oda"],
    "application/oebps-package+xml": ["opf"],
    "application/ogg": ["ogx"],
    "application/omdoc+xml": ["omdoc"],
    "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"],
    "application/oxps": ["oxps"],
    "application/patch-ops-error+xml": ["xer"],
    "application/pdf": ["pdf"],
    "application/pgp-encrypted": ["pgp"],
    "application/pgp-signature": ["asc", "sig"],
    "application/pics-rules": ["prf"],
    "application/pkcs10": ["p10"],
    "application/pkcs7-mime": ["p7m", "p7c"],
    "application/pkcs7-signature": ["p7s"],
    "application/pkcs8": ["p8"],
    "application/pkix-attr-cert": ["ac"],
    "application/pkix-cert": ["cer"],
    "application/pkix-crl": ["crl"],
    "application/pkix-pkipath": ["pkipath"],
    "application/pkixcmp": ["pki"],
    "application/pls+xml": ["pls"],
    "application/postscript": ["ai", "eps", "ps"],
    "application/pskc+xml": ["pskcxml"],
    "application/rdf+xml": ["rdf"],
    "application/reginfo+xml": ["rif"],
    "application/relax-ng-compact-syntax": ["rnc"],
    "application/resource-lists+xml": ["rl"],
    "application/resource-lists-diff+xml": ["rld"],
    "application/rls-services+xml": ["rs"],
    "application/rpki-ghostbusters": ["gbr"],
    "application/rpki-manifest": ["mft"],
    "application/rpki-roa": ["roa"],
    "application/rsd+xml": ["rsd"],
    "application/rss+xml": ["rss"],
    "application/rtf": ["rtf"],
    "application/sbml+xml": ["sbml"],
    "application/scvp-cv-request": ["scq"],
    "application/scvp-cv-response": ["scs"],
    "application/scvp-vp-request": ["spq"],
    "application/scvp-vp-response": ["spp"],
    "application/sdp": ["sdp"],
    "application/set-payment-initiation": ["setpay"],
    "application/set-registration-initiation": ["setreg"],
    "application/shf+xml": ["shf"],
    "application/smil+xml": ["smi", "smil"],
    "application/sparql-query": ["rq"],
    "application/sparql-results+xml": ["srx"],
    "application/srgs": ["gram"],
    "application/srgs+xml": ["grxml"],
    "application/sru+xml": ["sru"],
    "application/ssdl+xml": ["ssdl"],
    "application/ssml+xml": ["ssml"],
    "application/tei+xml": ["tei", "teicorpus"],
    "application/thraud+xml": ["tfi"],
    "application/timestamped-data": ["tsd"],
    "application/voicexml+xml": ["vxml"],
    "application/widget": ["wgt"],
    "application/winhlp": ["hlp"],
    "application/wsdl+xml": ["wsdl"],
    "application/wspolicy+xml": ["wspolicy"],
    "application/xaml+xml": ["xaml"],
    "application/xcap-diff+xml": ["xdf"],
    "application/xenc+xml": ["xenc"],
    "application/xhtml+xml": ["xhtml", "xht"],
    "application/xml": ["xml", "xsl", "xsd", "rng"],
    "application/xml-dtd": ["dtd"],
    "application/xop+xml": ["xop"],
    "application/xproc+xml": ["xpl"],
    "application/xslt+xml": ["xslt"],
    "application/xspf+xml": ["xspf"],
    "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"],
    "application/yang": ["yang"],
    "application/yin+xml": ["yin"],
    "application/zip": ["zip"],
    "audio/adpcm": ["adp"],
    "audio/basic": ["au", "snd"],
    "audio/midi": ["mid", "midi", "kar", "rmi"],
    "audio/mp4": ["m4a", "mp4a"],
    "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"],
    "audio/ogg": ["oga", "ogg", "spx"],
    "audio/s3m": ["s3m"],
    "audio/silk": ["sil"],
    "audio/wav": ["wav"],
    "audio/webm": ["weba"],
    "audio/xm": ["xm"],
    "font/otf": ["otf"],
    "image/apng": ["apng"],
    "image/bmp": ["bmp"],
    "image/cgm": ["cgm"],
    "image/g3fax": ["g3"],
    "image/gif": ["gif"],
    "image/ief": ["ief"],
    "image/jpeg": ["jpeg", "jpg", "jpe"],
    "image/ktx": ["ktx"],
    "image/png": ["png"],
    "image/sgi": ["sgi"],
    "image/svg+xml": ["svg", "svgz"],
    "image/tiff": ["tiff", "tif"],
    "image/webp": ["webp"],
    "message/rfc822": ["eml", "mime"],
    "model/gltf+json": ["gltf"],
    "model/gltf-binary": ["glb"],
    "model/iges": ["igs", "iges"],
    "model/mesh": ["msh", "mesh", "silo"],
    "model/vrml": ["wrl", "vrml"],
    "model/x3d+binary": ["x3db", "x3dbz"],
    "model/x3d+vrml": ["x3dv", "x3dvz"],
    "model/x3d+xml": ["x3d", "x3dz"],
    "text/cache-manifest": ["appcache", "manifest"],
    "text/calendar": ["ics", "ifb"],
    "text/coffeescript": ["coffee", "litcoffee"],
    "text/css": ["css"],
    "text/csv": ["csv"],
    "text/hjson": ["hjson"],
    "text/html": ["html", "htm", "shtml"],
    "text/jade": ["jade"],
    "text/jsx": ["jsx"],
    "text/less": ["less"],
    "text/markdown": ["markdown", "md"],
    "text/mathml": ["mml"],
    "text/n3": ["n3"],
    "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"],
    "text/richtext": ["rtx"],
    "text/sgml": ["sgml", "sgm"],
    "text/slim": ["slim", "slm"],
    "text/stylus": ["stylus", "styl"],
    "text/tab-separated-values": ["tsv"],
    "text/troff": ["t", "tr", "roff", "man", "me", "ms"],
    "text/turtle": ["ttl"],
    "text/uri-list": ["uri", "uris", "urls"],
    "text/vcard": ["vcard"],
    "text/vtt": ["vtt"],
    "text/yaml": ["yaml", "yml"],
    "video/3gpp": ["3gp", "3gpp"],
    "video/3gpp2": ["3g2"],
    "video/h261": ["h261"],
    "video/h263": ["h263"],
    "video/h264": ["h264"],
    "video/jpeg": ["jpgv"],
    "video/jpm": ["jpm", "jpgm"],
    "video/mj2": ["mj2", "mjp2"],
    "video/mp2t": ["ts"],
    "video/mp4": ["mp4", "mp4v", "mpg4"],
    "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"],
    "video/ogg": ["ogv"],
    "video/quicktime": ["qt", "mov"],
    "video/webm": ["webm"]
};

function SlimApp() {
    this.ev = [];
    this.modules={};
    this.conn={};
    this.hasBound = false;
    this.on = function(event, cb) {
        if (typeof cb !== 'function')
            throw "Callback must be a function";

        if (typeof this.ev[event] === 'undefined')
            this.ev[event]=[];
        
        this.ev[event].push(cb);
    };
    this.trigger = async function (event) {
        this.binder();

        if (typeof this.ev[event] === 'undefined' || this.ev[event] === null)
            return;

        var list = this.ev[event];        
        for (var i=0, max=list.length; i < max; i++) {            
            await list[i](this.conn);
        }
    };
    this.moduleLoaded = function(name) {
        return (typeof this.modules[name] !== 'undefined' && this.modules[name] !== null);
    };
    this.loadModule = async function(module, options=false) {
        if (Array.isArray(module)) {
            for (var i=0, max=module.length; i < max; i++) {
                await this.loadModule.apply(this, module[i]);
            }

            return;
        }

        if (typeof module !== 'string')
            throw "Unknown module spec";

        if (this.moduleLoaded(module))
            return;

        var config = require(module).Configure(this, options);
        if (config.enabled)
            this.modules[module] = config;

        if (typeof config.required !== 'undefined' && config.required !== null)
            await this.loadModules(Object.entries(config.required));
    };
    this.binder = function() {
        if (this.hasBound)
            return;
        
        this.hasBound=true;
        for (var name in this.modules) {
            if (!this.modules.hasOwnProperty(name)) 
                continue;
            
            if (typeof this.modules[name].bind === 'function')
                this.modules[name].bind(this);
        }

        // collapses 'any' handlers into every event, so there isn't an uneeded array map operation every request
        for (var event in this.ev) {
            if (!this.ev.hasOwnProperty(event)) 
                continue;

            switch (event) {
                case 'serve':
                    this.ev[event]['static'] = this.ev[event]['static'].concat(this.ev[event]['any']);
                    this.ev[event]['dynamic'] = this.ev[event]['dynamic'].concat(this.ev[event]['any']);

                    delete this.ev[event]['any'];
                    break;
                default:
                    break;
            }
        }
    };
}

test('mime type from file extension', (t) => {
    var mime = new Mime("application/octet-stream");
    for (var header in mimeHeaders) {
        var list = mimeHeaders[header];
        for (var i=0, max=list.length; i < max; i++) {
            t.equal(String(header), String(mime.type(list[i])));
        }
    }

    t.equal(String(mime.type(".unknowntype")), String("application/octet-stream"));
    t.equal(String(mime.type()), String("application/octet-stream"));
    t.equal(String(mime.type(".txt", 'utf8')), String("text/plain; charset=utf8"));
    t.end();
});

test('extensions from mime type', (t) => {
    var mime = new Mime();

    for (var header in mimeHeaders) {
        var list = mimeHeaders[header];

        if (list.length < 2) {
            t.equal(String(list[0]), String(mime.ext(header)));
        } else {
            for (var i=0, max=list.length; i < max; i++) {
                t.deepEqual(list, mime.ext(header));
            }
        }
    }

    t.equal(mime.ext(), '');
    t.end();
});

test('mime module', (t) => {
    var slim = new SlimApp();
    
    slim.loadModule([ [ '../index', { enabled: false } ] ]);
    t.deepEqual(slim.modules, {});
  
    slim.loadModule('../index');
    t.deepEqual(slim.modules, {});

    slim.loadModule([ [ '../index', false ] ]);
    t.deepEqual(slim.modules, {});

    slim.loadModule('../index', true);
    t.deepEqual(slim.modules, {
        '../index': { 
            defaultType: 'application/octet-stream',
            enabled: true,
            mime: slim.modules['../index'].mime,
            bind: slim.modules['../index'].bind,
            provides: 'mime'
        }
    });
    
    slim.trigger('requestInit');
    t.equal(true, typeof slim.conn.mime === 'object');
    t.end();
});
