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
            {kind: "onyx.Button", content: "Enviar Email", ontap: "sendMail"}
        ]}
    ],
    carregarTemplate: function(obj) {
        this.$.titulo.setContent(obj.titulo);
        this.$.conteudo.setValue(obj.content);
    },
    sendMail: function() {
        this.log("Tentando usar web activity para enviar email");
        var titulo = this.$.titulo.getContent();
        var conteudo = this.$.conteudo.getValue();

        if ("MozActivity" in window) {
            var x = new MozActivity({
                name: "new",
                data: {
                    type: "email",
                    url: "mailto:?subject=" + encodeURI(titulo) + "&body=" + encodeURI(conteudo)
                }
            });
        } else {
            this.log("Navegador não suporta web activities");
            window.location = "mailto:?subject=" + encodeURI(titulo) + "&body=" + encodeURI(conteudo);
        }
    }
});
