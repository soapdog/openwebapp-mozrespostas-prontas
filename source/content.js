enyo.kind({
    name: "mozbr.TemplateContent",
    layoutKind: "FittableRowsLayout",
    classes: "panel template-content",
    components: [
        {
            classes: "titulo nice-padding",
            content: "Template",
            name: "titulo"
        },
        {kind: "onyx.InputDecorator", classes: "nice-padding almost-full-width", fit: true, components: [
            {
                kind: "onyx.TextArea",
                classes: "nice-padding almost-full-width template-content",
                name: "conteudo",
                placeholder: "<-- clica no menu do lado."
            }
        ]},
        {kind: "onyx.MoreToolbar", components: [
            {kind: "onyx.Grabber"},
            {kind: "onyx.Button", content: "Enviar Email", ontap: "sendMail"},
            {kind: "onyx.Button", name: "copyButton", content: "Copiar", ontap: "copyText"}
        ]}
    ],
    create: function() {
        this.inherited(arguments);

        if (enyo.platform.platformName == "firefoxOS") {
            // no support for copy and paste.
            this.$.copyButton.hide();
        }
    },
    carregarTemplate: function(obj) {
        this.$.titulo.setContent(obj.titulo);
        this.$.conteudo.setValue(obj.content);
    },
    sendMail: function() {
        this.log("Tentando usar web activity para enviar email");
        var titulo = this.$.titulo.getContent();
        var conteudo = this.$.conteudo.getValue();

        if ("MozActivity" in window) {
            this.log("MozActivity is supported on this platform");
            var activity = new MozActivity({
                name: "new",
                data: {
                    type: "mail",
                    url: "mailto:?subject=" + encodeURI(titulo) + "&body=" + encodeURI(conteudo)
                }
            });


            activity.onsuccess = function() {
                console.log("Activity successfuly handled");

            };

            activity.onerror = function() {
                console.log("The activity encouter en error: " + this.error);
            };

            this.log("Was it handled?!");
        } else {
            this.log("Navegador não suporta web activities");
            window.location = "mailto:?subject=" + encodeURI(titulo) + "&body=" + encodeURI(conteudo);
        }
    },
    copyText: function() {
      var conteudoEl = this.$.conteudo.hasNode();

      conteudoEl.select();
      var res = document.execCommand("copy");
      conteudoEl.setSelectionRange(0,0);
      conteudoEl.blur();

    }
});
