enyo.kind({
    name: "mozbr.Menu",
    layoutKind: "FittableRowsLayout",
    classes: "panel template-list",
    events: {
        onTemplateSelected: "",
        onAboutApp: ""
    },
    components: [
        {name: "myDialog", kind:"ModalDialog", components: [
            { kind: onyx.Button, content: "Close popup", ontap: "closePopup"}
        ]},
        {
            fit: true,
            kind: "enyo.List",
            count: 0,
            name: "lista",
            onSetupItem: "setupItem",
            components: [
                {classes: "list-item",  ontap: "templateSelected", components: [
                    {name: "titulo"}
                ]}
            ]
        },
        {kind: "onyx.Toolbar", components: [
            {kind: "onyx.Grabber"},
            {kind: "onyx.Button", content: "Github", ontap: "github"}
        ]}

    ],
    carregarListaDeTemplates: function() {
        this.log("pegando JSON de templates");

        var x = new enyo.Ajax({
            url: "assets/templates.json",
            handleAs: "json"
        });

        x.response(enyo.bind(this, function(data, obj) {
            this.dados = obj;

            this.log("Lista carregada com " + obj.length + " templates");
            this.$.lista.setCount(this.dados.length);
            this.$.lista.refresh();
        }));

        x.go();

    },
    create: function() {
        this.inherited(arguments);

        this.carregarListaDeTemplates();
    },
    setupItem: function(inSender, inEvent) {
        var i = inEvent.index;
        var nome = this.dados[i].titulo;

        this.log("item #" +i +" --> " + nome);

        this.$.titulo.setContent(nome);
        return true;
    },
    templateSelected: function(inSender, inEvent) {
        this.log("Template selecionado: " + this.dados[inEvent.index].titulo);

        this.doTemplateSelected({
            titulo: this.dados[inEvent.index].titulo,
            arquivo: this.dados[inEvent.index].arquivo
        });
    },
    closePopup: function() {
        this.$.myDialog.hide();
    },
    github: function() {
        window.open("https://github.com/soapdog/mozbr-templates");
    }
});
