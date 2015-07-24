var _ = require('lodash')
function accumulate_features(docid) {
    var featurehash = {
        'header':[]
      ,'properties' : {'document': docid
                       ,'data':[]
                       }
    }
    this.add_data = function(feature){
        featurehash.properties.data = featurehash.properties.data.concat(_.clone(feature.properties.data,true))
        console.log('now holding '+featurehash.properties.data.length)
        return this
    }
    this.header = function(h){
        if(h !== undefined){
            featurehash.header = _.clone(h)
            return this
        }
        return featurehash.header
    }
    this.feature = function(){
        return featurehash
    }
    this.sort = function(){
        featurehash.properties.data.sort(compare)
        return this
    }
}

function compare(a, b) {
    var aa = a[0] + ' ' + a[1]
    var bb = b[0] + ' ' + b[1]
    if (aa < bb ) return -1
    if (aa > bb ) return 1
    // a must be equal to b
    return 0
}

module.exports=accumulate_features
