import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('developers', function() {
    this.route('new');
    this.route('delete');
  });
  this.route('projects', function() {
    this.route('new');
  });
  this.route('edit');
  this.route('project', {path: '/project/:project_id'}, function(){});

  this.route('story', function() {
    this.route('new');
  });
});
export default Router;
