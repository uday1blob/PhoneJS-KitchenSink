KitchenSink.Navigation = function(params) {
    var viewModel = {
        toolbar: {
            items: [
              {
                  align: "left",
                  widget: "button",
                  options: {
                      type: "back",
                      text: "Back",
                      clickAction: function(e) {
                          KitchenSink.app.navigate("Home", { root: true });
                      }
                  }
              },
              {
                  align: "center",
                  text: "Toolbar"
              }
            ]
        },
        navbar: {
            currentImage: ko.observable("./content/images/navigation/icon-home.png"),
            itemClickAction: function(e) {
                this.navbar.currentImage(e.itemData.image);
            },
            items: [
                { text: "Alok Ji", icon: "user", image: "./content/images/navigation/icon-user.png" },
                { text: "Aarti", icon: "music"},
                { text: "Sanskari", icon: "comment", image: "./content/images/navigation/icon-message.png" },
                { text: "About", icon: "find", image: "./content/images/navigation/icon-search.png" }
            ],
            selectedIndex: ko.observable(0)
        }
    };
    return viewModel;
};