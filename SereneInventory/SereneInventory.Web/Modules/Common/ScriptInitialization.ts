/// <reference path="../Common/Helpers/LanguageList.ts" />
/// <reference path="../_ext/_q/_q.ts" />

namespace SereneInventory.ScriptInitialization {
    Q.Config.responsiveDialogs = true;
    Q.Config.rootNamespaces.push('SereneInventory');
    Q.Config.rootNamespaces.push('_Ext');

    Serenity.EntityDialog.defaultLanguageList = LanguageList.getValue;

    if ($.fn['colorbox']) {
        $.fn['colorbox'].settings.maxWidth = "95%";
        $.fn['colorbox'].settings.maxHeight = "95%";
    }

    window.onerror = Q.ErrorHandling.runtimeErrorHandler;
}   