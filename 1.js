(function () {
  'use strict';

  if (Lampa.Platform.is('android') && typeof WebAssembly !== 'undefined')
	Lampa.Utils.putScriptAsync(['https://bwa.to/s'], function () {});
	
  Lampa.Utils.putScriptAsync(['https://raw.githubusercontent.com/alexxx113/testt/main/2.js?v21'], function () {});

})();
