'use strict';

angular.module('mean.iso3166').factory('CountryCode', function(Iso3166Restangular) {

    var url = 'country_codes';
    var urlAlpha3code = 'country_codes/alpha3Code';
    var urlCount = 'country_codes/count';

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
        $count: function(){
            return Iso3166Restangular.one(urlCount).get();
        },
        $findByAlpha3code: function(alpha3code){
            return Iso3166Restangular.one(urlAlpha3code, alpha3code).get();
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
    Iso3166Restangular.extendModel(urlAlpha3code, function(obj) {
        return angular.extend(obj, modelMethos);
    });
    Iso3166Restangular.extendModel(urlCount, function(obj) {
        return angular.extend(obj, modelMethos);
    });

    return modelMethos;

});