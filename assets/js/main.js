var enterpriseEvents = {};

(function() {
  
  if(typeof Drupal !== 'undefined')
  {
    Drupal.behaviors.enterpriseEvents = {
      attach: function(context, settings) {
        enterpriseEvents.settings = Drupal.settings.enterpriseEvents;
      }
    }
  }
  else
  {
    enterpriseEvents.settings = {
      apiUrl: 'http://calendar.howard.dev/api',
      taxonomies: [
        {
          endpoint: 'taxonomy_1',
          label: 'School',
          options: {}
        },
        {
          endpoint: 'taxonomy_2',
          label: 'Audience',
          options: {}
        },
        {
          endpoint: 'taxonomy_3',
          label: 'Category',
          options: {}
        },
      ]
    };
  }
  
})();