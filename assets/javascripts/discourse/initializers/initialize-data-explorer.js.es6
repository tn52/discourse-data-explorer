
export default {
  name: 'initialize-data-explorer',
  initialize(container) {
    container.lookup('store:main').addPluralization('query', 'queries');

    if (!String.prototype.endsWith) {
      String.prototype.endsWith = function(searchString, position) {
        var subjectString = this.toString();
        if (position === undefined || position > subjectString.length) {
          position = subjectString.length;
        }
        position -= searchString.length;
        var lastIndex = subjectString.indexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
      };
    }

    // load route
    require('discourse/plugins/discourse-data-explorer/discourse/explorer-route-map');
  }
};
