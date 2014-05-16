/**
	Define and instantiate your enyo.Application kind in this file.  Note,
	application rendering should be deferred until DOM is ready by wrapping
	it in a call to enyo.ready().
*/

enyo.kind({
	name: "mozbr.Application",
	kind: "FittableRows",
    handlers: {
        onTemplateSelected: "templateSelected"
    },
	components: [
		{
			kind: "PortsHeader",
			title: "Templates para Email",
			taglines: [
				"Amamos bikesheding",
				"Olha Pizza",
				"Como faço pra ganhar uma camisa?",
				"Vocês tem celular pra vender?",
				"Ta no wiki",
				"Ja olhou no bugzilla?",
				"é um setting no about:config",
				"Festa de lançamento do Godzilla Gyroflex 57",
				"Ousadia e Alegria!",
				"Visite a nossa cozinha!"
			]
		},
		{
			kind: "enyo.Panels",
			fit: true,
			arrangerKind: "CollapsingArranger",
            animate: true,
			components: [
				{kind: "mozbr.Menu"},
                {kind: "mozbr.TemplateContent", name: "content"}
			]
		}
	],
    templateSelected: function(inSender, inEvent) {
        this.log("pegando arquivo da template: " + inEvent.arquivo);

        var x = new enyo.Ajax({
            url: "/assets/templates/" + inEvent.arquivo
        });

        x.response(enyo.bind(this, function(data, obj) {
            this.$.content.carregarTemplate({titulo: inEvent.titulo, content: obj});
            if (window.innerWidth < 640) {
                this.$.panels.getAnimator().setDuration(1000);
                var i = this.$.panels.selectPanelByName("content");
                this.$.panels.next();
            }
        }));

        x.go();
    }
});

enyo.ready(function () {
	new mozbr.Application().renderInto(document.body);
});
