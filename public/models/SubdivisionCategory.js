'use strict';

angular.module('mean.iso3166').factory('SubdivisionCategory', function(Iso3166Restangular) {

    var url = 'subdivisionCategories';

    var modelMethos = {
        $new: function(id){
            return angular.extend({id: id}, modelMethos);
        },
        $build: function(){
            return angular.extend({id: undefined, independent: false}, modelMethos, {$save: function(){
                return Iso3166Restangular.all(url).post(this);
            }});
        },
        $save: function() {
            return Iso3166Restangular.one(url, this.alpha3Code).customPUT(Iso3166Restangular.copy(this),'',{},{});
        },

        $find: function(id){
            return Iso3166Restangular.one(url, id).get();
        },
        $search: function(queryParams){
            return Iso3166Restangular.all(url).getList(queryParams);
        },

        $disable: function(){
            return Iso3166Restangular.all(url+'/'+this.id+'/disable').post();
        },
        $remove: function(id){
            return Iso3166Restangular.one(url, id).remove();
        }
    };

    Iso3166Restangular.extendModel(url, function(obj) {
        return angular.extend(obj, modelMethos);
    });

    return modelMethos;

});