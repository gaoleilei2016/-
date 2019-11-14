var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'tui-picker-view'])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'value']])
Z([[2,'&&'],[[2,'!'],[[7],[3,'reset']]],[[2,'!='],[[7],[3,'type']],[1,4]]])
Z(z[4])
Z([[2,'&&'],[[2,'!'],[[7],[3,'reset']]],[[2,'||'],[[2,'=='],[[7],[3,'type']],[1,1]],[[2,'=='],[[7],[3,'type']],[1,2]]]])
Z([[2,'&&'],[[2,'!'],[[7],[3,'reset']]],[[2,'||'],[[2,'=='],[[7],[3,'type']],[1,1]],[[2,'=='],[[7],[3,'type']],[1,4]]]])
Z(z[7])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([[4],[[5],[[5],[[5],[[5],[[5],[[5],[1,'tui-cell-class tui-list-cell']],[[2,'?:'],[[7],[3,'arrow']],[1,'tui-cell-arrow'],[1,'']]],[[2,'?:'],[[7],[3,'last']],[1,'tui-cell-last'],[1,'']]],[[2,'?:'],[[7],[3,'lineLeft']],[1,'tui-line-left'],[1,'']]],[[2,'?:'],[[7],[3,'lineRight']],[1,'tui-line-right'],[1,'']]],[[2,'?:'],[[7],[3,'radius']],[1,'tui-radius'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'handleClick']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'?:'],[[7],[3,'hover']],[1,'tui-cell-hover'],[1,'']])
Z([1,150])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'background:'],[[7],[3,'bgcolor']]],[1,';']],[[2,'+'],[[2,'+'],[1,'font-size:'],[[2,'+'],[[7],[3,'size']],[1,'rpx']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'color:'],[[7],[3,'color']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'padding:'],[[7],[3,'padding']]],[1,';']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'visible']])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[4],[[5],[[5],[1,'mpvue-picker-content ']],[[2,'?:'],[[7],[3,'showPicker']],[1,'mpvue-picker-view-show'],[1,'']]]])
Z([[2,'&&'],[[2,'==='],[[7],[3,'mode']],[1,'selector']],[[2,'>'],[[6],[[7],[3,'pickerValueSingleArray']],[3,'length']],[1,0]]])
Z([[2,'==='],[[7],[3,'mode']],[1,'timeSelector']])
Z([[2,'==='],[[7],[3,'mode']],[1,'multiSelector']])
Z([[2,'&&'],[[2,'==='],[[7],[3,'mode']],[1,'multiLinkageSelector']],[[2,'==='],[[7],[3,'deepLength']],[1,2]]])
Z([[2,'&&'],[[2,'==='],[[7],[3,'mode']],[1,'multiLinkageSelector']],[[2,'==='],[[7],[3,'deepLength']],[1,3]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'visible']])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'tui-sticky-class'])
Z([[7],[3,'isFixed']])
Z([3,'header'])
Z([3,'content'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[4],[[5],[[5],[1,'tui-tips-box']],[[2,'?:'],[[7],[3,'fixed']],[1,'tui-tips-fixed'],[1,'']]]])
Z([[7],[3,'btnText']])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-white align-center text-center padding-tb'])
Z([3,'position:relative;top:-80rpx;width:95%;z-index:1;margin:0 auto;padding-top:90rpx;'])
Z([[2,'=='],[[7],[3,'index']],[1,1]])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z(z[3])
Z([1,false])
Z([[2,'=='],[[7],[3,'index']],[1,2]])
Z([[2,'=='],[[7],[3,'index']],[1,3]])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-white'])
Z([3,'__l'])
Z([3,'1'])
Z([[4],[[5],[1,'content']]])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z(z[4])
Z([[2,'>'],[[6],[[7],[3,'getTaskList']],[3,'length']],[1,0]])
Z([3,'__e'])
Z([3,'content margin-top'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'navigateTo']],[[4],[[5],[[5],[[2,'+'],[1,'../home/shopselect?task_id\x3d'],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'id']]]],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'getTaskList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([3,'desc'])
Z([1,false])
Z(z[13])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'form']],[3,'items']])
Z(z[0])
Z([3,'bg-white margin-sm'])
Z([[2,'!='],[[6],[[7],[3,'orderInfo']],[3,'obj_type']],[1,257]])
Z(z[5])
Z([[2,'=='],[[6],[[7],[3,'orderInfo']],[3,'obj_type']],[1,257]])
Z([[2,'<'],[[6],[[7],[3,'imgList']],[3,'length']],[1,3]])
Z([[2,'=='],[[7],[3,'modalName']],[1,null]])
Z([3,'__l'])
Z([3,'__e'])
Z(z[11])
Z([3,'vue-ref'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^upload']],[[4],[[5],[[4],[[5],[1,'doUpload']]]]]]]],[[4],[[5],[[5],[1,'^avtinit']],[[4],[[5],[[4],[[5],[1,'doBefore']]]]]]]]])
Z([3,'avatar'])
Z([3,'2'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'=='],[[7],[3,'isSeller']],[1,1]])
Z([3,'cu-dialog'])
Z([3,'height:60%;'])
Z([3,'margin'])
Z([[2,'>'],[[6],[[6],[[7],[3,'baojiao']],[3,'items']],[3,'length']],[1,0]])
Z([3,'indexs'])
Z([3,'itemx'])
Z([[6],[[7],[3,'baojiao']],[3,'items']])
Z(z[5])
Z(z[4])
Z([3,'margin-tb m-l margin solid padding-sm line-height'])
Z([[2,'!'],[1,true]])
Z([[2,'!='],[[6],[[7],[3,'orderInfo']],[3,'obj_type']],[1,257]])
Z(z[12])
Z([[2,'=='],[[6],[[6],[[7],[3,'baojiao']],[3,'items']],[3,'length']],[1,0]])
Z([[2,'&&'],[[2,'&&'],[[2,'>'],[[6],[[6],[[7],[3,'baojiao']],[3,'items']],[3,'length']],[1,0]],[[2,'=='],[[6],[[7],[3,'orderInfo']],[3,'status']],[1,1]]],[[2,'=='],[[7],[3,'uid']],[[6],[[7],[3,'orderInfo']],[3,'uid']]]])
Z([3,'boeonbtn'])
Z([[2,'=='],[[6],[[7],[3,'orderInfo']],[3,'status']],[1,0]])
Z([[2,'=='],[[6],[[7],[3,'orderInfo']],[3,'status']],[1,1]])
Z([[2,'=='],[[6],[[7],[3,'orderInfo']],[3,'status']],[1,2]])
Z([[2,'=='],[[6],[[7],[3,'orderInfo']],[3,'status']],[1,3]])
Z([[2,'=='],[[6],[[7],[3,'orderInfo']],[3,'status']],[1,4]])
Z([[2,'=='],[[6],[[7],[3,'orderInfo']],[3,'status']],[1,5]])
Z([[2,'=='],[[6],[[7],[3,'orderInfo']],[3,'status']],[1,6]])
Z([3,'__e'])
Z([3,'tab-content'])
Z([[7],[3,'currentTab']])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'switchTab']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'300'])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[7],[3,'winHeight']],[1,'px']]],[1,';']])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'$root']],[3,'l1']])
Z(z[30])
Z([3,'scoll-y bg-white padding'])
Z([[2,'=='],[[7],[3,'currentTab']],[1,0]])
Z([[2,'&&'],[[2,'!='],[[6],[[7],[3,'orderInfo']],[3,'address']],[1,'']],[[2,'!='],[[6],[[7],[3,'orderInfo']],[3,'address']],[1,null]]])
Z([3,'margin-left'])
Z([[2,'=='],[[6],[[7],[3,'orderInfo']],[3,'pickup_service']],[1,1]])
Z(z[38])
Z(z[38])
Z(z[38])
Z([[2,'=='],[[7],[3,'currentTab']],[1,1]])
Z(z[30])
Z(z[31])
Z([[6],[[7],[3,'item']],[3,'l0']])
Z(z[30])
Z([[2,'>'],[[6],[[7],[3,'bidshop']],[3,'length']],[1,0]])
Z([3,'flex justify-between padding'])
Z(z[24])
Z([3,'flex align-self-center flex-direction'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'entershop']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'bidshop']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([3,'line-height:45rpx;width:60%;'])
Z([1,false])
Z([[2,'||'],[[2,'=='],[[7],[3,'uid']],[[6],[[7],[3,'orderInfo']],[3,'uid']]],[[2,'=='],[[7],[3,'seller_id']],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'seller_id']]]])
Z([[2,'=='],[[6],[[7],[3,'bidshop']],[3,'length']],[1,0]])
Z([[2,'=='],[[7],[3,'currentTab']],[1,2]])
Z([[2,'>'],[[6],[[7],[3,'orderprogress']],[3,'length']],[1,0]])
Z([[2,'=='],[[6],[[7],[3,'orderprogress']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[[4],[[5],[[5],[1,'submitForm']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'true'])
Z([[2,'<'],[[6],[[7],[3,'imgList']],[3,'length']],[1,9]])
Z([[7],[3,'switched']])
Z([3,'__l'])
Z(z[0])
Z([[7],[3,'cancelColor']])
Z([3,'vue-ref'])
Z([[7],[3,'color']])
Z([[4],[[5],[[4],[[5],[[5],[1,'^confirm']],[[4],[[5],[[4],[[5],[1,'change']]]]]]]]])
Z([3,'dateTime'])
Z([[7],[3,'endYear']])
Z([[7],[3,'setDateTime']])
Z([[7],[3,'startYear']])
Z([[7],[3,'type']])
Z([3,'1'])
Z(z[5])
Z(z[0])
Z(z[0])
Z(z[8])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^upload']],[[4],[[5],[[4],[[5],[1,'doUpload']]]]]]]],[[4],[[5],[[5],[1,'^avtinit']],[[4],[[5],[[4],[[5],[1,'doBefore']]]]]]]]])
Z([3,'avatar'])
Z([3,'2'])
Z(z[23])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z(z[1])
Z([3,'vue-ref'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^onCancel']],[[4],[[5],[[4],[[5],[1,'onCancel']]]]]]]],[[4],[[5],[[5],[1,'^onConfirm']],[[4],[[5],[[4],[[5],[1,'onConfirm3']]]]]]]]])
Z([3,'mpvueCityPicker'])
Z([[7],[3,'cityPickerValueDefault']])
Z([[7],[3,'themeColor']])
Z([3,'1'])
Z([[2,'<'],[[6],[[7],[3,'imgList']],[3,'length']],[1,9]])
Z(z[0])
Z(z[1])
Z([[7],[3,'cancelColor']])
Z(z[3])
Z([[7],[3,'color']])
Z([[4],[[5],[[4],[[5],[[5],[1,'^confirm']],[[4],[[5],[[4],[[5],[1,'change']]]]]]]]])
Z([3,'dateTime'])
Z([[7],[3,'endYear']])
Z([[7],[3,'setDateTime']])
Z([[7],[3,'startYear']])
Z([[7],[3,'type']])
Z([3,'2'])
Z([[7],[3,'switched']])
Z(z[0])
Z(z[1])
Z(z[1])
Z(z[3])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^upload']],[[4],[[5],[[4],[[5],[1,'doUpload']]]]]]]],[[4],[[5],[[5],[1,'^avtinit']],[[4],[[5],[[4],[[5],[1,'doBefore']]]]]]]]])
Z([3,'avatar'])
Z(z[21])
Z([3,'3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-white'])
Z([3,'__l'])
Z([3,'1'])
Z([[4],[[5],[1,'content']]])
Z([3,'tui-screen-top solid-bottom'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'dropdownList1']])
Z(z[5])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'tui-dropdownlist-item tui-icon-middle']],[[2,'?:'],[[6],[[7],[3,'item']],[3,'selected']],[1,'tui-bold'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'dropdownItem2']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'item']],[3,'name']])
Z([[6],[[7],[3,'item']],[3,'value']])
Z([[6],[[7],[3,'item']],[3,'selected']])
Z(z[5])
Z(z[6])
Z([[7],[3,'dropdownList2']])
Z(z[5])
Z(z[9])
Z(z[10])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'dropdownItem4']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[12])
Z(z[13])
Z(z[14])
Z(z[15])
Z(z[5])
Z(z[6])
Z([[7],[3,'getTaskCategoryList']])
Z(z[5])
Z(z[9])
Z(z[10])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'dropdownItem5']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[12])
Z(z[13])
Z([[6],[[7],[3,'item']],[3,'id']])
Z(z[15])
Z(z[5])
Z(z[6])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z(z[5])
Z([[2,'>'],[[6],[[7],[3,'getTaskList']],[3,'length']],[1,0]])
Z(z[9])
Z([3,'content margin-top'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'navigateTo']],[[4],[[5],[[5],[[2,'+'],[1,'../home/shopselect?task_id\x3d'],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'id']]]],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'getTaskList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([1,false])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-white'])
Z([3,'__l'])
Z([3,'1'])
Z([[4],[[5],[1,'content']]])
Z([3,'tui-screen-top solid-bottom'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'dropdownList1']])
Z(z[5])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'tui-dropdownlist-item tui-icon-middle']],[[2,'?:'],[[6],[[7],[3,'item']],[3,'selected']],[1,'tui-bold'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'dropdownItem2']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'item']],[3,'name']])
Z([[6],[[7],[3,'item']],[3,'value']])
Z([[6],[[7],[3,'item']],[3,'selected']])
Z(z[5])
Z(z[6])
Z([[7],[3,'dropdownList2']])
Z(z[5])
Z(z[9])
Z(z[10])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'dropdownItem4']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[12])
Z(z[13])
Z(z[14])
Z(z[15])
Z(z[5])
Z(z[6])
Z([[7],[3,'getTaskCategoryList']])
Z(z[5])
Z(z[9])
Z(z[10])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'dropdownItem5']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[12])
Z(z[13])
Z([[6],[[7],[3,'item']],[3,'id']])
Z(z[15])
Z(z[5])
Z(z[6])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z(z[5])
Z([[2,'>'],[[6],[[7],[3,'getTaskList']],[3,'length']],[1,0]])
Z(z[9])
Z([3,'content margin-top'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'navigateTo']],[[4],[[5],[[5],[[2,'+'],[1,'../home/shopselect?task_id\x3d'],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'id']]]],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'getTaskList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([1,false])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'tui-page'])
Z([3,'__e'])
Z([3,'tui-scrollList'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scroll']],[[4],[[5],[[4],[[5],[[5],[1,'onScroll']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'scrollViewId']])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[7],[3,'winHeight']],[1,'px']]],[1,';']])
Z([3,'index'])
Z([3,'list'])
Z([[6],[[7],[3,'$root']],[3,'l1']])
Z(z[6])
Z([[6],[[6],[[6],[[7],[3,'list']],[3,'$orig']],[3,'data']],[1,0]])
Z([3,'__l'])
Z([[7],[3,'scrollTop']])
Z([3,'66rpx'])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z([[4],[[5],[[5],[1,'header']],[1,'content']]])
Z([3,'content'])
Z([3,'index2'])
Z([3,'item'])
Z([[6],[[7],[3,'list']],[3,'l0']])
Z(z[17])
Z(z[1])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'chooceThis']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[11])
Z(z[1])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'detail']]]]]]]]])
Z([[6],[[7],[3,'item']],[3,'m0']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'2-'],[[7],[3,'index']]],[1,'-']],[[7],[3,'index2']]],[1,',']],[[2,'+'],[1,'1-'],[[7],[3,'index']]]])
Z([[4],[[5],[1,'default']]])
Z([[2,'&&'],[[7],[3,'touchmove']],[[6],[[6],[[7],[3,'lists']],[[7],[3,'touchmoveIndex']]],[3,'letter']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'__e'])
Z([3,'tab-content'])
Z([[7],[3,'currentTab']])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'switchTab']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'300'])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[7],[3,'winHeight']],[1,'px']]],[1,';']])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'tabbar']])
Z(z[7])
Z([3,'scoll-y'])
Z([[2,'=='],[[7],[3,'currentTab']],[1,0]])
Z(z[7])
Z(z[8])
Z([[7],[3,'list1']])
Z(z[7])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'state']],[1,0]])
Z([[2,'=='],[[7],[3,'currentTab']],[1,1]])
Z(z[7])
Z(z[8])
Z(z[15])
Z(z[7])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'state']],[1,1]])
Z([[2,'=='],[[7],[3,'currentTab']],[1,2]])
Z(z[7])
Z(z[8])
Z(z[15])
Z(z[7])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'state']],[1,2]])
Z([1,false])
Z([3,'__l'])
Z([1,true])
Z([3,'../../static/img_noorder.png'])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'background-color:#f2f2f2;'])
Z([3,'bg-theme'])
Z([3,'__l'])
Z([1,false])
Z(z[3])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
Z([3,'page'])
Z([[2,'&&'],[[2,'!=='],[[7],[3,'sellerFuns']],[1,undefined]],[[2,'>'],[[6],[[7],[3,'sellerFuns']],[3,'length']],[1,0]]])
Z([[2,'&&'],[[2,'!=='],[[7],[3,'otherFuns']],[1,undefined]],[[2,'>'],[[6],[[7],[3,'otherFuns']],[3,'length']],[1,0]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'padding-sm'])
Z([3,'flex justify-around bg-white'])
Z([[2,'<'],[[6],[[7],[3,'imgList']],[3,'length']],[1,1]])
Z(z[2])
Z(z[2])
Z([3,'__l'])
Z([3,'__e'])
Z([[7],[3,'cancelColor']])
Z([3,'vue-ref'])
Z([[7],[3,'color']])
Z([[4],[[5],[[4],[[5],[[5],[1,'^confirm']],[[4],[[5],[[4],[[5],[1,'change']]]]]]]]])
Z([3,'dateTime'])
Z([[7],[3,'endYear']])
Z([[7],[3,'setDateTime']])
Z([[7],[3,'startYear']])
Z([[7],[3,'type']])
Z([3,'1'])
Z(z[5])
Z(z[6])
Z(z[6])
Z(z[8])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^onConfirm']],[[4],[[5],[[4],[[5],[1,'onConfirm1']]]]]]]],[[4],[[5],[[5],[1,'^onCancel']],[[4],[[5],[[4],[[5],[1,'onCancel']]]]]]]]])
Z([3,'mpvuePicker'])
Z([[7],[3,'deepLength']])
Z([[7],[3,'mode']])
Z([[7],[3,'pickerValueArray']])
Z([[7],[3,'pickerValueDefault']])
Z([[7],[3,'themeColor']])
Z([3,'2'])
Z(z[5])
Z(z[6])
Z(z[6])
Z(z[8])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^onCancel']],[[4],[[5],[[4],[[5],[1,'onCancel']]]]]]]],[[4],[[5],[[5],[1,'^onConfirm']],[[4],[[5],[[4],[[5],[1,'onConfirm3']]]]]]]]])
Z([3,'mpvueCityPicker'])
Z([[7],[3,'cityPickerValueDefault']])
Z(z[27])
Z([3,'3'])
Z(z[5])
Z(z[6])
Z(z[6])
Z(z[8])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^upload']],[[4],[[5],[[4],[[5],[1,'doUpload']]]]]]]],[[4],[[5],[[5],[1,'^avtinit']],[[4],[[5],[[4],[[5],[1,'doBefore']]]]]]]]])
Z([3,'avatar'])
Z(z[28])
Z([3,'4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'padding flex justify-around bg-white'])
Z([[2,'<'],[[6],[[7],[3,'imgList']],[3,'length']],[1,1]])
Z(z[1])
Z([3,'__l'])
Z([3,'__e'])
Z(z[4])
Z([3,'vue-ref'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^onCancel']],[[4],[[5],[[4],[[5],[1,'onCancel']]]]]]]],[[4],[[5],[[5],[1,'^onConfirm']],[[4],[[5],[[4],[[5],[1,'onConfirm3']]]]]]]]])
Z([3,'mpvueCityPicker'])
Z([[7],[3,'cityPickerValueDefault']])
Z([[7],[3,'themeColor']])
Z([3,'1'])
Z(z[3])
Z(z[4])
Z(z[4])
Z(z[6])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^upload']],[[4],[[5],[[4],[[5],[1,'doUpload']]]]]]]],[[4],[[5],[[5],[1,'^avtinit']],[[4],[[5],[[4],[[5],[1,'doBefore']]]]]]]]])
Z([3,'avatar'])
Z([3,'2'])
Z(z[18])
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([[7],[3,'cancelColor']])
Z([3,'vue-ref'])
Z([[7],[3,'color']])
Z([[4],[[5],[[4],[[5],[[5],[1,'^confirm']],[[4],[[5],[[4],[[5],[1,'change']]]]]]]]])
Z([3,'dateTime'])
Z([[7],[3,'endYear']])
Z([[7],[3,'setDateTime']])
Z([[7],[3,'startYear']])
Z([[7],[3,'type']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'flex margin-top-sm'])
Z([1,false])
Z(z[1])
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'tab-content'])
Z([[7],[3,'currentTab']])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'switchTab']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'300'])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[7],[3,'winHeight']],[1,'px']]],[1,';']])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'tabbar']])
Z(z[6])
Z(z[0])
Z([3,'scoll-y'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[[5],[1,'ScrollDown']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[6])
Z(z[7])
Z([[7],[3,'list1']])
Z(z[6])
Z(z[0])
Z([3,'list-cell list-item'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'navigator']],[[4],[[5],[1,'order_detail']]]]]]]]]]])
Z([3,'hover'])
Z([1,150])
Z([3,'bg-white'])
Z([3,'solid-bottom padding-right flex justify-between'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'state']],[1,0]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'state']],[1,1]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'state']],[1,2]])
Z([3,'flex margin-top-sm'])
Z(z[24])
Z(z[25])
Z(z[26])
Z([3,'__l'])
Z([[2,'!'],[[7],[3,'loadding']]])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z(z[31])
Z([[2,'!'],[[7],[3,'pullUpOn']]])
Z([[2,'+'],[1,'2-'],[[7],[3,'index']]])
Z([[2,'<='],[[6],[[7],[3,'list1']],[3,'length']],[1,0]])
Z(z[31])
Z([1,true])
Z([3,'../../static/img_noorder.png'])
Z([[2,'+'],[1,'3-'],[[7],[3,'index']]])
Z([[4],[[5],[1,'default']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'background-color:#f2f2f2;'])
Z([[2,'&&'],[[2,'!=='],[[7],[3,'changygn']],[1,undefined]],[[2,'>'],[[6],[[7],[3,'changygn']],[3,'length']],[1,0]]])
Z([[2,'&&'],[[2,'!=='],[[7],[3,'sellerFuns']],[1,undefined]],[[2,'>'],[[6],[[7],[3,'sellerFuns']],[3,'length']],[1,0]]])
Z([[2,'&&'],[[2,'!=='],[[7],[3,'otherFuns']],[1,undefined]],[[2,'>'],[[6],[[7],[3,'otherFuns']],[3,'length']],[1,0]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
function gz$gwx_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx_36)return __WXML_GLOBAL__.ops_cached.$gwx_36
__WXML_GLOBAL__.ops_cached.$gwx_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'tab-content'])
Z([[7],[3,'TabCur']])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'switchTab']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'300'])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[7],[3,'winHeight']],[1,'px']]],[1,';']])
Z([3,'index'])
Z([3,'item'])
Z([1,2])
Z(z[6])
Z([3,'scoll-y bg-white'])
Z(z[6])
Z(z[7])
Z([1,5])
Z(z[6])
Z([[2,'=='],[[7],[3,'TabCur']],[1,0]])
Z(z[6])
Z(z[7])
Z(z[13])
Z(z[6])
Z([[2,'=='],[[7],[3,'TabCur']],[1,1]])
Z([3,'__l'])
Z(z[0])
Z([[7],[3,'cancelColor']])
Z([3,'vue-ref'])
Z([[7],[3,'color']])
Z([[4],[[5],[[4],[[5],[[5],[1,'^confirm']],[[4],[[5],[[4],[[5],[1,'change']]]]]]]]])
Z([3,'dateTime'])
Z([[7],[3,'endYear']])
Z([[7],[3,'setDateTime']])
Z([[7],[3,'startYear']])
Z([[7],[3,'type']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_36);return __WXML_GLOBAL__.ops_cached.$gwx_36
}
function gz$gwx_37(){
if( __WXML_GLOBAL__.ops_cached.$gwx_37)return __WXML_GLOBAL__.ops_cached.$gwx_37
__WXML_GLOBAL__.ops_cached.$gwx_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z(z[0])
Z([3,'cu-item shadow'])
Z([3,'border-radius:0rpx;padding-bottom:0;'])
Z([3,'cu-bar bg-white solid-bottom'])
Z([3,'min-height:40px;'])
Z([[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'status']],[1,10]])
Z([[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'status']],[1,0]])
Z([[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'status']],[1,1]])
Z([[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'status']],[1,2]])
Z([[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'status']],[1,3]])
Z([[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'status']],[1,4]])
Z([[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'status']],[1,5]])
Z([[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'status']],[1,6]])
Z([[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'status']],[[2,'-'],[1,1]]])
Z([[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'experss_no']])
Z([1,false])
Z([3,'cu-bar bg-white solid-top'])
Z(z[7])
Z([3,'action padding-tb-sm'])
Z([[2,'&&'],[[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'status']],[1,3]],[[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'comment']],[1,1]]])
Z(z[10])
Z(z[13])
Z(z[9])
Z(z[21])
Z([[2,'&&'],[[2,'||'],[[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'status']],[1,0]],[[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'status']],[1,1]]],[[2,'!='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'obj_type2']],[1,0]]])
Z([[2,'&&'],[[2,'||'],[[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'status']],[1,0]],[[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'status']],[1,1]]],[[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'obj_type2']],[1,0]]])
Z([[2,'||'],[[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'status']],[1,2]],[[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'status']],[1,3]]])
Z([1,true])
})(__WXML_GLOBAL__.ops_cached.$gwx_37);return __WXML_GLOBAL__.ops_cached.$gwx_37
}
function gz$gwx_38(){
if( __WXML_GLOBAL__.ops_cached.$gwx_38)return __WXML_GLOBAL__.ops_cached.$gwx_38
__WXML_GLOBAL__.ops_cached.$gwx_38=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_38);return __WXML_GLOBAL__.ops_cached.$gwx_38
}
function gz$gwx_39(){
if( __WXML_GLOBAL__.ops_cached.$gwx_39)return __WXML_GLOBAL__.ops_cached.$gwx_39
__WXML_GLOBAL__.ops_cached.$gwx_39=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([1,10])
Z(z[0])
Z([3,'__l'])
Z([[7],[3,'scrollTop']])
Z([3,'104rpx'])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z([[4],[[5],[[5],[1,'header']],[1,'content']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_39);return __WXML_GLOBAL__.ops_cached.$gwx_39
}
function gz$gwx_40(){
if( __WXML_GLOBAL__.ops_cached.$gwx_40)return __WXML_GLOBAL__.ops_cached.$gwx_40
__WXML_GLOBAL__.ops_cached.$gwx_40=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_40);return __WXML_GLOBAL__.ops_cached.$gwx_40
}
function gz$gwx_41(){
if( __WXML_GLOBAL__.ops_cached.$gwx_41)return __WXML_GLOBAL__.ops_cached.$gwx_41
__WXML_GLOBAL__.ops_cached.$gwx_41=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z(z[1])
Z([3,'vue-ref'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^onCancel']],[[4],[[5],[[4],[[5],[1,'onCancel']]]]]]]],[[4],[[5],[[5],[1,'^onConfirm']],[[4],[[5],[[4],[[5],[1,'onConfirm3']]]]]]]]])
Z([3,'mpvueCityPicker'])
Z([[7],[3,'cityPickerValueDefault']])
Z([[7],[3,'themeColor']])
Z([3,'1'])
Z([3,'bg-white'])
Z(z[0])
Z([3,'2'])
Z([[4],[[5],[1,'content']]])
Z([3,'tui-screen-top solid-bottom'])
Z([1,false])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'dropdownList1']])
Z(z[15])
Z(z[1])
Z([[4],[[5],[[5],[1,'tui-dropdownlist-item tui-icon-middle']],[[2,'?:'],[[6],[[7],[3,'item']],[3,'selected']],[1,'tui-bold'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'dropdownItem2']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'item']],[3,'name']])
Z([[6],[[7],[3,'item']],[3,'value']])
Z([[6],[[7],[3,'item']],[3,'selected']])
Z(z[15])
Z(z[16])
Z([[7],[3,'dropdownList2']])
Z(z[15])
Z(z[1])
Z(z[20])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'dropdownItem4']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[22])
Z(z[23])
Z(z[24])
Z(z[25])
Z(z[15])
Z(z[16])
Z([[7],[3,'gettypelist']])
Z(z[15])
Z(z[1])
Z(z[20])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'dropdownItem5']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[22])
Z(z[23])
Z([[6],[[7],[3,'item']],[3,'id']])
Z(z[25])
Z(z[15])
Z(z[16])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z(z[15])
Z([[2,'>'],[[6],[[7],[3,'getSellerList']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_41);return __WXML_GLOBAL__.ops_cached.$gwx_41
}
function gz$gwx_42(){
if( __WXML_GLOBAL__.ops_cached.$gwx_42)return __WXML_GLOBAL__.ops_cached.$gwx_42
__WXML_GLOBAL__.ops_cached.$gwx_42=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!='],[[6],[[6],[[7],[3,'seller']],[3,'seller']],[3,'seller_desc']],[1,null]])
Z([3,'__e'])
Z([3,'tab-content'])
Z([[7],[3,'currentTab']])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'switchTab']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'300'])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[7],[3,'winHeight']],[1,'px']]],[1,';']])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'tabbar']])
Z(z[7])
Z([3,'scoll-y bg-white'])
Z([[2,'=='],[[7],[3,'currentTab']],[1,0]])
Z([3,'list-view margin'])
Z([[2,'>'],[[6],[[6],[[7],[3,'seller']],[3,'projectsList']],[3,'length']],[1,0]])
Z(z[7])
Z(z[8])
Z([[6],[[7],[3,'seller']],[3,'projectsList']])
Z(z[7])
Z(z[1])
Z([3,'cu-item '])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'ToastMsg']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'height:200rpx;'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'is_stock']],[1,1]])
Z([[2,'=='],[[7],[3,'currentTab']],[1,1]])
Z(z[13])
Z([[2,'>'],[[6],[[6],[[7],[3,'seller']],[3,'goodsList']],[3,'length']],[1,0]])
Z(z[7])
Z(z[8])
Z([[6],[[7],[3,'seller']],[3,'goodsList']])
Z(z[7])
Z(z[1])
Z(z[20])
Z(z[21])
Z(z[22])
Z(z[23])
})(__WXML_GLOBAL__.ops_cached.$gwx_42);return __WXML_GLOBAL__.ops_cached.$gwx_42
}
function gz$gwx_43(){
if( __WXML_GLOBAL__.ops_cached.$gwx_43)return __WXML_GLOBAL__.ops_cached.$gwx_43
__WXML_GLOBAL__.ops_cached.$gwx_43=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_43);return __WXML_GLOBAL__.ops_cached.$gwx_43
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./colorui/components/cu-custom.wxml','./components/dateTime/dateTime.wxml','./components/icon/icon.wxml','./components/list-cell/list-cell.wxml','./components/loadmore/loadmore.wxml','./components/mpvue-citypicker/mpvueCityPicker.wxml','./components/mpvue-picker/mpvuePicker.wxml','./components/nomore/nomore.wxml','./components/sticky/sticky.wxml','./components/tips/tips.wxml','./components/top-dropdown/top-dropdown.wxml','./components/yq-avatar/yq-avatar.wxml','./pages/home/business.wxml','./pages/home/businesshome.wxml','./pages/home/home.wxml','./pages/home/orderpage.wxml','./pages/home/paysuccess.wxml','./pages/home/quotedprice.wxml','./pages/home/shopselect.wxml','./pages/index/dialog.wxml','./pages/index/fastfabu.wxml','./pages/index/precisefabu.wxml','./pages/market/home.wxml','./pages/market/more.wxml','./pages/mine/carbrand.wxml','./pages/mine/carmanager.wxml','./pages/mine/coupon.wxml','./pages/mine/h5.wxml','./pages/mine/home.wxml','./pages/mine/mycar.wxml','./pages/mine/myinfo.wxml','./pages/mine/mywallet.wxml','./pages/mine/order_detail.wxml','./pages/mine/orderlist.wxml','./pages/mine/personal.wxml','./pages/mine/points.wxml','./pages/mine/publishbid.wxml','./pages/mine/sjmb.wxml','./pages/mine/wallet.wxml','./pages/mine/wallet_details.wxml','./pages/more/home.wxml','./pages/more/nearby_merchants.wxml','./pages/more/shop.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('slot')
_rz(z,oB,'name',0,e,s,gg)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var oD=_mz(z,'picker-view',['bindchange',0,'class',1,'data-event-opts',1,'value',2],[],e,s,gg)
var fE=_v()
_(oD,fE)
if(_oz(z,4,e,s,gg)){fE.wxVkey=1
}
var cF=_v()
_(oD,cF)
if(_oz(z,5,e,s,gg)){cF.wxVkey=1
}
var hG=_v()
_(oD,hG)
if(_oz(z,6,e,s,gg)){hG.wxVkey=1
}
var oH=_v()
_(oD,oH)
if(_oz(z,7,e,s,gg)){oH.wxVkey=1
}
var cI=_v()
_(oD,cI)
if(_oz(z,8,e,s,gg)){cI.wxVkey=1
}
fE.wxXCkey=1
cF.wxXCkey=1
hG.wxXCkey=1
oH.wxXCkey=1
cI.wxXCkey=1
_(r,oD)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var aL=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1,'hoverClass',2,'hoverStayTime',3,'style',4],[],e,s,gg)
var tM=_n('slot')
_(aL,tM)
_(r,aL)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var bO=_v()
_(r,bO)
if(_oz(z,0,e,s,gg)){bO.wxVkey=1
}
bO.wxXCkey=1
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var oR=_n('view')
_rz(z,oR,'class',0,e,s,gg)
var fS=_v()
_(oR,fS)
if(_oz(z,1,e,s,gg)){fS.wxVkey=1
}
var cT=_v()
_(oR,cT)
if(_oz(z,2,e,s,gg)){cT.wxVkey=1
}
var hU=_v()
_(oR,hU)
if(_oz(z,3,e,s,gg)){hU.wxVkey=1
}
var oV=_v()
_(oR,oV)
if(_oz(z,4,e,s,gg)){oV.wxVkey=1
}
var cW=_v()
_(oR,cW)
if(_oz(z,5,e,s,gg)){cW.wxVkey=1
}
fS.wxXCkey=1
cT.wxXCkey=1
hU.wxXCkey=1
oV.wxXCkey=1
cW.wxXCkey=1
_(r,oR)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var lY=_v()
_(r,lY)
if(_oz(z,0,e,s,gg)){lY.wxVkey=1
}
lY.wxXCkey=1
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var t1=_n('view')
_rz(z,t1,'class',0,e,s,gg)
var e2=_v()
_(t1,e2)
if(_oz(z,1,e,s,gg)){e2.wxVkey=1
}
var b3=_n('slot')
_rz(z,b3,'name',2,e,s,gg)
_(t1,b3)
var o4=_n('slot')
_rz(z,o4,'name',3,e,s,gg)
_(t1,o4)
e2.wxXCkey=1
_(r,t1)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var o6=_n('view')
_rz(z,o6,'class',0,e,s,gg)
var c8=_n('slot')
_(o6,c8)
var f7=_v()
_(o6,f7)
if(_oz(z,1,e,s,gg)){f7.wxVkey=1
}
f7.wxXCkey=1
_(r,o6)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var o0=_n('slot')
_(r,o0)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var aDB=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var tEB=_v()
_(aDB,tEB)
if(_oz(z,2,e,s,gg)){tEB.wxVkey=1
var oHB=_v()
_(tEB,oHB)
var xIB=function(fKB,oJB,cLB,gg){
var oNB=_v()
_(cLB,oNB)
if(_oz(z,7,fKB,oJB,gg)){oNB.wxVkey=1
}
oNB.wxXCkey=1
return cLB
}
oHB.wxXCkey=2
_2z(z,5,xIB,e,s,gg,oHB,'item','index','index')
}
var eFB=_v()
_(aDB,eFB)
if(_oz(z,8,e,s,gg)){eFB.wxVkey=1
}
var bGB=_v()
_(aDB,bGB)
if(_oz(z,9,e,s,gg)){bGB.wxVkey=1
}
tEB.wxXCkey=1
eFB.wxXCkey=1
bGB.wxXCkey=1
_(r,aDB)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var oPB=_n('view')
var lQB=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'vueId',1,'vueSlots',2],[],e,s,gg)
_(oPB,lQB)
var aRB=_v()
_(oPB,aRB)
var tSB=function(bUB,eTB,oVB,gg){
var oXB=_v()
_(oVB,oXB)
if(_oz(z,8,bUB,eTB,gg)){oXB.wxVkey=1
var fYB=_mz(z,'view',['bindtap',9,'class',1,'data-event-opts',2],[],bUB,eTB,gg)
var cZB=_n('view')
_rz(z,cZB,'class',12,bUB,eTB,gg)
var h1B=_v()
_(cZB,h1B)
if(_oz(z,13,bUB,eTB,gg)){h1B.wxVkey=1
}
var o2B=_v()
_(cZB,o2B)
if(_oz(z,14,bUB,eTB,gg)){o2B.wxVkey=1
}
h1B.wxXCkey=1
o2B.wxXCkey=1
_(fYB,cZB)
_(oXB,fYB)
}
oXB.wxXCkey=1
return oVB
}
aRB.wxXCkey=2
_2z(z,6,tSB,e,s,gg,aRB,'item','index','index')
_(r,oPB)
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var a6B=_n('view')
var b9B=_v()
_(a6B,b9B)
var o0B=function(oBC,xAC,fCC,gg){
var hEC=_n('view')
_rz(z,hEC,'class',4,oBC,xAC,gg)
var oFC=_v()
_(hEC,oFC)
if(_oz(z,5,oBC,xAC,gg)){oFC.wxVkey=1
}
var cGC=_v()
_(hEC,cGC)
if(_oz(z,6,oBC,xAC,gg)){cGC.wxVkey=1
}
oFC.wxXCkey=1
cGC.wxXCkey=1
_(fCC,hEC)
return fCC
}
b9B.wxXCkey=2
_2z(z,2,o0B,e,s,gg,b9B,'item','index','index')
var t7B=_v()
_(a6B,t7B)
if(_oz(z,7,e,s,gg)){t7B.wxVkey=1
var oHC=_v()
_(t7B,oHC)
if(_oz(z,8,e,s,gg)){oHC.wxVkey=1
}
oHC.wxXCkey=1
}
var e8B=_v()
_(a6B,e8B)
if(_oz(z,9,e,s,gg)){e8B.wxVkey=1
}
var lIC=_mz(z,'avatar',['bind:__l',10,'bind:avtinit',1,'bind:upload',2,'class',3,'data-event-opts',4,'data-ref',5,'quality',6,'vueId',7],[],e,s,gg)
_(a6B,lIC)
t7B.wxXCkey=1
e8B.wxXCkey=1
_(r,a6B)
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var tKC=_n('view')
var eLC=_v()
_(tKC,eLC)
if(_oz(z,0,e,s,gg)){eLC.wxVkey=1
}
var bMC=_mz(z,'scroll-view',['scrollY',-1,'class',1,'style',1],[],e,s,gg)
var xOC=_n('view')
_rz(z,xOC,'class',3,e,s,gg)
var oPC=_v()
_(xOC,oPC)
if(_oz(z,4,e,s,gg)){oPC.wxVkey=1
var cRC=_v()
_(oPC,cRC)
var hSC=function(cUC,oTC,oVC,gg){
var aXC=_v()
_(oVC,aXC)
if(_oz(z,9,cUC,oTC,gg)){aXC.wxVkey=1
var tYC=_mz(z,'view',['class',10,'hidden',1],[],cUC,oTC,gg)
var eZC=_v()
_(tYC,eZC)
if(_oz(z,12,cUC,oTC,gg)){eZC.wxVkey=1
}
var b1C=_v()
_(tYC,b1C)
if(_oz(z,13,cUC,oTC,gg)){b1C.wxVkey=1
}
eZC.wxXCkey=1
b1C.wxXCkey=1
_(aXC,tYC)
}
aXC.wxXCkey=1
return oVC
}
cRC.wxXCkey=2
_2z(z,7,hSC,e,s,gg,cRC,'itemx','indexs','indexs')
}
var fQC=_v()
_(xOC,fQC)
if(_oz(z,14,e,s,gg)){fQC.wxVkey=1
}
oPC.wxXCkey=1
fQC.wxXCkey=1
_(bMC,xOC)
var oNC=_v()
_(bMC,oNC)
if(_oz(z,15,e,s,gg)){oNC.wxVkey=1
}
else{oNC.wxVkey=2
var o2C=_n('view')
_rz(z,o2C,'class',16,e,s,gg)
var x3C=_v()
_(o2C,x3C)
if(_oz(z,17,e,s,gg)){x3C.wxVkey=1
}
else{x3C.wxVkey=2
var o4C=_v()
_(x3C,o4C)
if(_oz(z,18,e,s,gg)){o4C.wxVkey=1
}
else{o4C.wxVkey=2
var f5C=_v()
_(o4C,f5C)
if(_oz(z,19,e,s,gg)){f5C.wxVkey=1
}
else{f5C.wxVkey=2
var c6C=_v()
_(f5C,c6C)
if(_oz(z,20,e,s,gg)){c6C.wxVkey=1
}
else{c6C.wxVkey=2
var h7C=_v()
_(c6C,h7C)
if(_oz(z,21,e,s,gg)){h7C.wxVkey=1
}
else{h7C.wxVkey=2
var o8C=_v()
_(h7C,o8C)
if(_oz(z,22,e,s,gg)){o8C.wxVkey=1
}
else{o8C.wxVkey=2
var c9C=_v()
_(o8C,c9C)
if(_oz(z,23,e,s,gg)){c9C.wxVkey=1
}
c9C.wxXCkey=1
}
o8C.wxXCkey=1
}
h7C.wxXCkey=1
}
c6C.wxXCkey=1
}
f5C.wxXCkey=1
}
o4C.wxXCkey=1
}
x3C.wxXCkey=1
_(oNC,o2C)
}
oNC.wxXCkey=1
_(tKC,bMC)
var o0C=_mz(z,'swiper',['bindchange',24,'class',1,'current',2,'data-event-opts',3,'duration',4,'style',5],[],e,s,gg)
var lAD=_v()
_(o0C,lAD)
var aBD=function(eDD,tCD,bED,gg){
var xGD=_mz(z,'scroll-view',['scrollY',-1,'class',34],[],eDD,tCD,gg)
var oHD=_v()
_(xGD,oHD)
if(_oz(z,35,eDD,tCD,gg)){oHD.wxVkey=1
var hKD=_n('view')
var oLD=_v()
_(hKD,oLD)
if(_oz(z,36,eDD,tCD,gg)){oLD.wxVkey=1
}
var cMD=_n('view')
_rz(z,cMD,'class',37,eDD,tCD,gg)
var oND=_v()
_(cMD,oND)
if(_oz(z,38,eDD,tCD,gg)){oND.wxVkey=1
}
var lOD=_v()
_(cMD,lOD)
if(_oz(z,39,eDD,tCD,gg)){lOD.wxVkey=1
}
var aPD=_v()
_(cMD,aPD)
if(_oz(z,40,eDD,tCD,gg)){aPD.wxVkey=1
}
var tQD=_v()
_(cMD,tQD)
if(_oz(z,41,eDD,tCD,gg)){tQD.wxVkey=1
}
oND.wxXCkey=1
lOD.wxXCkey=1
aPD.wxXCkey=1
tQD.wxXCkey=1
_(hKD,cMD)
oLD.wxXCkey=1
_(oHD,hKD)
}
var fID=_v()
_(xGD,fID)
if(_oz(z,42,eDD,tCD,gg)){fID.wxVkey=1
var eRD=_n('view')
var oTD=_v()
_(eRD,oTD)
var xUD=function(fWD,oVD,cXD,gg){
var oZD=_v()
_(cXD,oZD)
if(_oz(z,47,fWD,oVD,gg)){oZD.wxVkey=1
var c1D=_n('view')
_rz(z,c1D,'class',48,fWD,oVD,gg)
var l3D=_mz(z,'view',['bindtap',49,'class',1,'data-event-opts',2,'style',3],[],fWD,oVD,gg)
var a4D=_v()
_(l3D,a4D)
if(_oz(z,53,fWD,oVD,gg)){a4D.wxVkey=1
}
a4D.wxXCkey=1
_(c1D,l3D)
var o2D=_v()
_(c1D,o2D)
if(_oz(z,54,fWD,oVD,gg)){o2D.wxVkey=1
}
o2D.wxXCkey=1
_(oZD,c1D)
}
oZD.wxXCkey=1
return cXD
}
oTD.wxXCkey=2
_2z(z,45,xUD,eDD,tCD,gg,oTD,'item','index','index')
var bSD=_v()
_(eRD,bSD)
if(_oz(z,55,eDD,tCD,gg)){bSD.wxVkey=1
}
bSD.wxXCkey=1
_(fID,eRD)
}
var cJD=_v()
_(xGD,cJD)
if(_oz(z,56,eDD,tCD,gg)){cJD.wxVkey=1
var t5D=_n('view')
var e6D=_v()
_(t5D,e6D)
if(_oz(z,57,eDD,tCD,gg)){e6D.wxVkey=1
}
var b7D=_v()
_(t5D,b7D)
if(_oz(z,58,eDD,tCD,gg)){b7D.wxVkey=1
}
e6D.wxXCkey=1
b7D.wxXCkey=1
_(cJD,t5D)
}
oHD.wxXCkey=1
fID.wxXCkey=1
cJD.wxXCkey=1
_(bED,xGD)
return bED
}
lAD.wxXCkey=2
_2z(z,32,aBD,e,s,gg,lAD,'item','index','index')
_(tKC,o0C)
eLC.wxXCkey=1
_(r,tKC)
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var o0D=_mz(z,'form',['bindsubmit',0,'data-event-opts',1,'reportSubmit',1],[],e,s,gg)
var fAE=_v()
_(o0D,fAE)
if(_oz(z,3,e,s,gg)){fAE.wxVkey=1
}
var cBE=_v()
_(o0D,cBE)
if(_oz(z,4,e,s,gg)){cBE.wxVkey=1
}
var hCE=_mz(z,'tui-datetime',['bind:__l',5,'bind:confirm',1,'cancelColor',2,'class',3,'color',4,'data-event-opts',5,'data-ref',6,'endYear',7,'setDateTime',8,'startYear',9,'type',10,'vueId',11],[],e,s,gg)
_(o0D,hCE)
var oDE=_mz(z,'avatar',['bind:__l',17,'bind:avtinit',1,'bind:upload',2,'class',3,'data-event-opts',4,'data-ref',5,'quality',6,'vueId',7],[],e,s,gg)
_(o0D,oDE)
fAE.wxXCkey=1
cBE.wxXCkey=1
_(r,o0D)
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
var oFE=_n('view')
var tIE=_mz(z,'mpvue-city-picker',['bind:__l',0,'bind:onCancel',1,'bind:onConfirm',1,'class',2,'data-event-opts',3,'data-ref',4,'pickerValueDefault',5,'themeColor',6,'vueId',7],[],e,s,gg)
_(oFE,tIE)
var lGE=_v()
_(oFE,lGE)
if(_oz(z,9,e,s,gg)){lGE.wxVkey=1
}
var eJE=_mz(z,'tui-datetime',['bind:__l',10,'bind:confirm',1,'cancelColor',2,'class',3,'color',4,'data-event-opts',5,'data-ref',6,'endYear',7,'setDateTime',8,'startYear',9,'type',10,'vueId',11],[],e,s,gg)
_(oFE,eJE)
var aHE=_v()
_(oFE,aHE)
if(_oz(z,22,e,s,gg)){aHE.wxVkey=1
}
var bKE=_mz(z,'avatar',['bind:__l',23,'bind:avtinit',1,'bind:upload',2,'class',3,'data-event-opts',4,'data-ref',5,'quality',6,'vueId',7],[],e,s,gg)
_(oFE,bKE)
lGE.wxXCkey=1
aHE.wxXCkey=1
_(r,oFE)
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var xME=_n('view')
var oNE=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'vueId',1,'vueSlots',2],[],e,s,gg)
_(xME,oNE)
var fOE=_n('view')
_rz(z,fOE,'class',4,e,s,gg)
var cPE=_v()
_(fOE,cPE)
var hQE=function(cSE,oRE,oTE,gg){
var aVE=_mz(z,'view',['bindtap',9,'class',1,'data-event-opts',2,'data-index',3,'data-name',4,'data-value',5],[],cSE,oRE,gg)
var tWE=_v()
_(aVE,tWE)
if(_oz(z,15,cSE,oRE,gg)){tWE.wxVkey=1
}
tWE.wxXCkey=1
_(oTE,aVE)
return oTE
}
cPE.wxXCkey=2
_2z(z,7,hQE,e,s,gg,cPE,'item','index','index')
var eXE=_v()
_(fOE,eXE)
var bYE=function(x1E,oZE,o2E,gg){
var c4E=_mz(z,'view',['bindtap',20,'class',1,'data-event-opts',2,'data-index',3,'data-name',4,'data-value',5],[],x1E,oZE,gg)
var h5E=_v()
_(c4E,h5E)
if(_oz(z,26,x1E,oZE,gg)){h5E.wxVkey=1
}
h5E.wxXCkey=1
_(o2E,c4E)
return o2E
}
eXE.wxXCkey=2
_2z(z,18,bYE,e,s,gg,eXE,'item','index','index')
var o6E=_v()
_(fOE,o6E)
var c7E=function(l9E,o8E,a0E,gg){
var eBF=_mz(z,'view',['bindtap',31,'class',1,'data-event-opts',2,'data-index',3,'data-name',4,'data-value',5],[],l9E,o8E,gg)
var bCF=_v()
_(eBF,bCF)
if(_oz(z,37,l9E,o8E,gg)){bCF.wxVkey=1
}
bCF.wxXCkey=1
_(a0E,eBF)
return a0E
}
o6E.wxXCkey=2
_2z(z,29,c7E,e,s,gg,o6E,'item','index','index')
_(xME,fOE)
var oDF=_v()
_(xME,oDF)
var xEF=function(fGF,oFF,cHF,gg){
var oJF=_v()
_(cHF,oJF)
if(_oz(z,42,fGF,oFF,gg)){oJF.wxVkey=1
var cKF=_mz(z,'view',['bindtap',43,'class',1,'data-event-opts',2],[],fGF,oFF,gg)
var oLF=_v()
_(cKF,oLF)
if(_oz(z,46,fGF,oFF,gg)){oLF.wxVkey=1
}
oLF.wxXCkey=1
_(oJF,cKF)
}
oJF.wxXCkey=1
return cHF
}
oDF.wxXCkey=2
_2z(z,40,xEF,e,s,gg,oDF,'item','index','index')
_(r,xME)
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
var aNF=_n('view')
var tOF=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'vueId',1,'vueSlots',2],[],e,s,gg)
_(aNF,tOF)
var ePF=_n('view')
_rz(z,ePF,'class',4,e,s,gg)
var bQF=_v()
_(ePF,bQF)
var oRF=function(oTF,xSF,fUF,gg){
var hWF=_mz(z,'view',['bindtap',9,'class',1,'data-event-opts',2,'data-index',3,'data-name',4,'data-value',5],[],oTF,xSF,gg)
var oXF=_v()
_(hWF,oXF)
if(_oz(z,15,oTF,xSF,gg)){oXF.wxVkey=1
}
oXF.wxXCkey=1
_(fUF,hWF)
return fUF
}
bQF.wxXCkey=2
_2z(z,7,oRF,e,s,gg,bQF,'item','index','index')
var cYF=_v()
_(ePF,cYF)
var oZF=function(a2F,l1F,t3F,gg){
var b5F=_mz(z,'view',['bindtap',20,'class',1,'data-event-opts',2,'data-index',3,'data-name',4,'data-value',5],[],a2F,l1F,gg)
var o6F=_v()
_(b5F,o6F)
if(_oz(z,26,a2F,l1F,gg)){o6F.wxVkey=1
}
o6F.wxXCkey=1
_(t3F,b5F)
return t3F
}
cYF.wxXCkey=2
_2z(z,18,oZF,e,s,gg,cYF,'item','index','index')
var x7F=_v()
_(ePF,x7F)
var o8F=function(c0F,f9F,hAG,gg){
var cCG=_mz(z,'view',['bindtap',31,'class',1,'data-event-opts',2,'data-index',3,'data-name',4,'data-value',5],[],c0F,f9F,gg)
var oDG=_v()
_(cCG,oDG)
if(_oz(z,37,c0F,f9F,gg)){oDG.wxVkey=1
}
oDG.wxXCkey=1
_(hAG,cCG)
return hAG
}
x7F.wxXCkey=2
_2z(z,29,o8F,e,s,gg,x7F,'item','index','index')
_(aNF,ePF)
var lEG=_v()
_(aNF,lEG)
var aFG=function(eHG,tGG,bIG,gg){
var xKG=_v()
_(bIG,xKG)
if(_oz(z,42,eHG,tGG,gg)){xKG.wxVkey=1
var oLG=_mz(z,'view',['bindtap',43,'class',1,'data-event-opts',2],[],eHG,tGG,gg)
var fMG=_v()
_(oLG,fMG)
if(_oz(z,46,eHG,tGG,gg)){fMG.wxVkey=1
}
fMG.wxXCkey=1
_(xKG,oLG)
}
xKG.wxXCkey=1
return bIG
}
lEG.wxXCkey=2
_2z(z,40,aFG,e,s,gg,lEG,'item','index','index')
_(r,aNF)
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
var hOG=_n('view')
_rz(z,hOG,'class',0,e,s,gg)
var cQG=_mz(z,'scroll-view',['scrollY',-1,'bindscroll',1,'class',1,'data-event-opts',2,'scrollIntoView',3,'style',4],[],e,s,gg)
var oRG=_v()
_(cQG,oRG)
var lSG=function(tUG,aTG,eVG,gg){
var oXG=_v()
_(eVG,oXG)
if(_oz(z,10,tUG,aTG,gg)){oXG.wxVkey=1
var xYG=_mz(z,'tui-sticky',['bind:__l',11,'scrollTop',1,'stickyHeight',2,'vueId',3,'vueSlots',4],[],tUG,aTG,gg)
var oZG=_n('view')
_rz(z,oZG,'slot',16,tUG,aTG,gg)
var f1G=_v()
_(oZG,f1G)
var c2G=function(o4G,h3G,c5G,gg){
var l7G=_mz(z,'tui-cell',['bind:__l',23,'bind:click',1,'data-event-opts',2,'last',3,'vueId',4,'vueSlots',5],[],o4G,h3G,gg)
_(c5G,l7G)
return c5G
}
f1G.wxXCkey=4
_2z(z,19,c2G,tUG,aTG,gg,f1G,'item','index2','index2')
_(xYG,oZG)
_(oXG,xYG)
}
oXG.wxXCkey=1
oXG.wxXCkey=3
return eVG
}
oRG.wxXCkey=4
_2z(z,8,lSG,e,s,gg,oRG,'list','index','index')
_(hOG,cQG)
var oPG=_v()
_(hOG,oPG)
if(_oz(z,29,e,s,gg)){oPG.wxVkey=1
}
oPG.wxXCkey=1
_(r,hOG)
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
var e0G=_n('view')
_rz(z,e0G,'class',0,e,s,gg)
var oBH=_mz(z,'swiper',['bindchange',1,'class',1,'current',2,'data-event-opts',3,'duration',4,'style',5],[],e,s,gg)
var xCH=_v()
_(oBH,xCH)
var oDH=function(cFH,fEH,hGH,gg){
var cIH=_mz(z,'scroll-view',['scrollY',-1,'class',11],[],cFH,fEH,gg)
var oJH=_v()
_(cIH,oJH)
if(_oz(z,12,cFH,fEH,gg)){oJH.wxVkey=1
var tMH=_v()
_(oJH,tMH)
var eNH=function(oPH,bOH,xQH,gg){
var fSH=_v()
_(xQH,fSH)
if(_oz(z,17,oPH,bOH,gg)){fSH.wxVkey=1
}
fSH.wxXCkey=1
return xQH
}
tMH.wxXCkey=2
_2z(z,15,eNH,cFH,fEH,gg,tMH,'item','index','index')
}
var lKH=_v()
_(cIH,lKH)
if(_oz(z,18,cFH,fEH,gg)){lKH.wxVkey=1
var cTH=_v()
_(lKH,cTH)
var hUH=function(cWH,oVH,oXH,gg){
var aZH=_v()
_(oXH,aZH)
if(_oz(z,23,cWH,oVH,gg)){aZH.wxVkey=1
}
aZH.wxXCkey=1
return oXH
}
cTH.wxXCkey=2
_2z(z,21,hUH,cFH,fEH,gg,cTH,'item','index','index')
}
var aLH=_v()
_(cIH,aLH)
if(_oz(z,24,cFH,fEH,gg)){aLH.wxVkey=1
var t1H=_v()
_(aLH,t1H)
var e2H=function(o4H,b3H,x5H,gg){
var f7H=_v()
_(x5H,f7H)
if(_oz(z,29,o4H,b3H,gg)){f7H.wxVkey=1
}
f7H.wxXCkey=1
return x5H
}
t1H.wxXCkey=2
_2z(z,27,e2H,cFH,fEH,gg,t1H,'item','index','index')
}
oJH.wxXCkey=1
lKH.wxXCkey=1
aLH.wxXCkey=1
_(hGH,cIH)
return hGH
}
xCH.wxXCkey=2
_2z(z,9,oDH,e,s,gg,xCH,'item','index','index')
_(e0G,oBH)
var bAH=_v()
_(e0G,bAH)
if(_oz(z,30,e,s,gg)){bAH.wxVkey=1
var c8H=_mz(z,'tui-tips',['bind:__l',31,'fixed',1,'imgUrl',2,'vueId',3,'vueSlots',4],[],e,s,gg)
_(bAH,c8H)
}
bAH.wxXCkey=1
bAH.wxXCkey=3
_(r,e0G)
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
return r
}
e_[x[27]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
var cAI=_n('view')
_rz(z,cAI,'style',0,e,s,gg)
var oBI=_mz(z,'cu-custom',['bgColor',1,'bind:__l',1,'isBack',2,'isCustom',3,'vueId',4,'vueSlots',5],[],e,s,gg)
_(cAI,oBI)
var lCI=_mz(z,'scroll-view',['scrollY',-1,'class',7],[],e,s,gg)
var aDI=_v()
_(lCI,aDI)
if(_oz(z,8,e,s,gg)){aDI.wxVkey=1
}
var tEI=_v()
_(lCI,tEI)
if(_oz(z,9,e,s,gg)){tEI.wxVkey=1
}
aDI.wxXCkey=1
tEI.wxXCkey=1
_(cAI,lCI)
_(r,cAI)
return r
}
e_[x[28]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
var bGI=_n('view')
_rz(z,bGI,'class',0,e,s,gg)
var xII=_n('view')
_rz(z,xII,'class',1,e,s,gg)
var oJI=_v()
_(xII,oJI)
if(_oz(z,2,e,s,gg)){oJI.wxVkey=1
}
var fKI=_v()
_(xII,fKI)
if(_oz(z,3,e,s,gg)){fKI.wxVkey=1
}
oJI.wxXCkey=1
fKI.wxXCkey=1
_(bGI,xII)
var oHI=_v()
_(bGI,oHI)
if(_oz(z,4,e,s,gg)){oHI.wxVkey=1
}
var cLI=_mz(z,'tui-datetime',['bind:__l',5,'bind:confirm',1,'cancelColor',2,'class',3,'color',4,'data-event-opts',5,'data-ref',6,'endYear',7,'setDateTime',8,'startYear',9,'type',10,'vueId',11],[],e,s,gg)
_(bGI,cLI)
var hMI=_mz(z,'mpvue-picker',['bind:__l',17,'bind:onCancel',1,'bind:onConfirm',2,'class',3,'data-event-opts',4,'data-ref',5,'deepLength',6,'mode',7,'pickerValueArray',8,'pickerValueDefault',9,'themeColor',10,'vueId',11],[],e,s,gg)
_(bGI,hMI)
var oNI=_mz(z,'mpvue-city-picker',['bind:__l',29,'bind:onCancel',1,'bind:onConfirm',2,'class',3,'data-event-opts',4,'data-ref',5,'pickerValueDefault',6,'themeColor',7,'vueId',8],[],e,s,gg)
_(bGI,oNI)
var cOI=_mz(z,'avatar',['bind:__l',38,'bind:avtinit',1,'bind:upload',2,'class',3,'data-event-opts',4,'data-ref',5,'quality',6,'vueId',7],[],e,s,gg)
_(bGI,cOI)
oHI.wxXCkey=1
_(r,bGI)
return r
}
e_[x[29]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
var lQI=_n('view')
var aRI=_n('view')
_rz(z,aRI,'class',0,e,s,gg)
var tSI=_v()
_(aRI,tSI)
if(_oz(z,1,e,s,gg)){tSI.wxVkey=1
}
var eTI=_v()
_(aRI,eTI)
if(_oz(z,2,e,s,gg)){eTI.wxVkey=1
}
tSI.wxXCkey=1
eTI.wxXCkey=1
_(lQI,aRI)
var bUI=_mz(z,'mpvue-city-picker',['bind:__l',3,'bind:onCancel',1,'bind:onConfirm',2,'class',3,'data-event-opts',4,'data-ref',5,'pickerValueDefault',6,'themeColor',7,'vueId',8],[],e,s,gg)
_(lQI,bUI)
var oVI=_mz(z,'avatar',['bind:__l',12,'bind:avtinit',1,'bind:upload',2,'class',3,'data-event-opts',4,'data-ref',5,'quality',6,'vueId',7],[],e,s,gg)
_(lQI,oVI)
_(r,lQI)
return r
}
e_[x[30]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
var oXI=_mz(z,'tui-datetime',['bind:__l',0,'bind:confirm',1,'cancelColor',1,'class',2,'color',3,'data-event-opts',4,'data-ref',5,'endYear',6,'setDateTime',7,'startYear',8,'type',9,'vueId',10],[],e,s,gg)
_(r,oXI)
return r
}
e_[x[31]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
var cZI=_n('view')
_rz(z,cZI,'class',0,e,s,gg)
var h1I=_v()
_(cZI,h1I)
if(_oz(z,1,e,s,gg)){h1I.wxVkey=1
}
var o2I=_v()
_(cZI,o2I)
if(_oz(z,2,e,s,gg)){o2I.wxVkey=1
}
h1I.wxXCkey=1
o2I.wxXCkey=1
_(r,cZI)
return r
}
e_[x[32]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[33]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
var o4I=_mz(z,'swiper',['bindchange',0,'class',1,'current',1,'data-event-opts',2,'duration',3,'style',4],[],e,s,gg)
var l5I=_v()
_(o4I,l5I)
var a6I=function(e8I,t7I,b9I,gg){
var xAJ=_mz(z,'scroll-view',['scrollY',-1,'bindscrolltolower',10,'class',1,'data-event-opts',2],[],e8I,t7I,gg)
var fCJ=_v()
_(xAJ,fCJ)
var cDJ=function(oFJ,hEJ,cGJ,gg){
var lIJ=_mz(z,'view',['bindtap',17,'class',1,'data-event-opts',2,'hoverClass',3,'hoverStayTime',4],[],oFJ,hEJ,gg)
var aJJ=_n('view')
_rz(z,aJJ,'class',22,oFJ,hEJ,gg)
var tKJ=_n('view')
_rz(z,tKJ,'class',23,oFJ,hEJ,gg)
var eLJ=_v()
_(tKJ,eLJ)
if(_oz(z,24,oFJ,hEJ,gg)){eLJ.wxVkey=1
}
var bMJ=_v()
_(tKJ,bMJ)
if(_oz(z,25,oFJ,hEJ,gg)){bMJ.wxVkey=1
}
var oNJ=_v()
_(tKJ,oNJ)
if(_oz(z,26,oFJ,hEJ,gg)){oNJ.wxVkey=1
}
eLJ.wxXCkey=1
bMJ.wxXCkey=1
oNJ.wxXCkey=1
_(aJJ,tKJ)
var xOJ=_n('view')
_rz(z,xOJ,'class',27,oFJ,hEJ,gg)
var oPJ=_v()
_(xOJ,oPJ)
if(_oz(z,28,oFJ,hEJ,gg)){oPJ.wxVkey=1
}
var fQJ=_v()
_(xOJ,fQJ)
if(_oz(z,29,oFJ,hEJ,gg)){fQJ.wxVkey=1
}
var cRJ=_v()
_(xOJ,cRJ)
if(_oz(z,30,oFJ,hEJ,gg)){cRJ.wxVkey=1
}
oPJ.wxXCkey=1
fQJ.wxXCkey=1
cRJ.wxXCkey=1
_(aJJ,xOJ)
_(lIJ,aJJ)
_(cGJ,lIJ)
return cGJ
}
fCJ.wxXCkey=2
_2z(z,15,cDJ,e8I,t7I,gg,fCJ,'item','index','index')
var hSJ=_mz(z,'tui-loadmore',['bind:__l',31,'visible',1,'vueId',2],[],e8I,t7I,gg)
_(xAJ,hSJ)
var oTJ=_mz(z,'tui-nomore',['bind:__l',34,'visible',1,'vueId',2],[],e8I,t7I,gg)
_(xAJ,oTJ)
var oBJ=_v()
_(xAJ,oBJ)
if(_oz(z,37,e8I,t7I,gg)){oBJ.wxVkey=1
var cUJ=_mz(z,'tui-tips',['bind:__l',38,'fixed',1,'imgUrl',2,'vueId',3,'vueSlots',4],[],e8I,t7I,gg)
_(oBJ,cUJ)
}
oBJ.wxXCkey=1
oBJ.wxXCkey=3
_(b9I,xAJ)
return b9I
}
l5I.wxXCkey=4
_2z(z,8,a6I,e,s,gg,l5I,'item','index','index')
_(r,o4I)
return r
}
e_[x[33]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
var lWJ=_n('view')
_rz(z,lWJ,'style',0,e,s,gg)
var aXJ=_v()
_(lWJ,aXJ)
if(_oz(z,1,e,s,gg)){aXJ.wxVkey=1
}
var tYJ=_v()
_(lWJ,tYJ)
if(_oz(z,2,e,s,gg)){tYJ.wxVkey=1
}
var eZJ=_v()
_(lWJ,eZJ)
if(_oz(z,3,e,s,gg)){eZJ.wxVkey=1
}
aXJ.wxXCkey=1
tYJ.wxXCkey=1
eZJ.wxXCkey=1
_(r,lWJ)
return r
}
e_[x[34]]={f:m34,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx_36()
var o2J=_n('view')
var x3J=_mz(z,'swiper',['bindchange',0,'class',1,'current',1,'data-event-opts',2,'duration',3,'style',4],[],e,s,gg)
var o4J=_v()
_(x3J,o4J)
var f5J=function(h7J,c6J,o8J,gg){
var o0J=_mz(z,'scroll-view',['scrollY',-1,'class',10],[],h7J,c6J,gg)
var lAK=_v()
_(o0J,lAK)
var aBK=function(eDK,tCK,bEK,gg){
var xGK=_v()
_(bEK,xGK)
if(_oz(z,15,eDK,tCK,gg)){xGK.wxVkey=1
}
xGK.wxXCkey=1
return bEK
}
lAK.wxXCkey=2
_2z(z,13,aBK,h7J,c6J,gg,lAK,'item','index','index')
var oHK=_v()
_(o0J,oHK)
var fIK=function(hKK,cJK,oLK,gg){
var oNK=_v()
_(oLK,oNK)
if(_oz(z,20,hKK,cJK,gg)){oNK.wxVkey=1
}
oNK.wxXCkey=1
return oLK
}
oHK.wxXCkey=2
_2z(z,18,fIK,h7J,c6J,gg,oHK,'item','index','index')
_(o8J,o0J)
return o8J
}
o4J.wxXCkey=2
_2z(z,8,f5J,e,s,gg,o4J,'item','index','index')
_(o2J,x3J)
var lOK=_mz(z,'tui-datetime',['bind:__l',21,'bind:confirm',1,'cancelColor',2,'class',3,'color',4,'data-event-opts',5,'data-ref',6,'endYear',7,'setDateTime',8,'startYear',9,'type',10,'vueId',11],[],e,s,gg)
_(o2J,lOK)
_(r,o2J)
return r
}
e_[x[35]]={f:m35,j:[],i:[],ti:[],ic:[]}
d_[x[36]]={}
var m36=function(e,s,r,gg){
var z=gz$gwx_37()
var tQK=_n('view')
var bSK=_v()
_(tQK,bSK)
var oTK=function(oVK,xUK,fWK,gg){
var hYK=_mz(z,'view',['class',4,'style',1],[],oVK,xUK,gg)
var c1K=_mz(z,'view',['class',6,'style',1],[],oVK,xUK,gg)
var o2K=_v()
_(c1K,o2K)
if(_oz(z,8,oVK,xUK,gg)){o2K.wxVkey=1
}
var l3K=_v()
_(c1K,l3K)
if(_oz(z,9,oVK,xUK,gg)){l3K.wxVkey=1
}
var a4K=_v()
_(c1K,a4K)
if(_oz(z,10,oVK,xUK,gg)){a4K.wxVkey=1
}
var t5K=_v()
_(c1K,t5K)
if(_oz(z,11,oVK,xUK,gg)){t5K.wxVkey=1
}
var e6K=_v()
_(c1K,e6K)
if(_oz(z,12,oVK,xUK,gg)){e6K.wxVkey=1
}
var b7K=_v()
_(c1K,b7K)
if(_oz(z,13,oVK,xUK,gg)){b7K.wxVkey=1
}
var o8K=_v()
_(c1K,o8K)
if(_oz(z,14,oVK,xUK,gg)){o8K.wxVkey=1
}
var x9K=_v()
_(c1K,x9K)
if(_oz(z,15,oVK,xUK,gg)){x9K.wxVkey=1
}
var o0K=_v()
_(c1K,o0K)
if(_oz(z,16,oVK,xUK,gg)){o0K.wxVkey=1
}
var fAL=_v()
_(c1K,fAL)
if(_oz(z,17,oVK,xUK,gg)){fAL.wxVkey=1
}
o2K.wxXCkey=1
l3K.wxXCkey=1
a4K.wxXCkey=1
t5K.wxXCkey=1
e6K.wxXCkey=1
b7K.wxXCkey=1
o8K.wxXCkey=1
x9K.wxXCkey=1
o0K.wxXCkey=1
fAL.wxXCkey=1
_(hYK,c1K)
var oZK=_v()
_(hYK,oZK)
if(_oz(z,18,oVK,xUK,gg)){oZK.wxVkey=1
}
var cBL=_mz(z,'view',['class',19,'style',1],[],oVK,xUK,gg)
var hCL=_n('view')
_rz(z,hCL,'class',21,oVK,xUK,gg)
var oDL=_v()
_(hCL,oDL)
if(_oz(z,22,oVK,xUK,gg)){oDL.wxVkey=1
}
else{oDL.wxVkey=2
var cEL=_v()
_(oDL,cEL)
if(_oz(z,23,oVK,xUK,gg)){cEL.wxVkey=1
}
else{cEL.wxVkey=2
var oFL=_v()
_(cEL,oFL)
if(_oz(z,24,oVK,xUK,gg)){oFL.wxVkey=1
}
else{oFL.wxVkey=2
var lGL=_v()
_(oFL,lGL)
if(_oz(z,25,oVK,xUK,gg)){lGL.wxVkey=1
}
lGL.wxXCkey=1
}
oFL.wxXCkey=1
}
cEL.wxXCkey=1
}
oDL.wxXCkey=1
_(cBL,hCL)
var aHL=_n('view')
_rz(z,aHL,'class',26,oVK,xUK,gg)
var tIL=_v()
_(aHL,tIL)
if(_oz(z,27,oVK,xUK,gg)){tIL.wxVkey=1
}
var eJL=_v()
_(aHL,eJL)
if(_oz(z,28,oVK,xUK,gg)){eJL.wxVkey=1
}
var bKL=_v()
_(aHL,bKL)
if(_oz(z,29,oVK,xUK,gg)){bKL.wxVkey=1
}
tIL.wxXCkey=1
eJL.wxXCkey=1
bKL.wxXCkey=1
_(cBL,aHL)
_(hYK,cBL)
oZK.wxXCkey=1
_(fWK,hYK)
return fWK
}
bSK.wxXCkey=2
_2z(z,2,oTK,e,s,gg,bSK,'item','index','index')
var eRK=_v()
_(tQK,eRK)
if(_oz(z,30,e,s,gg)){eRK.wxVkey=1
}
eRK.wxXCkey=1
_(r,tQK)
return r
}
e_[x[36]]={f:m36,j:[],i:[],ti:[],ic:[]}
d_[x[37]]={}
var m37=function(e,s,r,gg){
var z=gz$gwx_38()
return r
}
e_[x[37]]={f:m37,j:[],i:[],ti:[],ic:[]}
d_[x[38]]={}
var m38=function(e,s,r,gg){
var z=gz$gwx_39()
var oNL=_v()
_(r,oNL)
var fOL=function(hQL,cPL,oRL,gg){
var oTL=_mz(z,'tui-sticky',['bind:__l',4,'scrollTop',1,'stickyHeight',2,'vueId',3,'vueSlots',4],[],hQL,cPL,gg)
_(oRL,oTL)
return oRL
}
oNL.wxXCkey=4
_2z(z,2,fOL,e,s,gg,oNL,'item','index','index')
return r
}
e_[x[38]]={f:m38,j:[],i:[],ti:[],ic:[]}
d_[x[39]]={}
var m39=function(e,s,r,gg){
var z=gz$gwx_40()
return r
}
e_[x[39]]={f:m39,j:[],i:[],ti:[],ic:[]}
d_[x[40]]={}
var m40=function(e,s,r,gg){
var z=gz$gwx_41()
var tWL=_n('view')
var eXL=_mz(z,'mpvue-city-picker',['bind:__l',0,'bind:onCancel',1,'bind:onConfirm',1,'class',2,'data-event-opts',3,'data-ref',4,'pickerValueDefault',5,'themeColor',6,'vueId',7],[],e,s,gg)
_(tWL,eXL)
var bYL=_mz(z,'cu-custom',['bgColor',9,'bind:__l',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(tWL,bYL)
var oZL=_n('view')
_rz(z,oZL,'class',13,e,s,gg)
var x1L=_v()
_(oZL,x1L)
if(_oz(z,14,e,s,gg)){x1L.wxVkey=1
var o2L=_v()
_(x1L,o2L)
var f3L=function(h5L,c4L,o6L,gg){
var o8L=_mz(z,'view',['bindtap',19,'class',1,'data-event-opts',2,'data-index',3,'data-name',4,'data-value',5],[],h5L,c4L,gg)
var l9L=_v()
_(o8L,l9L)
if(_oz(z,25,h5L,c4L,gg)){l9L.wxVkey=1
}
l9L.wxXCkey=1
_(o6L,o8L)
return o6L
}
o2L.wxXCkey=2
_2z(z,17,f3L,e,s,gg,o2L,'item','index','index')
}
var a0L=_v()
_(oZL,a0L)
var tAM=function(bCM,eBM,oDM,gg){
var oFM=_mz(z,'view',['bindtap',30,'class',1,'data-event-opts',2,'data-index',3,'data-name',4,'data-value',5],[],bCM,eBM,gg)
var fGM=_v()
_(oFM,fGM)
if(_oz(z,36,bCM,eBM,gg)){fGM.wxVkey=1
}
fGM.wxXCkey=1
_(oDM,oFM)
return oDM
}
a0L.wxXCkey=2
_2z(z,28,tAM,e,s,gg,a0L,'item','index','index')
var cHM=_v()
_(oZL,cHM)
var hIM=function(cKM,oJM,oLM,gg){
var aNM=_mz(z,'view',['bindtap',41,'class',1,'data-event-opts',2,'data-index',3,'data-name',4,'data-value',5],[],cKM,oJM,gg)
var tOM=_v()
_(aNM,tOM)
if(_oz(z,47,cKM,oJM,gg)){tOM.wxVkey=1
}
tOM.wxXCkey=1
_(oLM,aNM)
return oLM
}
cHM.wxXCkey=2
_2z(z,39,hIM,e,s,gg,cHM,'item','index','index')
x1L.wxXCkey=1
_(tWL,oZL)
var ePM=_v()
_(tWL,ePM)
var bQM=function(xSM,oRM,oTM,gg){
var cVM=_v()
_(oTM,cVM)
if(_oz(z,52,xSM,oRM,gg)){cVM.wxVkey=1
}
cVM.wxXCkey=1
return oTM
}
ePM.wxXCkey=2
_2z(z,50,bQM,e,s,gg,ePM,'item','index','index')
_(r,tWL)
return r
}
e_[x[40]]={f:m40,j:[],i:[],ti:[],ic:[]}
d_[x[41]]={}
var m41=function(e,s,r,gg){
var z=gz$gwx_42()
var oXM=_n('view')
var cYM=_v()
_(oXM,cYM)
if(_oz(z,0,e,s,gg)){cYM.wxVkey=1
}
var oZM=_mz(z,'swiper',['bindchange',1,'class',1,'current',2,'data-event-opts',3,'duration',4,'style',5],[],e,s,gg)
var l1M=_v()
_(oZM,l1M)
var a2M=function(e4M,t3M,b5M,gg){
var x7M=_mz(z,'scroll-view',['scrollY',-1,'class',11],[],e4M,t3M,gg)
var o8M=_v()
_(x7M,o8M)
if(_oz(z,12,e4M,t3M,gg)){o8M.wxVkey=1
var c0M=_n('view')
_rz(z,c0M,'class',13,e4M,t3M,gg)
var hAN=_v()
_(c0M,hAN)
if(_oz(z,14,e4M,t3M,gg)){hAN.wxVkey=1
var oBN=_v()
_(hAN,oBN)
var cCN=function(lEN,oDN,aFN,gg){
var eHN=_mz(z,'view',['bindtap',19,'class',1,'data-event-opts',2,'style',3],[],lEN,oDN,gg)
var bIN=_v()
_(eHN,bIN)
if(_oz(z,23,lEN,oDN,gg)){bIN.wxVkey=1
}
bIN.wxXCkey=1
_(aFN,eHN)
return aFN
}
oBN.wxXCkey=2
_2z(z,17,cCN,e4M,t3M,gg,oBN,'item','index','index')
}
else{hAN.wxVkey=2
}
hAN.wxXCkey=1
_(o8M,c0M)
}
var f9M=_v()
_(x7M,f9M)
if(_oz(z,24,e4M,t3M,gg)){f9M.wxVkey=1
var oJN=_n('view')
_rz(z,oJN,'class',25,e4M,t3M,gg)
var xKN=_v()
_(oJN,xKN)
if(_oz(z,26,e4M,t3M,gg)){xKN.wxVkey=1
var oLN=_v()
_(xKN,oLN)
var fMN=function(hON,cNN,oPN,gg){
var oRN=_mz(z,'view',['bindtap',31,'class',1,'data-event-opts',2,'style',3],[],hON,cNN,gg)
var lSN=_v()
_(oRN,lSN)
if(_oz(z,35,hON,cNN,gg)){lSN.wxVkey=1
}
lSN.wxXCkey=1
_(oPN,oRN)
return oPN
}
oLN.wxXCkey=2
_2z(z,29,fMN,e4M,t3M,gg,oLN,'item','index','index')
}
else{xKN.wxVkey=2
}
xKN.wxXCkey=1
_(f9M,oJN)
}
o8M.wxXCkey=1
f9M.wxXCkey=1
_(b5M,x7M)
return b5M
}
l1M.wxXCkey=2
_2z(z,9,a2M,e,s,gg,l1M,'item','index','index')
_(oXM,oZM)
cYM.wxXCkey=1
_(r,oXM)
return r
}
e_[x[41]]={f:m41,j:[],i:[],ti:[],ic:[]}
d_[x[42]]={}
var m42=function(e,s,r,gg){
var z=gz$gwx_43()
return r
}
e_[x[42]]={f:m42,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/home/home","pages/mine/points","pages/index/dialog","pages/mine/order_detail","pages/mine/personal","pages/mine/wallet_details","pages/mine/wallet","pages/mine/mywallet","pages/mine/myinfo","pages/mine/mycar","pages/mine/carmanager","pages/mine/orderlist","pages/mine/coupon","pages/mine/carbrand","pages/home/businesshome","pages/home/business","pages/home/paysuccess","pages/mine/publishbid","pages/mine/sjmb","pages/mine/h5","pages/home/quotedprice","pages/home/orderpage","pages/home/shopselect","pages/index/precisefabu","pages/index/fastfabu","pages/more/nearby_merchants","pages/market/home","pages/market/more","pages/mine/home","pages/more/home","pages/more/shop"],"window":{"navigationBarTitleText":"创世车宝","navigationStyle":"default","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#FFFFFF","scrollIndicator":"none"},"tabBar":{"selectedColor":"#161848","color":"#999999","list":[{"pagePath":"pages/home/home","iconPath":"static/tabbar/home.png","selectedIconPath":"static/tabbar/homes.png","text":"首页"},{"pagePath":"pages/market/home","iconPath":"static/tabbar/mark.png","selectedIconPath":"static/tabbar/marks.png","text":"市场"},{"pagePath":"pages/index/dialog","iconPath":"static/tabbar/fabu.png","selectedIconPath":"static/tabbar/fabu.png","text":"发布"},{"pagePath":"pages/more/home","iconPath":"static/tabbar/more.png","selectedIconPath":"static/tabbar/mores.png","text":"商家"},{"pagePath":"pages/mine/personal","iconPath":"static/tabbar/mine.png","selectedIconPath":"static/tabbar/mines.png","text":"我的"}]},"nvueCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":false,"autoclose":true},"appname":"创世车宝","compilerVersion":"2.3.6","usingComponents":{"home":"/pages/home/home","market":"/pages/market/home","more":"/pages/more/home","mine":"/pages/mine/home","cu-custom":"/colorui/components/cu-custom","avatar":"/components/yq-avatar/yq-avatar"}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['colorui/components/cu-custom.json']={"usingComponents":{},"component":true};
__wxAppCode__['colorui/components/cu-custom.wxml']=$gwx('./colorui/components/cu-custom.wxml');

__wxAppCode__['components/dateTime/dateTime.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/dateTime/dateTime.wxml']=$gwx('./components/dateTime/dateTime.wxml');

__wxAppCode__['components/icon/icon.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/icon/icon.wxml']=$gwx('./components/icon/icon.wxml');

__wxAppCode__['components/list-cell/list-cell.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/list-cell/list-cell.wxml']=$gwx('./components/list-cell/list-cell.wxml');

__wxAppCode__['components/loadmore/loadmore.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/loadmore/loadmore.wxml']=$gwx('./components/loadmore/loadmore.wxml');

__wxAppCode__['components/mpvue-citypicker/mpvueCityPicker.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/mpvue-citypicker/mpvueCityPicker.wxml']=$gwx('./components/mpvue-citypicker/mpvueCityPicker.wxml');

__wxAppCode__['components/mpvue-picker/mpvuePicker.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/mpvue-picker/mpvuePicker.wxml']=$gwx('./components/mpvue-picker/mpvuePicker.wxml');

__wxAppCode__['components/nomore/nomore.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/nomore/nomore.wxml']=$gwx('./components/nomore/nomore.wxml');

__wxAppCode__['components/sticky/sticky.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/sticky/sticky.wxml']=$gwx('./components/sticky/sticky.wxml');

__wxAppCode__['components/tips/tips.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/tips/tips.wxml']=$gwx('./components/tips/tips.wxml');

__wxAppCode__['components/top-dropdown/top-dropdown.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/top-dropdown/top-dropdown.wxml']=$gwx('./components/top-dropdown/top-dropdown.wxml');

__wxAppCode__['components/yq-avatar/yq-avatar.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/yq-avatar/yq-avatar.wxml']=$gwx('./components/yq-avatar/yq-avatar.wxml');

__wxAppCode__['pages/home/business.json']={"navigationBarTitleText":"商家中心","navigationBarTextStyle":"black","usingComponents":{}};
__wxAppCode__['pages/home/business.wxml']=$gwx('./pages/home/business.wxml');

__wxAppCode__['pages/home/businesshome.json']={"navigationBarTitleText":"商家主页","navigationBarTextStyle":"black","usingComponents":{}};
__wxAppCode__['pages/home/businesshome.wxml']=$gwx('./pages/home/businesshome.wxml');

__wxAppCode__['pages/home/home.json']={"navigationStyle":"custom","navigationBarTitleText":"首页","usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/home/home.wxml']=$gwx('./pages/home/home.wxml');

__wxAppCode__['pages/home/orderpage.json']={"navigationBarTitleText":"订单确认","navigationBarTextStyle":"black","usingComponents":{}};
__wxAppCode__['pages/home/orderpage.wxml']=$gwx('./pages/home/orderpage.wxml');

__wxAppCode__['pages/home/paysuccess.json']={"navigationBarTitleText":"支付结果","navigationBarTextStyle":"black","usingComponents":{}};
__wxAppCode__['pages/home/paysuccess.wxml']=$gwx('./pages/home/paysuccess.wxml');

__wxAppCode__['pages/home/quotedprice.json']={"navigationBarTitleText":"提交报价","navigationBarTextStyle":"black","usingComponents":{"avatar":"/components/yq-avatar/yq-avatar"}};
__wxAppCode__['pages/home/quotedprice.wxml']=$gwx('./pages/home/quotedprice.wxml');

__wxAppCode__['pages/home/shopselect.json']={"navigationBarTitleText":"挂单详情","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#FFFFFF","usingComponents":{}};
__wxAppCode__['pages/home/shopselect.wxml']=$gwx('./pages/home/shopselect.wxml');

__wxAppCode__['pages/index/dialog.json']={"navigationStyle":"custom","navigationBarTextStyle":"black","usingComponents":{}};
__wxAppCode__['pages/index/dialog.wxml']=$gwx('./pages/index/dialog.wxml');

__wxAppCode__['pages/index/fastfabu.json']={"navigationBarTitleText":"快速发布","navigationBarTextStyle":"black","usingComponents":{"avatar":"/components/yq-avatar/yq-avatar","tui-datetime":"/components/dateTime/dateTime"}};
__wxAppCode__['pages/index/fastfabu.wxml']=$gwx('./pages/index/fastfabu.wxml');

__wxAppCode__['pages/index/precisefabu.json']={"navigationBarTitleText":"精准发布","navigationBarTextStyle":"black","usingComponents":{"avatar":"/components/yq-avatar/yq-avatar","tui-datetime":"/components/dateTime/dateTime","mpvue-city-picker":"/components/mpvue-citypicker/mpvueCityPicker"}};
__wxAppCode__['pages/index/precisefabu.wxml']=$gwx('./pages/index/precisefabu.wxml');

__wxAppCode__['pages/market/home.json']={"navigationStyle":"custom","navigationBarTitleText":"市场","usingComponents":{"cu-custom":"/colorui/components/cu-custom","tui-top-dropdown":"/components/top-dropdown/top-dropdown"}};
__wxAppCode__['pages/market/home.wxml']=$gwx('./pages/market/home.wxml');

__wxAppCode__['pages/market/more.json']={"navigationBarBackgroundColor":"#FFFFFF","navigationBarTitleText":"挂单","navigationBarTextStyle":"black","enablePullDownRefresh":true,"navigationStyle":"custom","usingComponents":{"cu-custom":"/colorui/components/cu-custom","tui-top-dropdown":"/components/top-dropdown/top-dropdown"}};
__wxAppCode__['pages/market/more.wxml']=$gwx('./pages/market/more.wxml');

__wxAppCode__['pages/mine/carbrand.json']={"navigationBarTitleText":"品牌设置","navigationBarTextStyle":"black","usingComponents":{"tui-cell":"/components/list-cell/list-cell","tui-icon":"/components/icon/icon","tui-sticky":"/components/sticky/sticky"}};
__wxAppCode__['pages/mine/carbrand.wxml']=$gwx('./pages/mine/carbrand.wxml');

__wxAppCode__['pages/mine/carmanager.json']={"navigationBarTitleText":"车辆管理","navigationBarTextStyle":"black","usingComponents":{}};
__wxAppCode__['pages/mine/carmanager.wxml']=$gwx('./pages/mine/carmanager.wxml');

__wxAppCode__['pages/mine/coupon.json']={"navigationBarTitleText":"我的优惠券","navigationBarTextStyle":"black","disableScroll":true,"bounce":"none","usingComponents":{"tui-tips":"/components/tips/tips"}};
__wxAppCode__['pages/mine/coupon.wxml']=$gwx('./pages/mine/coupon.wxml');

__wxAppCode__['pages/mine/h5.json']={"navigationBarTitleText":"","navigationBarTextStyle":"black","usingComponents":{}};
__wxAppCode__['pages/mine/h5.wxml']=$gwx('./pages/mine/h5.wxml');

__wxAppCode__['pages/mine/home.json']={"navigationStyle":"custom","disableScroll":true,"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/mine/home.wxml']=$gwx('./pages/mine/home.wxml');

__wxAppCode__['pages/mine/mycar.json']={"navigationBarTitleText":"我的爱车","navigationBarTextStyle":"black","usingComponents":{"avatar":"/components/yq-avatar/yq-avatar","tui-datetime":"/components/dateTime/dateTime","mpvue-picker":"/components/mpvue-picker/mpvuePicker","mpvue-city-picker":"/components/mpvue-citypicker/mpvueCityPicker"}};
__wxAppCode__['pages/mine/mycar.wxml']=$gwx('./pages/mine/mycar.wxml');

__wxAppCode__['pages/mine/myinfo.json']={"navigationBarTitleText":"我的信息","navigationBarTextStyle":"black","usingComponents":{"avatar":"/components/yq-avatar/yq-avatar","mpvue-city-picker":"/components/mpvue-citypicker/mpvueCityPicker"}};
__wxAppCode__['pages/mine/myinfo.wxml']=$gwx('./pages/mine/myinfo.wxml');

__wxAppCode__['pages/mine/mywallet.json']={"navigationBarTitleText":"我的钱包","navigationBarTextStyle":"black","usingComponents":{"tui-datetime":"/components/dateTime/dateTime"}};
__wxAppCode__['pages/mine/mywallet.wxml']=$gwx('./pages/mine/mywallet.wxml');

__wxAppCode__['pages/mine/order_detail.json']={"navigationBarTitleText":"订单详情","navigationBarTextStyle":"black","usingComponents":{}};
__wxAppCode__['pages/mine/order_detail.wxml']=$gwx('./pages/mine/order_detail.wxml');

__wxAppCode__['pages/mine/orderlist.json']={"navigationBarTitleText":"订单管理","navigationBarTextStyle":"black","disableScroll":true,"bounce":"none","usingComponents":{"tui-tips":"/components/tips/tips","tui-loadmore":"/components/loadmore/loadmore","tui-nomore":"/components/nomore/nomore"}};
__wxAppCode__['pages/mine/orderlist.wxml']=$gwx('./pages/mine/orderlist.wxml');

__wxAppCode__['pages/mine/personal.json']={"navigationBarTitleText":"会员中心","navigationBarBackgroundColor":"#182E6C","navigationBarTextStyle":"white","usingComponents":{}};
__wxAppCode__['pages/mine/personal.wxml']=$gwx('./pages/mine/personal.wxml');

__wxAppCode__['pages/mine/points.json']={"navigationBarTitleText":"积分账单","navigationBarTextStyle":"black","usingComponents":{"tui-datetime":"/components/dateTime/dateTime"}};
__wxAppCode__['pages/mine/points.wxml']=$gwx('./pages/mine/points.wxml');

__wxAppCode__['pages/mine/publishbid.json']={"navigationBarTitleText":"我的发布","navigationBarTextStyle":"black","enablePullDownRefresh":true,"usingComponents":{}};
__wxAppCode__['pages/mine/publishbid.wxml']=$gwx('./pages/mine/publishbid.wxml');

__wxAppCode__['pages/mine/sjmb.json']={"navigationBarTitleText":"商家面板","navigationBarTextStyle":"black","usingComponents":{}};
__wxAppCode__['pages/mine/sjmb.wxml']=$gwx('./pages/mine/sjmb.wxml');

__wxAppCode__['pages/mine/wallet_details.json']={"navigationBarTitleText":"钱包明细","navigationBarTextStyle":"black","usingComponents":{}};
__wxAppCode__['pages/mine/wallet_details.wxml']=$gwx('./pages/mine/wallet_details.wxml');

__wxAppCode__['pages/mine/wallet.json']={"navigationBarTitleText":"钱包","navigationBarTextStyle":"black","usingComponents":{"tui-sticky":"/components/sticky/sticky"}};
__wxAppCode__['pages/mine/wallet.wxml']=$gwx('./pages/mine/wallet.wxml');

__wxAppCode__['pages/more/home.json']={"navigationBarBackgroundColor":"#FFFFFF","navigationStyle":"custom","navigationBarTitleText":"商家","usingComponents":{"cu-custom":"/colorui/components/cu-custom","tui-top-dropdown":"/components/top-dropdown/top-dropdown","mpvue-city-picker":"/components/mpvue-citypicker/mpvueCityPicker"}};
__wxAppCode__['pages/more/home.wxml']=$gwx('./pages/more/home.wxml');

__wxAppCode__['pages/more/nearby_merchants.json']={"navigationBarTitleText":"商家主页","navigationBarTextStyle":"black","usingComponents":{}};
__wxAppCode__['pages/more/nearby_merchants.wxml']=$gwx('./pages/more/nearby_merchants.wxml');

__wxAppCode__['pages/more/shop.json']={"navigationBarBackgroundColor":"#FFFFFF","navigationBarTitleText":"商城","navigationBarTextStyle":"black","usingComponents":{}};
__wxAppCode__['pages/more/shop.wxml']=$gwx('./pages/more/shop.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"014d":function(t,e,o){"use strict";var n=o("d976"),i=o.n(n);i.a},1350:function(t,e,o){"use strict";o.r(e);var n=o("17d1"),i=o.n(n);for(var s in n)"default"!==s&&function(t){o.d(e,t,function(){return n[t]})}(s);e["default"]=i.a},"17d1":function(t,e,o){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,s=a(o("a34a"));a(o("66fd"));function a(t){return t&&t.__esModule?t:{default:t}}function r(t,e,o,n,i,s,a){try{var r=t[s](a),c=r.value}catch(l){return void o(l)}r.done?e(c):Promise.resolve(c).then(n,i)}function c(t){return function(){var e=this,o=arguments;return new Promise(function(n,i){var s=t.apply(e,o);function a(t){r(s,n,i,a,c,"next",t)}function c(t){r(s,n,i,a,c,"throw",t)}a(void 0)})}}var l={name:"basics",data:function(){return{modalName:!1,myList:[],isLoad:!1,cardCur:0,swiperList:[],getTaskList:[],dotStyle:!1,towerStart:0,direction:"",form:{sort_1:0,sort_2:0,page:1,size:5},city:"定位中",latitude:"",longitude:"",seller:!1}},filters:{km:function(t){return null!=t?(Number(t)/1e3).toFixed(2)+"km":""}},methods:{getUserInfo:function(e){console.log(t(e," at pages\\home\\home.vue:141")),n.login({provider:"weixin",success:function(t){if(void 0==e.detail.iv)return n.showToast({icon:"none",mask:!0,title:"授权失败！"}),void(i.modalName=!0);var o={iv:e.detail.iv,code:t.code,encryptedData:e.detail.encryptedData};i.$api.postWithData(i.api.register,o,function(t){0==t.code?(i.modalName=!0,n.showToast({icon:"none",mask:!0,title:"注册失败"})):(i.modalName=!1,n.setStorageSync("unionid",t.data.member.unionid),n.setStorageSync("openid",t.data.member.openid),n.setStorageSync("seller_id",t.data.seller_manager.seller_id),n.setStorageSync("uid",t.data.member.uid),n.setStorageSync("nickname",t.data.member.nickname),n.setStorageSync("headimg",t.data.member.headimg),n.setStorageSync("isLogin",!0))})}})},sendRequest:function(){this.$http.get(this.api.getAreaData).then(function(t){n.showToast({title:"请求成功",icon:"success",mask:!0})}).catch(function(e){console.log(t("request fail",e," at pages\\home\\home.vue:180"))})},sendRequest1:function(){var t=c(s.default.mark(function t(){return s.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.post(this.api.getAreaData);case 2:t.sent,n.showToast({title:"请求成功",icon:"success",mask:!0});case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),cardSwiper:function(t){this.cardCur=t.detail.current},cutTab:function(){n.switchTab({url:"../market/home"})},more:function(){this.$api.post(this.api.getCarNew,function(t){-1==t?i.modalName=!0:n.navigateTo({url:"/pages/market/more"})})},navigateTo:function(t,e){this.$api.post(this.api.getCarNew,function(o){if(-1==o)i.modalName=!0;else{var s=n.getStorageSync("uid");i.$api.post(i.api.isSeller,function(o){2==o.code?i.seller=!0:i.seller=!1,e.uid==s||i.seller?n.navigateTo({url:t}):i.$api.msg("仅限发布者和商家可查看详情")})}})},getLocation:function(){this.isLoad=!0,console.log(t(this.long," at pages\\home\\home.vue:239")),console.log(t(this.lat," at pages\\home\\home.vue:240"));var e={sort_1:0,sort_2:0,page:1,size:5,longitude:this.long,latitude:this.lat};this.$api.postWithData(this.api.getTaskList,e,function(t){i.isLoad=!1,i.getTaskList=t.data;for(var e=0;e<i.getTaskList.length;e++)i.getTaskList[e].image=""==i.getTaskList[e].image?"../../static/logo.jpg":i.getTaskList[e].image.split(",")[0]}),0!=this.lat&&this.$api.get("https://api.map.baidu.com/reverse_geocoding/v3/?ak=Ulna6HAk7FsVuGeG4aOsV1wWZtxcosrC&output=json&coordtype=wgs84ll&location="+this.lat+","+this.long,function(t){i.city=t.result.addressComponent.city})}},onTabItemTap:function(e){console.log(t(e," at pages\\home\\home.vue:270"))},mounted:function(){console.log(t(this.$api.isLogin," at pages\\home\\home.vue:273")),i=this,this.$api.post(this.api.adlist,function(e){console.log(t(e," at pages\\home\\home.vue:277")),i.swiperList=e.data}),this.getLocation(),this.$eventBus.$on("initData",function(t){i.getLocation()}),this.$eventBus.$on("register",function(t){i.modalName=!0}),n.setNavigationBarColor({frontColor:"#000000",backgroundColor:"#ff0000"})},onLoad:function(){}};e.default=l}).call(this,o("0de9")["default"],o("6e42")["default"])},"1a7e":function(t,e,o){},"3bd3":function(t,e,o){"use strict";o.r(e);var n=o("90b7"),i=o("d04d");for(var s in i)"default"!==s&&function(t){o.d(e,t,function(){return i[t]})}(s);o("6771");var a=o("2877"),r=Object(a["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=r.exports},4930:function(t,e,o){"use strict";(function(t,o){var n;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"mine",data:function(){return{tuchaoAppid:"wx8abaf00ee8c3202e",extraData:{},modalName:null,avatarUrl:"",nickname:"",modalMPShow:0,StatusBar:this.StatusBar,CustomBar:this.CustomBar,changygn:[{cuIcon:"calendar",color:"olive",name:"我的挂单",url:"../mine/publishbid",sessionFrom:""},{cuIcon:"moneybag",color:"red",name:"我是商家",url:"../home/businesshome",sessionFrom:""},{cuIcon:"scan",color:"black",name:"扫码核销",url:"smhx",sessionFrom:""},{cuIcon:"service",color:"orange",name:"客服热线",url:"4000851667",sessionFrom:"phone"},{cuIcon:"message",color:"cyan",name:"在线客服",url:"1",sessionFrom:"message"},{cuIcon:"more",color:"red",name:"更多精彩",url:"2",sessionFrom:"more"}],sellerFuns:[],otherFuns:[],scanTaskResult:{vc_id:"",tp_ordersn:"",log_ordersn:"",tp_id:0,tp_title:"",tp_price:"",seller_id:0,seller_title:"",uid:0,nickname:"",number:"",vc_status:0,tp_status:0,log_status:0,vc_use_time:""}}},mounted:function(){n=this,t.setNavigationBarColor({frontColor:"#ffffff",backgroundColor:"#182E6C"}),this.avatarUrl=t.getStorageSync("headimg"),this.nickname=t.getStorageSync("nickname")},methods:{showModalMP:function(){1==n.modalMPShow?n.modalMPShow=0:n.modalMPShow=1,console.log(o(n.modalMPShow," at pages\\mine\\home.vue:216"))},getUserInfo:function(e){t.setStorageSync("avatarUrl",e.detail.userInfo.avatarUrl)},navigateTo:function(e){"4000851667"!=e?"smhx"!=e?"goMP"!=e?t.navigateTo({url:e}):n.showModalMP():t.scanCode({success:function(t){var e={vc_id:t.result};n.scanTask(e)},fail:function(t){}}):t.makePhoneCall({phoneNumber:e})},scanTask:function(t){n.$api.postWithData(n.api.scanTask,t,function(t){1==t.code?(n.scanTaskResult=t.data,n.modalName="Modal",n.$api.msg(t.msg)):n.$api.msg(t.msg)})}}};e.default=i}).call(this,o("6e42")["default"],o("0de9")["default"])},5005:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=(t._self._c,t.__map(t.getSellerList,function(e,o){var n=t._f("km")(null==e.distance?0:e.distance),i=t._f("views")(e.view),s=t._f("views")(e.commit_count);return{$orig:t.__get_orig(e),f0:n,f1:i,f2:s}}));t.$mp.data=Object.assign({},{$root:{l0:o}})},i=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return i})},"612e":function(t,e,o){"use strict";o.r(e);var n=o("d3f2"),i=o.n(n);for(var s in n)"default"!==s&&function(t){o.d(e,t,function(){return n[t]})}(s);e["default"]=i.a},6351:function(t,e,o){"use strict";o.r(e);var n=o("4930"),i=o.n(n);for(var s in n)"default"!==s&&function(t){o.d(e,t,function(){return n[t]})}(s);e["default"]=i.a},"64cf":function(t,e,o){},6771:function(t,e,o){"use strict";var n=o("7c7d"),i=o.n(n);i.a},"6edc":function(t,e,o){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=s(o("eeb8"));function s(t){return t&&t.__esModule?t:{default:t}}var a,r=function(){return Promise.all([o.e("common/vendor"),o.e("components/mpvue-citypicker/mpvueCityPicker")]).then(o.bind(null,"6699"))},c=function(){return o.e("components/top-dropdown/top-dropdown").then(o.bind(null,"7683"))},l={name:"components",components:{tuiTopDropdown:c,mpvueCityPicker:r},filters:{views:function(t){return Number(t)>999?"999+":t.toFixed(0)},km:function(t){return null!=t?(Number(t)/1e3).toFixed(2)+"km":""}},data:function(){return{CustomBar:this.CustomBar,loading:!0,areaList:{},swiperList:[],isLoad:!0,cardCur:0,tabIndex:1,selectedName:["区域","距离","服务类型"],selectH1:0,selectH2:0,selectH3:0,dropdownList1:[{value:1,name:"报价中",selected:!1},{value:2,name:"服务中",selected:!1},{value:3,name:"服务完成",selected:!1}],dropdownList2:[{value:1,name:"距离最近",selected:!1},{value:2,name:"距离最远",selected:!1}],gettypelist:[],getSellerList:[],district_code:"",form:{latitude:0,longitude:0,keywords:"",page:1,size:5,condition1:"",condition2:"1",condition3:[]},isfixed:!1,mulLinkageTwoPicker:i.default,cityPickerValueDefault:[0,0,1],themeColor:"#007AFF",addressResult:{label:"请选择",value:[0,0,0],cityCode:"110101"}}},methods:{showMulLinkageThreePicker:function(){this.$refs.mpvueCityPicker.show()},hideMulLinkageThreePicker:function(){},onCancel:function(e){this.hideDropdownList(),console.log(t(e," at pages\\more\\home.vue:197"))},onConfirm3:function(e){console.log(t(e," at pages\\more\\home.vue:200"));var o=e.label.split("-");this.form.condition1=o[0]+"/"+o[1]+"/"+o[2],console.log(t(this.form.condition1," at pages\\more\\home.vue:203")),this.hideDropdownList(),this.isOpenRefresh(!0)},searchBykeywords:function(t){this.form.keywords=t.detail.value,this.isOpenRefresh(!0)},checked:function(e,o){var n=e;console.log(t(e," at pages\\more\\home.vue:213"));for(var i=0;i<n.length;i++)n[i].selected=o==i},showDropdownList:function(){1==this.tabIndex&&(this.showMulLinkageThreePicker(),this.selectH1=400,this.selectH2=0,this.selectH3=0),2==this.tabIndex&&(this.hideMulLinkageThreePicker(),this.selectH1=0,this.selectH2=400,this.selectH3=0),3==this.tabIndex&&(this.hideMulLinkageThreePicker(),this.selectH1=0,this.selectH2=0,this.selectH3=300)},hideDropdownList:function(){1==this.tabIndex&&(this.hideMulLinkageThreePicker(),this.selectH1=0,this.selectH2=0,this.selectH3=0),2==this.tabIndex&&(this.hideMulLinkageThreePicker(),this.selectH1=0,this.selectH2=0,this.selectH3=0),3==this.tabIndex&&(this.hideMulLinkageThreePicker(),this.selectH1=0,this.selectH2=0,this.selectH3=0)},dropdownItem2:function(t){this.selectH1=0,this.isOpenRefresh(!0)},dropdownItem4:function(e){console.log(t(e.currentTarget.dataset," at pages\\more\\home.vue:267"));var o=e.currentTarget.dataset;this.selectedName[1]=o.name;for(var n=0;n<this.dropdownList2.length;n++)this.dropdownList2[n].selected=!1;this.dropdownList2[o.index].selected=!0,this.form.condition2=o.value,this.selectH2=0,this.isOpenRefresh(!0)},dropdownItem5:function(e){console.log(t(e.currentTarget.dataset," at pages\\more\\home.vue:279"));var o=e.currentTarget.dataset;this.gettypelist[o.index].selected=!this.gettypelist[o.index].selected},getCondition:function(){this.selectH3=0;for(var t=0;t<this.gettypelist.length;t++)this.gettypelist[t].selected&&this.form.condition3.push(this.gettypelist[t].id);this.isOpenRefresh(!0)},screen:function(e){var o=e.currentTarget.dataset.index;console.log(t(o," at pages\\more\\home.vue:295")),this.tabIndex=o,1==o&&(0==this.selectH1?this.showDropdownList():this.hideDropdownList()),2==o&&(0==this.selectH2?this.showDropdownList():this.hideDropdownList()),3==o&&(0==this.selectH3?this.showDropdownList():this.hideDropdownList())},isOpenRefresh:function(t){this.isLoad=!0,t&&(this.getSellerList=[],this.form.page=1);var e={keywords:this.form.keywords,latitude:this.form.latitude,longitude:this.form.longitude,condition1:this.form.condition1,condition2:this.form.condition2,condition3:this.form.condition3,page:this.form.page,size:this.form.size};this.$api.postWithData(this.api.getSellerList,e,function(t){t.data.length>0?a.isLoad=!0:a.isLoad=!1;for(var e=0;e<t.data.length;e++)a.getSellerList.push(t.data[e]);a.getSellerList.length<=4&&(a.isLoad=!1),a.form.condition3=[]})},openLocation:function(t){n.openLocation({latitude:Number(t.latitude),longitude:Number(t.longitude),name:t.title,address:t.address})},px:function(t){return n.upx2px(t)},getY:function(e){console.log(t(this.px(375)," at pages\\more\\home.vue:373")),e.detail.scrollTop>this.px(375)?this.isfixed=!0:this.isfixed=!1},ScrollB:function(){this.form.page++,this.isOpenRefresh(!1)},navigateTo:function(t){this.$api.post(this.api.getCarNew,function(e){-1==e?(a.$eventBus.$emit("register"),n.switchTab({url:"../home/home"})):n.navigateTo({url:t})})}},onReachBottom:function(){this.form.page++,this.isOpenRefresh(!1)},onPageScroll:function(t){t.scrollTop>this.px(375)?this.isfixed=!0:this.isfixed=!1},mounted:function(){a=this,this.dropdownList1[0].selected=!0,this.dropdownList2[0].selected=!0,this.$api.postWithData(this.api.adlist,{type:3},function(e){console.log(t(e," at pages\\more\\home.vue:416")),a.swiperList=e.data}),this.$api.post(this.api.gettypelist,function(t){a.gettypelist=t.data;for(var e=0;e<a.gettypelist.length;e++)a.$set(a.gettypelist[e],"selected",!1)}),a.isOpenRefresh(!0),0!=this.lat&&this.$api.get("https://api.map.baidu.com/reverse_geocoding/v3/?ak=Ulna6HAk7FsVuGeG4aOsV1wWZtxcosrC&output=json&coordtype=wgs84ll&location="+this.lat+","+this.long,function(t){var e=t.result.addressComponent.province,o=t.result.addressComponent.city,n=t.result.addressComponent.district;a.form.condition1=e+"/"+o+"/"+n,a.district_code=t.result.addressComponent.adcode}),n.setNavigationBarColor({frontColor:"#000000",backgroundColor:"#ff0000"})},onShow:function(){},onHide:function(){}};e.default=l}).call(this,o("0de9")["default"],o("6e42")["default"])},"70b2":function(t,e,o){"use strict";o.r(e);var n=o("6edc"),i=o.n(n);for(var s in n)"default"!==s&&function(t){o.d(e,t,function(){return n[t]})}(s);e["default"]=i.a},"7c7d":function(t,e,o){},8334:function(t,e,o){"use strict";(function(t,e,n){o("2899"),o("921b");var i=f(o("66fd")),s=f(o("eb6f")),a=o("0fdc"),r=f(o("83a8")),c=f(o("ec20")),l=f(o("3bd3")),u=f(o("8469")),d=f(o("d073"));function f(t){return t&&t.__esModule?t:{default:t}}function h(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},n=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),n.forEach(function(e){m(t,e,o[e])})}return t}function m(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var p=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1500,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"none";!1!==Boolean(e)&&t.showToast({title:e,duration:o,mask:n,icon:i})},g=!!t.getStorageSync("isLogin"),v=function(o,n,i){var s={},c={};t.login({provider:"weixin",fail:function(e){t.showToast({icon:"none",mask:!0,title:e.errMsg})},success:function(l){console.log(e(l," at main.js:165")),t.getUserInfo({provider:"weixin",success:function(t){console.log(e("-------获取微信用户所有-----"," at main.js:169")),console.log(e(JSON.stringify(t.userInfo)," at main.js:170"))}}),c={code:l.code},console.log(e("请求地址: "+a.test.config.baseUrl+r.default.login," at main.js:174")),a.test.post(r.default.login,c,s).then(function(r){return 1==r.data.code?(a.test.setConfig(function(t){return t.header=h({},t.header,{"cscb-login-token":r.data.data.login_token}),t}),t.setStorageSync("unionid",r.data.data.member.unionid),t.setStorageSync("openid",r.data.data.member.openid),t.setStorageSync("seller_id",r.data.data.seller_manager.seller_id),t.setStorageSync("uid",r.data.data.member.uid),t.setStorageSync("nickname",r.data.data.member.nickname),t.setStorageSync("headimg",r.data.data.member.headimg),void a.test.post(o,n,s).then(function(t){i(t.data)}).catch(function(e){t.showToast({icon:"none",mask:!1,title:"请求错误，请稍后重试"})})):-1!=r.data.code?0==r.data.code?(i(r.data.code),console.log(e(r.data," at main.js:213")),void t.showToast({icon:"none",mask:!1,title:"登陆失败"})):void 0:void i(r.data.code)}).catch(function(o){console.log(e(a.test.config.header," at main.js:220")),t.showToast({icon:"none",mask:!1,title:"请求错误，请稍后重试"})})}})},w=function(o,n){if(!1!==Boolean(o)){var i={},s={};console.log(e("请求地址: "+a.test.config.baseUrl+o," at main.js:235")),a.test.post(o,i,s).then(function(t){console.log(e(t," at main.js:239")),-1!=t.data.code?n(t.data):v(o,i,n)}).catch(function(o){console.log(e(o," at main.js:248")),t.showToast({icon:"none",mask:!1,title:"请求错误，请稍后重试"})})}else console.log(e("请求地址为空"," at main.js:230"))},k=function(o,n,i){if(!1!==Boolean(o)){var s={};null!=n&&void 0!=n&&""!=n||(n={}),console.log(e("请求地址: "+a.test.config.baseUrl+o," at main.js:263")),a.test.post(o,n,{params:s}).then(function(t){-1!=t.data.code?(console.log(e(t," at main.js:271")),i(t.data)):v(o,n,i)}).catch(function(o){console.log(e(o," at main.js:276")),t.showToast({icon:"none",mask:!1,title:"请求错误，请稍后重试"})})}else console.log(e("请求地址为空"," at main.js:256"))},b=function(o,n){!1!==Boolean(o)?(console.log(e("请求地址: "+a.test.config.baseUrl+o," at main.js:286")),a.test.get(o).then(function(t){console.log(e(t," at main.js:290")),n(t.data)}).catch(function(o){console.log(e(o," at main.js:295")),t.showToast({icon:"none",mask:!1,title:"请求错误，请稍后重试"})})):console.log(e("请求地址为空"," at main.js:283"))};i.default.component("home",c.default),i.default.component("market",l.default),i.default.component("more",u.default),i.default.component("mine",d.default);var L=function(){return o.e("colorui/components/cu-custom").then(o.bind(null,"f761"))};i.default.component("cu-custom",L);var y=function(){return o.e("components/yq-avatar/yq-avatar").then(o.bind(null,"5cc9"))};i.default.component("avatar",y),i.default.config.productionTip=!1,s.default.mpType="app",i.default.prototype.$api={isLogin:g,msg:p,test:a.test,post:w,get:b,login:v,postWithData:k},i.default.prototype.api=r.default,i.default.prototype.$eventBus=new i.default;var _=new i.default(h({},s.default));n(_).$mount()}).call(this,o("6e42")["default"],o("0de9")["default"],o("6e42")["createApp"])},8469:function(t,e,o){"use strict";o.r(e);var n=o("5005"),i=o("70b2");for(var s in i)"default"!==s&&function(t){o.d(e,t,function(){return i[t]})}(s);o("014d");var a=o("2877"),r=Object(a["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=r.exports},"8b51":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=(t._self._c,t.__map(t.getTaskList,function(e,o){var n=t._f("km")(null==e.distance?0:e.distance);return{$orig:t.__get_orig(e),f0:n}}));t.$mp.data=Object.assign({},{$root:{l0:o}})},i=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return i})},"90b7":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=(t._self._c,t.__map(t.getTaskList,function(e,o){var n=t._f("km")(null==e.distance?0:e.distance);return{$orig:t.__get_orig(e),f0:n}}));t.$mp.data=Object.assign({},{$root:{l0:o}})},i=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return i})},aaf2:function(t,e,o){"use strict";var n=o("1a7e"),i=o.n(n);i.a},b9c2:function(t,e,o){},c4a6:function(t,e,o){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,s=function(){return o.e("components/top-dropdown/top-dropdown").then(o.bind(null,"7683"))},a={name:"components",components:{tuiTopDropdown:s},filters:{km:function(t){return null!=t?(Number(t)/1e3).toFixed(2)+"km":""}},data:function(){return{seller:!1,isLoad:!0,cardCur:0,tabIndex:1,selectedName:["报价中","距离","服务类型"],selectH1:0,selectH2:0,selectH3:0,dropdownList1:[{value:1,name:"报价中",selected:!1},{value:2,name:"服务中",selected:!1},{value:3,name:"服务完成",selected:!1}],dropdownList2:[{value:0,name:"距离",selected:!1},{value:1,name:"距离最近",selected:!1},{value:2,name:"距离最远",selected:!1}],getTaskCategoryList:[],getTaskList:[],form:{latitude:0,longitude:0,keywords:"",sort_1:0,sort_2:0,sort_3:0,page:1,size:10}}},methods:{searchBykeywords:function(t){this.form.keywords=t.detail.value,this.isOpenRefresh(!0)},checked:function(e,o){var n=e;console.log(t(e," at pages\\market\\home.vue:186"));for(var i=0;i<n.length;i++)n[i].selected=o==i},px:function(t){return n.upx2px(t)+"px"},showDropdownList:function(){1==this.tabIndex&&(this.selectH1=400,this.selectH2=0,this.selectH3=0),2==this.tabIndex&&(this.selectH1=0,this.selectH2=400,this.selectH3=0),3==this.tabIndex&&(this.selectH1=0,this.selectH2=0,this.selectH3=300)},hideDropdownList:function(){1==this.tabIndex&&(this.selectH1=0,this.selectH2=0,this.selectH3=0),2==this.tabIndex&&(this.selectH1=0,this.selectH2=0,this.selectH3=0),3==this.tabIndex&&(this.selectH1=0,this.selectH2=0,this.selectH3=0)},dropdownItem2:function(t){var e=t.currentTarget.dataset;this.selectedName[0]=e.name;for(var o=0;o<this.dropdownList1.length;o++)this.dropdownList1[o].selected=!1;this.dropdownList1[e.index].selected=!0,this.form.sort_1=e.value,this.selectH1=0,this.isOpenRefresh(!0)},dropdownItem4:function(t){var e=t.currentTarget.dataset;this.selectedName[1]=e.name;for(var o=0;o<this.dropdownList2.length;o++)this.dropdownList2[o].selected=!1;this.dropdownList2[e.index].selected=!0,this.form.sort_2=e.value,this.selectH2=0,this.isOpenRefresh(!0)},dropdownItem5:function(t){var e=t.currentTarget.dataset;this.selectedName[2]=e.name;for(var o=0;o<this.getTaskCategoryList.length;o++)this.getTaskCategoryList[o].selected=!1;this.getTaskCategoryList[e.index].selected=!0,this.form.sort_3=e.value,this.selectH3=0,this.isOpenRefresh(!0)},screen:function(t){var e=t.currentTarget.dataset.index;this.tabIndex=e,1==e&&(0==this.selectH1?this.showDropdownList():this.hideDropdownList()),2==e&&(0==this.selectH2?this.showDropdownList():this.hideDropdownList()),3==e&&(0==this.selectH3?this.showDropdownList():this.hideDropdownList())},isOpenRefresh:function(t){this.isLoad=!0,t&&(this.getTaskList=[],this.form.page=1);var e={keywords:this.form.keywords,latitude:this.form.latitude,longitude:this.form.longitude,sort_1:this.form.sort_1,sort_2:this.form.sort_2,sort_3:this.form.sort_3,page:this.form.page,size:this.form.size};this.$api.postWithData(this.api.getTaskList,e,function(t){t.data.length>0?i.isLoad=!0:i.isLoad=!1;for(var e=0;e<t.data.length;e++)i.getTaskList.push(t.data[e]);for(var o=0;o<i.getTaskList.length;o++)i.getTaskList[o].image=""==i.getTaskList[o].image?"../../static/logo.jpg":i.getTaskList[o].image.split(",")[0];i.getTaskList.length<=5&&(i.isLoad=!1)})},ScrollB:function(){this.form.page++,this.isOpenRefresh(!1)},navigateTo:function(e,o){this.$api.post(this.api.getCarNew,function(s){if(-1==s)i.$eventBus.$emit("register"),n.switchTab({url:"../home/home"});else{var a=n.getStorageSync("uid");i.$api.post(i.api.isSeller,function(s){2==s.code?i.seller=!0:i.seller=!1,o.uid==a||i.seller?(console.log(t(o.uid," at pages\\market\\home.vue:357")),n.navigateTo({url:e})):i.$api.msg("仅限发布者和商家可查看详情")})}})}},onReachBottom:function(){this.form.page++,this.isOpenRefresh(!1)},mounted:function(){i=this,this.dropdownList1[0].selected=!0,this.dropdownList2[0].selected=!0,this.$api.post(this.api.getTaskCategoryList,function(t){i.getTaskCategoryList=t.data;for(var e=0;e<i.getTaskCategoryList.length;e++)i.$set(i.getTaskCategoryList[e],"selected",!1)}),this.form.longitude=this.long,this.form.latitude=this.lat,this.isOpenRefresh(!0),n.setNavigationBarColor({frontColor:"#000000",backgroundColor:"#ff0000"})}};e.default=a}).call(this,o("0de9")["default"],o("6e42")["default"])},c64a:function(t,e,o){"use strict";var n=o("b9c2"),i=o.n(n);i.a},d04d:function(t,e,o){"use strict";o.r(e);var n=o("c4a6"),i=o.n(n);for(var s in n)"default"!==s&&function(t){o.d(e,t,function(){return n[t]})}(s);e["default"]=i.a},d073:function(t,e,o){"use strict";o.r(e);var n=o("df85"),i=o("6351");for(var s in i)"default"!==s&&function(t){o.d(e,t,function(){return i[t]})}(s);o("c64a");var a=o("2877"),r=Object(a["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=r.exports},d3f2:function(t,e,o){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=s(o("66fd"));function s(t){return t&&t.__esModule?t:{default:t}}var a={onLaunch:function(){i.default.prototype.lat=0,i.default.prototype.long=0,t.getSystemInfo({success:function(t){i.default.prototype.StatusBar=t.statusBarHeight,"android"==t.platform?i.default.prototype.CustomBar=t.statusBarHeight+50:i.default.prototype.CustomBar=t.statusBarHeight+45}}),setInterval(function(){t.getLocation({geocode:!0,type:"wgs84",altitude:!0,success:function(t){i.default.prototype.lat=t.latitude,i.default.prototype.long=t.longitude}})},6e4)},onShow:function(){var e=this;t.getLocation({geocode:!0,type:"wgs84",altitude:!0,success:function(t){i.default.prototype.lat=t.latitude,i.default.prototype.long=t.longitude,e.$eventBus.$emit("initData")}}),console.log(n("App Show"," at App.vue:49"))},onHide:function(){console.log(n("App Hide"," at App.vue:52"))}};e.default=a}).call(this,o("6e42")["default"],o("0de9")["default"])},d976:function(t,e,o){},df85:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.modalName=null},t.e1=function(e){t.modalName=null})},i=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return i})},eb6f:function(t,e,o){"use strict";o.r(e);var n=o("612e");for(var i in n)"default"!==i&&function(t){o.d(e,t,function(){return n[t]})}(i);o("aaf2");var s,a,r=o("2877"),c=Object(r["a"])(n["default"],s,a,!1,null,null,null);e["default"]=c.exports},ec20:function(t,e,o){"use strict";o.r(e);var n=o("8b51"),i=o("1350");for(var s in i)"default"!==s&&function(t){o.d(e,t,function(){return i[t]})}(s);o("fe9e");var a=o("2877"),r=Object(a["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=r.exports},fe9e:function(t,e,o){"use strict";var n=o("64cf"),i=o.n(n);i.a}},[["8334","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function t(t) {
    for (var n, r, p = t[0], s = t[1], a = t[2], m = 0, u = []; m < p.length; m++) {
      r = p[m], c[r] && u.push(c[r][0]), c[r] = 0;
    }

    for (n in s) {
      Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
    }

    l && l(t);

    while (u.length) {
      u.shift()();
    }

    return i.push.apply(i, a || []), o();
  }

  function o() {
    for (var e, t = 0; t < i.length; t++) {
      for (var o = i[t], n = !0, r = 1; r < o.length; r++) {
        var p = o[r];
        0 !== c[p] && (n = !1);
      }

      n && (i.splice(t--, 1), e = s(s.s = o[0]));
    }

    return e;
  }

  var n = {},
      r = {
    "common/runtime": 0
  },
      c = {
    "common/runtime": 0
  },
      i = [];

  function p(e) {
    return s.p + "" + e + ".js";
  }

  function s(t) {
    if (n[t]) return n[t].exports;
    var o = n[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(o.exports, o, o.exports, s), o.l = !0, o.exports;
  }

  s.e = function (e) {
    var t = [],
        o = {
      "colorui/components/cu-custom": 1,
      "components/mpvue-citypicker/mpvueCityPicker": 1,
      "components/top-dropdown/top-dropdown": 1,
      "components/yq-avatar/yq-avatar": 1,
      "components/dateTime/dateTime": 1,
      "components/sticky/sticky": 1,
      "components/mpvue-picker/mpvuePicker": 1,
      "components/loadmore/loadmore": 1,
      "components/nomore/nomore": 1,
      "components/tips/tips": 1,
      "components/icon/icon": 1,
      "components/list-cell/list-cell": 1
    };
    r[e] ? t.push(r[e]) : 0 !== r[e] && o[e] && t.push(r[e] = new Promise(function (t, o) {
      for (var n = ({
        "colorui/components/cu-custom": "colorui/components/cu-custom",
        "components/mpvue-citypicker/mpvueCityPicker": "components/mpvue-citypicker/mpvueCityPicker",
        "components/top-dropdown/top-dropdown": "components/top-dropdown/top-dropdown",
        "components/yq-avatar/yq-avatar": "components/yq-avatar/yq-avatar",
        "components/dateTime/dateTime": "components/dateTime/dateTime",
        "components/sticky/sticky": "components/sticky/sticky",
        "components/mpvue-picker/mpvuePicker": "components/mpvue-picker/mpvuePicker",
        "components/loadmore/loadmore": "components/loadmore/loadmore",
        "components/nomore/nomore": "components/nomore/nomore",
        "components/tips/tips": "components/tips/tips",
        "components/icon/icon": "components/icon/icon",
        "components/list-cell/list-cell": "components/list-cell/list-cell"
      }[e] || e) + ".wxss", c = s.p + n, i = document.getElementsByTagName("link"), p = 0; p < i.length; p++) {
        var a = i[p],
            m = a.getAttribute("data-href") || a.getAttribute("href");
        if ("stylesheet" === a.rel && (m === n || m === c)) return t();
      }

      var u = document.getElementsByTagName("style");

      for (p = 0; p < u.length; p++) {
        a = u[p], m = a.getAttribute("data-href");
        if (m === n || m === c) return t();
      }

      var l = document.createElement("link");
      l.rel = "stylesheet", l.type = "text/css", l.onload = t, l.onerror = function (t) {
        var n = t && t.target && t.target.src || c,
            i = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
        i.request = n, delete r[e], l.parentNode.removeChild(l), o(i);
      }, l.href = c;
      var d = document.getElementsByTagName("head")[0];
      d.appendChild(l);
    }).then(function () {
      r[e] = 0;
    }));
    var n = c[e];
    if (0 !== n) if (n) t.push(n[2]);else {
      var i = new Promise(function (t, o) {
        n = c[e] = [t, o];
      });
      t.push(n[2] = i);
      var a,
          m = document.createElement("script");
      m.charset = "utf-8", m.timeout = 120, s.nc && m.setAttribute("nonce", s.nc), m.src = p(e), a = function a(t) {
        m.onerror = m.onload = null, clearTimeout(u);
        var o = c[e];

        if (0 !== o) {
          if (o) {
            var n = t && ("load" === t.type ? "missing" : t.type),
                r = t && t.target && t.target.src,
                i = new Error("Loading chunk " + e + " failed.\n(" + n + ": " + r + ")");
            i.type = n, i.request = r, o[1](i);
          }

          c[e] = void 0;
        }
      };
      var u = setTimeout(function () {
        a({
          type: "timeout",
          target: m
        });
      }, 12e4);
      m.onerror = m.onload = a, document.head.appendChild(m);
    }
    return Promise.all(t);
  }, s.m = e, s.c = n, s.d = function (e, t, o) {
    s.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: o
    });
  }, s.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, s.t = function (e, t) {
    if (1 & t && (e = s(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var o = Object.create(null);
    if (s.r(o), Object.defineProperty(o, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var n in e) {
      s.d(o, n, function (t) {
        return e[t];
      }.bind(null, n));
    }
    return o;
  }, s.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return s.d(t, "a", t), t;
  }, s.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, s.p = "/", s.oe = function (e) {
    throw console.error(e), e;
  };
  var a = global["webpackJsonp"] = global["webpackJsonp"] || [],
      m = a.push.bind(a);
  a.push = t, a = a.slice();

  for (var u = 0; u < a.length; u++) {
    t(a[u]);
  }

  var l = m;
  o();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0de9":function(e,l,a){"use strict";function t(e){var l=Object.prototype.toString.call(e);return l.substring(8,l.length-1)}function n(){for(var e=arguments.length,l=new Array(e),a=0;a<e;a++)l[a]=arguments[a];var n=l.map(function(e){var l=Object.prototype.toString.call(e);if("[object object]"===l.toLowerCase())try{e="---BEGIN:JSON---"+JSON.stringify(e)+"---END:JSON---"}catch(n){e="[object object]"}else if(null===e)e="---NULL---";else if(void 0===e)e="---UNDEFINED---";else{var a=t(e).toUpperCase();e="NUMBER"===a||"BOOLEAN"===a?"---BEGIN:"+a+"---"+e+"---END:"+a+"---":String(e)}return e}),u="";if(n.length>1){var r=n.pop();u=n.join("---COMMA---"),0===r.indexOf(" at ")?u+=r:u+="---COMMA---"+r}else u=n[0];return u}Object.defineProperty(l,"__esModule",{value:!0}),l.default=n},"0fdc":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.test=l.http=void 0;var t=n(a("ef47"));function n(e){return e&&e.__esModule?e:{default:e}}function u(e){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{},t=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.forEach(function(l){r(e,l,a[l])})}return e}function r(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}var o=new t.default;l.test=o,o.setConfig(function(e){return e.baseUrl="https://cscbnew.kelinteng.com/api/",e.header=u({},e.header,r({"content-type":"application/json;charset=UTF-8"},"content-type","application/x-www-form-urlencoded")),e}),o.interceptor.request(function(e,l){return e.header=u({},e.header),e}),o.interceptor.response(function(e){return e},function(e){return e});var i=new t.default;l.http=i,i.setConfig(function(e){return e.baseUrl="http://www.bbb.cn",e}),i.validateStatus=function(e){return 200===e.statusCode},i.interceptor.request(function(e,l){return e.header=u({},e.header,{a:1}),e}),i.interceptor.response(function(e){return e},function(e){return e})},"142d":function(e,l,a){"use strict";e.exports={list:[{letter:"A",data:[{name:"阿拉斯加",mobile:"13588889999",keyword:"阿拉斯加ABA13588889999"},{name:"阿克苏",mobile:"0551-4386721",keyword:"阿克苏AKESU0551-4386721"},{name:"阿拉善",mobile:"4008009100",keyword:"阿拉善ALASHAN4008009100"},{name:"阿勒泰",mobile:"13588889999",keyword:"阿勒泰ALETAI13588889999"},{name:"阿里",mobile:"13588889999",keyword:"阿里ALI13588889999"},{name:"安阳",mobile:"13588889999",keyword:"13588889999安阳ANYANG"}]},{letter:"B",data:[{name:"白城",mobile:"该主子没有留电话~",keyword:"白城BAICHENG"},{name:"白山",mobile:"13588889999",keyword:"白山BAISHAN13588889999"},{name:"白银",mobile:"13588889999",keyword:"白银BAIYIN13588889999"},{name:"保定",mobile:"13588889999",keyword:"保定BAODING13588889999"}]},{letter:"C",data:[{name:"沧州",mobile:"13588889999",keyword:"沧州CANGZHOU13588889999"},{name:"长春",mobile:"13588889999",keyword:"长春CHANGCHUN13588889999"}]},{letter:"D",data:[{name:"大理",mobile:"13588889999",keyword:"大理DALI13588889999"},{name:"大连",mobile:"13588889999",keyword:"大连DALIAN13588889999"}]},{letter:"E",data:[{name:"鄂尔多斯",mobile:"13588889999",keyword:"鄂尔多斯EERDUOSI13588889999"},{name:"恩施",mobile:"13588889999",keyword:"恩施ENSHI13588889999"},{name:"鄂州",mobile:"13588889999",keyword:"鄂州EZHOU13588889999"}]},{letter:"F",data:[{name:"防城港",mobile:"该主子没有留电话~",keyword:"防城港FANGCHENGGANG"},{name:"抚顺",mobile:"13588889999",keyword:"抚顺FUSHUN13588889999"},{name:"阜新",mobile:"13588889999",keyword:"阜新FUXIN13588889999"},{name:"阜阳",mobile:"13588889999",keyword:"阜阳FUYANG13588889999"},{name:"抚州",mobile:"13588889999",keyword:"抚州FUZHOU13588889999"},{name:"福州",mobile:"13588889999",keyword:"福州FUZHOU13588889999"}]},{letter:"G",data:[{name:"甘南",mobile:"13588889999",keyword:"甘南GANNAN13588889999"},{name:"赣州",mobile:"13588889999",keyword:"赣州GANZHOU13588889999"},{name:"甘孜",mobile:"13588889999",keyword:"甘孜GANZI13588889999"}]},{letter:"H",data:[{name:"哈尔滨",mobile:"13588889999",keyword:"哈尔滨HAERBIN13588889999"},{name:"海北",mobile:"13588889999",keyword:"海北HAIBEI13588889999"},{name:"海东",mobile:"13588889999",keyword:"海东HAIDONG13588889999"},{name:"海口",mobile:"13588889999",keyword:"海口HAIKOU13588889999"}]},{letter:"I",data:[]},{letter:"J",data:[{name:"佳木斯",mobile:"13588889999",keyword:"佳木斯JIAMUSI13588889999"},{name:"吉安",mobile:"13588889999",keyword:"吉安JIAN13588889999"},{name:"江门",mobile:"13588889999",keyword:"江门JIANGMEN13588889999"}]},{letter:"K",data:[{name:"开封",mobile:"13588889999",keyword:"开封KAIFENG13588889999"},{name:"喀什",mobile:"13588889999",keyword:"喀什KASHI13588889999"},{name:"克拉玛依",mobile:"13588889999",keyword:"克拉玛依KELAMAYI13588889999"}]},{letter:"L",data:[{name:"来宾",mobile:"13588889999",keyword:"来宾LAIBIN13588889999"},{name:"兰州",mobile:"13588889999",keyword:"兰州LANZHOU13588889999"},{name:"拉萨",mobile:"13588889999",keyword:"拉萨LASA13588889999"},{name:"乐山",mobile:"13588889999",keyword:"乐山LESHAN13588889999"},{name:"凉山",mobile:"13588889999",keyword:"凉山LIANGSHAN13588889999"},{name:"连云港",mobile:"13588889999",keyword:"连云港LIANYUNGANG13588889999"},{name:"聊城",mobile:"18322223333",keyword:"聊城LIAOCHENG18322223333"},{name:"辽阳",mobile:"18322223333",keyword:"辽阳LIAOYANG18322223333"},{name:"辽源",mobile:"18322223333",keyword:"辽源LIAOYUAN18322223333"},{name:"丽江",mobile:"18322223333",keyword:"丽江LIJIANG18322223333"},{name:"临沧",mobile:"18322223333",keyword:"临沧LINCANG18322223333"},{name:"临汾",mobile:"18322223333",keyword:"临汾LINFEN18322223333"},{name:"临夏",mobile:"18322223333",keyword:"临夏LINXIA18322223333"},{name:"临沂",mobile:"18322223333",keyword:"临沂LINYI18322223333"},{name:"林芝",mobile:"18322223333",keyword:"林芝LINZHI18322223333"},{name:"丽水",mobile:"18322223333",keyword:"丽水LISHUI18322223333"}]},{letter:"M",data:[{name:"眉山",mobile:"15544448888",keyword:"眉山MEISHAN15544448888"},{name:"梅州",mobile:"15544448888",keyword:"梅州MEIZHOU15544448888"},{name:"绵阳",mobile:"15544448888",keyword:"绵阳MIANYANG15544448888"},{name:"牡丹江",mobile:"15544448888",keyword:"牡丹江MUDANJIANG15544448888"}]},{letter:"N",data:[{name:"南昌",mobile:"15544448888",keyword:"南昌NANCHANG15544448888"},{name:"南充",mobile:"15544448888",keyword:"南充NANCHONG15544448888"},{name:"南京",mobile:"15544448888",keyword:"南京NANJING15544448888"},{name:"南宁",mobile:"15544448888",keyword:"南宁NANNING15544448888"},{name:"南平",mobile:"15544448888",keyword:"南平NANPING15544448888"}]},{letter:"O",data:[{name:"欧阳",mobile:"15544448888",keyword:"欧阳ouyang15544448888"}]},{letter:"P",data:[{name:"盘锦",mobile:"15544448888",keyword:"盘锦PANJIN15544448888"},{name:"攀枝花",mobile:"15544448888",keyword:"攀枝花PANZHIHUA15544448888"},{name:"平顶山",mobile:"15544448888",keyword:"平顶山PINGDINGSHAN15544448888"},{name:"平凉",mobile:"15544448888",keyword:"平凉PINGLIANG15544448888"},{name:"萍乡",mobile:"15544448888",keyword:"萍乡PINGXIANG15544448888"},{name:"普洱",mobile:"15544448888",keyword:"普洱PUER15544448888"},{name:"莆田",mobile:"15544448888",keyword:"莆田PUTIAN15544448888"},{name:"濮阳",mobile:"15544448888",keyword:"濮阳PUYANG15544448888"}]},{letter:"Q",data:[{name:"黔东南",mobile:"15544448888",keyword:"黔东南QIANDONGNAN15544448888"},{name:"黔南",mobile:"15544448888",keyword:"黔南QIANNAN15544448888"},{name:"黔西南",mobile:"15544448888",keyword:"黔西南QIANXINAN15544448888"}]},{letter:"R",data:[{name:"日喀则",mobile:"15544448888",keyword:"日喀则RIKAZE15544448888"},{name:"日照",mobile:"15544448888",keyword:"日照RIZHAO15544448888"}]},{letter:"S",data:[{name:"三门峡",mobile:"15544448888",keyword:"三门峡SANMENXIA15544448888"},{name:"三明",mobile:"15544448888",keyword:"三明SANMING15544448888"},{name:"三沙",mobile:"15544448888",keyword:"三沙SANSHA15544448888"}]},{letter:"T",data:[{name:"塔城",mobile:"15544448888",keyword:"塔城TACHENG15544448888"},{name:"漯河",mobile:"15544448888",keyword:"漯河TAHE15544448888"},{name:"泰安",mobile:"15544448888",keyword:"泰安TAIAN15544448888"}]},{letter:"W",data:[{name:"潍坊",mobile:"15544448888",keyword:"潍坊WEIFANG15544448888"},{name:"威海",mobile:"15544448888",keyword:"威海WEIHAI15544448888"},{name:"渭南",mobile:"15544448888",keyword:"渭南WEINAN15544448888"},{name:"文山",mobile:"15544448888",keyword:"文山WENSHAN15544448888"}]},{letter:"X",data:[{name:"厦门",mobile:"15544448888",keyword:"厦门XIAMEN15544448888"},{name:"西安",mobile:"15544448888",keyword:"西安XIAN15544448888"},{name:"湘潭",mobile:"15544448888",keyword:"湘潭XIANGTAN15544448888"}]},{letter:"Y",data:[{name:"雅安",mobile:"15544448888",keyword:"雅安YAAN15544448888"},{name:"延安",mobile:"15544448888",keyword:"延安YANAN15544448888"},{name:"延边",mobile:"15544448888",keyword:"延边YANBIAN15544448888"},{name:"盐城",mobile:"15544448888",keyword:"盐城YANCHENG15544448888"}]},{letter:"Z",data:[{name:"枣庄",mobile:"15544448888",keyword:"枣庄ZAOZHUANG15544448888"},{name:"张家界",mobile:"15544448888",keyword:"张家界ZHANGJIAJIE15544448888"},{name:"张家口",mobile:"15544448888",keyword:"张家口ZHANGJIAKOU15544448888"}]},{letter:"well",data:[{name:"☆echo.",mobile:"16666666666",keyword:"echo16666666666"}]}]}},2387:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t={appid:"__UNI__1E9959A"};l.default=t},2877:function(e,l,a){"use strict";function t(e,l,a,t,n,u,r,o){var i,s="function"===typeof e?e.options:e;if(l&&(s.render=l,s.staticRenderFns=a,s._compiled=!0),t&&(s.functional=!0),u&&(s._scopeId="data-v-"+u),r?(i=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},s._ssrRegister=i):n&&(i=o?function(){n.call(this,this.$root.$options.shadowRoot)}:n),i)if(s.functional){s._injectStyles=i;var v=s.render;s.render=function(e,l){return i.call(l),v(e,l)}}else{var c=s.beforeCreate;s.beforeCreate=c?[].concat(c,i):[i]}return{exports:e,options:s}}a.d(l,"a",function(){return t})},2899:function(e,l,a){},"48ee":function(e,l,a){"use strict";function t(e,l){var a=new Date(e),t=a.getFullYear(),n=a.getMonth()+1,u=a.getDate(),r=function(){return a.getHours()<10?"0"+a.getHours():a.getHours()},o=function(){return a.getMinutes()<10?"0"+a.getMinutes():a.getMinutes()},i=function(){return a.getSeconds()<10?"0"+a.getSeconds():a.getSeconds()};return"YY-MM-DD hh-mm"==l?" "+t+"-"+n+"-"+u+" "+r()+":"+o():"YY-MM-DD"==l?" "+t+"-"+n+"-"+u:"YY-MM"==l?" "+t+"-"+n:"YY"==l?" "+t:"MM"==l?" "+n:"DD"==l?" "+u:"yesterday"==l?" "+u-1:"hh-mm-ss"==l?" "+r()+":"+o()+":"+i():"hh-mm"==l?" "+r()+":"+o():"mm-ss"==l?o()+":"+i():"mm"==l?o():"ss"==l?i():t+"-"+n+"-"+u+" "+r()+":"+o()+":"+i()}e.exports={formatDate:t}},"4f90":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=[[[{label:"东城区",value:"110101"},{label:"西城区",value:"110102"},{label:"朝阳区",value:"110105"},{label:"丰台区",value:"110106"},{label:"石景山区",value:"110107"},{label:"海淀区",value:"110108"},{label:"门头沟区",value:"110109"},{label:"房山区",value:"110111"},{label:"通州区",value:"110112"},{label:"顺义区",value:"110113"},{label:"昌平区",value:"110114"},{label:"大兴区",value:"110115"},{label:"怀柔区",value:"110116"},{label:"平谷区",value:"110117"},{label:"密云区",value:"110118"},{label:"延庆区",value:"110119"}]],[[{label:"和平区",value:"120101"},{label:"河东区",value:"120102"},{label:"河西区",value:"120103"},{label:"南开区",value:"120104"},{label:"河北区",value:"120105"},{label:"红桥区",value:"120106"},{label:"东丽区",value:"120110"},{label:"西青区",value:"120111"},{label:"津南区",value:"120112"},{label:"北辰区",value:"120113"},{label:"武清区",value:"120114"},{label:"宝坻区",value:"120115"},{label:"滨海新区",value:"120116"},{label:"宁河区",value:"120117"},{label:"静海区",value:"120118"},{label:"蓟州区",value:"120119"}]],[[{label:"长安区",value:"130102"},{label:"桥西区",value:"130104"},{label:"新华区",value:"130105"},{label:"井陉矿区",value:"130107"},{label:"裕华区",value:"130108"},{label:"藁城区",value:"130109"},{label:"鹿泉区",value:"130110"},{label:"栾城区",value:"130111"},{label:"井陉县",value:"130121"},{label:"正定县",value:"130123"},{label:"行唐县",value:"130125"},{label:"灵寿县",value:"130126"},{label:"高邑县",value:"130127"},{label:"深泽县",value:"130128"},{label:"赞皇县",value:"130129"},{label:"无极县",value:"130130"},{label:"平山县",value:"130131"},{label:"元氏县",value:"130132"},{label:"赵县",value:"130133"},{label:"石家庄高新技术产业开发区",value:"130171"},{label:"石家庄循环化工园区",value:"130172"},{label:"辛集市",value:"130181"},{label:"晋州市",value:"130183"},{label:"新乐市",value:"130184"}],[{label:"路南区",value:"130202"},{label:"路北区",value:"130203"},{label:"古冶区",value:"130204"},{label:"开平区",value:"130205"},{label:"丰南区",value:"130207"},{label:"丰润区",value:"130208"},{label:"曹妃甸区",value:"130209"},{label:"滦县",value:"130223"},{label:"滦南县",value:"130224"},{label:"乐亭县",value:"130225"},{label:"迁西县",value:"130227"},{label:"玉田县",value:"130229"},{label:"唐山市芦台经济技术开发区",value:"130271"},{label:"唐山市汉沽管理区",value:"130272"},{label:"唐山高新技术产业开发区",value:"130273"},{label:"河北唐山海港经济开发区",value:"130274"},{label:"遵化市",value:"130281"},{label:"迁安市",value:"130283"}],[{label:"海港区",value:"130302"},{label:"山海关区",value:"130303"},{label:"北戴河区",value:"130304"},{label:"抚宁区",value:"130306"},{label:"青龙满族自治县",value:"130321"},{label:"昌黎县",value:"130322"},{label:"卢龙县",value:"130324"},{label:"秦皇岛市经济技术开发区",value:"130371"},{label:"北戴河新区",value:"130372"}],[{label:"邯山区",value:"130402"},{label:"丛台区",value:"130403"},{label:"复兴区",value:"130404"},{label:"峰峰矿区",value:"130406"},{label:"肥乡区",value:"130407"},{label:"永年区",value:"130408"},{label:"临漳县",value:"130423"},{label:"成安县",value:"130424"},{label:"大名县",value:"130425"},{label:"涉县",value:"130426"},{label:"磁县",value:"130427"},{label:"邱县",value:"130430"},{label:"鸡泽县",value:"130431"},{label:"广平县",value:"130432"},{label:"馆陶县",value:"130433"},{label:"魏县",value:"130434"},{label:"曲周县",value:"130435"},{label:"邯郸经济技术开发区",value:"130471"},{label:"邯郸冀南新区",value:"130473"},{label:"武安市",value:"130481"}],[{label:"桥东区",value:"130502"},{label:"桥西区",value:"130503"},{label:"邢台县",value:"130521"},{label:"临城县",value:"130522"},{label:"内丘县",value:"130523"},{label:"柏乡县",value:"130524"},{label:"隆尧县",value:"130525"},{label:"任县",value:"130526"},{label:"南和县",value:"130527"},{label:"宁晋县",value:"130528"},{label:"巨鹿县",value:"130529"},{label:"新河县",value:"130530"},{label:"广宗县",value:"130531"},{label:"平乡县",value:"130532"},{label:"威县",value:"130533"},{label:"清河县",value:"130534"},{label:"临西县",value:"130535"},{label:"河北邢台经济开发区",value:"130571"},{label:"南宫市",value:"130581"},{label:"沙河市",value:"130582"}],[{label:"竞秀区",value:"130602"},{label:"莲池区",value:"130606"},{label:"满城区",value:"130607"},{label:"清苑区",value:"130608"},{label:"徐水区",value:"130609"},{label:"涞水县",value:"130623"},{label:"阜平县",value:"130624"},{label:"定兴县",value:"130626"},{label:"唐县",value:"130627"},{label:"高阳县",value:"130628"},{label:"容城县",value:"130629"},{label:"涞源县",value:"130630"},{label:"望都县",value:"130631"},{label:"安新县",value:"130632"},{label:"易县",value:"130633"},{label:"曲阳县",value:"130634"},{label:"蠡县",value:"130635"},{label:"顺平县",value:"130636"},{label:"博野县",value:"130637"},{label:"雄县",value:"130638"},{label:"保定高新技术产业开发区",value:"130671"},{label:"保定白沟新城",value:"130672"},{label:"涿州市",value:"130681"},{label:"定州市",value:"130682"},{label:"安国市",value:"130683"},{label:"高碑店市",value:"130684"}],[{label:"桥东区",value:"130702"},{label:"桥西区",value:"130703"},{label:"宣化区",value:"130705"},{label:"下花园区",value:"130706"},{label:"万全区",value:"130708"},{label:"崇礼区",value:"130709"},{label:"张北县",value:"130722"},{label:"康保县",value:"130723"},{label:"沽源县",value:"130724"},{label:"尚义县",value:"130725"},{label:"蔚县",value:"130726"},{label:"阳原县",value:"130727"},{label:"怀安县",value:"130728"},{label:"怀来县",value:"130730"},{label:"涿鹿县",value:"130731"},{label:"赤城县",value:"130732"},{label:"张家口市高新技术产业开发区",value:"130771"},{label:"张家口市察北管理区",value:"130772"},{label:"张家口市塞北管理区",value:"130773"}],[{label:"双桥区",value:"130802"},{label:"双滦区",value:"130803"},{label:"鹰手营子矿区",value:"130804"},{label:"承德县",value:"130821"},{label:"兴隆县",value:"130822"},{label:"滦平县",value:"130824"},{label:"隆化县",value:"130825"},{label:"丰宁满族自治县",value:"130826"},{label:"宽城满族自治县",value:"130827"},{label:"围场满族蒙古族自治县",value:"130828"},{label:"承德高新技术产业开发区",value:"130871"},{label:"平泉市",value:"130881"}],[{label:"新华区",value:"130902"},{label:"运河区",value:"130903"},{label:"沧县",value:"130921"},{label:"青县",value:"130922"},{label:"东光县",value:"130923"},{label:"海兴县",value:"130924"},{label:"盐山县",value:"130925"},{label:"肃宁县",value:"130926"},{label:"南皮县",value:"130927"},{label:"吴桥县",value:"130928"},{label:"献县",value:"130929"},{label:"孟村回族自治县",value:"130930"},{label:"河北沧州经济开发区",value:"130971"},{label:"沧州高新技术产业开发区",value:"130972"},{label:"沧州渤海新区",value:"130973"},{label:"泊头市",value:"130981"},{label:"任丘市",value:"130982"},{label:"黄骅市",value:"130983"},{label:"河间市",value:"130984"}],[{label:"安次区",value:"131002"},{label:"广阳区",value:"131003"},{label:"固安县",value:"131022"},{label:"永清县",value:"131023"},{label:"香河县",value:"131024"},{label:"大城县",value:"131025"},{label:"文安县",value:"131026"},{label:"大厂回族自治县",value:"131028"},{label:"廊坊经济技术开发区",value:"131071"},{label:"霸州市",value:"131081"},{label:"三河市",value:"131082"}],[{label:"桃城区",value:"131102"},{label:"冀州区",value:"131103"},{label:"枣强县",value:"131121"},{label:"武邑县",value:"131122"},{label:"武强县",value:"131123"},{label:"饶阳县",value:"131124"},{label:"安平县",value:"131125"},{label:"故城县",value:"131126"},{label:"景县",value:"131127"},{label:"阜城县",value:"131128"},{label:"河北衡水经济开发区",value:"131171"},{label:"衡水滨湖新区",value:"131172"},{label:"深州市",value:"131182"}]],[[{label:"小店区",value:"140105"},{label:"迎泽区",value:"140106"},{label:"杏花岭区",value:"140107"},{label:"尖草坪区",value:"140108"},{label:"万柏林区",value:"140109"},{label:"晋源区",value:"140110"},{label:"清徐县",value:"140121"},{label:"阳曲县",value:"140122"},{label:"娄烦县",value:"140123"},{label:"山西转型综合改革示范区",value:"140171"},{label:"古交市",value:"140181"}],[{label:"城区",value:"140202"},{label:"矿区",value:"140203"},{label:"南郊区",value:"140211"},{label:"新荣区",value:"140212"},{label:"阳高县",value:"140221"},{label:"天镇县",value:"140222"},{label:"广灵县",value:"140223"},{label:"灵丘县",value:"140224"},{label:"浑源县",value:"140225"},{label:"左云县",value:"140226"},{label:"大同县",value:"140227"},{label:"山西大同经济开发区",value:"140271"}],[{label:"城区",value:"140302"},{label:"矿区",value:"140303"},{label:"郊区",value:"140311"},{label:"平定县",value:"140321"},{label:"盂县",value:"140322"},{label:"山西阳泉经济开发区",value:"140371"}],[{label:"城区",value:"140402"},{label:"郊区",value:"140411"},{label:"长治县",value:"140421"},{label:"襄垣县",value:"140423"},{label:"屯留县",value:"140424"},{label:"平顺县",value:"140425"},{label:"黎城县",value:"140426"},{label:"壶关县",value:"140427"},{label:"长子县",value:"140428"},{label:"武乡县",value:"140429"},{label:"沁县",value:"140430"},{label:"沁源县",value:"140431"},{label:"山西长治高新技术产业园区",value:"140471"},{label:"潞城市",value:"140481"}],[{label:"城区",value:"140502"},{label:"沁水县",value:"140521"},{label:"阳城县",value:"140522"},{label:"陵川县",value:"140524"},{label:"泽州县",value:"140525"},{label:"高平市",value:"140581"}],[{label:"朔城区",value:"140602"},{label:"平鲁区",value:"140603"},{label:"山阴县",value:"140621"},{label:"应县",value:"140622"},{label:"右玉县",value:"140623"},{label:"怀仁县",value:"140624"},{label:"山西朔州经济开发区",value:"140671"}],[{label:"榆次区",value:"140702"},{label:"榆社县",value:"140721"},{label:"左权县",value:"140722"},{label:"和顺县",value:"140723"},{label:"昔阳县",value:"140724"},{label:"寿阳县",value:"140725"},{label:"太谷县",value:"140726"},{label:"祁县",value:"140727"},{label:"平遥县",value:"140728"},{label:"灵石县",value:"140729"},{label:"介休市",value:"140781"}],[{label:"盐湖区",value:"140802"},{label:"临猗县",value:"140821"},{label:"万荣县",value:"140822"},{label:"闻喜县",value:"140823"},{label:"稷山县",value:"140824"},{label:"新绛县",value:"140825"},{label:"绛县",value:"140826"},{label:"垣曲县",value:"140827"},{label:"夏县",value:"140828"},{label:"平陆县",value:"140829"},{label:"芮城县",value:"140830"},{label:"永济市",value:"140881"},{label:"河津市",value:"140882"}],[{label:"忻府区",value:"140902"},{label:"定襄县",value:"140921"},{label:"五台县",value:"140922"},{label:"代县",value:"140923"},{label:"繁峙县",value:"140924"},{label:"宁武县",value:"140925"},{label:"静乐县",value:"140926"},{label:"神池县",value:"140927"},{label:"五寨县",value:"140928"},{label:"岢岚县",value:"140929"},{label:"河曲县",value:"140930"},{label:"保德县",value:"140931"},{label:"偏关县",value:"140932"},{label:"五台山风景名胜区",value:"140971"},{label:"原平市",value:"140981"}],[{label:"尧都区",value:"141002"},{label:"曲沃县",value:"141021"},{label:"翼城县",value:"141022"},{label:"襄汾县",value:"141023"},{label:"洪洞县",value:"141024"},{label:"古县",value:"141025"},{label:"安泽县",value:"141026"},{label:"浮山县",value:"141027"},{label:"吉县",value:"141028"},{label:"乡宁县",value:"141029"},{label:"大宁县",value:"141030"},{label:"隰县",value:"141031"},{label:"永和县",value:"141032"},{label:"蒲县",value:"141033"},{label:"汾西县",value:"141034"},{label:"侯马市",value:"141081"},{label:"霍州市",value:"141082"}],[{label:"离石区",value:"141102"},{label:"文水县",value:"141121"},{label:"交城县",value:"141122"},{label:"兴县",value:"141123"},{label:"临县",value:"141124"},{label:"柳林县",value:"141125"},{label:"石楼县",value:"141126"},{label:"岚县",value:"141127"},{label:"方山县",value:"141128"},{label:"中阳县",value:"141129"},{label:"交口县",value:"141130"},{label:"孝义市",value:"141181"},{label:"汾阳市",value:"141182"}]],[[{label:"新城区",value:"150102"},{label:"回民区",value:"150103"},{label:"玉泉区",value:"150104"},{label:"赛罕区",value:"150105"},{label:"土默特左旗",value:"150121"},{label:"托克托县",value:"150122"},{label:"和林格尔县",value:"150123"},{label:"清水河县",value:"150124"},{label:"武川县",value:"150125"},{label:"呼和浩特金海工业园区",value:"150171"},{label:"呼和浩特经济技术开发区",value:"150172"}],[{label:"东河区",value:"150202"},{label:"昆都仑区",value:"150203"},{label:"青山区",value:"150204"},{label:"石拐区",value:"150205"},{label:"白云鄂博矿区",value:"150206"},{label:"九原区",value:"150207"},{label:"土默特右旗",value:"150221"},{label:"固阳县",value:"150222"},{label:"达尔罕茂明安联合旗",value:"150223"},{label:"包头稀土高新技术产业开发区",value:"150271"}],[{label:"海勃湾区",value:"150302"},{label:"海南区",value:"150303"},{label:"乌达区",value:"150304"}],[{label:"红山区",value:"150402"},{label:"元宝山区",value:"150403"},{label:"松山区",value:"150404"},{label:"阿鲁科尔沁旗",value:"150421"},{label:"巴林左旗",value:"150422"},{label:"巴林右旗",value:"150423"},{label:"林西县",value:"150424"},{label:"克什克腾旗",value:"150425"},{label:"翁牛特旗",value:"150426"},{label:"喀喇沁旗",value:"150428"},{label:"宁城县",value:"150429"},{label:"敖汉旗",value:"150430"}],[{label:"科尔沁区",value:"150502"},{label:"科尔沁左翼中旗",value:"150521"},{label:"科尔沁左翼后旗",value:"150522"},{label:"开鲁县",value:"150523"},{label:"库伦旗",value:"150524"},{label:"奈曼旗",value:"150525"},{label:"扎鲁特旗",value:"150526"},{label:"通辽经济技术开发区",value:"150571"},{label:"霍林郭勒市",value:"150581"}],[{label:"东胜区",value:"150602"},{label:"康巴什区",value:"150603"},{label:"达拉特旗",value:"150621"},{label:"准格尔旗",value:"150622"},{label:"鄂托克前旗",value:"150623"},{label:"鄂托克旗",value:"150624"},{label:"杭锦旗",value:"150625"},{label:"乌审旗",value:"150626"},{label:"伊金霍洛旗",value:"150627"}],[{label:"海拉尔区",value:"150702"},{label:"扎赉诺尔区",value:"150703"},{label:"阿荣旗",value:"150721"},{label:"莫力达瓦达斡尔族自治旗",value:"150722"},{label:"鄂伦春自治旗",value:"150723"},{label:"鄂温克族自治旗",value:"150724"},{label:"陈巴尔虎旗",value:"150725"},{label:"新巴尔虎左旗",value:"150726"},{label:"新巴尔虎右旗",value:"150727"},{label:"满洲里市",value:"150781"},{label:"牙克石市",value:"150782"},{label:"扎兰屯市",value:"150783"},{label:"额尔古纳市",value:"150784"},{label:"根河市",value:"150785"}],[{label:"临河区",value:"150802"},{label:"五原县",value:"150821"},{label:"磴口县",value:"150822"},{label:"乌拉特前旗",value:"150823"},{label:"乌拉特中旗",value:"150824"},{label:"乌拉特后旗",value:"150825"},{label:"杭锦后旗",value:"150826"}],[{label:"集宁区",value:"150902"},{label:"卓资县",value:"150921"},{label:"化德县",value:"150922"},{label:"商都县",value:"150923"},{label:"兴和县",value:"150924"},{label:"凉城县",value:"150925"},{label:"察哈尔右翼前旗",value:"150926"},{label:"察哈尔右翼中旗",value:"150927"},{label:"察哈尔右翼后旗",value:"150928"},{label:"四子王旗",value:"150929"},{label:"丰镇市",value:"150981"}],[{label:"乌兰浩特市",value:"152201"},{label:"阿尔山市",value:"152202"},{label:"科尔沁右翼前旗",value:"152221"},{label:"科尔沁右翼中旗",value:"152222"},{label:"扎赉特旗",value:"152223"},{label:"突泉县",value:"152224"}],[{label:"二连浩特市",value:"152501"},{label:"锡林浩特市",value:"152502"},{label:"阿巴嘎旗",value:"152522"},{label:"苏尼特左旗",value:"152523"},{label:"苏尼特右旗",value:"152524"},{label:"东乌珠穆沁旗",value:"152525"},{label:"西乌珠穆沁旗",value:"152526"},{label:"太仆寺旗",value:"152527"},{label:"镶黄旗",value:"152528"},{label:"正镶白旗",value:"152529"},{label:"正蓝旗",value:"152530"},{label:"多伦县",value:"152531"},{label:"乌拉盖管委会",value:"152571"}],[{label:"阿拉善左旗",value:"152921"},{label:"阿拉善右旗",value:"152922"},{label:"额济纳旗",value:"152923"},{label:"内蒙古阿拉善经济开发区",value:"152971"}]],[[{label:"和平区",value:"210102"},{label:"沈河区",value:"210103"},{label:"大东区",value:"210104"},{label:"皇姑区",value:"210105"},{label:"铁西区",value:"210106"},{label:"苏家屯区",value:"210111"},{label:"浑南区",value:"210112"},{label:"沈北新区",value:"210113"},{label:"于洪区",value:"210114"},{label:"辽中区",value:"210115"},{label:"康平县",value:"210123"},{label:"法库县",value:"210124"},{label:"新民市",value:"210181"}],[{label:"中山区",value:"210202"},{label:"西岗区",value:"210203"},{label:"沙河口区",value:"210204"},{label:"甘井子区",value:"210211"},{label:"旅顺口区",value:"210212"},{label:"金州区",value:"210213"},{label:"普兰店区",value:"210214"},{label:"长海县",value:"210224"},{label:"瓦房店市",value:"210281"},{label:"庄河市",value:"210283"}],[{label:"铁东区",value:"210302"},{label:"铁西区",value:"210303"},{label:"立山区",value:"210304"},{label:"千山区",value:"210311"},{label:"台安县",value:"210321"},{label:"岫岩满族自治县",value:"210323"},{label:"海城市",value:"210381"}],[{label:"新抚区",value:"210402"},{label:"东洲区",value:"210403"},{label:"望花区",value:"210404"},{label:"顺城区",value:"210411"},{label:"抚顺县",value:"210421"},{label:"新宾满族自治县",value:"210422"},{label:"清原满族自治县",value:"210423"}],[{label:"平山区",value:"210502"},{label:"溪湖区",value:"210503"},{label:"明山区",value:"210504"},{label:"南芬区",value:"210505"},{label:"本溪满族自治县",value:"210521"},{label:"桓仁满族自治县",value:"210522"}],[{label:"元宝区",value:"210602"},{label:"振兴区",value:"210603"},{label:"振安区",value:"210604"},{label:"宽甸满族自治县",value:"210624"},{label:"东港市",value:"210681"},{label:"凤城市",value:"210682"}],[{label:"古塔区",value:"210702"},{label:"凌河区",value:"210703"},{label:"太和区",value:"210711"},{label:"黑山县",value:"210726"},{label:"义县",value:"210727"},{label:"凌海市",value:"210781"},{label:"北镇市",value:"210782"}],[{label:"站前区",value:"210802"},{label:"西市区",value:"210803"},{label:"鲅鱼圈区",value:"210804"},{label:"老边区",value:"210811"},{label:"盖州市",value:"210881"},{label:"大石桥市",value:"210882"}],[{label:"海州区",value:"210902"},{label:"新邱区",value:"210903"},{label:"太平区",value:"210904"},{label:"清河门区",value:"210905"},{label:"细河区",value:"210911"},{label:"阜新蒙古族自治县",value:"210921"},{label:"彰武县",value:"210922"}],[{label:"白塔区",value:"211002"},{label:"文圣区",value:"211003"},{label:"宏伟区",value:"211004"},{label:"弓长岭区",value:"211005"},{label:"太子河区",value:"211011"},{label:"辽阳县",value:"211021"},{label:"灯塔市",value:"211081"}],[{label:"双台子区",value:"211102"},{label:"兴隆台区",value:"211103"},{label:"大洼区",value:"211104"},{label:"盘山县",value:"211122"}],[{label:"银州区",value:"211202"},{label:"清河区",value:"211204"},{label:"铁岭县",value:"211221"},{label:"西丰县",value:"211223"},{label:"昌图县",value:"211224"},{label:"调兵山市",value:"211281"},{label:"开原市",value:"211282"}],[{label:"双塔区",value:"211302"},{label:"龙城区",value:"211303"},{label:"朝阳县",value:"211321"},{label:"建平县",value:"211322"},{label:"喀喇沁左翼蒙古族自治县",value:"211324"},{label:"北票市",value:"211381"},{label:"凌源市",value:"211382"}],[{label:"连山区",value:"211402"},{label:"龙港区",value:"211403"},{label:"南票区",value:"211404"},{label:"绥中县",value:"211421"},{label:"建昌县",value:"211422"},{label:"兴城市",value:"211481"}]],[[{label:"南关区",value:"220102"},{label:"宽城区",value:"220103"},{label:"朝阳区",value:"220104"},{label:"二道区",value:"220105"},{label:"绿园区",value:"220106"},{label:"双阳区",value:"220112"},{label:"九台区",value:"220113"},{label:"农安县",value:"220122"},{label:"长春经济技术开发区",value:"220171"},{label:"长春净月高新技术产业开发区",value:"220172"},{label:"长春高新技术产业开发区",value:"220173"},{label:"长春汽车经济技术开发区",value:"220174"},{label:"榆树市",value:"220182"},{label:"德惠市",value:"220183"}],[{label:"昌邑区",value:"220202"},{label:"龙潭区",value:"220203"},{label:"船营区",value:"220204"},{label:"丰满区",value:"220211"},{label:"永吉县",value:"220221"},{label:"吉林经济开发区",value:"220271"},{label:"吉林高新技术产业开发区",value:"220272"},{label:"吉林中国新加坡食品区",value:"220273"},{label:"蛟河市",value:"220281"},{label:"桦甸市",value:"220282"},{label:"舒兰市",value:"220283"},{label:"磐石市",value:"220284"}],[{label:"铁西区",value:"220302"},{label:"铁东区",value:"220303"},{label:"梨树县",value:"220322"},{label:"伊通满族自治县",value:"220323"},{label:"公主岭市",value:"220381"},{label:"双辽市",value:"220382"}],[{label:"龙山区",value:"220402"},{label:"西安区",value:"220403"},{label:"东丰县",value:"220421"},{label:"东辽县",value:"220422"}],[{label:"东昌区",value:"220502"},{label:"二道江区",value:"220503"},{label:"通化县",value:"220521"},{label:"辉南县",value:"220523"},{label:"柳河县",value:"220524"},{label:"梅河口市",value:"220581"},{label:"集安市",value:"220582"}],[{label:"浑江区",value:"220602"},{label:"江源区",value:"220605"},{label:"抚松县",value:"220621"},{label:"靖宇县",value:"220622"},{label:"长白朝鲜族自治县",value:"220623"},{label:"临江市",value:"220681"}],[{label:"宁江区",value:"220702"},{label:"前郭尔罗斯蒙古族自治县",value:"220721"},{label:"长岭县",value:"220722"},{label:"乾安县",value:"220723"},{label:"吉林松原经济开发区",value:"220771"},{label:"扶余市",value:"220781"}],[{label:"洮北区",value:"220802"},{label:"镇赉县",value:"220821"},{label:"通榆县",value:"220822"},{label:"吉林白城经济开发区",value:"220871"},{label:"洮南市",value:"220881"},{label:"大安市",value:"220882"}],[{label:"延吉市",value:"222401"},{label:"图们市",value:"222402"},{label:"敦化市",value:"222403"},{label:"珲春市",value:"222404"},{label:"龙井市",value:"222405"},{label:"和龙市",value:"222406"},{label:"汪清县",value:"222424"},{label:"安图县",value:"222426"}]],[[{label:"道里区",value:"230102"},{label:"南岗区",value:"230103"},{label:"道外区",value:"230104"},{label:"平房区",value:"230108"},{label:"松北区",value:"230109"},{label:"香坊区",value:"230110"},{label:"呼兰区",value:"230111"},{label:"阿城区",value:"230112"},{label:"双城区",value:"230113"},{label:"依兰县",value:"230123"},{label:"方正县",value:"230124"},{label:"宾县",value:"230125"},{label:"巴彦县",value:"230126"},{label:"木兰县",value:"230127"},{label:"通河县",value:"230128"},{label:"延寿县",value:"230129"},{label:"尚志市",value:"230183"},{label:"五常市",value:"230184"}],[{label:"龙沙区",value:"230202"},{label:"建华区",value:"230203"},{label:"铁锋区",value:"230204"},{label:"昂昂溪区",value:"230205"},{label:"富拉尔基区",value:"230206"},{label:"碾子山区",value:"230207"},{label:"梅里斯达斡尔族区",value:"230208"},{label:"龙江县",value:"230221"},{label:"依安县",value:"230223"},{label:"泰来县",value:"230224"},{label:"甘南县",value:"230225"},{label:"富裕县",value:"230227"},{label:"克山县",value:"230229"},{label:"克东县",value:"230230"},{label:"拜泉县",value:"230231"},{label:"讷河市",value:"230281"}],[{label:"鸡冠区",value:"230302"},{label:"恒山区",value:"230303"},{label:"滴道区",value:"230304"},{label:"梨树区",value:"230305"},{label:"城子河区",value:"230306"},{label:"麻山区",value:"230307"},{label:"鸡东县",value:"230321"},{label:"虎林市",value:"230381"},{label:"密山市",value:"230382"}],[{label:"向阳区",value:"230402"},{label:"工农区",value:"230403"},{label:"南山区",value:"230404"},{label:"兴安区",value:"230405"},{label:"东山区",value:"230406"},{label:"兴山区",value:"230407"},{label:"萝北县",value:"230421"},{label:"绥滨县",value:"230422"}],[{label:"尖山区",value:"230502"},{label:"岭东区",value:"230503"},{label:"四方台区",value:"230505"},{label:"宝山区",value:"230506"},{label:"集贤县",value:"230521"},{label:"友谊县",value:"230522"},{label:"宝清县",value:"230523"},{label:"饶河县",value:"230524"}],[{label:"萨尔图区",value:"230602"},{label:"龙凤区",value:"230603"},{label:"让胡路区",value:"230604"},{label:"红岗区",value:"230605"},{label:"大同区",value:"230606"},{label:"肇州县",value:"230621"},{label:"肇源县",value:"230622"},{label:"林甸县",value:"230623"},{label:"杜尔伯特蒙古族自治县",value:"230624"},{label:"大庆高新技术产业开发区",value:"230671"}],[{label:"伊春区",value:"230702"},{label:"南岔区",value:"230703"},{label:"友好区",value:"230704"},{label:"西林区",value:"230705"},{label:"翠峦区",value:"230706"},{label:"新青区",value:"230707"},{label:"美溪区",value:"230708"},{label:"金山屯区",value:"230709"},{label:"五营区",value:"230710"},{label:"乌马河区",value:"230711"},{label:"汤旺河区",value:"230712"},{label:"带岭区",value:"230713"},{label:"乌伊岭区",value:"230714"},{label:"红星区",value:"230715"},{label:"上甘岭区",value:"230716"},{label:"嘉荫县",value:"230722"},{label:"铁力市",value:"230781"}],[{label:"向阳区",value:"230803"},{label:"前进区",value:"230804"},{label:"东风区",value:"230805"},{label:"郊区",value:"230811"},{label:"桦南县",value:"230822"},{label:"桦川县",value:"230826"},{label:"汤原县",value:"230828"},{label:"同江市",value:"230881"},{label:"富锦市",value:"230882"},{label:"抚远市",value:"230883"}],[{label:"新兴区",value:"230902"},{label:"桃山区",value:"230903"},{label:"茄子河区",value:"230904"},{label:"勃利县",value:"230921"}],[{label:"东安区",value:"231002"},{label:"阳明区",value:"231003"},{label:"爱民区",value:"231004"},{label:"西安区",value:"231005"},{label:"林口县",value:"231025"},{label:"牡丹江经济技术开发区",value:"231071"},{label:"绥芬河市",value:"231081"},{label:"海林市",value:"231083"},{label:"宁安市",value:"231084"},{label:"穆棱市",value:"231085"},{label:"东宁市",value:"231086"}],[{label:"爱辉区",value:"231102"},{label:"嫩江县",value:"231121"},{label:"逊克县",value:"231123"},{label:"孙吴县",value:"231124"},{label:"北安市",value:"231181"},{label:"五大连池市",value:"231182"}],[{label:"北林区",value:"231202"},{label:"望奎县",value:"231221"},{label:"兰西县",value:"231222"},{label:"青冈县",value:"231223"},{label:"庆安县",value:"231224"},{label:"明水县",value:"231225"},{label:"绥棱县",value:"231226"},{label:"安达市",value:"231281"},{label:"肇东市",value:"231282"},{label:"海伦市",value:"231283"}],[{label:"加格达奇区",value:"232701"},{label:"松岭区",value:"232702"},{label:"新林区",value:"232703"},{label:"呼中区",value:"232704"},{label:"呼玛县",value:"232721"},{label:"塔河县",value:"232722"},{label:"漠河县",value:"232723"}]],[[{label:"黄浦区",value:"310101"},{label:"徐汇区",value:"310104"},{label:"长宁区",value:"310105"},{label:"静安区",value:"310106"},{label:"普陀区",value:"310107"},{label:"虹口区",value:"310109"},{label:"杨浦区",value:"310110"},{label:"闵行区",value:"310112"},{label:"宝山区",value:"310113"},{label:"嘉定区",value:"310114"},{label:"浦东新区",value:"310115"},{label:"金山区",value:"310116"},{label:"松江区",value:"310117"},{label:"青浦区",value:"310118"},{label:"奉贤区",value:"310120"},{label:"崇明区",value:"310151"}]],[[{label:"玄武区",value:"320102"},{label:"秦淮区",value:"320104"},{label:"建邺区",value:"320105"},{label:"鼓楼区",value:"320106"},{label:"浦口区",value:"320111"},{label:"栖霞区",value:"320113"},{label:"雨花台区",value:"320114"},{label:"江宁区",value:"320115"},{label:"六合区",value:"320116"},{label:"溧水区",value:"320117"},{label:"高淳区",value:"320118"}],[{label:"锡山区",value:"320205"},{label:"惠山区",value:"320206"},{label:"滨湖区",value:"320211"},{label:"梁溪区",value:"320213"},{label:"新吴区",value:"320214"},{label:"江阴市",value:"320281"},{label:"宜兴市",value:"320282"}],[{label:"鼓楼区",value:"320302"},{label:"云龙区",value:"320303"},{label:"贾汪区",value:"320305"},{label:"泉山区",value:"320311"},{label:"铜山区",value:"320312"},{label:"丰县",value:"320321"},{label:"沛县",value:"320322"},{label:"睢宁县",value:"320324"},{label:"徐州经济技术开发区",value:"320371"},{label:"新沂市",value:"320381"},{label:"邳州市",value:"320382"}],[{label:"天宁区",value:"320402"},{label:"钟楼区",value:"320404"},{label:"新北区",value:"320411"},{label:"武进区",value:"320412"},{label:"金坛区",value:"320413"},{label:"溧阳市",value:"320481"}],[{label:"虎丘区",value:"320505"},{label:"吴中区",value:"320506"},{label:"相城区",value:"320507"},{label:"姑苏区",value:"320508"},{label:"吴江区",value:"320509"},{label:"苏州工业园区",value:"320571"},{label:"常熟市",value:"320581"},{label:"张家港市",value:"320582"},{label:"昆山市",value:"320583"},{label:"太仓市",value:"320585"}],[{label:"崇川区",value:"320602"},{label:"港闸区",value:"320611"},{label:"通州区",value:"320612"},{label:"海安县",value:"320621"},{label:"如东县",value:"320623"},{label:"南通经济技术开发区",value:"320671"},{label:"启东市",value:"320681"},{label:"如皋市",value:"320682"},{label:"海门市",value:"320684"}],[{label:"连云区",value:"320703"},{label:"海州区",value:"320706"},{label:"赣榆区",value:"320707"},{label:"东海县",value:"320722"},{label:"灌云县",value:"320723"},{label:"灌南县",value:"320724"},{label:"连云港经济技术开发区",value:"320771"},{label:"连云港高新技术产业开发区",value:"320772"}],[{label:"淮安区",value:"320803"},{label:"淮阴区",value:"320804"},{label:"清江浦区",value:"320812"},{label:"洪泽区",value:"320813"},{label:"涟水县",value:"320826"},{label:"盱眙县",value:"320830"},{label:"金湖县",value:"320831"},{label:"淮安经济技术开发区",value:"320871"}],[{label:"亭湖区",value:"320902"},{label:"盐都区",value:"320903"},{label:"大丰区",value:"320904"},{label:"响水县",value:"320921"},{label:"滨海县",value:"320922"},{label:"阜宁县",value:"320923"},{label:"射阳县",value:"320924"},{label:"建湖县",value:"320925"},{label:"盐城经济技术开发区",value:"320971"},{label:"东台市",value:"320981"}],[{label:"广陵区",value:"321002"},{label:"邗江区",value:"321003"},{label:"江都区",value:"321012"},{label:"宝应县",value:"321023"},{label:"扬州经济技术开发区",value:"321071"},{label:"仪征市",value:"321081"},{label:"高邮市",value:"321084"}],[{label:"京口区",value:"321102"},{label:"润州区",value:"321111"},{label:"丹徒区",value:"321112"},{label:"镇江新区",value:"321171"},{label:"丹阳市",value:"321181"},{label:"扬中市",value:"321182"},{label:"句容市",value:"321183"}],[{label:"海陵区",value:"321202"},{label:"高港区",value:"321203"},{label:"姜堰区",value:"321204"},{label:"泰州医药高新技术产业开发区",value:"321271"},{label:"兴化市",value:"321281"},{label:"靖江市",value:"321282"},{label:"泰兴市",value:"321283"}],[{label:"宿城区",value:"321302"},{label:"宿豫区",value:"321311"},{label:"沭阳县",value:"321322"},{label:"泗阳县",value:"321323"},{label:"泗洪县",value:"321324"},{label:"宿迁经济技术开发区",value:"321371"}]],[[{label:"上城区",value:"330102"},{label:"下城区",value:"330103"},{label:"江干区",value:"330104"},{label:"拱墅区",value:"330105"},{label:"西湖区",value:"330106"},{label:"滨江区",value:"330108"},{label:"萧山区",value:"330109"},{label:"余杭区",value:"330110"},{label:"富阳区",value:"330111"},{label:"临安区",value:"330112"},{label:"桐庐县",value:"330122"},{label:"淳安县",value:"330127"},{label:"建德市",value:"330182"}],[{label:"海曙区",value:"330203"},{label:"江北区",value:"330205"},{label:"北仑区",value:"330206"},{label:"镇海区",value:"330211"},{label:"鄞州区",value:"330212"},{label:"奉化区",value:"330213"},{label:"象山县",value:"330225"},{label:"宁海县",value:"330226"},{label:"余姚市",value:"330281"},{label:"慈溪市",value:"330282"}],[{label:"鹿城区",value:"330302"},{label:"龙湾区",value:"330303"},{label:"瓯海区",value:"330304"},{label:"洞头区",value:"330305"},{label:"永嘉县",value:"330324"},{label:"平阳县",value:"330326"},{label:"苍南县",value:"330327"},{label:"文成县",value:"330328"},{label:"泰顺县",value:"330329"},{label:"温州经济技术开发区",value:"330371"},{label:"瑞安市",value:"330381"},{label:"乐清市",value:"330382"}],[{label:"南湖区",value:"330402"},{label:"秀洲区",value:"330411"},{label:"嘉善县",value:"330421"},{label:"海盐县",value:"330424"},{label:"海宁市",value:"330481"},{label:"平湖市",value:"330482"},{label:"桐乡市",value:"330483"}],[{label:"吴兴区",value:"330502"},{label:"南浔区",value:"330503"},{label:"德清县",value:"330521"},{label:"长兴县",value:"330522"},{label:"安吉县",value:"330523"}],[{label:"越城区",value:"330602"},{label:"柯桥区",value:"330603"},{label:"上虞区",value:"330604"},{label:"新昌县",value:"330624"},{label:"诸暨市",value:"330681"},{label:"嵊州市",value:"330683"}],[{label:"婺城区",value:"330702"},{label:"金东区",value:"330703"},{label:"武义县",value:"330723"},{label:"浦江县",value:"330726"},{label:"磐安县",value:"330727"},{label:"兰溪市",value:"330781"},{label:"义乌市",value:"330782"},{label:"东阳市",value:"330783"},{label:"永康市",value:"330784"}],[{label:"柯城区",value:"330802"},{label:"衢江区",value:"330803"},{label:"常山县",value:"330822"},{label:"开化县",value:"330824"},{label:"龙游县",value:"330825"},{label:"江山市",value:"330881"}],[{label:"定海区",value:"330902"},{label:"普陀区",value:"330903"},{label:"岱山县",value:"330921"},{label:"嵊泗县",value:"330922"}],[{label:"椒江区",value:"331002"},{label:"黄岩区",value:"331003"},{label:"路桥区",value:"331004"},{label:"三门县",value:"331022"},{label:"天台县",value:"331023"},{label:"仙居县",value:"331024"},{label:"温岭市",value:"331081"},{label:"临海市",value:"331082"},{label:"玉环市",value:"331083"}],[{label:"莲都区",value:"331102"},{label:"青田县",value:"331121"},{label:"缙云县",value:"331122"},{label:"遂昌县",value:"331123"},{label:"松阳县",value:"331124"},{label:"云和县",value:"331125"},{label:"庆元县",value:"331126"},{label:"景宁畲族自治县",value:"331127"},{label:"龙泉市",value:"331181"}]],[[{label:"瑶海区",value:"340102"},{label:"庐阳区",value:"340103"},{label:"蜀山区",value:"340104"},{label:"包河区",value:"340111"},{label:"长丰县",value:"340121"},{label:"肥东县",value:"340122"},{label:"肥西县",value:"340123"},{label:"庐江县",value:"340124"},{label:"合肥高新技术产业开发区",value:"340171"},{label:"合肥经济技术开发区",value:"340172"},{label:"合肥新站高新技术产业开发区",value:"340173"},{label:"巢湖市",value:"340181"}],[{label:"镜湖区",value:"340202"},{label:"弋江区",value:"340203"},{label:"鸠江区",value:"340207"},{label:"三山区",value:"340208"},{label:"芜湖县",value:"340221"},{label:"繁昌县",value:"340222"},{label:"南陵县",value:"340223"},{label:"无为县",value:"340225"},{label:"芜湖经济技术开发区",value:"340271"},{label:"安徽芜湖长江大桥经济开发区",value:"340272"}],[{label:"龙子湖区",value:"340302"},{label:"蚌山区",value:"340303"},{label:"禹会区",value:"340304"},{label:"淮上区",value:"340311"},{label:"怀远县",value:"340321"},{label:"五河县",value:"340322"},{label:"固镇县",value:"340323"},{label:"蚌埠市高新技术开发区",value:"340371"},{label:"蚌埠市经济开发区",value:"340372"}],[{label:"大通区",value:"340402"},{label:"田家庵区",value:"340403"},{label:"谢家集区",value:"340404"},{label:"八公山区",value:"340405"},{label:"潘集区",value:"340406"},{label:"凤台县",value:"340421"},{label:"寿县",value:"340422"}],[{label:"花山区",value:"340503"},{label:"雨山区",value:"340504"},{label:"博望区",value:"340506"},{label:"当涂县",value:"340521"},{label:"含山县",value:"340522"},{label:"和县",value:"340523"}],[{label:"杜集区",value:"340602"},{label:"相山区",value:"340603"},{label:"烈山区",value:"340604"},{label:"濉溪县",value:"340621"}],[{label:"铜官区",value:"340705"},{label:"义安区",value:"340706"},{label:"郊区",value:"340711"},{label:"枞阳县",value:"340722"}],[{label:"迎江区",value:"340802"},{label:"大观区",value:"340803"},{label:"宜秀区",value:"340811"},{label:"怀宁县",value:"340822"},{label:"潜山县",value:"340824"},{label:"太湖县",value:"340825"},{label:"宿松县",value:"340826"},{label:"望江县",value:"340827"},{label:"岳西县",value:"340828"},{label:"安徽安庆经济开发区",value:"340871"},{label:"桐城市",value:"340881"}],[{label:"屯溪区",value:"341002"},{label:"黄山区",value:"341003"},{label:"徽州区",value:"341004"},{label:"歙县",value:"341021"},{label:"休宁县",value:"341022"},{label:"黟县",value:"341023"},{label:"祁门县",value:"341024"}],[{label:"琅琊区",value:"341102"},{label:"南谯区",value:"341103"},{label:"来安县",value:"341122"},{label:"全椒县",value:"341124"},{label:"定远县",value:"341125"},{label:"凤阳县",value:"341126"},{label:"苏滁现代产业园",value:"341171"},{label:"滁州经济技术开发区",value:"341172"},{label:"天长市",value:"341181"},{label:"明光市",value:"341182"}],[{label:"颍州区",value:"341202"},{label:"颍东区",value:"341203"},{label:"颍泉区",value:"341204"},{label:"临泉县",value:"341221"},{label:"太和县",value:"341222"},{label:"阜南县",value:"341225"},{label:"颍上县",value:"341226"},{label:"阜阳合肥现代产业园区",value:"341271"},{label:"阜阳经济技术开发区",value:"341272"},{label:"界首市",value:"341282"}],[{label:"埇桥区",value:"341302"},{label:"砀山县",value:"341321"},{label:"萧县",value:"341322"},{label:"灵璧县",value:"341323"},{label:"泗县",value:"341324"},{label:"宿州马鞍山现代产业园区",value:"341371"},{label:"宿州经济技术开发区",value:"341372"}],[{label:"金安区",value:"341502"},{label:"裕安区",value:"341503"},{label:"叶集区",value:"341504"},{label:"霍邱县",value:"341522"},{label:"舒城县",value:"341523"},{label:"金寨县",value:"341524"},{label:"霍山县",value:"341525"}],[{label:"谯城区",value:"341602"},{label:"涡阳县",value:"341621"},{label:"蒙城县",value:"341622"},{label:"利辛县",value:"341623"}],[{label:"贵池区",value:"341702"},{label:"东至县",value:"341721"},{label:"石台县",value:"341722"},{label:"青阳县",value:"341723"}],[{label:"宣州区",value:"341802"},{label:"郎溪县",value:"341821"},{label:"广德县",value:"341822"},{label:"泾县",value:"341823"},{label:"绩溪县",value:"341824"},{label:"旌德县",value:"341825"},{label:"宣城市经济开发区",value:"341871"},{label:"宁国市",value:"341881"}]],[[{label:"鼓楼区",value:"350102"},{label:"台江区",value:"350103"},{label:"仓山区",value:"350104"},{label:"马尾区",value:"350105"},{label:"晋安区",value:"350111"},{label:"闽侯县",value:"350121"},{label:"连江县",value:"350122"},{label:"罗源县",value:"350123"},{label:"闽清县",value:"350124"},{label:"永泰县",value:"350125"},{label:"平潭县",value:"350128"},{label:"福清市",value:"350181"},{label:"长乐市",value:"350182"}],[{label:"思明区",value:"350203"},{label:"海沧区",value:"350205"},{label:"湖里区",value:"350206"},{label:"集美区",value:"350211"},{label:"同安区",value:"350212"},{label:"翔安区",value:"350213"}],[{label:"城厢区",value:"350302"},{label:"涵江区",value:"350303"},{label:"荔城区",value:"350304"},{label:"秀屿区",value:"350305"},{label:"仙游县",value:"350322"}],[{label:"梅列区",value:"350402"},{label:"三元区",value:"350403"},{label:"明溪县",value:"350421"},{label:"清流县",value:"350423"},{label:"宁化县",value:"350424"},{label:"大田县",value:"350425"},{label:"尤溪县",value:"350426"},{label:"沙县",value:"350427"},{label:"将乐县",value:"350428"},{label:"泰宁县",value:"350429"},{label:"建宁县",value:"350430"},{label:"永安市",value:"350481"}],[{label:"鲤城区",value:"350502"},{label:"丰泽区",value:"350503"},{label:"洛江区",value:"350504"},{label:"泉港区",value:"350505"},{label:"惠安县",value:"350521"},{label:"安溪县",value:"350524"},{label:"永春县",value:"350525"},{label:"德化县",value:"350526"},{label:"金门县",value:"350527"},{label:"石狮市",value:"350581"},{label:"晋江市",value:"350582"},{label:"南安市",value:"350583"}],[{label:"芗城区",value:"350602"},{label:"龙文区",value:"350603"},{label:"云霄县",value:"350622"},{label:"漳浦县",value:"350623"},{label:"诏安县",value:"350624"},{label:"长泰县",value:"350625"},{label:"东山县",value:"350626"},{label:"南靖县",value:"350627"},{label:"平和县",value:"350628"},{label:"华安县",value:"350629"},{label:"龙海市",value:"350681"}],[{label:"延平区",value:"350702"},{label:"建阳区",value:"350703"},{label:"顺昌县",value:"350721"},{label:"浦城县",value:"350722"},{label:"光泽县",value:"350723"},{label:"松溪县",value:"350724"},{label:"政和县",value:"350725"},{label:"邵武市",value:"350781"},{label:"武夷山市",value:"350782"},{label:"建瓯市",value:"350783"}],[{label:"新罗区",value:"350802"},{label:"永定区",value:"350803"},{label:"长汀县",value:"350821"},{label:"上杭县",value:"350823"},{label:"武平县",value:"350824"},{label:"连城县",value:"350825"},{label:"漳平市",value:"350881"}],[{label:"蕉城区",value:"350902"},{label:"霞浦县",value:"350921"},{label:"古田县",value:"350922"},{label:"屏南县",value:"350923"},{label:"寿宁县",value:"350924"},{label:"周宁县",value:"350925"},{label:"柘荣县",value:"350926"},{label:"福安市",value:"350981"},{label:"福鼎市",value:"350982"}]],[[{label:"东湖区",value:"360102"},{label:"西湖区",value:"360103"},{label:"青云谱区",value:"360104"},{label:"湾里区",value:"360105"},{label:"青山湖区",value:"360111"},{label:"新建区",value:"360112"},{label:"南昌县",value:"360121"},{label:"安义县",value:"360123"},{label:"进贤县",value:"360124"}],[{label:"昌江区",value:"360202"},{label:"珠山区",value:"360203"},{label:"浮梁县",value:"360222"},{label:"乐平市",value:"360281"}],[{label:"安源区",value:"360302"},{label:"湘东区",value:"360313"},{label:"莲花县",value:"360321"},{label:"上栗县",value:"360322"},{label:"芦溪县",value:"360323"}],[{label:"濂溪区",value:"360402"},{label:"浔阳区",value:"360403"},{label:"柴桑区",value:"360404"},{label:"武宁县",value:"360423"},{label:"修水县",value:"360424"},{label:"永修县",value:"360425"},{label:"德安县",value:"360426"},{label:"都昌县",value:"360428"},{label:"湖口县",value:"360429"},{label:"彭泽县",value:"360430"},{label:"瑞昌市",value:"360481"},{label:"共青城市",value:"360482"},{label:"庐山市",value:"360483"}],[{label:"渝水区",value:"360502"},{label:"分宜县",value:"360521"}],[{label:"月湖区",value:"360602"},{label:"余江县",value:"360622"},{label:"贵溪市",value:"360681"}],[{label:"章贡区",value:"360702"},{label:"南康区",value:"360703"},{label:"赣县区",value:"360704"},{label:"信丰县",value:"360722"},{label:"大余县",value:"360723"},{label:"上犹县",value:"360724"},{label:"崇义县",value:"360725"},{label:"安远县",value:"360726"},{label:"龙南县",value:"360727"},{label:"定南县",value:"360728"},{label:"全南县",value:"360729"},{label:"宁都县",value:"360730"},{label:"于都县",value:"360731"},{label:"兴国县",value:"360732"},{label:"会昌县",value:"360733"},{label:"寻乌县",value:"360734"},{label:"石城县",value:"360735"},{label:"瑞金市",value:"360781"}],[{label:"吉州区",value:"360802"},{label:"青原区",value:"360803"},{label:"吉安县",value:"360821"},{label:"吉水县",value:"360822"},{label:"峡江县",value:"360823"},{label:"新干县",value:"360824"},{label:"永丰县",value:"360825"},{label:"泰和县",value:"360826"},{label:"遂川县",value:"360827"},{label:"万安县",value:"360828"},{label:"安福县",value:"360829"},{label:"永新县",value:"360830"},{label:"井冈山市",value:"360881"}],[{label:"袁州区",value:"360902"},{label:"奉新县",value:"360921"},{label:"万载县",value:"360922"},{label:"上高县",value:"360923"},{label:"宜丰县",value:"360924"},{label:"靖安县",value:"360925"},{label:"铜鼓县",value:"360926"},{label:"丰城市",value:"360981"},{label:"樟树市",value:"360982"},{label:"高安市",value:"360983"}],[{label:"临川区",value:"361002"},{label:"东乡区",value:"361003"},{label:"南城县",value:"361021"},{label:"黎川县",value:"361022"},{label:"南丰县",value:"361023"},{label:"崇仁县",value:"361024"},{label:"乐安县",value:"361025"},{label:"宜黄县",value:"361026"},{label:"金溪县",value:"361027"},{label:"资溪县",value:"361028"},{label:"广昌县",value:"361030"}],[{label:"信州区",value:"361102"},{label:"广丰区",value:"361103"},{label:"上饶县",value:"361121"},{label:"玉山县",value:"361123"},{label:"铅山县",value:"361124"},{label:"横峰县",value:"361125"},{label:"弋阳县",value:"361126"},{label:"余干县",value:"361127"},{label:"鄱阳县",value:"361128"},{label:"万年县",value:"361129"},{label:"婺源县",value:"361130"},{label:"德兴市",value:"361181"}]],[[{label:"历下区",value:"370102"},{label:"市中区",value:"370103"},{label:"槐荫区",value:"370104"},{label:"天桥区",value:"370105"},{label:"历城区",value:"370112"},{label:"长清区",value:"370113"},{label:"章丘区",value:"370114"},{label:"平阴县",value:"370124"},{label:"济阳县",value:"370125"},{label:"商河县",value:"370126"},{label:"济南高新技术产业开发区",value:"370171"}],[{label:"市南区",value:"370202"},{label:"市北区",value:"370203"},{label:"黄岛区",value:"370211"},{label:"崂山区",value:"370212"},{label:"李沧区",value:"370213"},{label:"城阳区",value:"370214"},{label:"即墨区",value:"370215"},{label:"青岛高新技术产业开发区",value:"370271"},{label:"胶州市",value:"370281"},{label:"平度市",value:"370283"},{label:"莱西市",value:"370285"}],[{label:"淄川区",value:"370302"},{label:"张店区",value:"370303"},{label:"博山区",value:"370304"},{label:"临淄区",value:"370305"},{label:"周村区",value:"370306"},{label:"桓台县",value:"370321"},{label:"高青县",value:"370322"},{label:"沂源县",value:"370323"}],[{label:"市中区",value:"370402"},{label:"薛城区",value:"370403"},{label:"峄城区",value:"370404"},{label:"台儿庄区",value:"370405"},{label:"山亭区",value:"370406"},{label:"滕州市",value:"370481"}],[{label:"东营区",value:"370502"},{label:"河口区",value:"370503"},{label:"垦利区",value:"370505"},{label:"利津县",value:"370522"},{label:"广饶县",value:"370523"},{label:"东营经济技术开发区",value:"370571"},{label:"东营港经济开发区",value:"370572"}],[{label:"芝罘区",value:"370602"},{label:"福山区",value:"370611"},{label:"牟平区",value:"370612"},{label:"莱山区",value:"370613"},{label:"长岛县",value:"370634"},{label:"烟台高新技术产业开发区",value:"370671"},{label:"烟台经济技术开发区",value:"370672"},{label:"龙口市",value:"370681"},{label:"莱阳市",value:"370682"},{label:"莱州市",value:"370683"},{label:"蓬莱市",value:"370684"},{label:"招远市",value:"370685"},{label:"栖霞市",value:"370686"},{label:"海阳市",value:"370687"}],[{label:"潍城区",value:"370702"},{label:"寒亭区",value:"370703"},{label:"坊子区",value:"370704"},{label:"奎文区",value:"370705"},{label:"临朐县",value:"370724"},{label:"昌乐县",value:"370725"},{label:"潍坊滨海经济技术开发区",value:"370772"},{label:"青州市",value:"370781"},{label:"诸城市",value:"370782"},{label:"寿光市",value:"370783"},{label:"安丘市",value:"370784"},{label:"高密市",value:"370785"},{label:"昌邑市",value:"370786"}],[{label:"任城区",value:"370811"},{label:"兖州区",value:"370812"},{label:"微山县",value:"370826"},{label:"鱼台县",value:"370827"},{label:"金乡县",value:"370828"},{label:"嘉祥县",value:"370829"},{label:"汶上县",value:"370830"},{label:"泗水县",value:"370831"},{label:"梁山县",value:"370832"},{label:"济宁高新技术产业开发区",value:"370871"},{label:"曲阜市",value:"370881"},{label:"邹城市",value:"370883"}],[{label:"泰山区",value:"370902"},{label:"岱岳区",value:"370911"},{label:"宁阳县",value:"370921"},{label:"东平县",value:"370923"},{label:"新泰市",value:"370982"},{label:"肥城市",value:"370983"}],[{label:"环翠区",value:"371002"},{label:"文登区",value:"371003"},{label:"威海火炬高技术产业开发区",value:"371071"},{label:"威海经济技术开发区",value:"371072"},{label:"威海临港经济技术开发区",value:"371073"},{label:"荣成市",value:"371082"},{label:"乳山市",value:"371083"}],[{label:"东港区",value:"371102"},{label:"岚山区",value:"371103"},{label:"五莲县",value:"371121"},{label:"莒县",value:"371122"},{label:"日照经济技术开发区",value:"371171"},{label:"日照国际海洋城",value:"371172"}],[{label:"莱城区",value:"371202"},{label:"钢城区",value:"371203"}],[{label:"兰山区",value:"371302"},{label:"罗庄区",value:"371311"},{label:"河东区",value:"371312"},{label:"沂南县",value:"371321"},{label:"郯城县",value:"371322"},{label:"沂水县",value:"371323"},{label:"兰陵县",value:"371324"},{label:"费县",value:"371325"},{label:"平邑县",value:"371326"},{label:"莒南县",value:"371327"},{label:"蒙阴县",value:"371328"},{label:"临沭县",value:"371329"},{label:"临沂高新技术产业开发区",value:"371371"},{label:"临沂经济技术开发区",value:"371372"},{label:"临沂临港经济开发区",value:"371373"}],[{label:"德城区",value:"371402"},{label:"陵城区",value:"371403"},{label:"宁津县",value:"371422"},{label:"庆云县",value:"371423"},{label:"临邑县",value:"371424"},{label:"齐河县",value:"371425"},{label:"平原县",value:"371426"},{label:"夏津县",value:"371427"},{label:"武城县",value:"371428"},{label:"德州经济技术开发区",value:"371471"},{label:"德州运河经济开发区",value:"371472"},{label:"乐陵市",value:"371481"},{label:"禹城市",value:"371482"}],[{label:"东昌府区",value:"371502"},{label:"阳谷县",value:"371521"},{label:"莘县",value:"371522"},{label:"茌平县",value:"371523"},{label:"东阿县",value:"371524"},{label:"冠县",value:"371525"},{label:"高唐县",value:"371526"},{label:"临清市",value:"371581"}],[{label:"滨城区",value:"371602"},{label:"沾化区",value:"371603"},{label:"惠民县",value:"371621"},{label:"阳信县",value:"371622"},{label:"无棣县",value:"371623"},{label:"博兴县",value:"371625"},{label:"邹平县",value:"371626"}],[{label:"牡丹区",value:"371702"},{label:"定陶区",value:"371703"},{label:"曹县",value:"371721"},{label:"单县",value:"371722"},{label:"成武县",value:"371723"},{label:"巨野县",value:"371724"},{label:"郓城县",value:"371725"},{label:"鄄城县",value:"371726"},{label:"东明县",value:"371728"},{label:"菏泽经济技术开发区",value:"371771"},{label:"菏泽高新技术开发区",value:"371772"}]],[[{label:"中原区",value:"410102"},{label:"二七区",value:"410103"},{label:"管城回族区",value:"410104"},{label:"金水区",value:"410105"},{label:"上街区",value:"410106"},{label:"惠济区",value:"410108"},{label:"中牟县",value:"410122"},{label:"郑州经济技术开发区",value:"410171"},{label:"郑州高新技术产业开发区",value:"410172"},{label:"郑州航空港经济综合实验区",value:"410173"},{label:"巩义市",value:"410181"},{label:"荥阳市",value:"410182"},{label:"新密市",value:"410183"},{label:"新郑市",value:"410184"},{label:"登封市",value:"410185"}],[{label:"龙亭区",value:"410202"},{label:"顺河回族区",value:"410203"},{label:"鼓楼区",value:"410204"},{label:"禹王台区",value:"410205"},{label:"祥符区",value:"410212"},{label:"杞县",value:"410221"},{label:"通许县",value:"410222"},{label:"尉氏县",value:"410223"},{label:"兰考县",value:"410225"}],[{label:"老城区",value:"410302"},{label:"西工区",value:"410303"},{label:"瀍河回族区",value:"410304"},{label:"涧西区",value:"410305"},{label:"吉利区",value:"410306"},{label:"洛龙区",value:"410311"},{label:"孟津县",value:"410322"},{label:"新安县",value:"410323"},{label:"栾川县",value:"410324"},{label:"嵩县",value:"410325"},{label:"汝阳县",value:"410326"},{label:"宜阳县",value:"410327"},{label:"洛宁县",value:"410328"},{label:"伊川县",value:"410329"},{label:"洛阳高新技术产业开发区",value:"410371"},{label:"偃师市",value:"410381"}],[{label:"新华区",value:"410402"},{label:"卫东区",value:"410403"},{label:"石龙区",value:"410404"},{label:"湛河区",value:"410411"},{label:"宝丰县",value:"410421"},{label:"叶县",value:"410422"},{label:"鲁山县",value:"410423"},{label:"郏县",value:"410425"},{label:"平顶山高新技术产业开发区",value:"410471"},{label:"平顶山市新城区",value:"410472"},{label:"舞钢市",value:"410481"},{label:"汝州市",value:"410482"}],[{label:"文峰区",value:"410502"},{label:"北关区",value:"410503"},{label:"殷都区",value:"410505"},{label:"龙安区",value:"410506"},{label:"安阳县",value:"410522"},{label:"汤阴县",value:"410523"},{label:"滑县",value:"410526"},{label:"内黄县",value:"410527"},{label:"安阳高新技术产业开发区",value:"410571"},{label:"林州市",value:"410581"}],[{label:"鹤山区",value:"410602"},{label:"山城区",value:"410603"},{label:"淇滨区",value:"410611"},{label:"浚县",value:"410621"},{label:"淇县",value:"410622"},{label:"鹤壁经济技术开发区",value:"410671"}],[{label:"红旗区",value:"410702"},{label:"卫滨区",value:"410703"},{label:"凤泉区",value:"410704"},{label:"牧野区",value:"410711"},{label:"新乡县",value:"410721"},{label:"获嘉县",value:"410724"},{label:"原阳县",value:"410725"},{label:"延津县",value:"410726"},{label:"封丘县",value:"410727"},{label:"长垣县",value:"410728"},{label:"新乡高新技术产业开发区",value:"410771"},{label:"新乡经济技术开发区",value:"410772"},{label:"新乡市平原城乡一体化示范区",value:"410773"},{label:"卫辉市",value:"410781"},{label:"辉县市",value:"410782"}],[{label:"解放区",value:"410802"},{label:"中站区",value:"410803"},{label:"马村区",value:"410804"},{label:"山阳区",value:"410811"},{label:"修武县",value:"410821"},{label:"博爱县",value:"410822"},{label:"武陟县",value:"410823"},{label:"温县",value:"410825"},{label:"焦作城乡一体化示范区",value:"410871"},{label:"沁阳市",value:"410882"},{label:"孟州市",value:"410883"}],[{label:"华龙区",value:"410902"},{label:"清丰县",value:"410922"},{label:"南乐县",value:"410923"},{label:"范县",value:"410926"},{label:"台前县",value:"410927"},{label:"濮阳县",value:"410928"},{label:"河南濮阳工业园区",value:"410971"},{label:"濮阳经济技术开发区",value:"410972"}],[{label:"魏都区",value:"411002"},{label:"建安区",value:"411003"},{label:"鄢陵县",value:"411024"},{label:"襄城县",value:"411025"},{label:"许昌经济技术开发区",value:"411071"},{label:"禹州市",value:"411081"},{label:"长葛市",value:"411082"}],[{label:"源汇区",value:"411102"},{label:"郾城区",value:"411103"},{label:"召陵区",value:"411104"},{label:"舞阳县",value:"411121"},{label:"临颍县",value:"411122"},{label:"漯河经济技术开发区",value:"411171"}],[{label:"湖滨区",value:"411202"},{label:"陕州区",value:"411203"},{label:"渑池县",value:"411221"},{label:"卢氏县",value:"411224"},{label:"河南三门峡经济开发区",value:"411271"},{label:"义马市",value:"411281"},{label:"灵宝市",value:"411282"}],[{label:"宛城区",value:"411302"},{label:"卧龙区",value:"411303"},{label:"南召县",value:"411321"},{label:"方城县",value:"411322"},{label:"西峡县",value:"411323"},{label:"镇平县",value:"411324"},{label:"内乡县",value:"411325"},{label:"淅川县",value:"411326"},{label:"社旗县",value:"411327"},{label:"唐河县",value:"411328"},{label:"新野县",value:"411329"},{label:"桐柏县",value:"411330"},{label:"南阳高新技术产业开发区",value:"411371"},{label:"南阳市城乡一体化示范区",value:"411372"},{label:"邓州市",value:"411381"}],[{label:"梁园区",value:"411402"},{label:"睢阳区",value:"411403"},{label:"民权县",value:"411421"},{label:"睢县",value:"411422"},{label:"宁陵县",value:"411423"},{label:"柘城县",value:"411424"},{label:"虞城县",value:"411425"},{label:"夏邑县",value:"411426"},{label:"豫东综合物流产业聚集区",value:"411471"},{label:"河南商丘经济开发区",value:"411472"},{label:"永城市",value:"411481"}],[{label:"浉河区",value:"411502"},{label:"平桥区",value:"411503"},{label:"罗山县",value:"411521"},{label:"光山县",value:"411522"},{label:"新县",value:"411523"},{label:"商城县",value:"411524"},{label:"固始县",value:"411525"},{label:"潢川县",value:"411526"},{label:"淮滨县",value:"411527"},{label:"息县",value:"411528"},{label:"信阳高新技术产业开发区",value:"411571"}],[{label:"川汇区",value:"411602"},{label:"扶沟县",value:"411621"},{label:"西华县",value:"411622"},{label:"商水县",value:"411623"},{label:"沈丘县",value:"411624"},{label:"郸城县",value:"411625"},{label:"淮阳县",value:"411626"},{label:"太康县",value:"411627"},{label:"鹿邑县",value:"411628"},{label:"河南周口经济开发区",value:"411671"},{label:"项城市",value:"411681"}],[{label:"驿城区",value:"411702"},{label:"西平县",value:"411721"},{label:"上蔡县",value:"411722"},{label:"平舆县",value:"411723"},{label:"正阳县",value:"411724"},{label:"确山县",value:"411725"},{label:"泌阳县",value:"411726"},{label:"汝南县",value:"411727"},{label:"遂平县",value:"411728"},{label:"新蔡县",value:"411729"},{label:"河南驻马店经济开发区",value:"411771"}],[{label:"济源市",value:"419001"}]],[[{label:"江岸区",value:"420102"},{label:"江汉区",value:"420103"},{label:"硚口区",value:"420104"},{label:"汉阳区",value:"420105"},{label:"武昌区",value:"420106"},{label:"青山区",value:"420107"},{label:"洪山区",value:"420111"},{label:"东西湖区",value:"420112"},{label:"汉南区",value:"420113"},{label:"蔡甸区",value:"420114"},{label:"江夏区",value:"420115"},{label:"黄陂区",value:"420116"},{label:"新洲区",value:"420117"}],[{label:"黄石港区",value:"420202"},{label:"西塞山区",value:"420203"},{label:"下陆区",value:"420204"},{label:"铁山区",value:"420205"},{label:"阳新县",value:"420222"},{label:"大冶市",value:"420281"}],[{label:"茅箭区",value:"420302"},{label:"张湾区",value:"420303"},{label:"郧阳区",value:"420304"},{label:"郧西县",value:"420322"},{label:"竹山县",value:"420323"},{label:"竹溪县",value:"420324"},{label:"房县",value:"420325"},{label:"丹江口市",value:"420381"}],[{label:"西陵区",value:"420502"},{label:"伍家岗区",value:"420503"},{label:"点军区",value:"420504"},{label:"猇亭区",value:"420505"},{label:"夷陵区",value:"420506"},{label:"远安县",value:"420525"},{label:"兴山县",value:"420526"},{label:"秭归县",value:"420527"},{label:"长阳土家族自治县",value:"420528"},{label:"五峰土家族自治县",value:"420529"},{label:"宜都市",value:"420581"},{label:"当阳市",value:"420582"},{label:"枝江市",value:"420583"}],[{label:"襄城区",value:"420602"},{label:"樊城区",value:"420606"},{label:"襄州区",value:"420607"},{label:"南漳县",value:"420624"},{label:"谷城县",value:"420625"},{label:"保康县",value:"420626"},{label:"老河口市",value:"420682"},{label:"枣阳市",value:"420683"},{label:"宜城市",value:"420684"}],[{label:"梁子湖区",value:"420702"},{label:"华容区",value:"420703"},{label:"鄂城区",value:"420704"}],[{label:"东宝区",value:"420802"},{label:"掇刀区",value:"420804"},{label:"京山县",value:"420821"},{label:"沙洋县",value:"420822"},{label:"钟祥市",value:"420881"}],[{label:"孝南区",value:"420902"},{label:"孝昌县",value:"420921"},{label:"大悟县",value:"420922"},{label:"云梦县",value:"420923"},{label:"应城市",value:"420981"},{label:"安陆市",value:"420982"},{label:"汉川市",value:"420984"}],[{label:"沙市区",value:"421002"},{label:"荆州区",value:"421003"},{label:"公安县",value:"421022"},{label:"监利县",value:"421023"},{label:"江陵县",value:"421024"},{label:"荆州经济技术开发区",value:"421071"},{label:"石首市",value:"421081"},{label:"洪湖市",value:"421083"},{label:"松滋市",value:"421087"}],[{label:"黄州区",value:"421102"},{label:"团风县",value:"421121"},{label:"红安县",value:"421122"},{label:"罗田县",value:"421123"},{label:"英山县",value:"421124"},{label:"浠水县",value:"421125"},{label:"蕲春县",value:"421126"},{label:"黄梅县",value:"421127"},{label:"龙感湖管理区",value:"421171"},{label:"麻城市",value:"421181"},{label:"武穴市",value:"421182"}],[{label:"咸安区",value:"421202"},{label:"嘉鱼县",value:"421221"},{label:"通城县",value:"421222"},{label:"崇阳县",value:"421223"},{label:"通山县",value:"421224"},{label:"赤壁市",value:"421281"}],[{label:"曾都区",value:"421303"},{label:"随县",value:"421321"},{label:"广水市",value:"421381"}],[{label:"恩施市",value:"422801"},{label:"利川市",value:"422802"},{label:"建始县",value:"422822"},{label:"巴东县",value:"422823"},{label:"宣恩县",value:"422825"},{label:"咸丰县",value:"422826"},{label:"来凤县",value:"422827"},{label:"鹤峰县",value:"422828"}],[{label:"仙桃市",value:"429004"},{label:"潜江市",value:"429005"},{label:"天门市",value:"429006"},{label:"神农架林区",value:"429021"}]],[[{label:"芙蓉区",value:"430102"},{label:"天心区",value:"430103"},{label:"岳麓区",value:"430104"},{label:"开福区",value:"430105"},{label:"雨花区",value:"430111"},{label:"望城区",value:"430112"},{label:"长沙县",value:"430121"},{label:"浏阳市",value:"430181"},{label:"宁乡市",value:"430182"}],[{label:"荷塘区",value:"430202"},{label:"芦淞区",value:"430203"},{label:"石峰区",value:"430204"},{label:"天元区",value:"430211"},{label:"株洲县",value:"430221"},{label:"攸县",value:"430223"},{label:"茶陵县",value:"430224"},{label:"炎陵县",value:"430225"},{label:"云龙示范区",value:"430271"},{label:"醴陵市",value:"430281"}],[{label:"雨湖区",value:"430302"},{label:"岳塘区",value:"430304"},{label:"湘潭县",value:"430321"},{label:"湖南湘潭高新技术产业园区",value:"430371"},{label:"湘潭昭山示范区",value:"430372"},{label:"湘潭九华示范区",value:"430373"},{label:"湘乡市",value:"430381"},{label:"韶山市",value:"430382"}],[{label:"珠晖区",value:"430405"},{label:"雁峰区",value:"430406"},{label:"石鼓区",value:"430407"},{label:"蒸湘区",value:"430408"},{label:"南岳区",value:"430412"},{label:"衡阳县",value:"430421"},{label:"衡南县",value:"430422"},{label:"衡山县",value:"430423"},{label:"衡东县",value:"430424"},{label:"祁东县",value:"430426"},{label:"衡阳综合保税区",value:"430471"},{label:"湖南衡阳高新技术产业园区",value:"430472"},{label:"湖南衡阳松木经济开发区",value:"430473"},{label:"耒阳市",value:"430481"},{label:"常宁市",value:"430482"}],[{label:"双清区",value:"430502"},{label:"大祥区",value:"430503"},{label:"北塔区",value:"430511"},{label:"邵东县",value:"430521"},{label:"新邵县",value:"430522"},{label:"邵阳县",value:"430523"},{label:"隆回县",value:"430524"},{label:"洞口县",value:"430525"},{label:"绥宁县",value:"430527"},{label:"新宁县",value:"430528"},{label:"城步苗族自治县",value:"430529"},{label:"武冈市",value:"430581"}],[{label:"岳阳楼区",value:"430602"},{label:"云溪区",value:"430603"},{label:"君山区",value:"430611"},{label:"岳阳县",value:"430621"},{label:"华容县",value:"430623"},{label:"湘阴县",value:"430624"},{label:"平江县",value:"430626"},{label:"岳阳市屈原管理区",value:"430671"},{label:"汨罗市",value:"430681"},{label:"临湘市",value:"430682"}],[{label:"武陵区",value:"430702"},{label:"鼎城区",value:"430703"},{label:"安乡县",value:"430721"},{label:"汉寿县",value:"430722"},{label:"澧县",value:"430723"},{label:"临澧县",value:"430724"},{label:"桃源县",value:"430725"},{label:"石门县",value:"430726"},{label:"常德市西洞庭管理区",value:"430771"},{label:"津市市",value:"430781"}],[{label:"永定区",value:"430802"},{label:"武陵源区",value:"430811"},{label:"慈利县",value:"430821"},{label:"桑植县",value:"430822"}],[{label:"资阳区",value:"430902"},{label:"赫山区",value:"430903"},{label:"南县",value:"430921"},{label:"桃江县",value:"430922"},{label:"安化县",value:"430923"},{label:"益阳市大通湖管理区",value:"430971"},{label:"湖南益阳高新技术产业园区",value:"430972"},{label:"沅江市",value:"430981"}],[{label:"北湖区",value:"431002"},{label:"苏仙区",value:"431003"},{label:"桂阳县",value:"431021"},{label:"宜章县",value:"431022"},{label:"永兴县",value:"431023"},{label:"嘉禾县",value:"431024"},{label:"临武县",value:"431025"},{label:"汝城县",value:"431026"},{label:"桂东县",value:"431027"},{label:"安仁县",value:"431028"},{label:"资兴市",value:"431081"}],[{label:"零陵区",value:"431102"},{label:"冷水滩区",value:"431103"},{label:"祁阳县",value:"431121"},{label:"东安县",value:"431122"},{label:"双牌县",value:"431123"},{label:"道县",value:"431124"},{label:"江永县",value:"431125"},{label:"宁远县",value:"431126"},{label:"蓝山县",value:"431127"},{label:"新田县",value:"431128"},{label:"江华瑶族自治县",value:"431129"},{label:"永州经济技术开发区",value:"431171"},{label:"永州市金洞管理区",value:"431172"},{label:"永州市回龙圩管理区",value:"431173"}],[{label:"鹤城区",value:"431202"},{label:"中方县",value:"431221"},{label:"沅陵县",value:"431222"},{label:"辰溪县",value:"431223"},{label:"溆浦县",value:"431224"},{label:"会同县",value:"431225"},{label:"麻阳苗族自治县",value:"431226"},{label:"新晃侗族自治县",value:"431227"},{label:"芷江侗族自治县",value:"431228"},{label:"靖州苗族侗族自治县",value:"431229"},{label:"通道侗族自治县",value:"431230"},{label:"怀化市洪江管理区",value:"431271"},{label:"洪江市",value:"431281"}],[{label:"娄星区",value:"431302"},{label:"双峰县",value:"431321"},{label:"新化县",value:"431322"},{label:"冷水江市",value:"431381"},{label:"涟源市",value:"431382"}],[{label:"吉首市",value:"433101"},{label:"泸溪县",value:"433122"},{label:"凤凰县",value:"433123"},{label:"花垣县",value:"433124"},{label:"保靖县",value:"433125"},{label:"古丈县",value:"433126"},{label:"永顺县",value:"433127"},{label:"龙山县",value:"433130"},{label:"湖南吉首经济开发区",value:"433172"},{label:"湖南永顺经济开发区",value:"433173"}]],[[{label:"荔湾区",value:"440103"},{label:"越秀区",value:"440104"},{label:"海珠区",value:"440105"},{label:"天河区",value:"440106"},{label:"白云区",value:"440111"},{label:"黄埔区",value:"440112"},{label:"番禺区",value:"440113"},{label:"花都区",value:"440114"},{label:"南沙区",value:"440115"},{label:"从化区",value:"440117"},{label:"增城区",value:"440118"}],[{label:"武江区",value:"440203"},{label:"浈江区",value:"440204"},{label:"曲江区",value:"440205"},{label:"始兴县",value:"440222"},{label:"仁化县",value:"440224"},{label:"翁源县",value:"440229"},{label:"乳源瑶族自治县",value:"440232"},{label:"新丰县",value:"440233"},{label:"乐昌市",value:"440281"},{label:"南雄市",value:"440282"}],[{label:"罗湖区",value:"440303"},{label:"福田区",value:"440304"},{label:"南山区",value:"440305"},{label:"宝安区",value:"440306"},{label:"龙岗区",value:"440307"},{label:"盐田区",value:"440308"},{label:"龙华区",value:"440309"},{label:"坪山区",value:"440310"}],[{label:"香洲区",value:"440402"},{label:"斗门区",value:"440403"},{label:"金湾区",value:"440404"}],[{label:"龙湖区",value:"440507"},{label:"金平区",value:"440511"},{label:"濠江区",value:"440512"},{label:"潮阳区",value:"440513"},{label:"潮南区",value:"440514"},{label:"澄海区",value:"440515"},{label:"南澳县",value:"440523"}],[{label:"禅城区",value:"440604"},{label:"南海区",value:"440605"},{label:"顺德区",value:"440606"},{label:"三水区",value:"440607"},{label:"高明区",value:"440608"}],[{label:"蓬江区",value:"440703"},{label:"江海区",value:"440704"},{label:"新会区",value:"440705"},{label:"台山市",value:"440781"},{label:"开平市",value:"440783"},{label:"鹤山市",value:"440784"},{label:"恩平市",value:"440785"}],[{label:"赤坎区",value:"440802"},{label:"霞山区",value:"440803"},{label:"坡头区",value:"440804"},{label:"麻章区",value:"440811"},{label:"遂溪县",value:"440823"},{label:"徐闻县",value:"440825"},{label:"廉江市",value:"440881"},{label:"雷州市",value:"440882"},{label:"吴川市",value:"440883"}],[{label:"茂南区",value:"440902"},{label:"电白区",value:"440904"},{label:"高州市",value:"440981"},{label:"化州市",value:"440982"},{label:"信宜市",value:"440983"}],[{label:"端州区",value:"441202"},{label:"鼎湖区",value:"441203"},{label:"高要区",value:"441204"},{label:"广宁县",value:"441223"},{label:"怀集县",value:"441224"},{label:"封开县",value:"441225"},{label:"德庆县",value:"441226"},{label:"四会市",value:"441284"}],[{label:"惠城区",value:"441302"},{label:"惠阳区",value:"441303"},{label:"博罗县",value:"441322"},{label:"惠东县",value:"441323"},{label:"龙门县",value:"441324"}],[{label:"梅江区",value:"441402"},{label:"梅县区",value:"441403"},{label:"大埔县",value:"441422"},{label:"丰顺县",value:"441423"},{label:"五华县",value:"441424"},{label:"平远县",value:"441426"},{label:"蕉岭县",value:"441427"},{label:"兴宁市",value:"441481"}],[{label:"城区",value:"441502"},{label:"海丰县",value:"441521"},{label:"陆河县",value:"441523"},{label:"陆丰市",value:"441581"}],[{label:"源城区",value:"441602"},{label:"紫金县",value:"441621"},{label:"龙川县",value:"441622"},{label:"连平县",value:"441623"},{label:"和平县",value:"441624"},{label:"东源县",value:"441625"}],[{label:"江城区",value:"441702"},{label:"阳东区",value:"441704"},{label:"阳西县",value:"441721"},{label:"阳春市",value:"441781"}],[{label:"清城区",value:"441802"},{label:"清新区",value:"441803"},{label:"佛冈县",value:"441821"},{label:"阳山县",value:"441823"},{label:"连山壮族瑶族自治县",value:"441825"},{label:"连南瑶族自治县",value:"441826"},{label:"英德市",value:"441881"},{label:"连州市",value:"441882"}],[{label:"东莞市",value:"441900"}],[{label:"中山市",value:"442000"}],[{label:"湘桥区",value:"445102"},{label:"潮安区",value:"445103"},{label:"饶平县",value:"445122"}],[{label:"榕城区",value:"445202"},{label:"揭东区",value:"445203"},{label:"揭西县",value:"445222"},{label:"惠来县",value:"445224"},{label:"普宁市",value:"445281"}],[{label:"云城区",value:"445302"},{label:"云安区",value:"445303"},{label:"新兴县",value:"445321"},{label:"郁南县",value:"445322"},{label:"罗定市",value:"445381"}]],[[{label:"兴宁区",value:"450102"},{label:"青秀区",value:"450103"},{label:"江南区",value:"450105"},{label:"西乡塘区",value:"450107"},{label:"良庆区",value:"450108"},{label:"邕宁区",value:"450109"},{label:"武鸣区",value:"450110"},{label:"隆安县",value:"450123"},{label:"马山县",value:"450124"},{label:"上林县",value:"450125"},{label:"宾阳县",value:"450126"},{label:"横县",value:"450127"}],[{label:"城中区",value:"450202"},{label:"鱼峰区",value:"450203"},{label:"柳南区",value:"450204"},{label:"柳北区",value:"450205"},{label:"柳江区",value:"450206"},{label:"柳城县",value:"450222"},{label:"鹿寨县",value:"450223"},{label:"融安县",value:"450224"},{label:"融水苗族自治县",value:"450225"},{label:"三江侗族自治县",value:"450226"}],[{label:"秀峰区",value:"450302"},{label:"叠彩区",value:"450303"},{label:"象山区",value:"450304"},{label:"七星区",value:"450305"},{label:"雁山区",value:"450311"},{label:"临桂区",value:"450312"},{label:"阳朔县",value:"450321"},{label:"灵川县",value:"450323"},{label:"全州县",value:"450324"},{label:"兴安县",value:"450325"},{label:"永福县",value:"450326"},{label:"灌阳县",value:"450327"},{label:"龙胜各族自治县",value:"450328"},{label:"资源县",value:"450329"},{label:"平乐县",value:"450330"},{label:"荔浦县",value:"450331"},{label:"恭城瑶族自治县",value:"450332"}],[{label:"万秀区",value:"450403"},{label:"长洲区",value:"450405"},{label:"龙圩区",value:"450406"},{label:"苍梧县",value:"450421"},{label:"藤县",value:"450422"},{label:"蒙山县",value:"450423"},{label:"岑溪市",value:"450481"}],[{label:"海城区",value:"450502"},{label:"银海区",value:"450503"},{label:"铁山港区",value:"450512"},{label:"合浦县",value:"450521"}],[{label:"港口区",value:"450602"},{label:"防城区",value:"450603"},{label:"上思县",value:"450621"},{label:"东兴市",value:"450681"}],[{label:"钦南区",value:"450702"},{label:"钦北区",value:"450703"},{label:"灵山县",value:"450721"},{label:"浦北县",value:"450722"}],[{label:"港北区",value:"450802"},{label:"港南区",value:"450803"},{label:"覃塘区",value:"450804"},{label:"平南县",value:"450821"},{label:"桂平市",value:"450881"}],[{label:"玉州区",value:"450902"},{label:"福绵区",value:"450903"},{label:"容县",value:"450921"},{label:"陆川县",value:"450922"},{label:"博白县",value:"450923"},{label:"兴业县",value:"450924"},{label:"北流市",value:"450981"}],[{label:"右江区",value:"451002"},{label:"田阳县",value:"451021"},{label:"田东县",value:"451022"},{label:"平果县",value:"451023"},{label:"德保县",value:"451024"},{label:"那坡县",value:"451026"},{label:"凌云县",value:"451027"},{label:"乐业县",value:"451028"},{label:"田林县",value:"451029"},{label:"西林县",value:"451030"},{label:"隆林各族自治县",value:"451031"},{label:"靖西市",value:"451081"}],[{label:"八步区",value:"451102"},{label:"平桂区",value:"451103"},{label:"昭平县",value:"451121"},{label:"钟山县",value:"451122"},{label:"富川瑶族自治县",value:"451123"}],[{label:"金城江区",value:"451202"},{label:"宜州区",value:"451203"},{label:"南丹县",value:"451221"},{label:"天峨县",value:"451222"},{label:"凤山县",value:"451223"},{label:"东兰县",value:"451224"},{label:"罗城仫佬族自治县",value:"451225"},{label:"环江毛南族自治县",value:"451226"},{label:"巴马瑶族自治县",value:"451227"},{label:"都安瑶族自治县",value:"451228"},{label:"大化瑶族自治县",value:"451229"}],[{label:"兴宾区",value:"451302"},{label:"忻城县",value:"451321"},{label:"象州县",value:"451322"},{label:"武宣县",value:"451323"},{label:"金秀瑶族自治县",value:"451324"},{label:"合山市",value:"451381"}],[{label:"江州区",value:"451402"},{label:"扶绥县",value:"451421"},{label:"宁明县",value:"451422"},{label:"龙州县",value:"451423"},{label:"大新县",value:"451424"},{label:"天等县",value:"451425"},{label:"凭祥市",value:"451481"}]],[[{label:"秀英区",value:"460105"},{label:"龙华区",value:"460106"},{label:"琼山区",value:"460107"},{label:"美兰区",value:"460108"}],[{label:"海棠区",value:"460202"},{label:"吉阳区",value:"460203"},{label:"天涯区",value:"460204"},{label:"崖州区",value:"460205"}],[{label:"西沙群岛",value:"460321"},{label:"南沙群岛",value:"460322"},{label:"中沙群岛的岛礁及其海域",value:"460323"}],[{label:"儋州市",value:"460400"}],[{label:"五指山市",value:"469001"},{label:"琼海市",value:"469002"},{label:"文昌市",value:"469005"},{label:"万宁市",value:"469006"},{label:"东方市",value:"469007"},{label:"定安县",value:"469021"},{label:"屯昌县",value:"469022"},{label:"澄迈县",value:"469023"},{label:"临高县",value:"469024"},{label:"白沙黎族自治县",value:"469025"},{label:"昌江黎族自治县",value:"469026"},{label:"乐东黎族自治县",value:"469027"},{label:"陵水黎族自治县",value:"469028"},{label:"保亭黎族苗族自治县",value:"469029"},{label:"琼中黎族苗族自治县",value:"469030"}]],[[{label:"万州区",value:"500101"},{label:"涪陵区",value:"500102"},{label:"渝中区",value:"500103"},{label:"大渡口区",value:"500104"},{label:"江北区",value:"500105"},{label:"沙坪坝区",value:"500106"},{label:"九龙坡区",value:"500107"},{label:"南岸区",value:"500108"},{label:"北碚区",value:"500109"},{label:"綦江区",value:"500110"},{label:"大足区",value:"500111"},{label:"渝北区",value:"500112"},{label:"巴南区",value:"500113"},{label:"黔江区",value:"500114"},{label:"长寿区",value:"500115"},{label:"江津区",value:"500116"},{label:"合川区",value:"500117"},{label:"永川区",value:"500118"},{label:"南川区",value:"500119"},{label:"璧山区",value:"500120"},{label:"铜梁区",value:"500151"},{label:"潼南区",value:"500152"},{label:"荣昌区",value:"500153"},{label:"开州区",value:"500154"},{label:"梁平区",value:"500155"},{label:"武隆区",value:"500156"}],[{label:"城口县",value:"500229"},{label:"丰都县",value:"500230"},{label:"垫江县",value:"500231"},{label:"忠县",value:"500233"},{label:"云阳县",value:"500235"},{label:"奉节县",value:"500236"},{label:"巫山县",value:"500237"},{label:"巫溪县",value:"500238"},{label:"石柱土家族自治县",value:"500240"},{label:"秀山土家族苗族自治县",value:"500241"},{label:"酉阳土家族苗族自治县",value:"500242"},{label:"彭水苗族土家族自治县",value:"500243"}]],[[{label:"锦江区",value:"510104"},{label:"青羊区",value:"510105"},{label:"金牛区",value:"510106"},{label:"武侯区",value:"510107"},{label:"成华区",value:"510108"},{label:"龙泉驿区",value:"510112"},{label:"青白江区",value:"510113"},{label:"新都区",value:"510114"},{label:"温江区",value:"510115"},{label:"双流区",value:"510116"},{label:"郫都区",value:"510117"},{label:"金堂县",value:"510121"},{label:"大邑县",value:"510129"},{label:"蒲江县",value:"510131"},{label:"新津县",value:"510132"},{label:"都江堰市",value:"510181"},{label:"彭州市",value:"510182"},{label:"邛崃市",value:"510183"},{label:"崇州市",value:"510184"},{label:"简阳市",value:"510185"}],[{label:"自流井区",value:"510302"},{label:"贡井区",value:"510303"},{label:"大安区",value:"510304"},{label:"沿滩区",value:"510311"},{label:"荣县",value:"510321"},{label:"富顺县",value:"510322"}],[{label:"东区",value:"510402"},{label:"西区",value:"510403"},{label:"仁和区",value:"510411"},{label:"米易县",value:"510421"},{label:"盐边县",value:"510422"}],[{label:"江阳区",value:"510502"},{label:"纳溪区",value:"510503"},{label:"龙马潭区",value:"510504"},{label:"泸县",value:"510521"},{label:"合江县",value:"510522"},{label:"叙永县",value:"510524"},{label:"古蔺县",value:"510525"}],[{label:"旌阳区",value:"510603"},{label:"罗江区",value:"510604"},{label:"中江县",value:"510623"},{label:"广汉市",value:"510681"},{label:"什邡市",value:"510682"},{label:"绵竹市",value:"510683"}],[{label:"涪城区",value:"510703"},{label:"游仙区",value:"510704"},{label:"安州区",value:"510705"},{label:"三台县",value:"510722"},{label:"盐亭县",value:"510723"},{label:"梓潼县",value:"510725"},{label:"北川羌族自治县",value:"510726"},{label:"平武县",value:"510727"},{label:"江油市",value:"510781"}],[{label:"利州区",value:"510802"},{label:"昭化区",value:"510811"},{label:"朝天区",value:"510812"},{label:"旺苍县",value:"510821"},{label:"青川县",value:"510822"},{label:"剑阁县",value:"510823"},{label:"苍溪县",value:"510824"}],[{label:"船山区",value:"510903"},{label:"安居区",value:"510904"},{label:"蓬溪县",value:"510921"},{label:"射洪县",value:"510922"},{label:"大英县",value:"510923"}],[{label:"市中区",value:"511002"},{label:"东兴区",value:"511011"},{label:"威远县",value:"511024"},{label:"资中县",value:"511025"},{label:"内江经济开发区",value:"511071"},{label:"隆昌市",value:"511083"}],[{label:"市中区",value:"511102"},{label:"沙湾区",value:"511111"},{label:"五通桥区",value:"511112"},{label:"金口河区",value:"511113"},{label:"犍为县",value:"511123"},{label:"井研县",value:"511124"},{label:"夹江县",value:"511126"},{label:"沐川县",value:"511129"},{label:"峨边彝族自治县",value:"511132"},{label:"马边彝族自治县",value:"511133"},{label:"峨眉山市",value:"511181"}],[{label:"顺庆区",value:"511302"},{label:"高坪区",value:"511303"},{label:"嘉陵区",value:"511304"},{label:"南部县",value:"511321"},{label:"营山县",value:"511322"},{label:"蓬安县",value:"511323"},{label:"仪陇县",value:"511324"},{label:"西充县",value:"511325"},{label:"阆中市",value:"511381"}],[{label:"东坡区",value:"511402"},{label:"彭山区",value:"511403"},{label:"仁寿县",value:"511421"},{label:"洪雅县",value:"511423"},{label:"丹棱县",value:"511424"},{label:"青神县",value:"511425"}],[{label:"翠屏区",value:"511502"},{label:"南溪区",value:"511503"},{label:"宜宾县",value:"511521"},{label:"江安县",value:"511523"},{label:"长宁县",value:"511524"},{label:"高县",value:"511525"},{label:"珙县",value:"511526"},{label:"筠连县",value:"511527"},{label:"兴文县",value:"511528"},{label:"屏山县",value:"511529"}],[{label:"广安区",value:"511602"},{label:"前锋区",value:"511603"},{label:"岳池县",value:"511621"},{label:"武胜县",value:"511622"},{label:"邻水县",value:"511623"},{label:"华蓥市",value:"511681"}],[{label:"通川区",value:"511702"},{label:"达川区",value:"511703"},{label:"宣汉县",value:"511722"},{label:"开江县",value:"511723"},{label:"大竹县",value:"511724"},{label:"渠县",value:"511725"},{label:"达州经济开发区",value:"511771"},{label:"万源市",value:"511781"}],[{label:"雨城区",value:"511802"},{label:"名山区",value:"511803"},{label:"荥经县",value:"511822"},{label:"汉源县",value:"511823"},{label:"石棉县",value:"511824"},{label:"天全县",value:"511825"},{label:"芦山县",value:"511826"},{label:"宝兴县",value:"511827"}],[{label:"巴州区",value:"511902"},{label:"恩阳区",value:"511903"},{label:"通江县",value:"511921"},{label:"南江县",value:"511922"},{label:"平昌县",value:"511923"},{label:"巴中经济开发区",value:"511971"}],[{label:"雁江区",value:"512002"},{label:"安岳县",value:"512021"},{label:"乐至县",value:"512022"}],[{label:"马尔康市",value:"513201"},{label:"汶川县",value:"513221"},{label:"理县",value:"513222"},{label:"茂县",value:"513223"},{label:"松潘县",value:"513224"},{label:"九寨沟县",value:"513225"},{label:"金川县",value:"513226"},{label:"小金县",value:"513227"},{label:"黑水县",value:"513228"},{label:"壤塘县",value:"513230"},{label:"阿坝县",value:"513231"},{label:"若尔盖县",value:"513232"},{label:"红原县",value:"513233"}],[{label:"康定市",value:"513301"},{label:"泸定县",value:"513322"},{label:"丹巴县",value:"513323"},{label:"九龙县",value:"513324"},{label:"雅江县",value:"513325"},{label:"道孚县",value:"513326"},{label:"炉霍县",value:"513327"},{label:"甘孜县",value:"513328"},{label:"新龙县",value:"513329"},{label:"德格县",value:"513330"},{label:"白玉县",value:"513331"},{label:"石渠县",value:"513332"},{label:"色达县",value:"513333"},{label:"理塘县",value:"513334"},{label:"巴塘县",value:"513335"},{label:"乡城县",value:"513336"},{label:"稻城县",value:"513337"},{label:"得荣县",value:"513338"}],[{label:"西昌市",value:"513401"},{label:"木里藏族自治县",value:"513422"},{label:"盐源县",value:"513423"},{label:"德昌县",value:"513424"},{label:"会理县",value:"513425"},{label:"会东县",value:"513426"},{label:"宁南县",value:"513427"},{label:"普格县",value:"513428"},{label:"布拖县",value:"513429"},{label:"金阳县",value:"513430"},{label:"昭觉县",value:"513431"},{label:"喜德县",value:"513432"},{label:"冕宁县",value:"513433"},{label:"越西县",value:"513434"},{label:"甘洛县",value:"513435"},{label:"美姑县",value:"513436"},{label:"雷波县",value:"513437"}]],[[{label:"南明区",value:"520102"},{label:"云岩区",value:"520103"},{label:"花溪区",value:"520111"},{label:"乌当区",value:"520112"},{label:"白云区",value:"520113"},{label:"观山湖区",value:"520115"},{label:"开阳县",value:"520121"},{label:"息烽县",value:"520122"},{label:"修文县",value:"520123"},{label:"清镇市",value:"520181"}],[{label:"钟山区",value:"520201"},{label:"六枝特区",value:"520203"},{label:"水城县",value:"520221"},{label:"盘州市",value:"520281"}],[{label:"红花岗区",value:"520302"},{label:"汇川区",value:"520303"},{label:"播州区",value:"520304"},{label:"桐梓县",value:"520322"},{label:"绥阳县",value:"520323"},{label:"正安县",value:"520324"},{label:"道真仡佬族苗族自治县",value:"520325"},{label:"务川仡佬族苗族自治县",value:"520326"},{label:"凤冈县",value:"520327"},{label:"湄潭县",value:"520328"},{label:"余庆县",value:"520329"},{label:"习水县",value:"520330"},{label:"赤水市",value:"520381"},{label:"仁怀市",value:"520382"}],[{label:"西秀区",value:"520402"},{label:"平坝区",value:"520403"},{label:"普定县",value:"520422"},{label:"镇宁布依族苗族自治县",value:"520423"},{label:"关岭布依族苗族自治县",value:"520424"},{label:"紫云苗族布依族自治县",value:"520425"}],[{label:"七星关区",value:"520502"},{label:"大方县",value:"520521"},{label:"黔西县",value:"520522"},{label:"金沙县",value:"520523"},{label:"织金县",value:"520524"},{label:"纳雍县",value:"520525"},{label:"威宁彝族回族苗族自治县",value:"520526"},{label:"赫章县",value:"520527"}],[{label:"碧江区",value:"520602"},{label:"万山区",value:"520603"},{label:"江口县",value:"520621"},{label:"玉屏侗族自治县",value:"520622"},{label:"石阡县",value:"520623"},{label:"思南县",value:"520624"},{label:"印江土家族苗族自治县",value:"520625"},{label:"德江县",value:"520626"},{label:"沿河土家族自治县",value:"520627"},{label:"松桃苗族自治县",value:"520628"}],[{label:"兴义市",value:"522301"},{label:"兴仁县",value:"522322"},{label:"普安县",value:"522323"},{label:"晴隆县",value:"522324"},{label:"贞丰县",value:"522325"},{label:"望谟县",value:"522326"},{label:"册亨县",value:"522327"},{label:"安龙县",value:"522328"}],[{label:"凯里市",value:"522601"},{label:"黄平县",value:"522622"},{label:"施秉县",value:"522623"},{label:"三穗县",value:"522624"},{label:"镇远县",value:"522625"},{label:"岑巩县",value:"522626"},{label:"天柱县",value:"522627"},{label:"锦屏县",value:"522628"},{label:"剑河县",value:"522629"},{label:"台江县",value:"522630"},{label:"黎平县",value:"522631"},{label:"榕江县",value:"522632"},{label:"从江县",value:"522633"},{label:"雷山县",value:"522634"},{label:"麻江县",value:"522635"},{label:"丹寨县",value:"522636"}],[{label:"都匀市",value:"522701"},{label:"福泉市",value:"522702"},{label:"荔波县",value:"522722"},{label:"贵定县",value:"522723"},{label:"瓮安县",value:"522725"},{label:"独山县",value:"522726"},{label:"平塘县",value:"522727"},{label:"罗甸县",value:"522728"},{label:"长顺县",value:"522729"},{label:"龙里县",value:"522730"},{label:"惠水县",value:"522731"},{label:"三都水族自治县",value:"522732"}]],[[{label:"五华区",value:"530102"},{label:"盘龙区",value:"530103"},{label:"官渡区",value:"530111"},{label:"西山区",value:"530112"},{label:"东川区",value:"530113"},{label:"呈贡区",value:"530114"},{label:"晋宁区",value:"530115"},{label:"富民县",value:"530124"},{label:"宜良县",value:"530125"},{label:"石林彝族自治县",value:"530126"},{label:"嵩明县",value:"530127"},{label:"禄劝彝族苗族自治县",value:"530128"},{label:"寻甸回族彝族自治县",value:"530129"},{label:"安宁市",value:"530181"}],[{label:"麒麟区",value:"530302"},{label:"沾益区",value:"530303"},{label:"马龙县",value:"530321"},{label:"陆良县",value:"530322"},{label:"师宗县",value:"530323"},{label:"罗平县",value:"530324"},{label:"富源县",value:"530325"},{label:"会泽县",value:"530326"},{label:"宣威市",value:"530381"}],[{label:"红塔区",value:"530402"},{label:"江川区",value:"530403"},{label:"澄江县",value:"530422"},{label:"通海县",value:"530423"},{label:"华宁县",value:"530424"},{label:"易门县",value:"530425"},{label:"峨山彝族自治县",value:"530426"},{label:"新平彝族傣族自治县",value:"530427"},{label:"元江哈尼族彝族傣族自治县",value:"530428"}],[{label:"隆阳区",value:"530502"},{label:"施甸县",value:"530521"},{label:"龙陵县",value:"530523"},{label:"昌宁县",value:"530524"},{label:"腾冲市",value:"530581"}],[{label:"昭阳区",value:"530602"},{label:"鲁甸县",value:"530621"},{label:"巧家县",value:"530622"},{label:"盐津县",value:"530623"},{label:"大关县",value:"530624"},{label:"永善县",value:"530625"},{label:"绥江县",value:"530626"},{label:"镇雄县",value:"530627"},{label:"彝良县",value:"530628"},{label:"威信县",value:"530629"},{label:"水富县",value:"530630"}],[{label:"古城区",value:"530702"},{label:"玉龙纳西族自治县",value:"530721"},{label:"永胜县",value:"530722"},{label:"华坪县",value:"530723"},{label:"宁蒗彝族自治县",value:"530724"}],[{label:"思茅区",value:"530802"},{label:"宁洱哈尼族彝族自治县",value:"530821"},{label:"墨江哈尼族自治县",value:"530822"},{label:"景东彝族自治县",value:"530823"},{label:"景谷傣族彝族自治县",value:"530824"},{label:"镇沅彝族哈尼族拉祜族自治县",value:"530825"},{label:"江城哈尼族彝族自治县",value:"530826"},{label:"孟连傣族拉祜族佤族自治县",value:"530827"},{label:"澜沧拉祜族自治县",value:"530828"},{label:"西盟佤族自治县",value:"530829"}],[{label:"临翔区",value:"530902"},{label:"凤庆县",value:"530921"},{label:"云县",value:"530922"},{label:"永德县",value:"530923"},{label:"镇康县",value:"530924"},{label:"双江拉祜族佤族布朗族傣族自治县",value:"530925"},{label:"耿马傣族佤族自治县",value:"530926"},{label:"沧源佤族自治县",value:"530927"}],[{label:"楚雄市",value:"532301"},{label:"双柏县",value:"532322"},{label:"牟定县",value:"532323"},{label:"南华县",value:"532324"},{label:"姚安县",value:"532325"},{label:"大姚县",value:"532326"},{label:"永仁县",value:"532327"},{label:"元谋县",value:"532328"},{label:"武定县",value:"532329"},{label:"禄丰县",value:"532331"}],[{label:"个旧市",value:"532501"},{label:"开远市",value:"532502"},{label:"蒙自市",value:"532503"},{label:"弥勒市",value:"532504"},{label:"屏边苗族自治县",value:"532523"},{label:"建水县",value:"532524"},{label:"石屏县",value:"532525"},{label:"泸西县",value:"532527"},{label:"元阳县",value:"532528"},{label:"红河县",value:"532529"},{label:"金平苗族瑶族傣族自治县",value:"532530"},{label:"绿春县",value:"532531"},{label:"河口瑶族自治县",value:"532532"}],[{label:"文山市",value:"532601"},{label:"砚山县",value:"532622"},{label:"西畴县",value:"532623"},{label:"麻栗坡县",value:"532624"},{label:"马关县",value:"532625"},{label:"丘北县",value:"532626"},{label:"广南县",value:"532627"},{label:"富宁县",value:"532628"}],[{label:"景洪市",value:"532801"},{label:"勐海县",value:"532822"},{label:"勐腊县",value:"532823"}],[{label:"大理市",value:"532901"},{label:"漾濞彝族自治县",value:"532922"},{label:"祥云县",value:"532923"},{label:"宾川县",value:"532924"},{label:"弥渡县",value:"532925"},{label:"南涧彝族自治县",value:"532926"},{label:"巍山彝族回族自治县",value:"532927"},{label:"永平县",value:"532928"},{label:"云龙县",value:"532929"},{label:"洱源县",value:"532930"},{label:"剑川县",value:"532931"},{label:"鹤庆县",value:"532932"}],[{label:"瑞丽市",value:"533102"},{label:"芒市",value:"533103"},{label:"梁河县",value:"533122"},{label:"盈江县",value:"533123"},{label:"陇川县",value:"533124"}],[{label:"泸水市",value:"533301"},{label:"福贡县",value:"533323"},{label:"贡山独龙族怒族自治县",value:"533324"},{label:"兰坪白族普米族自治县",value:"533325"}],[{label:"香格里拉市",value:"533401"},{label:"德钦县",value:"533422"},{label:"维西傈僳族自治县",value:"533423"}]],[[{label:"城关区",value:"540102"},{label:"堆龙德庆区",value:"540103"},{label:"林周县",value:"540121"},{label:"当雄县",value:"540122"},{label:"尼木县",value:"540123"},{label:"曲水县",value:"540124"},{label:"达孜县",value:"540126"},{label:"墨竹工卡县",value:"540127"},{label:"格尔木藏青工业园区",value:"540171"},{label:"拉萨经济技术开发区",value:"540172"},{label:"西藏文化旅游创意园区",value:"540173"},{label:"达孜工业园区",value:"540174"}],[{label:"桑珠孜区",value:"540202"},{label:"南木林县",value:"540221"},{label:"江孜县",value:"540222"},{label:"定日县",value:"540223"},{label:"萨迦县",value:"540224"},{label:"拉孜县",value:"540225"},{label:"昂仁县",value:"540226"},{label:"谢通门县",value:"540227"},{label:"白朗县",value:"540228"},{label:"仁布县",value:"540229"},{label:"康马县",value:"540230"},{label:"定结县",value:"540231"},{label:"仲巴县",value:"540232"},{label:"亚东县",value:"540233"},{label:"吉隆县",value:"540234"},{label:"聂拉木县",value:"540235"},{label:"萨嘎县",value:"540236"},{label:"岗巴县",value:"540237"}],[{label:"卡若区",value:"540302"},{label:"江达县",value:"540321"},{label:"贡觉县",value:"540322"},{label:"类乌齐县",value:"540323"},{label:"丁青县",value:"540324"},{label:"察雅县",value:"540325"},{label:"八宿县",value:"540326"},{label:"左贡县",value:"540327"},{label:"芒康县",value:"540328"},{label:"洛隆县",value:"540329"},{label:"边坝县",value:"540330"}],[{label:"巴宜区",value:"540402"},{label:"工布江达县",value:"540421"},{label:"米林县",value:"540422"},{label:"墨脱县",value:"540423"},{label:"波密县",value:"540424"},{label:"察隅县",value:"540425"},{label:"朗县",value:"540426"}],[{label:"乃东区",value:"540502"},{label:"扎囊县",value:"540521"},{label:"贡嘎县",value:"540522"},{label:"桑日县",value:"540523"},{label:"琼结县",value:"540524"},{label:"曲松县",value:"540525"},{label:"措美县",value:"540526"},{label:"洛扎县",value:"540527"},{label:"加查县",value:"540528"},{label:"隆子县",value:"540529"},{label:"错那县",value:"540530"},{label:"浪卡子县",value:"540531"}],[{label:"那曲县",value:"542421"},{label:"嘉黎县",value:"542422"},{label:"比如县",value:"542423"},{label:"聂荣县",value:"542424"},{label:"安多县",value:"542425"},{label:"申扎县",value:"542426"},{label:"索县",value:"542427"},{label:"班戈县",value:"542428"},{label:"巴青县",value:"542429"},{label:"尼玛县",value:"542430"},{label:"双湖县",value:"542431"}],[{label:"普兰县",value:"542521"},{label:"札达县",value:"542522"},{label:"噶尔县",value:"542523"},{label:"日土县",value:"542524"},{label:"革吉县",value:"542525"},{label:"改则县",value:"542526"},{label:"措勤县",value:"542527"}]],[[{label:"新城区",value:"610102"},{label:"碑林区",value:"610103"},{label:"莲湖区",value:"610104"},{label:"灞桥区",value:"610111"},{label:"未央区",value:"610112"},{label:"雁塔区",value:"610113"},{label:"阎良区",value:"610114"},{label:"临潼区",value:"610115"},{label:"长安区",value:"610116"},{label:"高陵区",value:"610117"},{label:"鄠邑区",value:"610118"},{label:"蓝田县",value:"610122"},{label:"周至县",value:"610124"}],[{label:"王益区",value:"610202"},{label:"印台区",value:"610203"},{label:"耀州区",value:"610204"},{label:"宜君县",value:"610222"}],[{label:"渭滨区",value:"610302"},{label:"金台区",value:"610303"},{label:"陈仓区",value:"610304"},{label:"凤翔县",value:"610322"},{label:"岐山县",value:"610323"},{label:"扶风县",value:"610324"},{label:"眉县",value:"610326"},{label:"陇县",value:"610327"},{label:"千阳县",value:"610328"},{label:"麟游县",value:"610329"},{label:"凤县",value:"610330"},{label:"太白县",value:"610331"}],[{label:"秦都区",value:"610402"},{label:"杨陵区",value:"610403"},{label:"渭城区",value:"610404"},{label:"三原县",value:"610422"},{label:"泾阳县",value:"610423"},{label:"乾县",value:"610424"},{label:"礼泉县",value:"610425"},{label:"永寿县",value:"610426"},{label:"彬县",value:"610427"},{label:"长武县",value:"610428"},{label:"旬邑县",value:"610429"},{label:"淳化县",value:"610430"},{label:"武功县",value:"610431"},{label:"兴平市",value:"610481"}],[{label:"临渭区",value:"610502"},{label:"华州区",value:"610503"},{label:"潼关县",value:"610522"},{label:"大荔县",value:"610523"},{label:"合阳县",value:"610524"},{label:"澄城县",value:"610525"},{label:"蒲城县",value:"610526"},{label:"白水县",value:"610527"},{label:"富平县",value:"610528"},{label:"韩城市",value:"610581"},{label:"华阴市",value:"610582"}],[{label:"宝塔区",value:"610602"},{label:"安塞区",value:"610603"},{label:"延长县",value:"610621"},{label:"延川县",value:"610622"},{label:"子长县",value:"610623"},{label:"志丹县",value:"610625"},{label:"吴起县",value:"610626"},{label:"甘泉县",value:"610627"},{label:"富县",value:"610628"},{label:"洛川县",value:"610629"},{label:"宜川县",value:"610630"},{label:"黄龙县",value:"610631"},{label:"黄陵县",value:"610632"}],[{label:"汉台区",value:"610702"},{label:"南郑区",value:"610703"},{label:"城固县",value:"610722"},{label:"洋县",value:"610723"},{label:"西乡县",value:"610724"},{label:"勉县",value:"610725"},{label:"宁强县",value:"610726"},{label:"略阳县",value:"610727"},{label:"镇巴县",value:"610728"},{label:"留坝县",value:"610729"},{label:"佛坪县",value:"610730"}],[{label:"榆阳区",value:"610802"},{label:"横山区",value:"610803"},{label:"府谷县",value:"610822"},{label:"靖边县",value:"610824"},{label:"定边县",value:"610825"},{label:"绥德县",value:"610826"},{label:"米脂县",value:"610827"},{label:"佳县",value:"610828"},{label:"吴堡县",value:"610829"},{label:"清涧县",value:"610830"},{label:"子洲县",value:"610831"},{label:"神木市",value:"610881"}],[{label:"汉滨区",value:"610902"},{label:"汉阴县",value:"610921"},{label:"石泉县",value:"610922"},{label:"宁陕县",value:"610923"},{label:"紫阳县",value:"610924"},{label:"岚皋县",value:"610925"},{label:"平利县",value:"610926"},{label:"镇坪县",value:"610927"},{label:"旬阳县",value:"610928"},{label:"白河县",value:"610929"}],[{label:"商州区",value:"611002"},{label:"洛南县",value:"611021"},{label:"丹凤县",value:"611022"},{label:"商南县",value:"611023"},{label:"山阳县",value:"611024"},{label:"镇安县",value:"611025"},{label:"柞水县",value:"611026"}]],[[{label:"城关区",value:"620102"},{label:"七里河区",value:"620103"},{label:"西固区",value:"620104"},{label:"安宁区",value:"620105"},{label:"红古区",value:"620111"},{label:"永登县",value:"620121"},{label:"皋兰县",value:"620122"},{label:"榆中县",value:"620123"},{label:"兰州新区",value:"620171"}],[{label:"嘉峪关市",value:"620201"}],[{label:"金川区",value:"620302"},{label:"永昌县",value:"620321"}],[{label:"白银区",value:"620402"},{label:"平川区",value:"620403"},{label:"靖远县",value:"620421"},{label:"会宁县",value:"620422"},{label:"景泰县",value:"620423"}],[{label:"秦州区",value:"620502"},{label:"麦积区",value:"620503"},{label:"清水县",value:"620521"},{label:"秦安县",value:"620522"},{label:"甘谷县",value:"620523"},{label:"武山县",value:"620524"},{label:"张家川回族自治县",value:"620525"}],[{label:"凉州区",value:"620602"},{label:"民勤县",value:"620621"},{label:"古浪县",value:"620622"},{label:"天祝藏族自治县",value:"620623"}],[{label:"甘州区",value:"620702"},{label:"肃南裕固族自治县",value:"620721"},{label:"民乐县",value:"620722"},{label:"临泽县",value:"620723"},{label:"高台县",value:"620724"},{label:"山丹县",value:"620725"}],[{label:"崆峒区",value:"620802"},{label:"泾川县",value:"620821"},{label:"灵台县",value:"620822"},{label:"崇信县",value:"620823"},{label:"华亭县",value:"620824"},{label:"庄浪县",value:"620825"},{label:"静宁县",value:"620826"},{label:"平凉工业园区",value:"620871"}],[{label:"肃州区",value:"620902"},{label:"金塔县",value:"620921"},{label:"瓜州县",value:"620922"},{label:"肃北蒙古族自治县",value:"620923"},{label:"阿克塞哈萨克族自治县",value:"620924"},{label:"玉门市",value:"620981"},{label:"敦煌市",value:"620982"}],[{label:"西峰区",value:"621002"},{label:"庆城县",value:"621021"},{label:"环县",value:"621022"},{label:"华池县",value:"621023"},{label:"合水县",value:"621024"},{label:"正宁县",value:"621025"},{label:"宁县",value:"621026"},{label:"镇原县",value:"621027"}],[{label:"安定区",value:"621102"},{label:"通渭县",value:"621121"},{label:"陇西县",value:"621122"},{label:"渭源县",value:"621123"},{label:"临洮县",value:"621124"},{label:"漳县",value:"621125"},{label:"岷县",value:"621126"}],[{label:"武都区",value:"621202"},{label:"成县",value:"621221"},{label:"文县",value:"621222"},{label:"宕昌县",value:"621223"},{label:"康县",value:"621224"},{label:"西和县",value:"621225"},{label:"礼县",value:"621226"},{label:"徽县",value:"621227"},{label:"两当县",value:"621228"}],[{label:"临夏市",value:"622901"},{label:"临夏县",value:"622921"},{label:"康乐县",value:"622922"},{label:"永靖县",value:"622923"},{label:"广河县",value:"622924"},{label:"和政县",value:"622925"},{label:"东乡族自治县",value:"622926"},{label:"积石山保安族东乡族撒拉族自治县",value:"622927"}],[{label:"合作市",value:"623001"},{label:"临潭县",value:"623021"},{label:"卓尼县",value:"623022"},{label:"舟曲县",value:"623023"},{label:"迭部县",value:"623024"},{label:"玛曲县",value:"623025"},{label:"碌曲县",value:"623026"},{label:"夏河县",value:"623027"}]],[[{label:"城东区",value:"630102"},{label:"城中区",value:"630103"},{label:"城西区",value:"630104"},{label:"城北区",value:"630105"},{label:"大通回族土族自治县",value:"630121"},{label:"湟中县",value:"630122"},{label:"湟源县",value:"630123"}],[{label:"乐都区",value:"630202"},{label:"平安区",value:"630203"},{label:"民和回族土族自治县",value:"630222"},{label:"互助土族自治县",value:"630223"},{label:"化隆回族自治县",value:"630224"},{label:"循化撒拉族自治县",value:"630225"}],[{label:"门源回族自治县",value:"632221"},{label:"祁连县",value:"632222"},{label:"海晏县",value:"632223"},{label:"刚察县",value:"632224"}],[{label:"同仁县",value:"632321"},{label:"尖扎县",value:"632322"},{label:"泽库县",value:"632323"},{label:"河南蒙古族自治县",value:"632324"}],[{label:"共和县",value:"632521"},{label:"同德县",value:"632522"},{label:"贵德县",value:"632523"},{label:"兴海县",value:"632524"},{label:"贵南县",value:"632525"}],[{label:"玛沁县",value:"632621"},{label:"班玛县",value:"632622"},{label:"甘德县",value:"632623"},{label:"达日县",value:"632624"},{label:"久治县",value:"632625"},{label:"玛多县",value:"632626"}],[{label:"玉树市",value:"632701"},{label:"杂多县",value:"632722"},{label:"称多县",value:"632723"},{label:"治多县",value:"632724"},{label:"囊谦县",value:"632725"},{label:"曲麻莱县",value:"632726"}],[{label:"格尔木市",value:"632801"},{label:"德令哈市",value:"632802"},{label:"乌兰县",value:"632821"},{label:"都兰县",value:"632822"},{label:"天峻县",value:"632823"},{label:"大柴旦行政委员会",value:"632857"},{label:"冷湖行政委员会",value:"632858"},{label:"茫崖行政委员会",value:"632859"}]],[[{label:"兴庆区",value:"640104"},{label:"西夏区",value:"640105"},{label:"金凤区",value:"640106"},{label:"永宁县",value:"640121"},{label:"贺兰县",value:"640122"},{label:"灵武市",value:"640181"}],[{label:"大武口区",value:"640202"},{label:"惠农区",value:"640205"},{label:"平罗县",value:"640221"}],[{label:"利通区",value:"640302"},{label:"红寺堡区",value:"640303"},{label:"盐池县",value:"640323"},{label:"同心县",value:"640324"},{label:"青铜峡市",value:"640381"}],[{label:"原州区",value:"640402"},{label:"西吉县",value:"640422"},{label:"隆德县",value:"640423"},{label:"泾源县",value:"640424"},{label:"彭阳县",value:"640425"}],[{label:"沙坡头区",value:"640502"},{label:"中宁县",value:"640521"},{label:"海原县",value:"640522"}]],[[{label:"天山区",value:"650102"},{label:"沙依巴克区",value:"650103"},{label:"新市区",value:"650104"},{label:"水磨沟区",value:"650105"},{label:"头屯河区",value:"650106"},{label:"达坂城区",value:"650107"},{label:"米东区",value:"650109"},{label:"乌鲁木齐县",value:"650121"},{label:"乌鲁木齐经济技术开发区",value:"650171"},{label:"乌鲁木齐高新技术产业开发区",value:"650172"}],[{label:"独山子区",value:"650202"},{label:"克拉玛依区",value:"650203"},{label:"白碱滩区",value:"650204"},{label:"乌尔禾区",value:"650205"}],[{label:"高昌区",value:"650402"},{label:"鄯善县",value:"650421"},{label:"托克逊县",value:"650422"}],[{label:"伊州区",value:"650502"},{label:"巴里坤哈萨克自治县",value:"650521"},{label:"伊吾县",value:"650522"}],[{label:"昌吉市",value:"652301"},{label:"阜康市",value:"652302"},{label:"呼图壁县",value:"652323"},{label:"玛纳斯县",value:"652324"},{label:"奇台县",value:"652325"},{label:"吉木萨尔县",value:"652327"},{label:"木垒哈萨克自治县",value:"652328"}],[{label:"博乐市",value:"652701"},{label:"阿拉山口市",value:"652702"},{label:"精河县",value:"652722"},{label:"温泉县",value:"652723"}],[{label:"库尔勒市",value:"652801"},{label:"轮台县",value:"652822"},{label:"尉犁县",value:"652823"},{label:"若羌县",value:"652824"},{label:"且末县",value:"652825"},{label:"焉耆回族自治县",value:"652826"},{label:"和静县",value:"652827"},{label:"和硕县",value:"652828"},{label:"博湖县",value:"652829"},{label:"库尔勒经济技术开发区",value:"652871"}],[{label:"阿克苏市",value:"652901"},{label:"温宿县",value:"652922"},{label:"库车县",value:"652923"},{label:"沙雅县",value:"652924"},{label:"新和县",value:"652925"},{label:"拜城县",value:"652926"},{label:"乌什县",value:"652927"},{label:"阿瓦提县",value:"652928"},{label:"柯坪县",value:"652929"}],[{label:"阿图什市",value:"653001"},{label:"阿克陶县",value:"653022"},{label:"阿合奇县",value:"653023"},{label:"乌恰县",value:"653024"}],[{label:"喀什市",value:"653101"},{label:"疏附县",value:"653121"},{label:"疏勒县",value:"653122"},{label:"英吉沙县",value:"653123"},{label:"泽普县",value:"653124"},{label:"莎车县",value:"653125"},{label:"叶城县",value:"653126"},{label:"麦盖提县",value:"653127"},{label:"岳普湖县",value:"653128"},{label:"伽师县",value:"653129"},{label:"巴楚县",value:"653130"},{label:"塔什库尔干塔吉克自治县",value:"653131"}],[{label:"和田市",value:"653201"},{label:"和田县",value:"653221"},{label:"墨玉县",value:"653222"},{label:"皮山县",value:"653223"},{label:"洛浦县",value:"653224"},{label:"策勒县",value:"653225"},{label:"于田县",value:"653226"},{label:"民丰县",value:"653227"}],[{label:"伊宁市",value:"654002"},{label:"奎屯市",value:"654003"},{label:"霍尔果斯市",value:"654004"},{label:"伊宁县",value:"654021"},{label:"察布查尔锡伯自治县",value:"654022"},{label:"霍城县",value:"654023"},{label:"巩留县",value:"654024"},{label:"新源县",value:"654025"},{label:"昭苏县",value:"654026"},{label:"特克斯县",value:"654027"},{label:"尼勒克县",value:"654028"}],[{label:"塔城市",value:"654201"},{label:"乌苏市",value:"654202"},{label:"额敏县",value:"654221"},{label:"沙湾县",value:"654223"},{label:"托里县",value:"654224"},{label:"裕民县",value:"654225"},{label:"和布克赛尔蒙古自治县",value:"654226"}],[{label:"阿勒泰市",value:"654301"},{label:"布尔津县",value:"654321"},{label:"富蕴县",value:"654322"},{label:"福海县",value:"654323"},{label:"哈巴河县",value:"654324"},{label:"青河县",value:"654325"},{label:"吉木乃县",value:"654326"}],[{label:"石河子市",value:"659001"},{label:"阿拉尔市",value:"659002"},{label:"图木舒克市",value:"659003"},{label:"五家渠市",value:"659004"},{label:"铁门关市",value:"659006"}]],[[{label:"台北",value:"660101"}],[{label:"高雄",value:"660201"}],[{label:"基隆",value:"660301"}],[{label:"台中",value:"660401"}],[{label:"台南",value:"660501"}],[{label:"新竹",value:"660601"}],[{label:"嘉义",value:"660701"}],[{label:"宜兰",value:"660801"}],[{label:"桃园",value:"660901"}],[{label:"苗栗",value:"661001"}],[{label:"彰化",value:"661101"}],[{label:"南投",value:"661201"}],[{label:"云林",value:"661301"}],[{label:"屏东",value:"661401"}],[{label:"台东",value:"661501"}],[{label:"花莲",value:"661601"}],[{label:"澎湖",value:"661701"}]],[[{label:"香港岛",value:"670101"}],[{label:"九龙",value:"670201"}],[{label:"新界",value:"670301"}]],[[{label:"澳门半岛",value:"680101"}],[{label:"氹仔岛",value:"680201"}],[{label:"路环岛",value:"680301"}],[{label:"路氹城",value:"680401"}]]],n=t;l.default=n},"4fda":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t={pages:{"pages/home/home":{navigationStyle:"custom",navigationBarTitleText:"首页"},"pages/mine/points":{navigationBarTitleText:"积分账单",navigationBarTextStyle:"black"},"pages/index/dialog":{navigationStyle:"custom",navigationBarTextStyle:"black"},"pages/mine/order_detail":{navigationBarTitleText:"订单详情",navigationBarTextStyle:"black"},"pages/mine/personal":{navigationBarTitleText:"会员中心",navigationBarBackgroundColor:"#182E6C",navigationBarTextStyle:"white"},"pages/mine/wallet_details":{navigationBarTitleText:"钱包明细",navigationBarTextStyle:"black"},"pages/mine/wallet":{navigationBarTitleText:"钱包",navigationBarTextStyle:"black"},"pages/mine/mywallet":{navigationBarTitleText:"我的钱包",navigationBarTextStyle:"black"},"pages/mine/myinfo":{navigationBarTitleText:"我的信息",navigationBarTextStyle:"black"},"pages/mine/mycar":{navigationBarTitleText:"我的爱车",navigationBarTextStyle:"black"},"pages/mine/carmanager":{navigationBarTitleText:"车辆管理",navigationBarTextStyle:"black"},"pages/mine/orderlist":{navigationBarTitleText:"订单管理",navigationBarTextStyle:"black",disableScroll:!0,bounce:"none"},"pages/mine/coupon":{navigationBarTitleText:"我的优惠券",navigationBarTextStyle:"black",disableScroll:!0,bounce:"none"},"pages/mine/carbrand":{navigationBarTitleText:"品牌设置",navigationBarTextStyle:"black"},"pages/home/businesshome":{navigationBarTitleText:"商家主页",navigationBarTextStyle:"black"},"pages/home/business":{navigationBarTitleText:"商家中心",navigationBarTextStyle:"black"},"pages/home/paysuccess":{navigationBarTitleText:"支付结果",navigationBarTextStyle:"black"},"pages/mine/publishbid":{navigationBarTitleText:"我的发布",navigationBarTextStyle:"black",enablePullDownRefresh:!0},"pages/mine/sjmb":{navigationBarTitleText:"商家面板",navigationBarTextStyle:"black"},"pages/mine/h5":{navigationBarTitleText:"",navigationBarTextStyle:"black"},"pages/home/quotedprice":{navigationBarTitleText:"提交报价",navigationBarTextStyle:"black"},"pages/home/orderpage":{navigationBarTitleText:"订单确认",navigationBarTextStyle:"black"},"pages/home/shopselect":{navigationBarTitleText:"挂单详情",navigationBarTextStyle:"black",navigationBarBackgroundColor:"#FFFFFF"},"pages/index/precisefabu":{navigationBarTitleText:"精准发布",navigationBarTextStyle:"black"},"pages/index/fastfabu":{navigationBarTitleText:"快速发布",navigationBarTextStyle:"black"},"pages/more/nearby_merchants":{navigationBarTitleText:"商家主页",navigationBarTextStyle:"black"},"pages/market/home":{navigationStyle:"custom",navigationBarTitleText:"市场"},"pages/market/more":{navigationBarBackgroundColor:"#FFFFFF",navigationBarTitleText:"挂单",navigationBarTextStyle:"black",enablePullDownRefresh:!0,navigationStyle:"custom"},"pages/mine/home":{navigationStyle:"custom",disableScroll:!0},"pages/more/home":{navigationBarBackgroundColor:"#FFFFFF",navigationStyle:"custom",navigationBarTitleText:"商家"},"pages/more/shop":{navigationBarBackgroundColor:"#FFFFFF",navigationBarTitleText:"商城",navigationBarTextStyle:"black"}},globalStyle:{navigationBarTitleText:"创世车宝",navigationStyle:"default",navigationBarTextStyle:"black",navigationBarBackgroundColor:"#FFFFFF",scrollIndicator:"none"}};l.default=t},5771:function(e,l,a){"use strict";(function(l){function a(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}!function(l,a){e.exports=a()}(0,function(){return function(e){function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}var a={};return l.m=e,l.c=a,l.i=function(e){return e},l.d=function(e,a,t){l.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:t})},l.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(a,"a",a),a},l.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)},l.p="/Users/wonderswang/Documents/Project/cos-wx-sdk-v5/demo/lib",l(l.s=4)}([function(e,a,t){function n(e){return encodeURIComponent(e).replace(/!/g,"%21").replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\*/g,"%2A")}function u(e){return v(e,function(e){return"object"==typeof e?u(e):e})}function r(e,l){return s(l,function(a,t){e[t]=l[t]}),e}function o(e){return e instanceof Array}function i(e,l){for(var a=!1,t=0;t<e.length;t++)if(l===e[t]){a=!0;break}return a}function s(e,l){for(var a in e)e.hasOwnProperty(a)&&l(e[a],a)}function v(e,l){var a=o(e)?[]:{};for(var t in e)e.hasOwnProperty(t)&&(a[t]=l(e[t],t));return a}function c(e,l){var a=o(e),t=a?[]:{};for(var n in e)e.hasOwnProperty(n)&&l(e[n],n)&&(a?t.push(e[n]):t[n]=e[n]);return t}var b=t(8),f=t(6),d=t(10),p=t(7),h=t(5),g=h.btoa,m=function(e){e=e||{};var a=e.SecretId,t=e.SecretKey,r=(e.method||e.Method||"get").toLowerCase(),o=u(e.Query||e.params||{}),i=u(e.Headers||e.headers||{}),s=e.Pathname||"/"+(e.Key||"");if(!a)return console.error(l("missing param SecretId"," at utils\\cos-wx-sdk-v5.js:1"));if(!t)return console.error(l("missing param SecretKey"," at utils\\cos-wx-sdk-v5.js:1"));var v=function(e){var l=[];for(var a in e)e.hasOwnProperty(a)&&l.push(a);return l.sort(function(e,l){return e=e.toLowerCase(),l=l.toLowerCase(),e===l?0:e>l?1:-1})},c=function(e){var l,a,t,u=[],r=v(e);for(l=0;l<r.length;l++)a=r[l],t=void 0===e[a]||null===e[a]?"":""+e[a],a=a.toLowerCase(),a=n(a),t=n(t)||"",u.push(a+"="+t);return u.join("&")},b=Math.round(N(e.SystemClockOffset)/1e3)-1,d=b,p=e.Expires||e.expires;d+=void 0===p?900:1*p||0;var h=a,g=b+";"+d,m=b+";"+d,y=v(i).join(";").toLowerCase(),_=v(o).join(";").toLowerCase(),k=f.HmacSHA1(m,t).toString(),w=[r,s,c(o),c(i),""].join("\n"),C=["sha1",g,f.SHA1(w).toString(),""].join("\n");return["q-sign-algorithm=sha1","q-ak="+h,"q-sign-time="+g,"q-key-time="+m,"q-header-list="+y,"q-url-param-list="+_,"q-signature="+f.HmacSHA1(C,k).toString()].join("&")},y=function(){},_=function(e){var l={};for(var a in e)e.hasOwnProperty(a)&&void 0!==e[a]&&null!==e[a]&&(l[a]=e[a]);return l},k=function(e,a){var t,n=new FileReader;FileReader.prototype.readAsBinaryString?(t=FileReader.prototype.readAsBinaryString,n.onload=function(){a(this.result)}):FileReader.prototype.readAsArrayBuffer?t=function(e){var l="",t=new FileReader;t.onload=function(e){for(var n=new Uint8Array(t.result),u=n.byteLength,r=0;r<u;r++)l+=String.fromCharCode(n[r]);a(l)},t.readAsArrayBuffer(e)}:console.error(l("FileReader not support readAsBinaryString"," at utils\\cos-wx-sdk-v5.js:1")),t.call(n,e)},w=function(e,l){k(e,function(e){var a=b(e,!0);l(null,a)})},C=function(e){var l,a,t,n="";for(l=0,a=e.length/2;l<a;l++)t=parseInt(e[2*l]+e[2*l+1],16),n+=String.fromCharCode(t);return g(n)},A=function(){var e=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()},x=function(e,l){var a=l.Bucket,t=l.Region,n=l.Key;if(e.indexOf("Bucket")>-1||"deleteMultipleObject"===e||"multipartList"===e||"listObjectVersions"===e){if(!a)return"Bucket";if(!t)return"Region"}else if(e.indexOf("Object")>-1||e.indexOf("multipart")>-1||"sliceUploadFile"===e||"abortUploadTask"===e){if(!a)return"Bucket";if(!t)return"Region";if(!n)return"Key"}return!1},S=function(e,l){if(l=r({},l),"getAuth"!==e&&"getV4Auth"!==e&&"getObjectUrl"!==e){var a=l.Headers||{};if(l&&"object"==typeof l){!function(){for(var e in l)l.hasOwnProperty(e)&&e.indexOf("x-cos-")>-1&&(a[e]=l[e])}();var t={"x-cos-mfa":"MFA","Content-MD5":"ContentMD5","Content-Length":"ContentLength","Content-Type":"ContentType",Expect:"Expect",Expires:"Expires","Cache-Control":"CacheControl","Content-Disposition":"ContentDisposition","Content-Encoding":"ContentEncoding",Range:"Range","If-Modified-Since":"IfModifiedSince","If-Unmodified-Since":"IfUnmodifiedSince","If-Match":"IfMatch","If-None-Match":"IfNoneMatch","x-cos-copy-source":"CopySource","x-cos-copy-source-Range":"CopySourceRange","x-cos-metadata-directive":"MetadataDirective","x-cos-copy-source-If-Modified-Since":"CopySourceIfModifiedSince","x-cos-copy-source-If-Unmodified-Since":"CopySourceIfUnmodifiedSince","x-cos-copy-source-If-Match":"CopySourceIfMatch","x-cos-copy-source-If-None-Match":"CopySourceIfNoneMatch","x-cos-acl":"ACL","x-cos-grant-read":"GrantRead","x-cos-grant-write":"GrantWrite","x-cos-grant-full-control":"GrantFullControl","x-cos-grant-read-acp":"GrantReadAcp","x-cos-grant-write-acp":"GrantWriteAcp","x-cos-storage-class":"StorageClass","x-cos-server-side-encryption-customer-algorithm":"SSECustomerAlgorithm","x-cos-server-side-encryption-customer-key":"SSECustomerKey","x-cos-server-side-encryption-customer-key-MD5":"SSECustomerKeyMD5","x-cos-server-side-encryption":"ServerSideEncryption","x-cos-server-side-encryption-cos-kms-key-id":"SSEKMSKeyId","x-cos-server-side-encryption-context":"SSEContext"};B.each(t,function(e,t){void 0!==l[e]&&(a[t]=l[e])}),l.Headers=_(a)}}return l},T=function(e,a){return function(t,n){"function"==typeof t&&(n=t,t={}),t=S(e,t);var u=function(e){return e&&e.headers&&(e.headers["x-cos-version-id"]&&(e.VersionId=e.headers["x-cos-version-id"]),e.headers["x-cos-delete-marker"]&&(e.DeleteMarker=e.headers["x-cos-delete-marker"])),e},r=function(e,l){n&&n(u(e),u(l))};if("getService"!==e&&"abortUploadTask"!==e){var o;if(o=x(e,t))return void r({error:"missing param "+o});if(t.Region){if(t.Region.indexOf("cos.")>-1)return void r({error:'param Region should not be start with "cos."'});if(!/^([a-z\d-]+)$/.test(t.Region))return void r({error:"Region format error."});this.options.CompatibilityMode||-1!==t.Region.indexOf("-")||"yfb"===t.Region||"default"===t.Region||console.warn(l("warning: param Region format error, find help here: https://cloud.tencent.com/document/product/436/6224"," at utils\\cos-wx-sdk-v5.js:1"))}if(t.Bucket){if(!/^([a-z\d-]+)-(\d+)$/.test(t.Bucket))if(t.AppId)t.Bucket=t.Bucket+"-"+t.AppId;else{if(!this.options.AppId)return void r({error:'Bucket should format as "test-1250000000".'});t.Bucket=t.Bucket+"-"+this.options.AppId}t.AppId&&(console.warn(l('warning: AppId has been deprecated, Please put it at the end of parameter Bucket(E.g Bucket:"test-1250000000" ).'," at utils\\cos-wx-sdk-v5.js:1")),delete t.AppId)}}var i=a.call(this,t,r);if("getAuth"===e||"getObjectUrl"===e)return i}},O=function(e,l){function a(){if(n=0,l&&"function"==typeof l){t=Date.now();var a,u=Math.max(0,Math.round((o-r)/((t-i)/1e3)*100)/100);a=0===o&&0===e?1:Math.round(o/e*100)/100||0,i=t,r=o;try{l({loaded:o,total:e,speed:u,percent:a})}catch(e){}}}var t,n,u=this,r=0,o=0,i=Date.now();return function(l,t){if(l&&(o=l.loaded,e=l.total),t)clearTimeout(n),a();else{if(n)return;n=setTimeout(a,u.options.ProgressInterval)}}},E=function(e,l,a){var t;"string"==typeof l.Body&&(l.Body=new Blob([l.Body],{type:"text/plain"})),l.Body&&(l.Body instanceof Blob||"[object File]"===l.Body.toString()||"[object Blob]"===l.Body.toString())?(t=l.Body.size,l.ContentLength=t,a(null,t)):a({error:"params body format error, Only allow File|Blob|String."})},N=function(e){return Date.now()+(e||0)},B={noop:y,formatParams:S,apiWrapper:T,xml2json:d,json2xml:p,md5:b,clearKey:_,getFileMd5:w,binaryBase64:C,extend:r,isArray:o,isInArray:i,each:s,map:v,filter:c,clone:u,uuid:A,camSafeUrlEncode:n,throttleOnProgress:O,getFileSize:E,getSkewTime:N,getAuth:m,isBrowser:!0,fileSlice:function(e,l,a){return e.slice?e.slice(l,a):e.mozSlice?e.mozSlice(l,a):e.webkitSlice?e.webkitSlice(l,a):void 0},getFileUUID:function(e,l){return e.name&&e.size&&e.lastModifiedDate&&l?B.md5([e.name,e.size,e.lastModifiedDate,l].join("::")):null},getBodyMd5:function(e,l,a){a=a||y,e&&"string"==typeof l?a(B.md5(l,!0)):a()}};e.exports=B},function(e,a){function t(e,l){for(var a in e)l[a]=e[a]}function n(e,a){function n(){}var u=e.prototype;if(Object.create){var r=Object.create(a.prototype);u.__proto__=r}u instanceof a||(n.prototype=a.prototype,n=new n,t(u,n),e.prototype=u=n),u.constructor!=e&&("function"!=typeof e&&console.error(l("unknow Class:"+e," at utils\\cos-wx-sdk-v5.js:1")),u.constructor=e)}function u(e,l){if(l instanceof Error)var a=l;else a=this,Error.call(this,ue[e]),this.message=ue[e],Error.captureStackTrace&&Error.captureStackTrace(this,u);return a.code=e,l&&(this.message=this.message+": "+l),a}function r(){}function o(e,l){this._node=e,this._refresh=l,i(this)}function i(e){var l=e._node._inc||e._node.ownerDocument._inc;if(e._inc!=l){var a=e._refresh(e._node);H(e,"length",a.length),t(a,e),e._inc=l}}function s(){}function v(e,l){for(var a=e.length;a--;)if(e[a]===l)return a}function c(e,l,a,t){if(t?l[v(l,t)]=a:l[l.length++]=a,e){a.ownerElement=e;var n=e.ownerDocument;n&&(t&&y(n,e,t),m(n,e,a))}}function b(e,l,a){var t=v(l,a);if(!(t>=0))throw u(oe,new Error(e.tagName+"@"+a));for(var n=l.length-1;t<n;)l[t]=l[++t];if(l.length=n,e){var r=e.ownerDocument;r&&(y(r,e,a),a.ownerElement=null)}}function f(e){if(this._features={},e)for(var l in e)this._features=e[l]}function d(){}function p(e){return("<"==e?"&lt;":">"==e&&"&gt;")||"&"==e&&"&amp;"||'"'==e&&"&quot;"||"&#"+e.charCodeAt()+";"}function h(e,l){if(l(e))return!0;if(e=e.firstChild)do{if(h(e,l))return!0}while(e=e.nextSibling)}function g(){}function m(e,l,a){e&&e._inc++,"http://www.w3.org/2000/xmlns/"==a.namespaceURI&&(l._nsMap[a.prefix?a.localName:""]=a.value)}function y(e,l,a,t){e&&e._inc++,"http://www.w3.org/2000/xmlns/"==a.namespaceURI&&delete l._nsMap[a.prefix?a.localName:""]}function _(e,l,a){if(e&&e._inc){e._inc++;var t=l.childNodes;if(a)t[t.length++]=a;else{for(var n=l.firstChild,u=0;n;)t[u++]=n,n=n.nextSibling;t.length=u}}}function k(e,l){var a=l.previousSibling,t=l.nextSibling;return a?a.nextSibling=t:e.firstChild=t,t?t.previousSibling=a:e.lastChild=a,_(e.ownerDocument,e),l}function w(e,l,a){var t=l.parentNode;if(t&&t.removeChild(l),l.nodeType===ae){var n=l.firstChild;if(null==n)return l;var u=l.lastChild}else n=u=l;var r=a?a.previousSibling:e.lastChild;n.previousSibling=r,u.nextSibling=a,r?r.nextSibling=n:e.firstChild=n,null==a?e.lastChild=u:a.previousSibling=u;do{n.parentNode=e}while(n!==u&&(n=n.nextSibling));return _(e.ownerDocument||e,e),l.nodeType==ae&&(l.firstChild=l.lastChild=null),l}function C(e,l){var a=l.parentNode;if(a){var t=e.lastChild;a.removeChild(l);t=e.lastChild}t=e.lastChild;return l.parentNode=e,l.previousSibling=t,l.nextSibling=null,t?t.nextSibling=l:e.firstChild=l,e.lastChild=l,_(e.ownerDocument,e,l),l}function A(){this._nsMap={}}function x(){}function S(){}function T(){}function O(){}function E(){}function N(){}function B(){}function D(){}function R(){}function P(){}function I(){}function M(){}function L(e,l){var a=[],t=9==this.nodeType?this.documentElement:this,n=t.prefix,u=t.namespaceURI;if(u&&null==n){n=t.lookupPrefix(u);if(null==n)var r=[{namespace:u,prefix:null}]}return $(this,a,e,l,r),a.join("")}function j(e,l,a){var t=e.prefix||"",n=e.namespaceURI;if(!t&&!n)return!1;if("xml"===t&&"http://www.w3.org/XML/1998/namespace"===n||"http://www.w3.org/2000/xmlns/"==n)return!1;for(var u=a.length;u--;){var r=a[u];if(r.prefix==t)return r.namespace!=n}return!0}function $(e,l,a,t,n){if(t){if(!(e=t(e)))return;if("string"==typeof e)return void l.push(e)}switch(e.nodeType){case V:n||(n=[]);var u=(n.length,e.attributes),r=u.length,o=e.firstChild,i=e.tagName;a=K===e.namespaceURI||a,l.push("<",i);for(var s=0;s<r;s++){var v=u.item(s);"xmlns"==v.prefix?n.push({prefix:v.localName,namespace:v.value}):"xmlns"==v.nodeName&&n.push({prefix:"",namespace:v.value})}for(s=0;s<r;s++){v=u.item(s);if(j(v,a,n)){var c=v.prefix||"",b=v.namespaceURI,f=c?" xmlns:"+c:" xmlns";l.push(f,'="',b,'"'),n.push({prefix:c,namespace:b})}$(v,l,a,t,n)}if(j(e,a,n)){c=e.prefix||"",b=e.namespaceURI,f=c?" xmlns:"+c:" xmlns";l.push(f,'="',b,'"'),n.push({prefix:c,namespace:b})}if(o||a&&!/^(?:meta|link|img|br|hr|input)$/i.test(i)){if(l.push(">"),a&&/^script$/i.test(i))for(;o;)o.data?l.push(o.data):$(o,l,a,t,n),o=o.nextSibling;else for(;o;)$(o,l,a,t,n),o=o.nextSibling;l.push("</",i,">")}else l.push("/>");return;case ee:case ae:for(o=e.firstChild;o;)$(o,l,a,t,n),o=o.nextSibling;return;case z:return l.push(" ",e.name,'="',e.value.replace(/[<&"]/g,p),'"');case X:return l.push(e.data.replace(/[<&]/g,p));case W:return l.push("<![CDATA[",e.data,"]]>");case Z:return l.push("\x3c!--",e.data,"--\x3e");case le:var d=e.publicId,h=e.systemId;if(l.push("<!DOCTYPE ",e.name),d)l.push(' PUBLIC "',d),h&&"."!=h&&l.push('" "',h),l.push('">');else if(h&&"."!=h)l.push(' SYSTEM "',h,'">');else{var g=e.internalSubset;g&&l.push(" [",g,"]"),l.push(">")}return;case Q:return l.push("<?",e.target," ",e.data,"?>");case J:return l.push("&",e.nodeName,";");default:l.push("??",e.nodeName)}}function U(e,l,a){var t;switch(l.nodeType){case V:t=l.cloneNode(!1),t.ownerDocument=e;case ae:break;case z:a=!0}if(t||(t=l.cloneNode(!1)),t.ownerDocument=e,t.parentNode=null,a)for(var n=l.firstChild;n;)t.appendChild(U(e,n,a)),n=n.nextSibling;return t}function F(e,l,a){var t=new l.constructor;for(var n in l){var u=l[n];"object"!=typeof u&&u!=t[n]&&(t[n]=u)}switch(l.childNodes&&(t.childNodes=new r),t.ownerDocument=e,t.nodeType){case V:var o=l.attributes,i=t.attributes=new s,v=o.length;i._ownerElement=t;for(var c=0;c<v;c++)t.setAttributeNode(F(e,o.item(c),!0));break;case z:a=!0}if(a)for(var b=l.firstChild;b;)t.appendChild(F(e,b,a)),b=b.nextSibling;return t}function H(e,l,a){e[l]=a}function G(e){switch(e.nodeType){case V:case ae:var l=[];for(e=e.firstChild;e;)7!==e.nodeType&&8!==e.nodeType&&l.push(G(e)),e=e.nextSibling;return l.join("");default:return e.nodeValue}}var K="http://www.w3.org/1999/xhtml",q={},V=q.ELEMENT_NODE=1,z=q.ATTRIBUTE_NODE=2,X=q.TEXT_NODE=3,W=q.CDATA_SECTION_NODE=4,J=q.ENTITY_REFERENCE_NODE=5,Y=q.ENTITY_NODE=6,Q=q.PROCESSING_INSTRUCTION_NODE=7,Z=q.COMMENT_NODE=8,ee=q.DOCUMENT_NODE=9,le=q.DOCUMENT_TYPE_NODE=10,ae=q.DOCUMENT_FRAGMENT_NODE=11,te=q.NOTATION_NODE=12,ne={},ue={},re=(ne.INDEX_SIZE_ERR=(ue[1]="Index size error",1),ne.DOMSTRING_SIZE_ERR=(ue[2]="DOMString size error",2),ne.HIERARCHY_REQUEST_ERR=(ue[3]="Hierarchy request error",3)),oe=(ne.WRONG_DOCUMENT_ERR=(ue[4]="Wrong document",4),ne.INVALID_CHARACTER_ERR=(ue[5]="Invalid character",5),ne.NO_DATA_ALLOWED_ERR=(ue[6]="No data allowed",6),ne.NO_MODIFICATION_ALLOWED_ERR=(ue[7]="No modification allowed",7),ne.NOT_FOUND_ERR=(ue[8]="Not found",8)),ie=(ne.NOT_SUPPORTED_ERR=(ue[9]="Not supported",9),ne.INUSE_ATTRIBUTE_ERR=(ue[10]="Attribute in use",10));ne.INVALID_STATE_ERR=(ue[11]="Invalid state",11),ne.SYNTAX_ERR=(ue[12]="Syntax error",12),ne.INVALID_MODIFICATION_ERR=(ue[13]="Invalid modification",13),ne.NAMESPACE_ERR=(ue[14]="Invalid namespace",14),ne.INVALID_ACCESS_ERR=(ue[15]="Invalid access",15),u.prototype=Error.prototype,t(ne,u),r.prototype={length:0,item:function(e){return this[e]||null},toString:function(e,l){for(var a=[],t=0;t<this.length;t++)$(this[t],a,e,l);return a.join("")}},o.prototype.item=function(e){return i(this),this[e]},n(o,r),s.prototype={length:0,item:r.prototype.item,getNamedItem:function(e){for(var l=this.length;l--;){var a=this[l];if(a.nodeName==e)return a}},setNamedItem:function(e){var l=e.ownerElement;if(l&&l!=this._ownerElement)throw new u(ie);var a=this.getNamedItem(e.nodeName);return c(this._ownerElement,this,e,a),a},setNamedItemNS:function(e){var l,a=e.ownerElement;if(a&&a!=this._ownerElement)throw new u(ie);return l=this.getNamedItemNS(e.namespaceURI,e.localName),c(this._ownerElement,this,e,l),l},removeNamedItem:function(e){var l=this.getNamedItem(e);return b(this._ownerElement,this,l),l},removeNamedItemNS:function(e,l){var a=this.getNamedItemNS(e,l);return b(this._ownerElement,this,a),a},getNamedItemNS:function(e,l){for(var a=this.length;a--;){var t=this[a];if(t.localName==l&&t.namespaceURI==e)return t}return null}},f.prototype={hasFeature:function(e,l){var a=this._features[e.toLowerCase()];return!(!a||l&&!(l in a))},createDocument:function(e,l,a){var t=new g;if(t.implementation=this,t.childNodes=new r,t.doctype=a,a&&t.appendChild(a),l){var n=t.createElementNS(e,l);t.appendChild(n)}return t},createDocumentType:function(e,l,a){var t=new N;return t.name=e,t.nodeName=e,t.publicId=l,t.systemId=a,t}},d.prototype={firstChild:null,lastChild:null,previousSibling:null,nextSibling:null,attributes:null,parentNode:null,childNodes:null,ownerDocument:null,nodeValue:null,namespaceURI:null,prefix:null,localName:null,insertBefore:function(e,l){return w(this,e,l)},replaceChild:function(e,l){this.insertBefore(e,l),l&&this.removeChild(l)},removeChild:function(e){return k(this,e)},appendChild:function(e){return this.insertBefore(e,null)},hasChildNodes:function(){return null!=this.firstChild},cloneNode:function(e){return F(this.ownerDocument||this,this,e)},normalize:function(){for(var e=this.firstChild;e;){var l=e.nextSibling;l&&l.nodeType==X&&e.nodeType==X?(this.removeChild(l),e.appendData(l.data)):(e.normalize(),e=l)}},isSupported:function(e,l){return this.ownerDocument.implementation.hasFeature(e,l)},hasAttributes:function(){return this.attributes.length>0},lookupPrefix:function(e){for(var l=this;l;){var a=l._nsMap;if(a)for(var t in a)if(a[t]==e)return t;l=l.nodeType==z?l.ownerDocument:l.parentNode}return null},lookupNamespaceURI:function(e){for(var l=this;l;){var a=l._nsMap;if(a&&e in a)return a[e];l=l.nodeType==z?l.ownerDocument:l.parentNode}return null},isDefaultNamespace:function(e){return null==this.lookupPrefix(e)}},t(q,d),t(q,d.prototype),g.prototype={nodeName:"#document",nodeType:ee,doctype:null,documentElement:null,_inc:1,insertBefore:function(e,l){if(e.nodeType==ae){for(var a=e.firstChild;a;){var t=a.nextSibling;this.insertBefore(a,l),a=t}return e}return null==this.documentElement&&e.nodeType==V&&(this.documentElement=e),w(this,e,l),e.ownerDocument=this,e},removeChild:function(e){return this.documentElement==e&&(this.documentElement=null),k(this,e)},importNode:function(e,l){return U(this,e,l)},getElementById:function(e){var l=null;return h(this.documentElement,function(a){if(a.nodeType==V&&a.getAttribute("id")==e)return l=a,!0}),l},createElement:function(e){var l=new A;return l.ownerDocument=this,l.nodeName=e,l.tagName=e,l.childNodes=new r,(l.attributes=new s)._ownerElement=l,l},createDocumentFragment:function(){var e=new P;return e.ownerDocument=this,e.childNodes=new r,e},createTextNode:function(e){var l=new T;return l.ownerDocument=this,l.appendData(e),l},createComment:function(e){var l=new O;return l.ownerDocument=this,l.appendData(e),l},createCDATASection:function(e){var l=new E;return l.ownerDocument=this,l.appendData(e),l},createProcessingInstruction:function(e,l){var a=new I;return a.ownerDocument=this,a.tagName=a.target=e,a.nodeValue=a.data=l,a},createAttribute:function(e){var l=new x;return l.ownerDocument=this,l.name=e,l.nodeName=e,l.localName=e,l.specified=!0,l},createEntityReference:function(e){var l=new R;return l.ownerDocument=this,l.nodeName=e,l},createElementNS:function(e,l){var a=new A,t=l.split(":"),n=a.attributes=new s;return a.childNodes=new r,a.ownerDocument=this,a.nodeName=l,a.tagName=l,a.namespaceURI=e,2==t.length?(a.prefix=t[0],a.localName=t[1]):a.localName=l,n._ownerElement=a,a},createAttributeNS:function(e,l){var a=new x,t=l.split(":");return a.ownerDocument=this,a.nodeName=l,a.name=l,a.namespaceURI=e,a.specified=!0,2==t.length?(a.prefix=t[0],a.localName=t[1]):a.localName=l,a}},n(g,d),A.prototype={nodeType:V,hasAttribute:function(e){return null!=this.getAttributeNode(e)},getAttribute:function(e){var l=this.getAttributeNode(e);return l&&l.value||""},getAttributeNode:function(e){return this.attributes.getNamedItem(e)},setAttribute:function(e,l){var a=this.ownerDocument.createAttribute(e);a.value=a.nodeValue=""+l,this.setAttributeNode(a)},removeAttribute:function(e){var l=this.getAttributeNode(e);l&&this.removeAttributeNode(l)},appendChild:function(e){return e.nodeType===ae?this.insertBefore(e,null):C(this,e)},setAttributeNode:function(e){return this.attributes.setNamedItem(e)},setAttributeNodeNS:function(e){return this.attributes.setNamedItemNS(e)},removeAttributeNode:function(e){return this.attributes.removeNamedItem(e.nodeName)},removeAttributeNS:function(e,l){var a=this.getAttributeNodeNS(e,l);a&&this.removeAttributeNode(a)},hasAttributeNS:function(e,l){return null!=this.getAttributeNodeNS(e,l)},getAttributeNS:function(e,l){var a=this.getAttributeNodeNS(e,l);return a&&a.value||""},setAttributeNS:function(e,l,a){var t=this.ownerDocument.createAttributeNS(e,l);t.value=t.nodeValue=""+a,this.setAttributeNode(t)},getAttributeNodeNS:function(e,l){return this.attributes.getNamedItemNS(e,l)},getElementsByTagName:function(e){return new o(this,function(l){var a=[];return h(l,function(t){t===l||t.nodeType!=V||"*"!==e&&t.tagName!=e||a.push(t)}),a})},getElementsByTagNameNS:function(e,l){return new o(this,function(a){var t=[];return h(a,function(n){n===a||n.nodeType!==V||"*"!==e&&n.namespaceURI!==e||"*"!==l&&n.localName!=l||t.push(n)}),t})}},g.prototype.getElementsByTagName=A.prototype.getElementsByTagName,g.prototype.getElementsByTagNameNS=A.prototype.getElementsByTagNameNS,n(A,d),x.prototype.nodeType=z,n(x,d),S.prototype={data:"",substringData:function(e,l){return this.data.substring(e,e+l)},appendData:function(e){e=this.data+e,this.nodeValue=this.data=e,this.length=e.length},insertData:function(e,l){this.replaceData(e,0,l)},appendChild:function(e){throw new Error(ue[re])},deleteData:function(e,l){this.replaceData(e,l,"")},replaceData:function(e,l,a){a=this.data.substring(0,e)+a+this.data.substring(e+l),this.nodeValue=this.data=a,this.length=a.length}},n(S,d),T.prototype={nodeName:"#text",nodeType:X,splitText:function(e){var l=this.data,a=l.substring(e);l=l.substring(0,e),this.data=this.nodeValue=l,this.length=l.length;var t=this.ownerDocument.createTextNode(a);return this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling),t}},n(T,S),O.prototype={nodeName:"#comment",nodeType:Z},n(O,S),E.prototype={nodeName:"#cdata-section",nodeType:W},n(E,S),N.prototype.nodeType=le,n(N,d),B.prototype.nodeType=te,n(B,d),D.prototype.nodeType=Y,n(D,d),R.prototype.nodeType=J,n(R,d),P.prototype.nodeName="#document-fragment",P.prototype.nodeType=ae,n(P,d),I.prototype.nodeType=Q,n(I,d),M.prototype.serializeToString=function(e,l,a){return L.call(e,l,a)},d.prototype.toString=L;try{Object.defineProperty&&(Object.defineProperty(o.prototype,"length",{get:function(){return i(this),this.$$length}}),Object.defineProperty(d.prototype,"textContent",{get:function(){return G(this)},set:function(e){switch(this.nodeType){case V:case ae:for(;this.firstChild;)this.removeChild(this.firstChild);(e||String(e))&&this.appendChild(this.ownerDocument.createTextNode(e));break;default:this.data=e,this.value=e,this.nodeValue=e}}}),H=function(e,l,a){e["$$"+l]=a})}catch(e){}a.DOMImplementation=f,a.XMLSerializer=M},function(e,l){var a=function(e){var l={},a=function(e){return!l[e]&&(l[e]=[]),l[e]};e.on=function(e,l){a(e).push(l)},e.off=function(e,l){for(var t=a(e),n=t.length-1;n>=0;n--)l===t[n]&&t.splice(n,1)},e.emit=function(e,l){for(var t=a(e).map(function(e){return e}),n=0;n<t.length;n++)t[n](l)}},t=function(){a(this)};e.exports.init=a,e.exports.EventProxy=t},function(e,t,n){var u,r=n(0),o=n(2),i=n(16),s=n(15),v=n(13),c=(u={SecretId:"",SecretKey:"",XCosSecurityToken:"",ChunkRetryTimes:2,FileParallelLimit:3,ChunkParallelLimit:3},a(u,"ChunkRetryTimes",3),a(u,"ChunkSize",1048576),a(u,"SliceSize",1048576),a(u,"CopyChunkParallelLimit",20),a(u,"CopyChunkSize",10485760),a(u,"CopySliceSize",10485760),a(u,"MaxPartNumber",1e4),a(u,"ProgressInterval",1e3),a(u,"UploadQueueSize",1e4),a(u,"Domain",""),a(u,"ServiceDomain",""),a(u,"Protocol",""),a(u,"CompatibilityMode",!1),a(u,"ForcePathStyle",!1),a(u,"CorrectClockSkew",!0),a(u,"SystemClockOffset",0),u),b=function(e){this.options=r.extend(r.clone(c),e||{}),this.options.FileParallelLimit=Math.max(1,this.options.FileParallelLimit),this.options.ChunkParallelLimit=Math.max(1,this.options.ChunkParallelLimit),this.options.ChunkRetryTimes=Math.max(0,this.options.ChunkRetryTimes),this.options.ChunkSize=Math.max(1048576,this.options.ChunkSize),this.options.CopyChunkParallelLimit=Math.max(1,this.options.CopyChunkParallelLimit),this.options.CopyChunkSize=Math.max(1048576,this.options.CopyChunkSize),this.options.CopySliceSize=Math.max(0,this.options.CopySliceSize),this.options.MaxPartNumber=Math.max(1024,Math.min(1e4,this.options.MaxPartNumber)),this.options.Timeout=Math.max(0,this.options.Timeout),this.options.AppId&&console.warn(l('warning: AppId has been deprecated, Please put it at the end of parameter Bucket(E.g: "test-1250000000").'," at utils\\cos-wx-sdk-v5.js:1")),o.init(this),i.init(this)};s.init(b,i),v.init(b,i),b.getAuthorization=r.getAuth,b.version="0.7.7",e.exports=b},function(e,l,a){var t=a(3);e.exports=t},function(e,l){var a=function(e){e=e||{};var l,a=e.Base64,t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n=function(e){for(var l={},a=0,t=e.length;a<t;a++)l[e.charAt(a)]=a;return l}(t),u=String.fromCharCode,r=function(e){if(e.length<2){var l=e.charCodeAt(0);return l<128?e:l<2048?u(192|l>>>6)+u(128|63&l):u(224|l>>>12&15)+u(128|l>>>6&63)+u(128|63&l)}l=65536+1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320);return u(240|l>>>18&7)+u(128|l>>>12&63)+u(128|l>>>6&63)+u(128|63&l)},o=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,i=function(e){return e.replace(o,r)},s=function(e){var l=[0,2,1][e.length%3],a=e.charCodeAt(0)<<16|(e.length>1?e.charCodeAt(1):0)<<8|(e.length>2?e.charCodeAt(2):0);return[t.charAt(a>>>18),t.charAt(a>>>12&63),l>=2?"=":t.charAt(a>>>6&63),l>=1?"=":t.charAt(63&a)].join("")},v=e.btoa?function(l){return e.btoa(l)}:function(e){return e.replace(/[\s\S]{1,3}/g,s)},c=l?function(e){return(e.constructor===l.constructor?e:new l(e)).toString("base64")}:function(e){return v(i(e))},b=function(e,l){return l?c(String(e)).replace(/[+\/]/g,function(e){return"+"==e?"-":"_"}).replace(/=/g,""):c(String(e))},f=function(e){return b(e,!0)},d=new RegExp(["[À-ß][-¿]","[à-ï][-¿]{2}","[ð-÷][-¿]{3}"].join("|"),"g"),p=function(e){switch(e.length){case 4:var l=(7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3),a=l-65536;return u(55296+(a>>>10))+u(56320+(1023&a));case 3:return u((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return u((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},h=function(e){return e.replace(d,p)},g=function(e){var l=e.length,a=l%4,t=(l>0?n[e.charAt(0)]<<18:0)|(l>1?n[e.charAt(1)]<<12:0)|(l>2?n[e.charAt(2)]<<6:0)|(l>3?n[e.charAt(3)]:0),r=[u(t>>>16),u(t>>>8&255),u(255&t)];return r.length-=[0,0,2,1][a],r.join("")},m=e.atob?function(l){return e.atob(l)}:function(e){return e.replace(/[\s\S]{1,4}/g,g)},y=l?function(e){return(e.constructor===l.constructor?e:new l(e,"base64")).toString()}:function(e){return h(m(e))},_=function(e){return y(String(e).replace(/[-_]/g,function(e){return"-"==e?"+":"/"}).replace(/[^A-Za-z0-9\+\/]/g,""))};return{VERSION:"2.1.9",atob:m,btoa:v,fromBase64:_,toBase64:b,utob:i,encode:b,encodeURI:f,btou:h,decode:_,noConflict:function(){var l=e.Base64;return e.Base64=a,l}}}();e.exports=a},function(e,l){var a=a||function(e,l){var a={},t=a.lib={},n=function(){},u=t.Base={extend:function(e){n.prototype=this;var l=new n;return e&&l.mixIn(e),l.hasOwnProperty("init")||(l.init=function(){l.$super.init.apply(this,arguments)}),l.init.prototype=l,l.$super=this,l},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var l in e)e.hasOwnProperty(l)&&(this[l]=e[l]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}},r=t.WordArray=u.extend({init:function(e,l){e=this.words=e||[],this.sigBytes=void 0!=l?l:4*e.length},toString:function(e){return(e||i).stringify(this)},concat:function(e){var l=this.words,a=e.words,t=this.sigBytes;if(e=e.sigBytes,this.clamp(),t%4)for(var n=0;n<e;n++)l[t+n>>>2]|=(a[n>>>2]>>>24-n%4*8&255)<<24-(t+n)%4*8;else if(65535<a.length)for(n=0;n<e;n+=4)l[t+n>>>2]=a[n>>>2];else l.push.apply(l,a);return this.sigBytes+=e,this},clamp:function(){var l=this.words,a=this.sigBytes;l[a>>>2]&=4294967295<<32-a%4*8,l.length=e.ceil(a/4)},clone:function(){var e=u.clone.call(this);return e.words=this.words.slice(0),e},random:function(l){for(var a=[],t=0;t<l;t+=4)a.push(4294967296*e.random()|0);return new r.init(a,l)}}),o=a.enc={},i=o.Hex={stringify:function(e){var l=e.words;e=e.sigBytes;for(var a=[],t=0;t<e;t++){var n=l[t>>>2]>>>24-t%4*8&255;a.push((n>>>4).toString(16)),a.push((15&n).toString(16))}return a.join("")},parse:function(e){for(var l=e.length,a=[],t=0;t<l;t+=2)a[t>>>3]|=parseInt(e.substr(t,2),16)<<24-t%8*4;return new r.init(a,l/2)}},s=o.Latin1={stringify:function(e){var l=e.words;e=e.sigBytes;for(var a=[],t=0;t<e;t++)a.push(String.fromCharCode(l[t>>>2]>>>24-t%4*8&255));return a.join("")},parse:function(e){for(var l=e.length,a=[],t=0;t<l;t++)a[t>>>2]|=(255&e.charCodeAt(t))<<24-t%4*8;return new r.init(a,l)}},v=o.Utf8={stringify:function(e){try{return decodeURIComponent(escape(s.stringify(e)))}catch(e){throw Error("Malformed UTF-8 data")}},parse:function(e){return s.parse(unescape(encodeURIComponent(e)))}},c=t.BufferedBlockAlgorithm=u.extend({reset:function(){this._data=new r.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=v.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(l){var a=this._data,t=a.words,n=a.sigBytes,u=this.blockSize,o=n/(4*u);o=l?e.ceil(o):e.max((0|o)-this._minBufferSize,0);if(l=o*u,n=e.min(4*l,n),l){for(var i=0;i<l;i+=u)this._doProcessBlock(t,i);i=t.splice(0,l),a.sigBytes-=n}return new r.init(i,n)},clone:function(){var e=u.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0});t.Hasher=c.extend({cfg:u.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){c.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){return e&&this._append(e),this._doFinalize()},blockSize:16,_createHelper:function(e){return function(l,a){return new e.init(a).finalize(l)}},_createHmacHelper:function(e){return function(l,a){return new b.HMAC.init(e,a).finalize(l)}}});var b=a.algo={};return a}(Math);!function(){var e=a,l=e.lib,t=l.WordArray,n=l.Hasher,u=[];l=e.algo.SHA1=n.extend({_doReset:function(){this._hash=new t.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(e,l){for(var a=this._hash.words,t=a[0],n=a[1],r=a[2],o=a[3],i=a[4],s=0;80>s;s++){if(16>s)u[s]=0|e[l+s];else{var v=u[s-3]^u[s-8]^u[s-14]^u[s-16];u[s]=v<<1|v>>>31}v=(t<<5|t>>>27)+i+u[s],v=20>s?v+(1518500249+(n&r|~n&o)):40>s?v+(1859775393+(n^r^o)):60>s?v+((n&r|n&o|r&o)-1894007588):v+((n^r^o)-899497514),i=o,o=r,r=n<<30|n>>>2,n=t,t=v}a[0]=a[0]+t|0,a[1]=a[1]+n|0,a[2]=a[2]+r|0,a[3]=a[3]+o|0,a[4]=a[4]+i|0},_doFinalize:function(){var e=this._data,l=e.words,a=8*this._nDataBytes,t=8*e.sigBytes;return l[t>>>5]|=128<<24-t%32,l[14+(t+64>>>9<<4)]=Math.floor(a/4294967296),l[15+(t+64>>>9<<4)]=a,e.sigBytes=4*l.length,this._process(),this._hash},clone:function(){var e=n.clone.call(this);return e._hash=this._hash.clone(),e}});e.SHA1=n._createHelper(l),e.HmacSHA1=n._createHmacHelper(l)}(),function(){var e=a,l=e.enc.Utf8;e.algo.HMAC=e.lib.Base.extend({init:function(e,a){e=this._hasher=new e.init,"string"==typeof a&&(a=l.parse(a));var t=e.blockSize,n=4*t;a.sigBytes>n&&(a=e.finalize(a)),a.clamp();for(var u=this._oKey=a.clone(),r=this._iKey=a.clone(),o=u.words,i=r.words,s=0;s<t;s++)o[s]^=1549556828,i[s]^=909522486;u.sigBytes=r.sigBytes=n,this.reset()},reset:function(){var e=this._hasher;e.reset(),e.update(this._iKey)},update:function(e){return this._hasher.update(e),this},finalize:function(e){var l=this._hasher;return e=l.finalize(e),l.reset(),l.finalize(this._oKey.clone().concat(e))}})}(),function(){var e=a,l=e.lib,t=l.WordArray,n=e.enc;n.Base64={stringify:function(e){var l=e.words,a=e.sigBytes,t=this._map;e.clamp();for(var n=[],u=0;u<a;u+=3)for(var r=l[u>>>2]>>>24-u%4*8&255,o=l[u+1>>>2]>>>24-(u+1)%4*8&255,i=l[u+2>>>2]>>>24-(u+2)%4*8&255,s=r<<16|o<<8|i,v=0;v<4&&u+.75*v<a;v++)n.push(t.charAt(s>>>6*(3-v)&63));var c=t.charAt(64);if(c)for(;n.length%4;)n.push(c);return n.join("")},parse:function(e){var l=e.length,a=this._map,n=a.charAt(64);if(n){var u=e.indexOf(n);-1!=u&&(l=u)}for(var r=[],o=0,i=0;i<l;i++)if(i%4){var s=a.indexOf(e.charAt(i-1))<<i%4*2,v=a.indexOf(e.charAt(i))>>>6-i%4*2;r[o>>>2]|=(s|v)<<24-o%4*8,o++}return t.create(r,o)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),e.exports=a},function(e,l){function a(e){return(""+e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&apos;").replace(/"/g,"&quot;").replace(n,"")}var t=new RegExp("^([^a-zA-Z_À-ÖØ-öø-ÿͰ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿿、-퟿豈-﷏ﷰ-�])|^((x|X)(m|M)(l|L))|([^a-zA-Z_À-ÖØ-öø-ÿͰ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿿、-퟿豈-﷏ﷰ-�-.0-9·̀-ͯ‿⁀])","g"),n=/[^\x09\x0A\x0D\x20-\xFF\x85\xA0-\uD7FF\uE000-\uFDCF\uFDE0-\uFFFD]/gm,u=function(e){var l=[];if(e instanceof Object)for(var a in e)e.hasOwnProperty(a)&&l.push(a);return l},r=function(e,l){var n=function(e,a,n,u,r){var o=void 0!==l.indent?l.indent:"\t",i=l.prettyPrint?"\n"+new Array(u).join(o):"";l.removeIllegalNameCharacters&&(e=e.replace(t,"_"));var s=[i,"<",e,n||""];return a&&a.length>0?(s.push(">"),s.push(a),r&&s.push(i),s.push("</"),s.push(e),s.push(">")):s.push("/>"),s.join("")};return function e(t,r,o){var i=typeof t;switch((Array.isArray?Array.isArray(t):t instanceof Array)?i="array":t instanceof Date&&(i="date"),i){case"array":var s=[];return t.map(function(l){s.push(e(l,1,o+1))}),l.prettyPrint&&s.push("\n"),s.join("");case"date":return t.toJSON?t.toJSON():t+"";case"object":var v=[];for(var c in t)if(t[c]instanceof Array)for(var b in t[c])v.push(n(c,e(t[c][b],0,o+1),null,o+1,u(t[c][b]).length));else v.push(n(c,e(t[c],0,o+1),null,o+1));return l.prettyPrint&&v.length>0&&v.push("\n"),v.join("");case"function":return t();default:return l.escape?a(t):""+t}}(e,0,0)},o=function(e){var l=['<?xml version="1.0" encoding="UTF-8"'];return e&&l.push(' standalone="yes"'),l.push("?>"),l.join("")},i=function(e,l){if(l||(l={xmlHeader:{standalone:!0},prettyPrint:!0,indent:"  "}),"string"==typeof e)try{e=JSON.parse(e.toString())}catch(e){return!1}var a="",t="";return l&&("object"==typeof l?(l.xmlHeader&&(a=o(!!l.xmlHeader.standalone)),void 0!==l.docType&&(t="<!DOCTYPE "+l.docType+">")):a=o()),l=l||{},[a,l.prettyPrint&&t?"\n":"",t,r(e,l)].join("").replace(/\n{2,}/g,"\n").replace(/\s+$/g,"")};e.exports=i},function(e,l){var a=function(e){function l(e,l){return e<<l|e>>>32-l}function a(e,l){var a,t,n,u,r;return n=2147483648&e,u=2147483648&l,a=1073741824&e,t=1073741824&l,r=(1073741823&e)+(1073741823&l),a&t?2147483648^r^n^u:a|t?1073741824&r?3221225472^r^n^u:1073741824^r^n^u:r^n^u}function t(e,l,a){return e&l|~e&a}function n(e,l,a){return e&a|l&~a}function u(e,l,a){return e^l^a}function r(e,l,a){return l^(e|~a)}function o(e,n,u,r,o,i,s){return e=a(e,a(a(t(n,u,r),o),s)),a(l(e,i),n)}function i(e,t,u,r,o,i,s){return e=a(e,a(a(n(t,u,r),o),s)),a(l(e,i),t)}function s(e,t,n,r,o,i,s){return e=a(e,a(a(u(t,n,r),o),s)),a(l(e,i),t)}function v(e,t,n,u,o,i,s){return e=a(e,a(a(r(t,n,u),o),s)),a(l(e,i),t)}function c(e){var l,a,t="",n="";for(a=0;a<=3;a++)l=e>>>8*a&255,n="0"+l.toString(16),t+=n.substr(n.length-2,2);return t}var b,f,d,p,h,g,m,y,_,k=Array();for(e=function(e){e=e.replace(/\r\n/g,"\n");for(var l="",a=0;a<e.length;a++){var t=e.charCodeAt(a);t<128?l+=String.fromCharCode(t):t>127&&t<2048?(l+=String.fromCharCode(t>>6|192),l+=String.fromCharCode(63&t|128)):(l+=String.fromCharCode(t>>12|224),l+=String.fromCharCode(t>>6&63|128),l+=String.fromCharCode(63&t|128))}return l}(e),k=function(e){for(var l,a=e.length,t=a+8,n=(t-t%64)/64,u=16*(n+1),r=Array(u-1),o=0,i=0;i<a;)l=(i-i%4)/4,o=i%4*8,r[l]=r[l]|e.charCodeAt(i)<<o,i++;return l=(i-i%4)/4,o=i%4*8,r[l]=r[l]|128<<o,r[u-2]=a<<3,r[u-1]=a>>>29,r}(e),g=1732584193,m=4023233417,y=2562383102,_=271733878,b=0;b<k.length;b+=16)f=g,d=m,p=y,h=_,g=o(g,m,y,_,k[b+0],7,3614090360),_=o(_,g,m,y,k[b+1],12,3905402710),y=o(y,_,g,m,k[b+2],17,606105819),m=o(m,y,_,g,k[b+3],22,3250441966),g=o(g,m,y,_,k[b+4],7,4118548399),_=o(_,g,m,y,k[b+5],12,1200080426),y=o(y,_,g,m,k[b+6],17,2821735955),m=o(m,y,_,g,k[b+7],22,4249261313),g=o(g,m,y,_,k[b+8],7,1770035416),_=o(_,g,m,y,k[b+9],12,2336552879),y=o(y,_,g,m,k[b+10],17,4294925233),m=o(m,y,_,g,k[b+11],22,2304563134),g=o(g,m,y,_,k[b+12],7,1804603682),_=o(_,g,m,y,k[b+13],12,4254626195),y=o(y,_,g,m,k[b+14],17,2792965006),m=o(m,y,_,g,k[b+15],22,1236535329),g=i(g,m,y,_,k[b+1],5,4129170786),_=i(_,g,m,y,k[b+6],9,3225465664),y=i(y,_,g,m,k[b+11],14,643717713),m=i(m,y,_,g,k[b+0],20,3921069994),g=i(g,m,y,_,k[b+5],5,3593408605),_=i(_,g,m,y,k[b+10],9,38016083),y=i(y,_,g,m,k[b+15],14,3634488961),m=i(m,y,_,g,k[b+4],20,3889429448),g=i(g,m,y,_,k[b+9],5,568446438),_=i(_,g,m,y,k[b+14],9,3275163606),y=i(y,_,g,m,k[b+3],14,4107603335),m=i(m,y,_,g,k[b+8],20,1163531501),g=i(g,m,y,_,k[b+13],5,2850285829),_=i(_,g,m,y,k[b+2],9,4243563512),y=i(y,_,g,m,k[b+7],14,1735328473),m=i(m,y,_,g,k[b+12],20,2368359562),g=s(g,m,y,_,k[b+5],4,4294588738),_=s(_,g,m,y,k[b+8],11,2272392833),y=s(y,_,g,m,k[b+11],16,1839030562),m=s(m,y,_,g,k[b+14],23,4259657740),g=s(g,m,y,_,k[b+1],4,2763975236),_=s(_,g,m,y,k[b+4],11,1272893353),y=s(y,_,g,m,k[b+7],16,4139469664),m=s(m,y,_,g,k[b+10],23,3200236656),g=s(g,m,y,_,k[b+13],4,681279174),_=s(_,g,m,y,k[b+0],11,3936430074),y=s(y,_,g,m,k[b+3],16,3572445317),m=s(m,y,_,g,k[b+6],23,76029189),g=s(g,m,y,_,k[b+9],4,3654602809),_=s(_,g,m,y,k[b+12],11,3873151461),y=s(y,_,g,m,k[b+15],16,530742520),m=s(m,y,_,g,k[b+2],23,3299628645),g=v(g,m,y,_,k[b+0],6,4096336452),_=v(_,g,m,y,k[b+7],10,1126891415),y=v(y,_,g,m,k[b+14],15,2878612391),m=v(m,y,_,g,k[b+5],21,4237533241),g=v(g,m,y,_,k[b+12],6,1700485571),_=v(_,g,m,y,k[b+3],10,2399980690),y=v(y,_,g,m,k[b+10],15,4293915773),m=v(m,y,_,g,k[b+1],21,2240044497),g=v(g,m,y,_,k[b+8],6,1873313359),_=v(_,g,m,y,k[b+15],10,4264355552),y=v(y,_,g,m,k[b+6],15,2734768916),m=v(m,y,_,g,k[b+13],21,1309151649),g=v(g,m,y,_,k[b+4],6,4149444226),_=v(_,g,m,y,k[b+11],10,3174756917),y=v(y,_,g,m,k[b+2],15,718787259),m=v(m,y,_,g,k[b+9],21,3951481745),g=a(g,f),m=a(m,d),y=a(y,p),_=a(_,h);return(c(g)+c(m)+c(y)+c(_)).toLowerCase()};e.exports=a},function(e,l){var a=function(e){var l,a,t,n=[],u=Object.keys(e);for(l=0;l<u.length;l++)a=u[l],t=e[a]||"",n.push(a+"="+encodeURIComponent(t));return n.join("&")},t=function(e,l){var t,n=e.filePath,u=e.headers||{},r=e.url,o=e.method,i=e.onProgress,s=function(e,a){l(e,{statusCode:a.statusCode,headers:a.header},a.data)};if(n){var v,c=r.match(/^(https?:\/\/[^\/]+\/)([^\/]*\/?)(.*)$/);e.pathStyle?(v=decodeURIComponent(c[3]||""),r=c[1]+c[2]):(v=decodeURIComponent(c[2]+c[3]||""),r=c[1]);var b={key:v,success_action_status:200,Signature:u.Authorization},f=["Cache-Control","Content-Type","Content-Disposition","Content-Encoding","Expires","x-cos-storage-class","x-cos-security-token"];for(var d in e.headers)e.headers.hasOwnProperty(d)&&(d.indexOf("x-cos-meta-")>-1||f.indexOf(d)>-1)&&(b[d]=e.headers[d]);u["x-cos-acl"]&&(b.acl=u["x-cos-acl"]),!b["Content-Type"]&&(b["Content-Type"]="");var p={};t=wx.uploadFile({url:r,method:o,name:"file",filePath:n,formData:b,success:function(e){!e.header&&(e.header=p),s(null,e)},fail:function(e){s(e.errMsg,e)}}),t.onHeadersReceived&&t.onHeadersReceived(function(e){p=e.header}),t.onProgressUpdate(function(e){i({loaded:e.totalBytesSent,total:e.totalBytesExpectedToSend,progress:e.progress/100})})}else{var h=e.qs&&a(e.qs)||"";h&&(r+=(r.indexOf("?")>-1?"&":"?")+h),u["Content-Length"]&&delete u["Content-Length"],wx.request({url:r,method:o,header:u,dataType:"text",data:e.body,success:function(e){s(null,e)},fail:function(e){s(e.errMsg,e)}})}return t};e.exports=t},function(e,l,a){var t=a(11).DOMParser,n=function(e){function l(e){var l=e.localName;return null==l&&(l=e.baseName),null!=l&&""!=l||(l=e.nodeName),l}function a(e){return e.prefix}function n(e){return"string"==typeof e?e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;"):e}function u(e,l,a,t){for(var n=0;n<e.length;n++){var u=e[n];if("string"==typeof u){if(u==t)break}else if(u instanceof RegExp){if(u.test(t))break}else if("function"==typeof u&&u(l,a,t))break}return n!=e.length}function r(l,a,t){switch(e.arrayAccessForm){case"property":l[a]instanceof Array?l[a+"_asArray"]=l[a]:l[a+"_asArray"]=[l[a]]}!(l[a]instanceof Array)&&e.arrayAccessFormPaths.length>0&&u(e.arrayAccessFormPaths,l,a,t)&&(l[a]=[l[a]])}function o(e){var l=e.split(/[-T:+Z]/g),a=new Date(l[0],l[1]-1,l[2]),t=l[5].split(".");if(a.setHours(l[3],l[4],t[0]),t.length>1&&a.setMilliseconds(t[1]),l[6]&&l[7]){var n=60*l[6]+Number(l[7]);n=0+("-"==(/\d\d-\d\d:\d\d$/.test(e)?"-":"+")?-1*n:n),a.setMinutes(a.getMinutes()-n-a.getTimezoneOffset())}else-1!==e.indexOf("Z",e.length-1)&&(a=new Date(Date.UTC(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds(),a.getMilliseconds())));return a}function i(l,a,t){if(e.datetimeAccessFormPaths.length>0){var n=t.split(".#")[0];return u(e.datetimeAccessFormPaths,l,a,n)?o(l):l}return l}function s(l,a,t,n){return!(a==C.ELEMENT_NODE&&e.xmlElementsFilter.length>0)||u(e.xmlElementsFilter,l,t,n)}function v(t,n){if(t.nodeType==C.DOCUMENT_NODE){for(var u=new Object,o=t.childNodes,c=0;c<o.length;c++){var b=o.item(c);if(b.nodeType==C.ELEMENT_NODE){var f=l(b);u[f]=v(b,f)}}return u}if(t.nodeType==C.ELEMENT_NODE){u=new Object;u.__cnt=0;for(o=t.childNodes,c=0;c<o.length;c++){b=o.item(c),f=l(b);if(b.nodeType!=C.COMMENT_NODE){var d=n+"."+f;s(u,b.nodeType,f,d)&&(u.__cnt++,null==u[f]?(u[f]=v(b,d),r(u,f,d)):(null!=u[f]&&(u[f]instanceof Array||(u[f]=[u[f]],r(u,f,d))),u[f][u[f].length]=v(b,d)))}}for(var p=0;p<t.attributes.length;p++){var h=t.attributes.item(p);u.__cnt++,u[e.attributePrefix+h.name]=h.value}var g=a(t);return null!=g&&""!=g&&(u.__cnt++,u.__prefix=g),null!=u["#text"]&&(u.__text=u["#text"],u.__text instanceof Array&&(u.__text=u.__text.join("\n")),e.stripWhitespaces&&(u.__text=u.__text.trim()),delete u["#text"],"property"==e.arrayAccessForm&&delete u["#text_asArray"],u.__text=i(u.__text,f,n+"."+f)),null!=u["#cdata-section"]&&(u.__cdata=u["#cdata-section"],delete u["#cdata-section"],"property"==e.arrayAccessForm&&delete u["#cdata-section_asArray"]),0==u.__cnt&&"text"==e.emptyNodeForm?u="":1==u.__cnt&&null!=u.__text?u=u.__text:1!=u.__cnt||null==u.__cdata||e.keepCData?u.__cnt>1&&null!=u.__text&&e.skipEmptyTextNodesForObj&&(e.stripWhitespaces&&""==u.__text||""==u.__text.trim())&&delete u.__text:u=u.__cdata,delete u.__cnt,!e.enableToStringFunc||null==u.__text&&null==u.__cdata||(u.toString=function(){return(null!=this.__text?this.__text:"")+(null!=this.__cdata?this.__cdata:"")}),u}if(t.nodeType==C.TEXT_NODE||t.nodeType==C.CDATA_SECTION_NODE)return t.nodeValue}function c(l,a,t,u){var r="<"+(null!=l&&null!=l.__prefix?l.__prefix+":":"")+a;if(null!=t)for(var o=0;o<t.length;o++){var i=t[o],s=l[i];e.escapeMode&&(s=n(s)),r+=" "+i.substr(e.attributePrefix.length)+"=",e.useDoubleQuotes?r+='"'+s+'"':r+="'"+s+"'"}return r+(u?"/>":">")}function b(e,l){return"</"+(null!=e.__prefix?e.__prefix+":":"")+l+">"}function f(e,l){return-1!==e.indexOf(l,e.length-l.length)}function d(l,a){return!!("property"==e.arrayAccessForm&&f(a.toString(),"_asArray")||0==a.toString().indexOf(e.attributePrefix)||0==a.toString().indexOf("__")||l[a]instanceof Function)}function p(e){var l=0;if(e instanceof Object)for(var a in e)d(e,a)||l++;return l}function h(l,a,t){return 0==e.jsonPropertiesFilter.length||""==t||u(e.jsonPropertiesFilter,l,a,t)}function g(l){var a=[];if(l instanceof Object)for(var t in l)-1==t.toString().indexOf("__")&&0==t.toString().indexOf(e.attributePrefix)&&a.push(t);return a}function m(l){var a="";return null!=l.__cdata&&(a+="<![CDATA["+l.__cdata+"]]>"),null!=l.__text&&(e.escapeMode?a+=n(l.__text):a+=l.__text),a}function y(l){var a="";return l instanceof Object?a+=m(l):null!=l&&(e.escapeMode?a+=n(l):a+=l),a}function _(e,l){return""===e?l:e+"."+l}function k(e,l,a,t){var n="";if(0==e.length)n+=c(e,l,a,!0);else for(var u=0;u<e.length;u++)n+=c(e[u],l,g(e[u]),!1),n+=w(e[u],_(t,l)),n+=b(e[u],l);return n}function w(e,l){var a="";if(p(e)>0)for(var t in e)if(!d(e,t)&&(""==l||h(e,t,_(l,t)))){var n=e[t],u=g(n);if(null==n||void 0==n)a+=c(n,t,u,!0);else if(n instanceof Object)if(n instanceof Array)a+=k(n,t,u,l);else if(n instanceof Date)a+=c(n,t,u,!1),a+=n.toISOString(),a+=b(n,t);else{var r=p(n);r>0||null!=n.__text||null!=n.__cdata?(a+=c(n,t,u,!1),a+=w(n,_(l,t)),a+=b(n,t)):a+=c(n,t,u,!0)}else a+=c(n,t,u,!1),a+=y(n),a+=b(n,t)}return a+y(e)}e=e||{},function(){void 0===e.escapeMode&&(e.escapeMode=!0),e.attributePrefix=e.attributePrefix||"_",e.arrayAccessForm=e.arrayAccessForm||"none",e.emptyNodeForm=e.emptyNodeForm||"text",void 0===e.enableToStringFunc&&(e.enableToStringFunc=!0),e.arrayAccessFormPaths=e.arrayAccessFormPaths||[],void 0===e.skipEmptyTextNodesForObj&&(e.skipEmptyTextNodesForObj=!0),void 0===e.stripWhitespaces&&(e.stripWhitespaces=!0),e.datetimeAccessFormPaths=e.datetimeAccessFormPaths||[],void 0===e.useDoubleQuotes&&(e.useDoubleQuotes=!1),e.xmlElementsFilter=e.xmlElementsFilter||[],e.jsonPropertiesFilter=e.jsonPropertiesFilter||[],void 0===e.keepCData&&(e.keepCData=!1)}();var C={ELEMENT_NODE:1,TEXT_NODE:3,CDATA_SECTION_NODE:4,COMMENT_NODE:8,DOCUMENT_NODE:9};this.parseXmlString=function(e){if(void 0===e)return null;var l;if(t){var a=new t,n=null;try{n=a.parseFromString("INVALID","text/xml").getElementsByTagName("parsererror")[0].namespaceURI}catch(e){n=null}try{l=a.parseFromString(e,"text/xml"),null!=n&&l.getElementsByTagNameNS(n,"parsererror").length>0&&(l=null)}catch(e){l=null}}else 0==e.indexOf("<?")&&(e=e.substr(e.indexOf("?>")+2)),l=new ActiveXObject("Microsoft.XMLDOM"),l.async="false",l.loadXML(e);return l},this.asArray=function(e){return void 0===e||null==e?[]:e instanceof Array?e:[e]},this.toXmlDateTime=function(e){return e instanceof Date?e.toISOString():"number"==typeof e?new Date(e).toISOString():null},this.asDateTime=function(e){return"string"==typeof e?o(e):e},this.xml2json=function(e){return v(e)},this.xml_str2json=function(e){var l=this.parseXmlString(e);return null!=l?this.xml2json(l):null},this.json2xml_str=function(e){return w(e,"")},this.json2xml=function(e){var l=this.json2xml_str(e);return this.parseXmlString(l)},this.getVersion=function(){return"1.2.0"}},u=function(e){if(!e)return null;var l=new t,a=l.parseFromString(e,"text/xml"),u=new n,r=u.xml2json(a);return r.html&&r.getElementsByTagName("parsererror").length?null:r};e.exports=u},function(e,a,t){function n(e){this.options=e||{locator:{}}}function u(e,l,a){function t(l){var t=e[l];!t&&u&&(t=2==e.length?function(a){e(l,a)}:e),n[l]=t&&function(e){t("[xmldom "+l+"]\t"+e+i(a))}||function(){}}if(!e){if(l instanceof r)return l;e=l}var n={},u=e instanceof Function;return a=a||{},t("warning"),t("error"),t("fatalError"),n}function r(){this.cdata=!1}function o(e,l){l.lineNumber=e.lineNumber,l.columnNumber=e.columnNumber}function i(e){if(e)return"\n@"+(e.systemId||"")+"#[line:"+e.lineNumber+",col:"+e.columnNumber+"]"}function s(e,l,a){return"string"==typeof e?e.substr(l,a):e.length>=l+a||l?new java.lang.String(e,l,a)+"":e}function v(e,l){e.currentElement?e.currentElement.appendChild(l):e.doc.appendChild(l)}n.prototype.parseFromString=function(e,l){var a=this.options,t=new c,n=a.domBuilder||new r,o=a.errorHandler,i=a.locator,s=a.xmlns||{},v={lt:"<",gt:">",amp:"&",quot:'"',apos:"'"};return i&&n.setDocumentLocator(i),t.errorHandler=u(o,n,i),t.domBuilder=a.domBuilder||n,/\/x?html?$/.test(l)&&(v.nbsp=" ",v.copy="©",s[""]="http://www.w3.org/1999/xhtml"),s.xml=s.xml||"http://www.w3.org/XML/1998/namespace",e?t.parse(e,s,v):t.errorHandler.error("invalid doc source"),n.doc},r.prototype={startDocument:function(){this.doc=(new b).createDocument(null,null,null),this.locator&&(this.doc.documentURI=this.locator.systemId)},startElement:function(e,l,a,t){var n=this.doc,u=n.createElementNS(e,a||l),r=t.length;v(this,u),this.currentElement=u,this.locator&&o(this.locator,u);for(var i=0;i<r;i++){e=t.getURI(i);var s=t.getValue(i),c=(a=t.getQName(i),n.createAttributeNS(e,a));this.locator&&o(t.getLocator(i),c),c.value=c.nodeValue=s,u.setAttributeNode(c)}},endElement:function(e,l,a){var t=this.currentElement;t.tagName,this.currentElement=t.parentNode},startPrefixMapping:function(e,l){},endPrefixMapping:function(e){},processingInstruction:function(e,l){var a=this.doc.createProcessingInstruction(e,l);this.locator&&o(this.locator,a),v(this,a)},ignorableWhitespace:function(e,l,a){},characters:function(e,l,a){if(e=s.apply(this,arguments)){if(this.cdata)var t=this.doc.createCDATASection(e);else t=this.doc.createTextNode(e);this.currentElement?this.currentElement.appendChild(t):/^\s*$/.test(e)&&this.doc.appendChild(t),this.locator&&o(this.locator,t)}},skippedEntity:function(e){},endDocument:function(){this.doc.normalize()},setDocumentLocator:function(e){(this.locator=e)&&(e.lineNumber=0)},comment:function(e,l,a){e=s.apply(this,arguments);var t=this.doc.createComment(e);this.locator&&o(this.locator,t),v(this,t)},startCDATA:function(){this.cdata=!0},endCDATA:function(){this.cdata=!1},startDTD:function(e,l,a){var t=this.doc.implementation;if(t&&t.createDocumentType){var n=t.createDocumentType(e,l,a);this.locator&&o(this.locator,n),v(this,n)}},warning:function(e){console.warn(l("[xmldom warning]\t"+e,i(this.locator)," at utils\\cos-wx-sdk-v5.js:1"))},error:function(e){console.error(l("[xmldom error]\t"+e,i(this.locator)," at utils\\cos-wx-sdk-v5.js:1"))},fatalError:function(e){throw console.error(l("[xmldom fatalError]\t"+e,i(this.locator)," at utils\\cos-wx-sdk-v5.js:1")),e}},"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g,function(e){r.prototype[e]=function(){return null}});var c=t(12).XMLReader,b=a.DOMImplementation=t(1).DOMImplementation;a.XMLSerializer=t(1).XMLSerializer,a.DOMParser=n},function(e,l){function a(){}function t(e,l,a,t,s){function f(e){if(e>65535){e-=65536;var l=55296+(e>>10),a=56320+(1023&e);return String.fromCharCode(l,a)}return String.fromCharCode(e)}function d(e){var l=e.slice(1,-1);return l in a?a[l]:"#"===l.charAt(0)?f(parseInt(l.substr(1).replace("x","0x"))):(s.error("entity not found:"+e),e)}function p(l){if(l>C){var a=e.substring(C,l).replace(/&#?\w+;/g,d);_&&h(C),t.characters(a,0,l-C),C=l}}function h(l,a){for(;l>=m&&(a=y.exec(e));)g=a.index,m=g+a[0].length,_.lineNumber++;_.columnNumber=l-g+1}for(var g=0,m=0,y=/.*(?:\r\n?|\n)|.*$/g,_=t.locator,k=[{currentNSMap:l}],w={},C=0;;){try{var A=e.indexOf("<",C);if(A<0){if(!e.substr(C).match(/^\s*$/)){var x=t.doc,S=x.createTextNode(e.substr(C));x.appendChild(S),t.currentElement=S}return}switch(A>C&&p(A),e.charAt(A+1)){case"/":var T=e.indexOf(">",A+3),O=e.substring(A+2,T),E=k.pop();T<0?(O=e.substring(A+2).replace(/[\s<].*/,""),s.error("end tag name: "+O+" is not complete:"+E.tagName),T=A+1+O.length):O.match(/\s</)&&(O=O.replace(/[\s<].*/,""),s.error("end tag name: "+O+" maybe not complete"),T=A+1+O.length);var N=E.localNSMap,B=E.tagName==O;if(B||E.tagName&&E.tagName.toLowerCase()==O.toLowerCase()){if(t.endElement(E.uri,E.localName,O),N)for(var D in N)t.endPrefixMapping(D);B||s.fatalError("end tag name: "+O+" is not match the current start tagName:"+E.tagName)}else k.push(E);T++;break;case"?":_&&h(A),T=c(e,A,t);break;case"!":_&&h(A),T=v(e,A,t,s);break;default:_&&h(A);var R=new b,P=k[k.length-1].currentNSMap,I=(T=u(e,A,R,P,d,s),R.length);if(!R.closed&&i(e,T,R.tagName,w)&&(R.closed=!0,a.nbsp||s.warning("unclosed xml attribute")),_&&I){for(var M=n(_,{}),L=0;L<I;L++){var j=R[L];h(j.offset),j.locator=n(_,{})}t.locator=M,r(R,t,P)&&k.push(R),t.locator=_}else r(R,t,P)&&k.push(R);"http://www.w3.org/1999/xhtml"!==R.uri||R.closed?T++:T=o(e,T,R.tagName,d,t)}}catch(e){s.error("element parse error: "+e),T=-1}T>C?C=T:p(Math.max(A,C)+1)}}function n(e,l){return l.lineNumber=e.lineNumber,l.columnNumber=e.columnNumber,l}function u(e,l,a,t,n,u){for(var r,o=++l,i=m;;){var s=e.charAt(o);switch(s){case"=":if(i===y)r=e.slice(l,o),i=k;else{if(i!==_)throw new Error("attribute equal must after attrName");i=k}break;case"'":case'"':if(i===k||i===y){if(i===y&&(u.warning('attribute value must after "="'),r=e.slice(l,o)),l=o+1,!((o=e.indexOf(s,l))>0))throw new Error("attribute value no end '"+s+"' match");v=e.slice(l,o).replace(/&#?\w+;/g,n),a.add(r,v,l-1),i=C}else{if(i!=w)throw new Error('attribute value must after "="');v=e.slice(l,o).replace(/&#?\w+;/g,n),a.add(r,v,l),u.warning('attribute "'+r+'" missed start quot('+s+")!!"),l=o+1,i=C}break;case"/":switch(i){case m:a.setTagName(e.slice(l,o));case C:case A:case x:i=x,a.closed=!0;case w:case y:case _:break;default:throw new Error("attribute invalid close char('/')")}break;case"":return u.error("unexpected end of input"),i==m&&a.setTagName(e.slice(l,o)),o;case">":switch(i){case m:a.setTagName(e.slice(l,o));case C:case A:case x:break;case w:case y:v=e.slice(l,o),"/"===v.slice(-1)&&(a.closed=!0,v=v.slice(0,-1));case _:i===_&&(v=r),i==w?(u.warning('attribute "'+v+'" missed quot(")!!'),a.add(r,v.replace(/&#?\w+;/g,n),l)):("http://www.w3.org/1999/xhtml"===t[""]&&v.match(/^(?:disabled|checked|selected)$/i)||u.warning('attribute "'+v+'" missed value!! "'+v+'" instead!!'),a.add(v,v,l));break;case k:throw new Error("attribute value missed!!")}return o;case"":s=" ";default:if(s<=" ")switch(i){case m:a.setTagName(e.slice(l,o)),i=A;break;case y:r=e.slice(l,o),i=_;break;case w:var v=e.slice(l,o).replace(/&#?\w+;/g,n);u.warning('attribute "'+v+'" missed quot(")!!'),a.add(r,v,l);case C:i=A}else switch(i){case _:a.tagName,"http://www.w3.org/1999/xhtml"===t[""]&&r.match(/^(?:disabled|checked|selected)$/i)||u.warning('attribute "'+r+'" missed value!! "'+r+'" instead2!!'),a.add(r,r,l),l=o,i=y;break;case C:u.warning('attribute space is required"'+r+'"!!');case A:i=y,l=o;break;case k:i=w,l=o;break;case x:throw new Error("elements closed character '/' and '>' must be connected to")}}o++}}function r(e,l,a){for(var t=e.tagName,n=null,u=e.length;u--;){var r=e[u],o=r.qName,i=r.value,v=o.indexOf(":");if(v>0)var c=r.prefix=o.slice(0,v),b=o.slice(v+1),f="xmlns"===c&&b;else b=o,c=null,f="xmlns"===o&&"";r.localName=b,!1!==f&&(null==n&&(n={},s(a,a={})),a[f]=n[f]=i,r.uri="http://www.w3.org/2000/xmlns/",l.startPrefixMapping(f,i))}for(u=e.length;u--;){r=e[u];c=r.prefix;c&&("xml"===c&&(r.uri="http://www.w3.org/XML/1998/namespace"),"xmlns"!==c&&(r.uri=a[c||""]))}v=t.indexOf(":");v>0?(c=e.prefix=t.slice(0,v),b=e.localName=t.slice(v+1)):(c=null,b=e.localName=t);var d=e.uri=a[c||""];if(l.startElement(d,b,t,e),!e.closed)return e.currentNSMap=a,e.localNSMap=n,!0;if(l.endElement(d,b,t),n)for(c in n)l.endPrefixMapping(c)}function o(e,l,a,t,n){if(/^(?:script|textarea)$/i.test(a)){var u=e.indexOf("</"+a+">",l),r=e.substring(l+1,u);if(/[&<]/.test(r))return/^script$/i.test(a)?(n.characters(r,0,r.length),u):(r=r.replace(/&#?\w+;/g,t),n.characters(r,0,r.length),u)}return l+1}function i(e,l,a,t){var n=t[a];return null==n&&(n=e.lastIndexOf("</"+a+">"),n<l&&(n=e.lastIndexOf("</"+a)),t[a]=n),n<l}function s(e,l){for(var a in e)l[a]=e[a]}function v(e,l,a,t){switch(e.charAt(l+2)){case"-":if("-"===e.charAt(l+3)){var n=e.indexOf("--\x3e",l+4);return n>l?(a.comment(e,l+4,n-l-4),n+3):(t.error("Unclosed comment"),-1)}return-1;default:if("CDATA["==e.substr(l+3,6)){n=e.indexOf("]]>",l+9);return a.startCDATA(),a.characters(e,l+9,n-l-9),a.endCDATA(),n+3}var u=d(e,l),r=u.length;if(r>1&&/!doctype/i.test(u[0][0])){var o=u[1][0],i=r>3&&/^public$/i.test(u[2][0])&&u[3][0],s=r>4&&u[4][0],v=u[r-1];return a.startDTD(o,i&&i.replace(/^(['"])(.*?)\1$/,"$2"),s&&s.replace(/^(['"])(.*?)\1$/,"$2")),a.endDTD(),v.index+v[0].length}}return-1}function c(e,l,a){var t=e.indexOf("?>",l);if(t){var n=e.substring(l,t).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);return n?(n[0].length,a.processingInstruction(n[1],n[2]),t+2):-1}return-1}function b(e){}function f(e,l){return e.__proto__=l,e}function d(e,l){var a,t=[],n=/'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for(n.lastIndex=l,n.exec(e);a=n.exec(e);)if(t.push(a),a[1])return t}var p=/[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,h=new RegExp("[\\-\\.0-9"+p.source.slice(1,-1)+"\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"),g=new RegExp("^"+p.source+h.source+"*(?::"+p.source+h.source+"*)?$"),m=0,y=1,_=2,k=3,w=4,C=5,A=6,x=7;a.prototype={parse:function(e,l,a){var n=this.domBuilder;n.startDocument(),s(l,l={}),t(e,l,a,n,this.errorHandler),n.endDocument()}},b.prototype={setTagName:function(e){if(!g.test(e))throw new Error("invalid tagName:"+e);this.tagName=e},add:function(e,l,a){if(!g.test(e))throw new Error("invalid attribute:"+e);this[this.length++]={qName:e,value:l,offset:a}},length:0,getLocalName:function(e){return this[e].localName},getLocator:function(e){return this[e].locator},getQName:function(e){return this[e].qName},getURI:function(e){return this[e].uri},getValue:function(e){return this[e].value}},f({},f.prototype)instanceof f||(f=function(e,l){function a(){}for(l in a.prototype=l,a=new a,e)a[l]=e[l];return a}),l.XMLReader=a},function(e,l,a){function t(e,l){var a=e.Bucket,t=e.Region,r=e.Key,o=e.UploadId,i=e.Level||"task",v=e.AsyncLimit,c=this,b=new s;if(b.on("error",function(e){return l(e)}),b.on("get_abort_array",function(u){n.call(c,{Bucket:a,Region:t,Key:r,Headers:e.Headers,AsyncLimit:v,AbortArray:u},function(e,a){if(e)return l(e);l(null,a)})}),"bucket"===i)u.call(c,{Bucket:a,Region:t},function(e,a){if(e)return l(e);b.emit("get_abort_array",a.UploadList||[])});else if("file"===i){if(!r)return l({error:"abort_upload_task_no_key"});u.call(c,{Bucket:a,Region:t,Key:r},function(e,a){if(e)return l(e);b.emit("get_abort_array",a.UploadList||[])})}else{if("task"!==i)return l({error:"abort_unknown_level"});if(!o)return l({error:"abort_upload_task_no_id"});if(!r)return l({error:"abort_upload_task_no_key"});b.emit("get_abort_array",[{Key:r,UploadId:o}])}}function n(e,l){var a=e.Bucket,t=e.Region,n=e.Key,u=e.AbortArray,r=e.AsyncLimit||1,o=this,s=0,v=new Array(u.length);i.eachLimit(u,r,function(l,u){var r=s;if(n&&n!==l.Key)return v[r]={error:{KeyNotMatch:!0}},void u(null);var i=l.UploadId||l.UploadID;o.multipartAbort({Bucket:a,Region:t,Key:l.Key,Headers:e.Headers,UploadId:i},function(e,n){var o={Bucket:a,Region:t,Key:l.Key,UploadId:i};v[r]={error:e,task:o},u(null)}),s++},function(e){if(e)return l(e);for(var a=[],t=[],n=0,u=v.length;n<u;n++){var r=v[n];r.task&&(r.error?t.push(r.task):a.push(r.task))}return l(null,{successList:a,errorList:t})})}function u(e,l){var a=this,t=[],n={Bucket:e.Bucket,Region:e.Region,Prefix:e.Key},u=function e(){a.multipartList(n,function(a,u){if(a)return l(a);t.push.apply(t,u.Upload||[]),"true"==u.IsTruncated?(n.KeyMarker=u.NextKeyMarker,n.UploadIdMarker=u.NextUploadIdMarker,e()):l(null,{UploadList:t})})};u()}function r(e,l){var a=new s,t=this,n=e.Bucket,u=e.Region,r=e.Key,c=e.CopySource,b=c.match(/^([^.]+-\d+)\.cos(v6)?\.([^.]+)\.[^\/]+\/(.+)$/);if(b){var f=b[1],d=b[3],p=decodeURIComponent(b[4]),h=void 0===e.SliceSize?t.options.CopySliceSize:e.SliceSize;h=Math.max(0,Math.min(h,5368709120));var g,m,y=e.ChunkSize||this.options.CopyChunkSize,_=this.options.CopyChunkParallelLimit,k=0;a.on("copy_slice_complete",function(e){t.multipartComplete({Bucket:n,Region:u,Key:r,UploadId:e.UploadId,Parts:e.PartList},function(e,a){if(e)return m(null,!0),l(e);m({loaded:g,total:g},!0),l(null,a)})}),a.on("get_copy_data_finish",function(e){i.eachLimit(e.PartList,_,function(l,a){var i=l.PartNumber,s=l.CopySourceRange,v=l.end-l.start,b=0;o.call(t,{Bucket:n,Region:u,Key:r,CopySource:c,UploadId:e.UploadId,PartNumber:i,CopySourceRange:s,onProgress:function(e){k+=e.loaded-b,b=e.loaded,m({loaded:k,total:g})}},function(e,t){if(e)return a(e);m({loaded:k,total:g}),k+=v-b,l.ETag=t.ETag,a(e||null,t)})},function(t){if(t)return m(null,!0),l(t);a.emit("copy_slice_complete",e)})}),a.on("get_file_size_finish",function(o){var i;!function(){for(var l=[1,2,4,8,16,32,64,128,256,512,1024,2048,4096,5120],a=1048576,n=0;n<l.length&&(a=1024*l[n]*1024,!(g/a<=t.options.MaxPartNumber));n++);e.ChunkSize=y=Math.max(y,a);for(var u=Math.ceil(g/y),r=[],o=1;o<=u;o++){var i=(o-1)*y,s=o*y<g?o*y-1:g-1,v={PartNumber:o,start:i,end:s,CopySourceRange:"bytes="+i+"-"+s};r.push(v)}e.PartList=r}(),i="Replaced"===e.Headers["x-cos-metadata-directive"]?e.Headers:o,i["x-cos-storage-class"]=e.Headers["x-cos-storage-class"]||o["x-cos-storage-class"],i=v.clearKey(i),t.multipartInit({Bucket:n,Region:u,Key:r,Headers:i},function(t,n){if(t)return l(t);e.UploadId=n.UploadId,a.emit("get_copy_data_finish",e)})}),t.headObject({Bucket:f,Region:d,Key:p},function(n,u){if(n)l(n.statusCode&&404===n.statusCode?{ErrorStatus:p+" Not Exist"}:n);else if(void 0!==(g=e.FileSize=u.headers["content-length"])&&g)if(m=v.throttleOnProgress.call(t,g,e.onProgress),g<=h)e.Headers["x-cos-metadata-directive"]||(e.Headers["x-cos-metadata-directive"]="Copy"),t.putObjectCopy(e,function(e,a){if(e)return m(null,!0),l(e);m({loaded:g,total:g},!0),l(e,a)});else{var r=u.headers,o={"Cache-Control":r["cache-control"],"Content-Disposition":r["content-disposition"],"Content-Encoding":r["content-encoding"],"Content-Type":r["content-type"],Expires:r.expires,"x-cos-storage-class":r["x-cos-storage-class"]};v.each(r,function(e,l){0===l.indexOf("x-cos-meta-")&&l.length>"x-cos-meta-".length&&(o[l]=e)}),a.emit("get_file_size_finish",o)}else l({error:'get Content-Length error, please add "Content-Length" to CORS ExposeHeader setting.'})})}else l({error:"CopySource format error"})}function o(e,l){var a=e.TaskId,t=e.Bucket,n=e.Region,u=e.Key,r=e.CopySource,o=e.UploadId,s=1*e.PartNumber,v=e.CopySourceRange,c=this.options.ChunkRetryTimes+1,b=this;i.retry(c,function(l){b.uploadPartCopy({TaskId:a,Bucket:t,Region:n,Key:u,CopySource:r,UploadId:o,PartNumber:s,CopySourceRange:v,onProgress:e.onProgress},function(e,a){l(e||null,a)})},function(e,a){return l(e,a)})}var i=a(14),s=a(2).EventProxy,v=a(0),c={abortUploadTask:t,sliceCopyFile:r};e.exports.init=function(e,l){v.each(c,function(l,a){e.prototype[a]=v.apiWrapper(a,l)})}},function(e,l){var a=function(e,l,a,t){if(t=t||function(){},!e.length||l<=0)return t();var n=0,u=0,r=0;!function o(){if(n>=e.length)return t();for(;r<l&&u<e.length;)u+=1,r+=1,a(e[u-1],function(l){l?(t(l),t=function(){}):(n+=1,r-=1,n>=e.length?t():o())})}()},t=function(e,l,a){var t=function t(n){l(function(l,u){l&&n<e?t(n+1):a(l,u)})};e<1?a():t(1)},n={eachLimit:a,retry:t};e.exports=n},function(e,a,t){function n(e,l){"function"==typeof e&&(l=e,e={});var a=this.options.ServiceDomain,t=e.AppId||this.options.appId,n=e.Region;a?(a=a.replace(/\{\{AppId\}\}/gi,t||"").replace(/\{\{Region\}\}/gi,n||"").replace(/\{\{.*?\}\}/gi,""),/^[a-zA-Z]+:\/\//.test(a)||(a="https://"+a),"/"===a.slice(-1)&&(a=a.slice(0,-1))):a=n?"https://cos."+n+".myqcloud.com":"https://service.cos.myqcloud.com",le.call(this,{Action:"name/cos:GetService",url:a+"/",method:"GET"},function(e,a){if(e)return l(e);var t=a&&a.ListAllMyBucketsResult&&a.ListAllMyBucketsResult.Buckets&&a.ListAllMyBucketsResult.Buckets.Bucket||[];t=ne.isArray(t)?t:[t];var n=a&&a.ListAllMyBucketsResult&&a.ListAllMyBucketsResult.Owner||{};l(null,{Buckets:t,Owner:n,statusCode:a.statusCode,headers:a.headers})})}function u(e,l){le.call(this,{Action:"name/cos:HeadBucket",Bucket:e.Bucket,Region:e.Region,headers:e.Headers,method:"HEAD"},function(e,a){l(e,a)})}function r(e,l){var a={};a.prefix=e.Prefix||"",a.delimiter=e.Delimiter,a.marker=e.Marker,a["max-keys"]=e.MaxKeys,a["encoding-type"]=e.EncodingType,le.call(this,{Action:"name/cos:GetBucket",ResourceKey:a.prefix,method:"GET",Bucket:e.Bucket,Region:e.Region,headers:e.Headers,qs:a},function(e,a){if(e)return l(e);var t=a.ListBucketResult||{},n=t.Contents||[],u=t.CommonPrefixes||[];n=ne.isArray(n)?n:[n],u=ne.isArray(u)?u:[u];var r=ne.clone(t);ne.extend(r,{Contents:n,CommonPrefixes:u,statusCode:a.statusCode,headers:a.headers}),l(null,r)})}function o(e,l){var a=this,t={};t["x-cos-acl"]=e.ACL,t["x-cos-grant-read"]=e.GrantRead,t["x-cos-grant-write"]=e.GrantWrite,t["x-cos-grant-read-acp"]=e.GrantReadAcp,t["x-cos-grant-write-acp"]=e.GrantWriteAcp,t["x-cos-grant-full-control"]=e.GrantFullControl,le.call(this,{Action:"name/cos:PutBucket",method:"PUT",Bucket:e.Bucket,Region:e.Region,headers:t},function(t,n){if(t)return l(t);var u=Q({domain:a.options.Domain,bucket:e.Bucket,region:e.Region,isLocation:!0});l(null,{Location:u,statusCode:n.statusCode,headers:n.headers})})}function i(e,l){le.call(this,{Action:"name/cos:DeleteBucket",Bucket:e.Bucket,Region:e.Region,headers:e.Headers,method:"DELETE"},function(e,a){return e&&204===e.statusCode?l(null,{statusCode:e.statusCode}):e?l(e):void l(null,{statusCode:a.statusCode,headers:a.headers})})}function s(e,l){le.call(this,{Action:"name/cos:GetBucketACL",method:"GET",Bucket:e.Bucket,Region:e.Region,headers:e.Headers,action:"acl"},function(e,a){if(e)return l(e);var t=a.AccessControlPolicy||{},n=t.Owner||{},u=t.AccessControlList.Grant||[];u=ne.isArray(u)?u:[u];var r=J(t);a.headers&&a.headers["x-cos-acl"]&&(r.ACL=a.headers["x-cos-acl"]),r=ne.extend(r,{Owner:n,Grants:u,statusCode:a.statusCode,headers:a.headers}),l(null,r)})}function v(e,l){var a=e.Headers,t="";if(e.AccessControlPolicy){var n=ne.clone(e.AccessControlPolicy||{}),u=n.Grants||n.Grant;u=ne.isArray(u)?u:[u],delete n.Grant,delete n.Grants,n.AccessControlList={Grant:u},t=ne.json2xml({AccessControlPolicy:n}),a["Content-Type"]="application/xml",a["Content-MD5"]=ne.binaryBase64(ne.md5(t))}ne.each(a,function(e,l){0===l.indexOf("x-cos-grant-")&&(a[l]=Y(a[l]))}),le.call(this,{Action:"name/cos:PutBucketACL",method:"PUT",Bucket:e.Bucket,Region:e.Region,headers:a,action:"acl",body:t},function(e,a){if(e)return l(e);l(null,{statusCode:a.statusCode,headers:a.headers})})}function c(e,l){le.call(this,{Action:"name/cos:GetBucketCORS",method:"GET",Bucket:e.Bucket,Region:e.Region,headers:e.Headers,action:"cors"},function(e,a){if(e)if(404===e.statusCode&&e.error&&"NoSuchCORSConfiguration"===e.error.Code){var t={CORSRules:[],statusCode:e.statusCode};e.headers&&(t.headers=e.headers),l(null,t)}else l(e);else{var n=a.CORSConfiguration||{},u=n.CORSRules||n.CORSRule||[];u=ne.clone(ne.isArray(u)?u:[u]),ne.each(u,function(e){ne.each(["AllowedOrigin","AllowedHeader","AllowedMethod","ExposeHeader"],function(l,a){var t=l+"s",n=e[t]||e[l]||[];delete e[l],e[t]=ne.isArray(n)?n:[n]})}),l(null,{CORSRules:u,statusCode:a.statusCode,headers:a.headers})}})}function b(e,l){var a=e.CORSConfiguration||{},t=a.CORSRules||e.CORSRules||[];t=ne.clone(ne.isArray(t)?t:[t]),ne.each(t,function(e){ne.each(["AllowedOrigin","AllowedHeader","AllowedMethod","ExposeHeader"],function(l,a){var t=l+"s",n=e[t]||e[l]||[];delete e[t],e[l]=ne.isArray(n)?n:[n]})});var n=ne.json2xml({CORSConfiguration:{CORSRule:t}}),u=e.Headers;u["Content-Type"]="application/xml",u["Content-MD5"]=ne.binaryBase64(ne.md5(n)),le.call(this,{Action:"name/cos:PutBucketCORS",method:"PUT",Bucket:e.Bucket,Region:e.Region,body:n,action:"cors",headers:u},function(e,a){if(e)return l(e);l(null,{statusCode:a.statusCode,headers:a.headers})})}function f(e,l){le.call(this,{Action:"name/cos:DeleteBucketCORS",method:"DELETE",Bucket:e.Bucket,Region:e.Region,headers:e.Headers,action:"cors"},function(e,a){return e&&204===e.statusCode?l(null,{statusCode:e.statusCode}):e?l(e):void l(null,{statusCode:a.statusCode||e.statusCode,headers:a.headers})})}function d(e,l){var a=e.Policy,t=a;try{"string"==typeof a?a=JSON.parse(t):t=JSON.stringify(a)}catch(e){l({error:"Policy format error"})}var n=e.Headers;n["Content-Type"]="application/json",n["Content-MD5"]=ne.binaryBase64(ne.md5(t)),le.call(this,{Action:"name/cos:PutBucketPolicy",method:"PUT",Bucket:e.Bucket,Region:e.Region,action:"policy",body:ne.isBrowser?t:a,headers:n,json:!0},function(e,a){return e&&204===e.statusCode?l(null,{statusCode:e.statusCode}):e?l(e):void l(null,{statusCode:a.statusCode,headers:a.headers})})}function p(e,l){le.call(this,{Action:"name/cos:DeleteBucketPolicy",method:"DELETE",Bucket:e.Bucket,Region:e.Region,headers:e.Headers,action:"policy"},function(e,a){return e&&204===e.statusCode?l(null,{statusCode:e.statusCode}):e?l(e):void l(null,{statusCode:a.statusCode||e.statusCode,headers:a.headers})})}function h(e,l){le.call(this,{Action:"name/cos:GetBucketLocation",method:"GET",Bucket:e.Bucket,Region:e.Region,headers:e.Headers,action:"location"},function(e,a){if(e)return l(e);l(null,a)})}function g(e,l){le.call(this,{Action:"name/cos:GetBucketPolicy",method:"GET",Bucket:e.Bucket,Region:e.Region,headers:e.Headers,action:"policy",rawBody:!0},function(e,a){if(e)return l(e.statusCode&&403===e.statusCode?{ErrorStatus:"Access Denied"}:e.statusCode&&405===e.statusCode?{ErrorStatus:"Method Not Allowed"}:e.statusCode&&404===e.statusCode?{ErrorStatus:"Policy Not Found"}:e);var t={};try{t=JSON.parse(a.body)}catch(e){}l(null,{Policy:t,statusCode:a.statusCode,headers:a.headers})})}function m(e,l){le.call(this,{Action:"name/cos:GetBucketTagging",method:"GET",Bucket:e.Bucket,Region:e.Region,headers:e.Headers,action:"tagging"},function(e,a){if(e)if(404!==e.statusCode||!e.error||"Not Found"!==e.error&&"NoSuchTagSet"!==e.error.Code)l(e);else{var t={Tags:[],statusCode:e.statusCode};e.headers&&(t.headers=e.headers),l(null,t)}else{var n=[];try{n=a.Tagging.TagSet.Tag||[]}catch(e){}n=ne.clone(ne.isArray(n)?n:[n]),l(null,{Tags:n,statusCode:a.statusCode,headers:a.headers})}})}function y(e,l){var a=e.Tagging||{},t=a.TagSet||a.Tags||e.Tags||[];t=ne.clone(ne.isArray(t)?t:[t]);var n=ne.json2xml({Tagging:{TagSet:{Tag:t}}}),u=e.Headers;u["Content-Type"]="application/xml",u["Content-MD5"]=ne.binaryBase64(ne.md5(n)),le.call(this,{Action:"name/cos:PutBucketTagging",method:"PUT",Bucket:e.Bucket,Region:e.Region,body:n,action:"tagging",headers:u},function(e,a){return e&&204===e.statusCode?l(null,{statusCode:e.statusCode}):e?l(e):void l(null,{statusCode:a.statusCode,headers:a.headers})})}function _(e,l){le.call(this,{Action:"name/cos:DeleteBucketTagging",method:"DELETE",Bucket:e.Bucket,Region:e.Region,headers:e.Headers,action:"tagging"},function(e,a){return e&&204===e.statusCode?l(null,{statusCode:e.statusCode}):e?l(e):void l(null,{statusCode:a.statusCode,headers:a.headers})})}function k(e,l){var a=e.LifecycleConfiguration||{},t=a.Rules||e.Rules||[];t=ne.clone(t);var n=ne.json2xml({LifecycleConfiguration:{Rule:t}}),u=e.Headers;u["Content-Type"]="application/xml",u["Content-MD5"]=ne.binaryBase64(ne.md5(n)),le.call(this,{Action:"name/cos:PutBucketLifecycle",method:"PUT",Bucket:e.Bucket,Region:e.Region,body:n,action:"lifecycle",headers:u},function(e,a){return e&&204===e.statusCode?l(null,{statusCode:e.statusCode}):e?l(e):void l(null,{statusCode:a.statusCode,headers:a.headers})})}function w(e,l){le.call(this,{Action:"name/cos:GetBucketLifecycle",method:"GET",Bucket:e.Bucket,Region:e.Region,headers:e.Headers,action:"lifecycle"},function(e,a){if(e)if(404===e.statusCode&&e.error&&"NoSuchLifecycleConfiguration"===e.error.Code){var t={Rules:[],statusCode:e.statusCode};e.headers&&(t.headers=e.headers),l(null,t)}else l(e);else{var n=[];try{n=a.LifecycleConfiguration.Rule||[]}catch(e){}n=ne.clone(ne.isArray(n)?n:[n]),l(null,{Rules:n,statusCode:a.statusCode,headers:a.headers})}})}function C(e,l){le.call(this,{Action:"name/cos:DeleteBucketLifecycle",method:"DELETE",Bucket:e.Bucket,Region:e.Region,headers:e.Headers,action:"lifecycle"},function(e,a){return e&&204===e.statusCode?l(null,{statusCode:e.statusCode}):e?l(e):void l(null,{statusCode:a.statusCode,headers:a.headers})})}function A(e,l){if(e.VersioningConfiguration){var a=e.VersioningConfiguration||{},t=ne.json2xml({VersioningConfiguration:a}),n=e.Headers;n["Content-Type"]="application/xml",n["Content-MD5"]=ne.binaryBase64(ne.md5(t)),le.call(this,{Action:"name/cos:PutBucketVersioning",method:"PUT",Bucket:e.Bucket,Region:e.Region,body:t,action:"versioning",headers:n},function(e,a){return e&&204===e.statusCode?l(null,{statusCode:e.statusCode}):e?l(e):void l(null,{statusCode:a.statusCode,headers:a.headers})})}else l({error:"missing param VersioningConfiguration"})}function x(e,l){le.call(this,{Action:"name/cos:GetBucketVersioning",method:"GET",Bucket:e.Bucket,Region:e.Region,headers:e.Headers,action:"versioning"},function(e,a){e||!a.VersioningConfiguration&&(a.VersioningConfiguration={}),l(e,a)})}function S(e,l){var a=ne.clone(e.ReplicationConfiguration),t=ne.json2xml({ReplicationConfiguration:a});t=t.replace(/<(\/?)Rules>/gi,"<$1Rule>"),t=t.replace(/<(\/?)Tags>/gi,"<$1Tag>");var n=e.Headers;n["Content-Type"]="application/xml",n["Content-MD5"]=ne.binaryBase64(ne.md5(t)),le.call(this,{Action:"name/cos:PutBucketReplication",method:"PUT",Bucket:e.Bucket,Region:e.Region,body:t,action:"replication",headers:n},function(e,a){return e&&204===e.statusCode?l(null,{statusCode:e.statusCode}):e?l(e):void l(null,{statusCode:a.statusCode,headers:a.headers})})}function T(e,l){le.call(this,{Action:"name/cos:GetBucketReplication",method:"GET",Bucket:e.Bucket,Region:e.Region,headers:e.Headers,action:"replication"},function(e,a){if(e)if(404!==e.statusCode||!e.error||"Not Found"!==e.error&&"ReplicationConfigurationnotFoundError"!==e.error.Code)l(e);else{var t={ReplicationConfiguration:{Rules:[]},statusCode:e.statusCode};e.headers&&(t.headers=e.headers),l(null,t)}else e||!a.ReplicationConfiguration&&(a.ReplicationConfiguration={}),a.ReplicationConfiguration.Rule&&(a.ReplicationConfiguration.Rules=a.ReplicationConfiguration.Rule,delete a.ReplicationConfiguration.Rule),l(e,a)})}function O(e,l){le.call(this,{Action:"name/cos:DeleteBucketReplication",method:"DELETE",Bucket:e.Bucket,Region:e.Region,headers:e.Headers,action:"replication"},function(e,a){return e&&204===e.statusCode?l(null,{statusCode:e.statusCode}):e?l(e):void l(null,{statusCode:a.statusCode,headers:a.headers})})}function E(e,l){le.call(this,{Action:"name/cos:HeadObject",method:"HEAD",Bucket:e.Bucket,Region:e.Region,Key:e.Key,VersionId:e.VersionId,headers:e.Headers},function(a,t){if(a){var n=a.statusCode;return e.Headers["If-Modified-Since"]&&n&&304===n?l(null,{NotModified:!0,statusCode:n}):l(a)}if(t.headers){var u=t.headers;t.ETag=u.etag||u.Etag||u.ETag||""}l(null,t)})}function N(e,l){var a={};a.prefix=e.Prefix||"",a.delimiter=e.Delimiter,a["key-marker"]=e.KeyMarker,a["version-id-marker"]=e.VersionIdMarker,a["max-keys"]=e.MaxKeys,a["encoding-type"]=e.EncodingType,le.call(this,{Action:"name/cos:GetBucketObjectVersions",ResourceKey:a.prefix,method:"GET",Bucket:e.Bucket,Region:e.Region,headers:e.Headers,qs:a,action:"versions"},function(e,a){if(e)return l(e);var t=a.ListVersionsResult||{},n=t.DeleteMarker||[];n=ne.isArray(n)?n:[n];var u=t.Version||[];u=ne.isArray(u)?u:[u];var r=ne.clone(t);delete r.DeleteMarker,delete r.Version,ne.extend(r,{DeleteMarkers:n,Versions:u,statusCode:a.statusCode,headers:a.headers}),l(null,r)})}function B(e,l){var a={};a["response-content-type"]=e.ResponseContentType,a["response-content-language"]=e.ResponseContentLanguage,a["response-expires"]=e.ResponseExpires,a["response-cache-control"]=e.ResponseCacheControl,a["response-content-disposition"]=e.ResponseContentDisposition,a["response-content-encoding"]=e.ResponseContentEncoding,le.call(this,{Action:"name/cos:GetObject",method:"GET",Bucket:e.Bucket,Region:e.Region,Key:e.Key,VersionId:e.VersionId,headers:e.Headers,qs:a,rawBody:!0},function(a,t){if(a){var n=a.statusCode;return e.Headers["If-Modified-Since"]&&n&&304===n?l(null,{NotModified:!0}):l(a)}var u={};if(u.Body=t.body,t&&t.headers){var r=t.headers;u.ETag=r.etag||r.Etag||r.ETag||""}ne.extend(u,{statusCode:t.statusCode,headers:t.headers}),l(null,u)})}function D(e,l){var a=this,t=e.ContentLength,n=ne.throttleOnProgress.call(a,t,e.onProgress);ne.getBodyMd5(a.options.UploadCheckContentMd5,e.Body,function(u){u&&(e.Headers["Content-MD5"]=ne.binaryBase64(u)),void 0!==e.ContentLength&&(e.Headers["Content-Length"]=e.ContentLength),le.call(a,{Action:"name/cos:PutObject",TaskId:e.TaskId,method:"PUT",Bucket:e.Bucket,Region:e.Region,Key:e.Key,headers:e.Headers,body:e.Body,onProgress:n},function(u,r){if(u)return n(null,!0),l(u);if(n({loaded:t,total:t},!0),r&&r.headers){var o=r.headers,i=o.etag||o.Etag||o.ETag||"",s=Q({ForcePathStyle:a.options.ForcePathStyle,protocol:a.options.Protocol,domain:a.options.Domain,bucket:e.Bucket,region:e.Region,object:e.Key});return s=s.substr(s.indexOf("://")+3),l(null,{Location:s,ETag:i,statusCode:r.statusCode,headers:o})}l(null,r)})})}function R(e,l){var a=this,t={};t["Cache-Control"]=e.CacheControl,t["Content-Disposition"]=e.ContentDisposition,t["Content-Encoding"]=e.ContentEncoding,t["Content-MD5"]=e.ContentMD5,t["Content-Length"]=e.ContentLength,t["Content-Type"]=e.ContentType,t.Expect=e.Expect,t.Expires=e.Expires,t["x-cos-acl"]=e.ACL,t["x-cos-grant-read"]=e.GrantRead,t["x-cos-grant-write"]=e.GrantWrite,t["x-cos-grant-full-control"]=e.GrantFullControl,t["x-cos-storage-class"]=e.StorageClass;var n=e.FilePath;for(var u in e)u.indexOf("x-cos-meta-")>-1&&(t[u]=e[u]);var r=ne.throttleOnProgress.call(a,t["Content-Length"],e.onProgress);le.call(this,{Action:"name/cos:PostObject",method:"POST",Bucket:e.Bucket,Region:e.Region,Key:e.Key,headers:t,filePath:n,onProgress:r},function(t,n){if(r(null,!0),t)return l(t);if(n&&n.headers){var u=n.headers,o=u.etag||u.Etag||u.ETag||"",i=Q({ForcePathStyle:a.options.ForcePathStyle,protocol:a.options.Protocol,domain:a.options.Domain,bucket:e.Bucket,region:e.Region,object:e.Key,isLocation:!0});return l(null,{Location:i,statusCode:n.statusCode,headers:u,ETag:o})}l(null,n)})}function P(e,l){le.call(this,{Action:"name/cos:DeleteObject",method:"DELETE",Bucket:e.Bucket,Region:e.Region,Key:e.Key,headers:e.Headers,VersionId:e.VersionId},function(e,a){if(e){var t=e.statusCode;return t&&204===t?l(null,{statusCode:t}):t&&404===t?l(null,{BucketNotFound:!0,statusCode:t}):l(e)}l(null,{statusCode:a.statusCode,headers:a.headers})})}function I(e,l){le.call(this,{Action:"name/cos:GetObjectACL",method:"GET",Bucket:e.Bucket,Region:e.Region,Key:e.Key,headers:e.Headers,action:"acl"},function(e,a){if(e)return l(e);var t=a.AccessControlPolicy||{},n=t.Owner||{},u=t.AccessControlList&&t.AccessControlList.Grant||[];u=ne.isArray(u)?u:[u];var r=J(t);a.headers&&a.headers["x-cos-acl"]&&(r.ACL=a.headers["x-cos-acl"]),r=ne.extend(r,{Owner:n,Grants:u,statusCode:a.statusCode,headers:a.headers}),l(null,r)})}function M(e,l){var a=e.Headers,t="";if(e.AccessControlPolicy){var n=ne.clone(e.AccessControlPolicy||{}),u=n.Grants||n.Grant;u=ne.isArray(u)?u:[u],delete n.Grant,delete n.Grants,n.AccessControlList={Grant:u},t=ne.json2xml({AccessControlPolicy:n}),a["Content-Type"]="application/xml",a["Content-MD5"]=ne.binaryBase64(ne.md5(t))}ne.each(a,function(e,l){0===l.indexOf("x-cos-grant-")&&(a[l]=Y(a[l]))}),le.call(this,{Action:"name/cos:PutObjectACL",method:"PUT",Bucket:e.Bucket,Region:e.Region,Key:e.Key,action:"acl",headers:a,body:t},function(e,a){if(e)return l(e);l(null,{statusCode:a.statusCode,headers:a.headers})})}function L(e,l){var a=e.Headers;a.Origin=e.Origin,a["Access-Control-Request-Method"]=e.AccessControlRequestMethod,a["Access-Control-Request-Headers"]=e.AccessControlRequestHeaders,le.call(this,{Action:"name/cos:OptionsObject",method:"OPTIONS",Bucket:e.Bucket,Region:e.Region,Key:e.Key,headers:a},function(e,a){if(e)return e.statusCode&&403===e.statusCode?l(null,{OptionsForbidden:!0,statusCode:e.statusCode}):l(e);var t=a.headers||{};l(null,{AccessControlAllowOrigin:t["access-control-allow-origin"],AccessControlAllowMethods:t["access-control-allow-methods"],AccessControlAllowHeaders:t["access-control-allow-headers"],AccessControlExposeHeaders:t["access-control-expose-headers"],AccessControlMaxAge:t["access-control-max-age"],statusCode:a.statusCode,headers:a.headers})})}function j(e,l){var a=e.CopySource||"",t=a.match(/^([^.]+-\d+)\.cos(v6)?\.([^.]+)\.[^\/]+\/(.+)$/);if(t){var n=t[1],u=t[3],r=decodeURIComponent(t[4]);le.call(this,{Scope:[{action:"name/cos:GetObject",bucket:n,region:u,prefix:r},{action:"name/cos:PutObject",bucket:e.Bucket,region:e.Region,prefix:e.Key}],method:"PUT",Bucket:e.Bucket,Region:e.Region,Key:e.Key,VersionId:e.VersionId,headers:e.Headers},function(e,a){if(e)return l(e);var t=ne.clone(a.CopyObjectResult||{});ne.extend(t,{statusCode:a.statusCode,headers:a.headers}),l(null,t)})}else l({error:"CopySource format error"})}function $(e,l){var a=e.CopySource||"",t=a.match(/^([^.]+-\d+)\.cos(v6)?\.([^.]+)\.[^\/]+\/(.+)$/);if(t){var n=t[1],u=t[3],r=decodeURIComponent(t[4]);le.call(this,{Scope:[{action:"name/cos:GetObject",bucket:n,region:u,prefix:r},{action:"name/cos:PutObject",bucket:e.Bucket,region:e.Region,prefix:e.Key}],method:"PUT",Bucket:e.Bucket,Region:e.Region,Key:e.Key,VersionId:e.VersionId,qs:{partNumber:e.PartNumber,uploadId:e.UploadId},headers:e.Headers},function(e,a){if(e)return l(e);var t=ne.clone(a.CopyPartResult||{});ne.extend(t,{statusCode:a.statusCode,headers:a.headers}),l(null,t)})}else l({error:"CopySource format error"})}function U(e,l){var a=e.Objects||[],t=e.Quiet;a=ne.isArray(a)?a:[a];var n=ne.json2xml({Delete:{Object:a,Quiet:t||!1}}),u=e.Headers;u["Content-Type"]="application/xml",u["Content-MD5"]=ne.binaryBase64(ne.md5(n));var r=ne.map(a,function(l){return{action:"name/cos:DeleteObject",bucket:e.Bucket,region:e.Region,prefix:l.Key}});le.call(this,{Scope:r,method:"POST",Bucket:e.Bucket,Region:e.Region,body:n,action:"delete",headers:u},function(e,a){if(e)return l(e);var t=a.DeleteResult||{},n=t.Deleted||[],u=t.Error||[];n=ne.isArray(n)?n:[n],u=ne.isArray(u)?u:[u];var r=ne.clone(t);ne.extend(r,{Error:u,Deleted:n,statusCode:a.statusCode,headers:a.headers}),l(null,r)})}function F(e,l){var a=e.Headers;if(e.RestoreRequest){var t=e.RestoreRequest||{},n=ne.json2xml({RestoreRequest:t});a["Content-Type"]="application/xml",a["Content-MD5"]=ne.binaryBase64(ne.md5(n)),le.call(this,{Action:"name/cos:RestoreObject",method:"POST",Bucket:e.Bucket,Region:e.Region,Key:e.Key,VersionId:e.VersionId,body:n,action:"restore",headers:a},function(e,a){l(e,a)})}else l({error:"missing param RestoreRequest"})}function H(e,l){le.call(this,{Action:"name/cos:InitiateMultipartUpload",method:"POST",Bucket:e.Bucket,Region:e.Region,Key:e.Key,action:"uploads",headers:e.Headers},function(e,a){return e?l(e):(a=ne.clone(a||{}))&&a.InitiateMultipartUploadResult?l(null,ne.extend(a.InitiateMultipartUploadResult,{statusCode:a.statusCode,headers:a.headers})):void l(null,a)})}function G(e,l){var a=this;ne.getFileSize("multipartUpload",e,function(){ne.getBodyMd5(a.options.UploadCheckContentMd5,e.Body,function(t){t&&(e.Headers["Content-MD5"]=ne.binaryBase64(t)),le.call(a,{Action:"name/cos:UploadPart",TaskId:e.TaskId,method:"PUT",Bucket:e.Bucket,Region:e.Region,Key:e.Key,qs:{partNumber:e.PartNumber,uploadId:e.UploadId},headers:e.Headers,onProgress:e.onProgress,body:e.Body||null},function(e,a){if(e)return l(e);if(a&&a.headers){var t=a.headers;a.ETag=t.etag||t.Etag||t.ETag||""}l(null,a)})})})}function K(e,l){for(var a=this,t=e.UploadId,n=e.Parts,u=0,r=n.length;u<r;u++)0!==n[u].ETag.indexOf('"')&&(n[u].ETag='"'+n[u].ETag+'"');var o=ne.json2xml({CompleteMultipartUpload:{Part:n}}),i=e.Headers;i["Content-Type"]="application/xml",i["Content-MD5"]=ne.binaryBase64(ne.md5(o)),le.call(this,{Action:"name/cos:CompleteMultipartUpload",method:"POST",Bucket:e.Bucket,Region:e.Region,Key:e.Key,qs:{uploadId:t},body:o,headers:i},function(t,n){if(t)return l(t);var u=Q({ForcePathStyle:a.options.ForcePathStyle,protocol:a.options.Protocol,domain:a.options.Domain,bucket:e.Bucket,region:e.Region,object:e.Key,isLocation:!0}),r=n.CompleteMultipartUploadResult||{},o=ne.extend(r,{Location:u,statusCode:n.statusCode,headers:n.headers});l(null,o)})}function q(e,l){var a={};a.delimiter=e.Delimiter,a["encoding-type"]=e.EncodingType,a.prefix=e.Prefix||"",a["max-uploads"]=e.MaxUploads,a["key-marker"]=e.KeyMarker,a["upload-id-marker"]=e.UploadIdMarker,a=ne.clearKey(a),le.call(this,{Action:"name/cos:ListMultipartUploads",ResourceKey:a.prefix,method:"GET",Bucket:e.Bucket,Region:e.Region,headers:e.Headers,qs:a,action:"uploads"},function(e,a){if(e)return l(e);if(a&&a.ListMultipartUploadsResult){var t=a.ListMultipartUploadsResult.Upload||[],n=a.ListMultipartUploadsResult.CommonPrefixes||[];n=ne.isArray(n)?n:[n],t=ne.isArray(t)?t:[t],a.ListMultipartUploadsResult.Upload=t,a.ListMultipartUploadsResult.CommonPrefixes=n}var u=ne.clone(a.ListMultipartUploadsResult||{});ne.extend(u,{statusCode:a.statusCode,headers:a.headers}),l(null,u)})}function V(e,l){var a={};a.uploadId=e.UploadId,a["encoding-type"]=e.EncodingType,a["max-parts"]=e.MaxParts,a["part-number-marker"]=e.PartNumberMarker,le.call(this,{Action:"name/cos:ListParts",method:"GET",Bucket:e.Bucket,Region:e.Region,Key:e.Key,headers:e.Headers,qs:a},function(e,a){if(e)return l(e);var t=a.ListPartsResult||{},n=t.Part||[];n=ne.isArray(n)?n:[n],t.Part=n;var u=ne.clone(t);ne.extend(u,{statusCode:a.statusCode,headers:a.headers}),l(null,u)})}function z(e,l){var a={};a.uploadId=e.UploadId,le.call(this,{Action:"name/cos:AbortMultipartUpload",method:"DELETE",Bucket:e.Bucket,Region:e.Region,Key:e.Key,headers:e.Headers,qs:a},function(e,a){if(e)return l(e);l(null,{statusCode:a.statusCode,headers:a.headers})})}function X(e){var l=this;return ne.getAuth({SecretId:e.SecretId||this.options.SecretId||"",SecretKey:e.SecretKey||this.options.SecretKey||"",Method:e.Method,Key:e.Key,Query:e.Query,Headers:e.Headers,Expires:e.Expires,SystemClockOffset:l.options.SystemClockOffset})}function W(e,l){var a=this,t=Q({ForcePathStyle:a.options.ForcePathStyle,protocol:e.Protocol||a.options.Protocol,domain:a.options.Domain,bucket:e.Bucket,region:e.Region,object:e.Key});if(void 0!==e.Sign&&!e.Sign)return l(null,{Url:t}),t;var n=Z.call(this,{Action:"PUT"===(e.Method||"").toUpperCase()?"name/cos:PutObject":"name/cos:GetObject",Bucket:e.Bucket||"",Region:e.Region||"",Method:e.Method||"get",Key:e.Key,Expires:e.Expires},function(e,a){if(l){if(e)return void l(e);var n=t;n+="?"+(a.Authorization.indexOf("q-signature")>-1?a.Authorization:"sign="+encodeURIComponent(a.Authorization)),a.XCosSecurityToken&&(n+="&x-cos-security-token="+a.XCosSecurityToken),a.ClientIP&&(n+="&clientIP="+a.ClientIP),a.ClientUA&&(n+="&clientUA="+a.ClientUA),a.Token&&(n+="&token="+a.Token),setTimeout(function(){l(null,{Url:n})})}});return n?t+"?"+n.Authorization+(n.XCosSecurityToken?"&x-cos-security-token="+n.XCosSecurityToken:""):t}function J(e){var l={GrantFullControl:[],GrantWrite:[],GrantRead:[],GrantReadAcp:[],GrantWriteAcp:[],ACL:""},a={FULL_CONTROL:"GrantFullControl",WRITE:"GrantWrite",READ:"GrantRead",READ_ACP:"GrantReadAcp",WRITE_ACP:"GrantWriteAcp"},t=e.AccessControlList.Grant;t&&(t=ne.isArray(t)?t:[t]);var n={READ:0,WRITE:0,FULL_CONTROL:0};return t.length&&ne.each(t,function(t){"qcs::cam::anyone:anyone"===t.Grantee.ID||"http://cam.qcloud.com/groups/global/AllUsers"===t.Grantee.URI?n[t.Permission]=1:t.Grantee.ID!==e.Owner.ID&&l[a[t.Permission]].push('id="'+t.Grantee.ID+'"')}),n.FULL_CONTROL||n.WRITE&&n.READ?l.ACL="public-read-write":n.READ?l.ACL="public-read":l.ACL="private",ne.each(a,function(e){l[e]=Y(l[e].join(","))}),l}function Y(e){var l,a,t=e.split(","),n={};for(l=0;l<t.length;)a=t[l].trim(),n[a]?t.splice(l,1):(n[a]=!0,t[l]=a,l++);return t.join(",")}function Q(e){var l=e.bucket,a=l.substr(0,l.lastIndexOf("-")),t=l.substr(l.lastIndexOf("-")+1),n=e.domain,u=e.region,r=e.object;n||(n=["cn-south","cn-south-2","cn-north","cn-east","cn-southwest","sg"].indexOf(u)>-1?"{Region}.myqcloud.com":"cos.{Region}.myqcloud.com",e.ForcePathStyle||(n="{Bucket}."+n)),n=n.replace(/\{\{AppId\}\}/gi,t).replace(/\{\{Bucket\}\}/gi,a).replace(/\{\{Region\}\}/gi,u).replace(/\{\{.*?\}\}/gi,""),n=n.replace(/\{AppId\}/gi,t).replace(/\{BucketName\}/gi,a).replace(/\{Bucket\}/gi,l).replace(/\{Region\}/gi,u).replace(/\{.*?\}/gi,""),/^[a-zA-Z]+:\/\//.test(n)||(n="https://"+n),"/"===n.slice(-1)&&(n=n.slice(0,-1));var o=n;return e.ForcePathStyle&&(o+="/"+l),o+="/",r&&(o+=ne.camSafeUrlEncode(r).replace(/%2F/g,"/")),e.isLocation&&(o=o.replace(/^https?:\/\//,"")),o}function Z(e,l){var a=ne.clone(e.Headers);delete a["Content-Type"],delete a["Cache-Control"],ne.each(a,function(e,l){""===e&&delete a[l]});var t=function(e){var a=!1,t=e.Authorization;if(t)if(t.indexOf(" ")>-1)a=!1;else if(t.indexOf("q-sign-algorithm=")>-1&&t.indexOf("q-ak=")>-1&&t.indexOf("q-sign-time=")>-1&&t.indexOf("q-key-time=")>-1&&t.indexOf("q-url-param-list=")>-1)a=!0;else try{t=atob(t),t.indexOf("a=")>-1&&t.indexOf("k=")>-1&&t.indexOf("t=")>-1&&t.indexOf("r=")>-1&&t.indexOf("b=")>-1&&(a=!0)}catch(e){}a?l&&l(null,e):l&&l("authorization error")},n=this,u=e.Bucket||"",r=e.Region||"",o="name/cos:PostObject"!==e.Action&&e.Key?e.Key:"";n.options.ForcePathStyle&&u&&(o=u+"/"+o);var i="/"+o,s={},v=e.Scope;if(!v){var c=e.Action||"",b=e.ResourceKey||e.Key||"";v=e.Scope||[{action:c,bucket:u,region:r,prefix:b}]}var f=ne.md5(JSON.stringify(v));n._StsCache=n._StsCache||[],function(){var e,l;for(e=n._StsCache.length-1;e>=0;e--){l=n._StsCache[e];var a=Math.round(ne.getSkewTime(n.options.SystemClockOffset)/1e3)+30;if(l.StartTime&&a<l.StartTime||a>=l.ExpiredTime)n._StsCache.splice(e,1);else if(!l.ScopeLimit||l.ScopeLimit&&l.ScopeKey===f){s=l;break}}}();var d=function(){var l=ne.getAuth({SecretId:s.TmpSecretId,SecretKey:s.TmpSecretKey,Method:e.Method,Pathname:i,Query:e.Query,Headers:a,Expires:e.Expires,SystemClockOffset:n.options.SystemClockOffset}),u={Authorization:l,XCosSecurityToken:s.XCosSecurityToken||"",Token:s.Token||"",ClientIP:s.ClientIP||"",ClientUA:s.ClientUA||""};t(u)};if(s.ExpiredTime&&s.ExpiredTime-ne.getSkewTime(n.options.SystemClockOffset)/1e3>60)d();else if(n.options.getAuthorization)n.options.getAuthorization.call(n,{Bucket:u,Region:r,Method:e.Method,Key:o,Pathname:i,Query:e.Query,Headers:a,Scope:v},function(e){"string"==typeof e&&(e={Authorization:e}),e.TmpSecretId&&e.TmpSecretKey&&e.XCosSecurityToken&&e.ExpiredTime?(s=e||{},s.Scope=v,s.ScopeKey=f,n._StsCache.push(s),d()):t(e)});else{if(!n.options.getSTS)return function(){var l=ne.getAuth({SecretId:e.SecretId||n.options.SecretId,SecretKey:e.SecretKey||n.options.SecretKey,Method:e.Method,Pathname:i,Query:e.Query,Headers:a,Expires:e.Expires,SystemClockOffset:n.options.SystemClockOffset}),u={Authorization:l,XCosSecurityToken:n.options.XCosSecurityToken};return t(u),u}();n.options.getSTS.call(n,{Bucket:u,Region:r},function(e){s=e||{},s.Scope=v,s.ScopeKey=f,s.TmpSecretId=s.SecretId,s.TmpSecretKey=s.SecretKey,n._StsCache.push(s),d()})}return""}function ee(e){var a=!1,t=!1,n=e.headers&&(e.headers.date||e.headers.Date)||"";try{var u=e.error.Code,r=e.error.Message;("RequestTimeTooSkewed"===u||"AccessDenied"===u&&"Request has expired"===r)&&(t=!0)}catch(e){}if(e)if(t&&n){var o=Date.parse(n);this.options.CorrectClockSkew&&Math.abs(ne.getSkewTime(this.options.SystemClockOffset)-o)>=3e4&&(console.error(l("error: Local time is too skewed."," at utils\\cos-wx-sdk-v5.js:1")),this.options.SystemClockOffset=o-Date.now(),a=!0)}else 5===Math.round(e.statusCode/100)&&(a=!0);return a}function le(e,l){var a=this;!e.headers&&(e.headers={}),!e.qs&&(e.qs={}),e.VersionId&&(e.qs.versionId=e.VersionId),e.qs=ne.clearKey(e.qs),e.headers&&(e.headers=ne.clearKey(e.headers)),e.qs&&(e.qs=ne.clearKey(e.qs));var t=ne.clone(e.qs);e.action&&(t[e.action]="");var n=function n(u){var r=a.options.SystemClockOffset;Z.call(a,{Bucket:e.Bucket||"",Region:e.Region||"",Method:e.method,Key:e.Key,Query:t,Headers:e.headers,Action:e.Action,ResourceKey:e.ResourceKey,Scope:e.Scope},function(t,o){e.AuthData=o,ae.call(a,e,function(t,o){t&&u<2&&(r!==a.options.SystemClockOffset||ee.call(a,t))?(e.headers&&(delete e.headers.Authorization,delete e.headers.token,delete e.headers.clientIP,delete e.headers.clientUA,delete e.headers["x-cos-security-token"]),n(u+1)):l(t,o)})})};n(0)}function ae(e,l){var a=this,t=e.TaskId;if(!t||a._isRunningTask(t)){var n=e.Bucket,u=e.Region,r=e.Key,o=e.method||"GET",i=e.url,s=e.body,v=e.json,c=e.rawBody;i=i||Q({ForcePathStyle:a.options.ForcePathStyle,protocol:a.options.Protocol,domain:a.options.Domain,bucket:n,region:u,object:r}),e.action&&(i=i+"?"+e.action);var b={method:o,url:i,headers:e.headers,qs:e.qs,filePath:e.filePath,body:s,json:v};b.headers.Authorization=e.AuthData.Authorization,e.AuthData.Token&&(b.headers.token=e.AuthData.Token),e.AuthData.ClientIP&&(b.headers.clientIP=e.AuthData.ClientIP),e.AuthData.ClientUA&&(b.headers.clientUA=e.AuthData.ClientUA),e.AuthData.XCosSecurityToken&&(b.headers["x-cos-security-token"]=e.AuthData.XCosSecurityToken),b.headers&&(b.headers=ne.clearKey(b.headers)),b=ne.clearKey(b),e.onProgress&&"function"==typeof e.onProgress&&(b.onProgress=function(l){if(!t||a._isRunningTask(t)){var n=l?l.loaded:0;e.onProgress({loaded:n,total:l.total})}}),a.options.ForcePathStyle&&(b.pathStyle=a.options.ForcePathStyle);var f=te(b,function(e,n,u){var r,o=function(e,u){if(t&&a.off("inner-kill-task",d),!r){r=!0;var o={};n&&n.statusCode&&(o.statusCode=n.statusCode),n&&n.headers&&(o.headers=n.headers),e?(e=ne.extend(e||{},o),l(e,null)):(u=ne.extend(u||{},o),l(null,u))}};if(!e){var i;try{i=ne.xml2json(u)||{}}catch(e){i=u||{}}var s=n.statusCode;return 2!==Math.floor(s/100)?void o({error:i.Error||i}):(c&&(i={},i.body=u),i.Error?void o({error:i.Error}):void o(null,i))}o({error:e})}),d=function e(l){l.TaskId===t&&(f&&f.abort&&f.abort(),a.off("inner-kill-task",e))};t&&a.on("inner-kill-task",d)}}var te=t(9),ne=t(0),ue={getService:n,putBucket:o,getBucket:r,headBucket:u,deleteBucket:i,getBucketAcl:s,putBucketAcl:v,getBucketCors:c,putBucketCors:b,deleteBucketCors:f,getBucketLocation:h,putBucketTagging:y,getBucketTagging:m,deleteBucketTagging:_,getBucketPolicy:g,putBucketPolicy:d,deleteBucketPolicy:p,getBucketLifecycle:w,putBucketLifecycle:k,deleteBucketLifecycle:C,putBucketVersioning:A,getBucketVersioning:x,putBucketReplication:S,getBucketReplication:T,deleteBucketReplication:O,getObject:B,headObject:E,listObjectVersions:N,putObject:D,postObject:R,deleteObject:P,getObjectAcl:I,putObjectAcl:M,optionsObject:L,putObjectCopy:j,deleteMultipleObject:U,restoreObject:F,uploadPartCopy:$,multipartInit:H,multipartUpload:G,multipartComplete:K,multipartList:q,multipartListPart:V,multipartAbort:z,getObjectUrl:W,getAuth:X};e.exports.init=function(e,l){l.transferToTaskMethod(ue,"postObject"),ne.each(ue,function(l,a){e.prototype[a]=ne.apiWrapper(a,l)})}},function(e,a,t){var n=t(0),u={},r=function(e,l){u[l]=e[l],e[l]=function(e,a){e.SkipTask?u[l].call(this,e,a):this._addTask(l,e,a)}},o=function(e){var a=[],t={},r=0,o=0,i=function(e){var l={id:e.id,Bucket:e.Bucket,Region:e.Region,Key:e.Key,FilePath:e.FilePath,state:e.state,loaded:e.loaded,size:e.size,speed:e.speed,percent:e.percent,hashPercent:e.hashPercent,error:e.error};return e.FilePath&&(l.FilePath=e.FilePath),l},s=function(){e.emit("list-update",{list:n.map(a,i)})},v=function(){var l;if(a.length>e.options.UploadQueueSize)for(l=0;l<a.length&&a.length>e.options.UploadQueueSize&&l<o;l++)a[l]&&"waiting"===a[l].state||(a.splice(l,1),o--)},c=function l(){if(o<a.length&&r<e.options.FileParallelLimit){var t=a[o];if("waiting"===t.state){r++,t.state="checking";var i=n.formatParams(t.api,t.params);u[t.api].call(e,i,function(a,n){e._isRunningTask(t.id)&&("checking"!==t.state&&"uploading"!==t.state||(t.state=a?"error":"success",a&&(t.error=a),r--,s(),l(e),t.callback&&t.callback(a,n),"success"===t.state&&(t.params&&(delete t.params.Body,delete t.params),delete t.callback)),v())}),s()}o++,l(e)}},b=function(a,n){var u=t[a];if(u){var o=u&&"waiting"===u.state,i=u&&("checking"===u.state||"uploading"===u.state);if("canceled"===n&&"canceled"!==u.state||"paused"===n&&o||"paused"===n&&i){if("paused"===n&&u.params.Body&&"function"==typeof u.params.Body.pipe)return void console.error(l("stream not support pause"," at utils\\cos-wx-sdk-v5.js:1"));u.state=n,e.emit("inner-kill-task",{TaskId:a,toState:n}),s(),i&&(r--,c(e)),"canceled"===n&&(u.params&&(delete u.params.Body,delete u.params),delete u.callback)}v()}};e._addTasks=function(l){n.each(l,function(l){e._addTask(l.api,l.params,l.callback,!0)}),s()},e._addTask=function(l,u,r,o){u=n.formatParams(l,u);var i=n.uuid();u.TaskId=i,u.TaskReady&&u.TaskReady(i);var b={params:u,callback:r,api:l,index:a.length,id:i,Bucket:u.Bucket,Region:u.Region,Key:u.Key,FilePath:u.FilePath||"",state:"waiting",loaded:0,size:0,speed:0,percent:0,hashPercent:0,error:null},f=u.onHashProgress;u.onHashProgress=function(l){e._isRunningTask(b.id)&&(b.hashPercent=l.percent,f&&f(l),s())};var d=u.onProgress;return u.onProgress=function(l){e._isRunningTask(b.id)&&("checking"===b.state&&(b.state="uploading"),b.loaded=l.loaded,b.size=l.total,b.speed=l.speed,b.percent=l.percent,d&&d(l),s())},function(){t[i]=b,a.push(b),b.size=u.FileSize,!o&&s(),c(e),v()}(),i},e._isRunningTask=function(e){var l=t[e];return!(!l||"checking"!==l.state&&"uploading"!==l.state)},e.getTaskList=function(){return n.map(a,i)},e.cancelTask=function(e){b(e,"canceled")},e.pauseTask=function(e){b(e,"paused")},e.restartTask=function(e){var l=t[e];!l||"paused"!==l.state&&"error"!==l.state||(l.state="waiting",s(),o=Math.min(o,l.index),c())}};e.exports.transferToTaskMethod=r,e.exports.init=o}])})}).call(this,a("0de9")["default"])},"66fd":function(e,l,a){"use strict";a.r(l),function(e){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var a=Object.freeze({});function t(e){return void 0===e||null===e}function n(e){return void 0!==e&&null!==e}function u(e){return!0===e}function r(e){return!1===e}function o(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function i(e){return null!==e&&"object"===typeof e}var s=Object.prototype.toString;function v(e){return"[object Object]"===s.call(e)}function c(e){return"[object RegExp]"===s.call(e)}function b(e){var l=parseFloat(String(e));return l>=0&&Math.floor(l)===l&&isFinite(e)}function f(e){return n(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function d(e){return null==e?"":Array.isArray(e)||v(e)&&e.toString===s?JSON.stringify(e,null,2):String(e)}function p(e){var l=parseFloat(e);return isNaN(l)?e:l}function h(e,l){for(var a=Object.create(null),t=e.split(","),n=0;n<t.length;n++)a[t[n]]=!0;return l?function(e){return a[e.toLowerCase()]}:function(e){return a[e]}}h("slot,component",!0);var g=h("key,ref,slot,slot-scope,is");function m(e,l){if(e.length){var a=e.indexOf(l);if(a>-1)return e.splice(a,1)}}var y=Object.prototype.hasOwnProperty;function _(e,l){return y.call(e,l)}function k(e){var l=Object.create(null);return function(a){var t=l[a];return t||(l[a]=e(a))}}var w=/-(\w)/g,C=k(function(e){return e.replace(w,function(e,l){return l?l.toUpperCase():""})}),A=k(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),x=/\B([A-Z])/g,S=k(function(e){return e.replace(x,"-$1").toLowerCase()});function T(e,l){function a(a){var t=arguments.length;return t?t>1?e.apply(l,arguments):e.call(l,a):e.call(l)}return a._length=e.length,a}function O(e,l){return e.bind(l)}var E=Function.prototype.bind?O:T;function N(e,l){l=l||0;var a=e.length-l,t=new Array(a);while(a--)t[a]=e[a+l];return t}function B(e,l){for(var a in l)e[a]=l[a];return e}function D(e){for(var l={},a=0;a<e.length;a++)e[a]&&B(l,e[a]);return l}function R(e,l,a){}var P=function(e,l,a){return!1},I=function(e){return e};function M(e,l){if(e===l)return!0;var a=i(e),t=i(l);if(!a||!t)return!a&&!t&&String(e)===String(l);try{var n=Array.isArray(e),u=Array.isArray(l);if(n&&u)return e.length===l.length&&e.every(function(e,a){return M(e,l[a])});if(e instanceof Date&&l instanceof Date)return e.getTime()===l.getTime();if(n||u)return!1;var r=Object.keys(e),o=Object.keys(l);return r.length===o.length&&r.every(function(a){return M(e[a],l[a])})}catch(s){return!1}}function L(e,l){for(var a=0;a<e.length;a++)if(M(e[a],l))return a;return-1}function j(e){var l=!1;return function(){l||(l=!0,e.apply(this,arguments))}}var $=["component","directive","filter"],U=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],F={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:P,isReservedAttr:P,isUnknownElement:P,getTagNamespace:R,parsePlatformTagName:I,mustUseProp:P,async:!0,_lifecycleHooks:U},H=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function G(e){var l=(e+"").charCodeAt(0);return 36===l||95===l}function K(e,l,a,t){Object.defineProperty(e,l,{value:a,enumerable:!!t,writable:!0,configurable:!0})}var q=new RegExp("[^"+H.source+".$_\\d]");function V(e){if(!q.test(e)){var l=e.split(".");return function(e){for(var a=0;a<l.length;a++){if(!e)return;e=e[l[a]]}return e}}}var z,X="__proto__"in{},W="undefined"!==typeof window,J="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Y=J&&WXEnvironment.platform.toLowerCase(),Q=W&&window.navigator.userAgent.toLowerCase(),Z=Q&&/msie|trident/.test(Q),ee=(Q&&Q.indexOf("msie 9.0"),Q&&Q.indexOf("edge/")>0),le=(Q&&Q.indexOf("android"),Q&&/iphone|ipad|ipod|ios/.test(Q)||"ios"===Y),ae=(Q&&/chrome\/\d+/.test(Q),Q&&/phantomjs/.test(Q),Q&&Q.match(/firefox\/(\d+)/),{}.watch);if(W)try{var te={};Object.defineProperty(te,"passive",{get:function(){}}),window.addEventListener("test-passive",null,te)}catch(en){}var ne=function(){return void 0===z&&(z=!W&&!J&&"undefined"!==typeof e&&(e["process"]&&"server"===e["process"].env.VUE_ENV)),z},ue=W&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function re(e){return"function"===typeof e&&/native code/.test(e.toString())}var oe,ie="undefined"!==typeof Symbol&&re(Symbol)&&"undefined"!==typeof Reflect&&re(Reflect.ownKeys);oe="undefined"!==typeof Set&&re(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var se=R,ve=0,ce=function(){this.id=ve++,this.subs=[]};function be(e){ce.SharedObject.targetStack.push(e),ce.SharedObject.target=e}function fe(){ce.SharedObject.targetStack.pop(),ce.SharedObject.target=ce.SharedObject.targetStack[ce.SharedObject.targetStack.length-1]}ce.prototype.addSub=function(e){this.subs.push(e)},ce.prototype.removeSub=function(e){m(this.subs,e)},ce.prototype.depend=function(){ce.SharedObject.target&&ce.SharedObject.target.addDep(this)},ce.prototype.notify=function(){var e=this.subs.slice();for(var l=0,a=e.length;l<a;l++)e[l].update()},ce.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},ce.SharedObject.target=null,ce.SharedObject.targetStack=[];var de=function(e,l,a,t,n,u,r,o){this.tag=e,this.data=l,this.children=a,this.text=t,this.elm=n,this.ns=void 0,this.context=u,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=l&&l.key,this.componentOptions=r,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=o,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},pe={child:{configurable:!0}};pe.child.get=function(){return this.componentInstance},Object.defineProperties(de.prototype,pe);var he=function(e){void 0===e&&(e="");var l=new de;return l.text=e,l.isComment=!0,l};function ge(e){return new de(void 0,void 0,void 0,String(e))}function me(e){var l=new de(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return l.ns=e.ns,l.isStatic=e.isStatic,l.key=e.key,l.isComment=e.isComment,l.fnContext=e.fnContext,l.fnOptions=e.fnOptions,l.fnScopeId=e.fnScopeId,l.asyncMeta=e.asyncMeta,l.isCloned=!0,l}var ye=Array.prototype,_e=Object.create(ye),ke=["push","pop","shift","unshift","splice","sort","reverse"];ke.forEach(function(e){var l=ye[e];K(_e,e,function(){var a=[],t=arguments.length;while(t--)a[t]=arguments[t];var n,u=l.apply(this,a),r=this.__ob__;switch(e){case"push":case"unshift":n=a;break;case"splice":n=a.slice(2);break}return n&&r.observeArray(n),r.dep.notify(),u})});var we=Object.getOwnPropertyNames(_e),Ce=!0;function Ae(e){Ce=e}var xe=function(e){this.value=e,this.dep=new ce,this.vmCount=0,K(e,"__ob__",this),Array.isArray(e)?(X?e.push!==e.__proto__.push?Te(e,_e,we):Se(e,_e):Te(e,_e,we),this.observeArray(e)):this.walk(e)};function Se(e,l){e.__proto__=l}function Te(e,l,a){for(var t=0,n=a.length;t<n;t++){var u=a[t];K(e,u,l[u])}}function Oe(e,l){var a;if(i(e)&&!(e instanceof de))return _(e,"__ob__")&&e.__ob__ instanceof xe?a=e.__ob__:Ce&&!ne()&&(Array.isArray(e)||v(e))&&Object.isExtensible(e)&&!e._isVue&&(a=new xe(e)),l&&a&&a.vmCount++,a}function Ee(e,l,a,t,n){var u=new ce,r=Object.getOwnPropertyDescriptor(e,l);if(!r||!1!==r.configurable){var o=r&&r.get,i=r&&r.set;o&&!i||2!==arguments.length||(a=e[l]);var s=!n&&Oe(a);Object.defineProperty(e,l,{enumerable:!0,configurable:!0,get:function(){var l=o?o.call(e):a;return ce.SharedObject.target&&(u.depend(),s&&(s.dep.depend(),Array.isArray(l)&&De(l))),l},set:function(l){var t=o?o.call(e):a;l===t||l!==l&&t!==t||o&&!i||(i?i.call(e,l):a=l,s=!n&&Oe(l),u.notify())}})}}function Ne(e,l,a){if(Array.isArray(e)&&b(l))return e.length=Math.max(e.length,l),e.splice(l,1,a),a;if(l in e&&!(l in Object.prototype))return e[l]=a,a;var t=e.__ob__;return e._isVue||t&&t.vmCount?a:t?(Ee(t.value,l,a),t.dep.notify(),a):(e[l]=a,a)}function Be(e,l){if(Array.isArray(e)&&b(l))e.splice(l,1);else{var a=e.__ob__;e._isVue||a&&a.vmCount||_(e,l)&&(delete e[l],a&&a.dep.notify())}}function De(e){for(var l=void 0,a=0,t=e.length;a<t;a++)l=e[a],l&&l.__ob__&&l.__ob__.dep.depend(),Array.isArray(l)&&De(l)}xe.prototype.walk=function(e){for(var l=Object.keys(e),a=0;a<l.length;a++)Ee(e,l[a])},xe.prototype.observeArray=function(e){for(var l=0,a=e.length;l<a;l++)Oe(e[l])};var Re=F.optionMergeStrategies;function Pe(e,l){if(!l)return e;for(var a,t,n,u=ie?Reflect.ownKeys(l):Object.keys(l),r=0;r<u.length;r++)a=u[r],"__ob__"!==a&&(t=e[a],n=l[a],_(e,a)?t!==n&&v(t)&&v(n)&&Pe(t,n):Ne(e,a,n));return e}function Ie(e,l,a){return a?function(){var t="function"===typeof l?l.call(a,a):l,n="function"===typeof e?e.call(a,a):e;return t?Pe(t,n):n}:l?e?function(){return Pe("function"===typeof l?l.call(this,this):l,"function"===typeof e?e.call(this,this):e)}:l:e}function Me(e,l){var a=l?e?e.concat(l):Array.isArray(l)?l:[l]:e;return a?Le(a):a}function Le(e){for(var l=[],a=0;a<e.length;a++)-1===l.indexOf(e[a])&&l.push(e[a]);return l}function je(e,l,a,t){var n=Object.create(e||null);return l?B(n,l):n}Re.data=function(e,l,a){return a?Ie(e,l,a):l&&"function"!==typeof l?e:Ie(e,l)},U.forEach(function(e){Re[e]=Me}),$.forEach(function(e){Re[e+"s"]=je}),Re.watch=function(e,l,a,t){if(e===ae&&(e=void 0),l===ae&&(l=void 0),!l)return Object.create(e||null);if(!e)return l;var n={};for(var u in B(n,e),l){var r=n[u],o=l[u];r&&!Array.isArray(r)&&(r=[r]),n[u]=r?r.concat(o):Array.isArray(o)?o:[o]}return n},Re.props=Re.methods=Re.inject=Re.computed=function(e,l,a,t){if(!e)return l;var n=Object.create(null);return B(n,e),l&&B(n,l),n},Re.provide=Ie;var $e=function(e,l){return void 0===l?e:l};function Ue(e,l){var a=e.props;if(a){var t,n,u,r={};if(Array.isArray(a)){t=a.length;while(t--)n=a[t],"string"===typeof n&&(u=C(n),r[u]={type:null})}else if(v(a))for(var o in a)n=a[o],u=C(o),r[u]=v(n)?n:{type:n};else 0;e.props=r}}function Fe(e,l){var a=e.inject;if(a){var t=e.inject={};if(Array.isArray(a))for(var n=0;n<a.length;n++)t[a[n]]={from:a[n]};else if(v(a))for(var u in a){var r=a[u];t[u]=v(r)?B({from:u},r):{from:r}}else 0}}function He(e){var l=e.directives;if(l)for(var a in l){var t=l[a];"function"===typeof t&&(l[a]={bind:t,update:t})}}function Ge(e,l,a){if("function"===typeof l&&(l=l.options),Ue(l,a),Fe(l,a),He(l),!l._base&&(l.extends&&(e=Ge(e,l.extends,a)),l.mixins))for(var t=0,n=l.mixins.length;t<n;t++)e=Ge(e,l.mixins[t],a);var u,r={};for(u in e)o(u);for(u in l)_(e,u)||o(u);function o(t){var n=Re[t]||$e;r[t]=n(e[t],l[t],a,t)}return r}function Ke(e,l,a,t){if("string"===typeof a){var n=e[l];if(_(n,a))return n[a];var u=C(a);if(_(n,u))return n[u];var r=A(u);if(_(n,r))return n[r];var o=n[a]||n[u]||n[r];return o}}function qe(e,l,a,t){var n=l[e],u=!_(a,e),r=a[e],o=We(Boolean,n.type);if(o>-1)if(u&&!_(n,"default"))r=!1;else if(""===r||r===S(e)){var i=We(String,n.type);(i<0||o<i)&&(r=!0)}if(void 0===r){r=Ve(t,n,e);var s=Ce;Ae(!0),Oe(r),Ae(s)}return r}function Ve(e,l,a){if(_(l,"default")){var t=l.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[a]&&void 0!==e._props[a]?e._props[a]:"function"===typeof t&&"Function"!==ze(l.type)?t.call(e):t}}function ze(e){var l=e&&e.toString().match(/^\s*function (\w+)/);return l?l[1]:""}function Xe(e,l){return ze(e)===ze(l)}function We(e,l){if(!Array.isArray(l))return Xe(l,e)?0:-1;for(var a=0,t=l.length;a<t;a++)if(Xe(l[a],e))return a;return-1}function Je(e,l,a){be();try{if(l){var t=l;while(t=t.$parent){var n=t.$options.errorCaptured;if(n)for(var u=0;u<n.length;u++)try{var r=!1===n[u].call(t,e,l,a);if(r)return}catch(en){Qe(en,t,"errorCaptured hook")}}}Qe(e,l,a)}finally{fe()}}function Ye(e,l,a,t,n){var u;try{u=a?e.apply(l,a):e.call(l),u&&!u._isVue&&f(u)&&!u._handled&&(u.catch(function(e){return Je(e,t,n+" (Promise/async)")}),u._handled=!0)}catch(en){Je(en,t,n)}return u}function Qe(e,l,a){if(F.errorHandler)try{return F.errorHandler.call(null,e,l,a)}catch(en){en!==e&&Ze(en,null,"config.errorHandler")}Ze(e,l,a)}function Ze(e,l,a){if(!W&&!J||"undefined"===typeof console)throw e;console.error(e)}var el,ll=[],al=!1;function tl(){al=!1;var e=ll.slice(0);ll.length=0;for(var l=0;l<e.length;l++)e[l]()}if("undefined"!==typeof Promise&&re(Promise)){var nl=Promise.resolve();el=function(){nl.then(tl),le&&setTimeout(R)}}else if(Z||"undefined"===typeof MutationObserver||!re(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())el="undefined"!==typeof setImmediate&&re(setImmediate)?function(){setImmediate(tl)}:function(){setTimeout(tl,0)};else{var ul=1,rl=new MutationObserver(tl),ol=document.createTextNode(String(ul));rl.observe(ol,{characterData:!0}),el=function(){ul=(ul+1)%2,ol.data=String(ul)}}function il(e,l){var a;if(ll.push(function(){if(e)try{e.call(l)}catch(en){Je(en,l,"nextTick")}else a&&a(l)}),al||(al=!0,el()),!e&&"undefined"!==typeof Promise)return new Promise(function(e){a=e})}var sl=new oe;function vl(e){cl(e,sl),sl.clear()}function cl(e,l){var a,t,n=Array.isArray(e);if(!(!n&&!i(e)||Object.isFrozen(e)||e instanceof de)){if(e.__ob__){var u=e.__ob__.dep.id;if(l.has(u))return;l.add(u)}if(n){a=e.length;while(a--)cl(e[a],l)}else{t=Object.keys(e),a=t.length;while(a--)cl(e[t[a]],l)}}}var bl=k(function(e){var l="&"===e.charAt(0);e=l?e.slice(1):e;var a="~"===e.charAt(0);e=a?e.slice(1):e;var t="!"===e.charAt(0);return e=t?e.slice(1):e,{name:e,once:a,capture:t,passive:l}});function fl(e,l){function a(){var e=arguments,t=a.fns;if(!Array.isArray(t))return Ye(t,null,arguments,l,"v-on handler");for(var n=t.slice(),u=0;u<n.length;u++)Ye(n[u],null,e,l,"v-on handler")}return a.fns=e,a}function dl(e,l,a,n,r,o){var i,s,v,c;for(i in e)s=e[i],v=l[i],c=bl(i),t(s)||(t(v)?(t(s.fns)&&(s=e[i]=fl(s,o)),u(c.once)&&(s=e[i]=r(c.name,s,c.capture)),a(c.name,s,c.capture,c.passive,c.params)):s!==v&&(v.fns=s,e[i]=v));for(i in l)t(e[i])&&(c=bl(i),n(c.name,l[i],c.capture))}function pl(e,l,a){var u=l.options.props;if(!t(u)){var r={},o=e.attrs,i=e.props;if(n(o)||n(i))for(var s in u){var v=S(s);hl(r,i,s,v,!0)||hl(r,o,s,v,!1)}return r}}function hl(e,l,a,t,u){if(n(l)){if(_(l,a))return e[a]=l[a],u||delete l[a],!0;if(_(l,t))return e[a]=l[t],u||delete l[t],!0}return!1}function gl(e){for(var l=0;l<e.length;l++)if(Array.isArray(e[l]))return Array.prototype.concat.apply([],e);return e}function ml(e){return o(e)?[ge(e)]:Array.isArray(e)?_l(e):void 0}function yl(e){return n(e)&&n(e.text)&&r(e.isComment)}function _l(e,l){var a,r,i,s,v=[];for(a=0;a<e.length;a++)r=e[a],t(r)||"boolean"===typeof r||(i=v.length-1,s=v[i],Array.isArray(r)?r.length>0&&(r=_l(r,(l||"")+"_"+a),yl(r[0])&&yl(s)&&(v[i]=ge(s.text+r[0].text),r.shift()),v.push.apply(v,r)):o(r)?yl(s)?v[i]=ge(s.text+r):""!==r&&v.push(ge(r)):yl(r)&&yl(s)?v[i]=ge(s.text+r.text):(u(e._isVList)&&n(r.tag)&&t(r.key)&&n(l)&&(r.key="__vlist"+l+"_"+a+"__"),v.push(r)));return v}function kl(e){var l=e.$options.provide;l&&(e._provided="function"===typeof l?l.call(e):l)}function wl(e){var l=Cl(e.$options.inject,e);l&&(Ae(!1),Object.keys(l).forEach(function(a){Ee(e,a,l[a])}),Ae(!0))}function Cl(e,l){if(e){for(var a=Object.create(null),t=ie?Reflect.ownKeys(e):Object.keys(e),n=0;n<t.length;n++){var u=t[n];if("__ob__"!==u){var r=e[u].from,o=l;while(o){if(o._provided&&_(o._provided,r)){a[u]=o._provided[r];break}o=o.$parent}if(!o)if("default"in e[u]){var i=e[u].default;a[u]="function"===typeof i?i.call(l):i}else 0}}return a}}function Al(e,l){if(!e||!e.length)return{};for(var a={},t=0,n=e.length;t<n;t++){var u=e[t],r=u.data;if(r&&r.attrs&&r.attrs.slot&&delete r.attrs.slot,u.context!==l&&u.fnContext!==l||!r||null==r.slot)u.asyncMeta&&u.asyncMeta.data&&"page"===u.asyncMeta.data.slot?(a["page"]||(a["page"]=[])).push(u):(a.default||(a.default=[])).push(u);else{var o=r.slot,i=a[o]||(a[o]=[]);"template"===u.tag?i.push.apply(i,u.children||[]):i.push(u)}}for(var s in a)a[s].every(xl)&&delete a[s];return a}function xl(e){return e.isComment&&!e.asyncFactory||" "===e.text}function Sl(e,l,t){var n,u=Object.keys(l).length>0,r=e?!!e.$stable:!u,o=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(r&&t&&t!==a&&o===t.$key&&!u&&!t.$hasNormal)return t;for(var i in n={},e)e[i]&&"$"!==i[0]&&(n[i]=Tl(l,i,e[i]))}else n={};for(var s in l)s in n||(n[s]=Ol(l,s));return e&&Object.isExtensible(e)&&(e._normalized=n),K(n,"$stable",r),K(n,"$key",o),K(n,"$hasNormal",u),n}function Tl(e,l,a){var t=function(){var e=arguments.length?a.apply(null,arguments):a({});return e=e&&"object"===typeof e&&!Array.isArray(e)?[e]:ml(e),e&&(0===e.length||1===e.length&&e[0].isComment)?void 0:e};return a.proxy&&Object.defineProperty(e,l,{get:t,enumerable:!0,configurable:!0}),t}function Ol(e,l){return function(){return e[l]}}function El(e,l){var a,t,u,r,o;if(Array.isArray(e)||"string"===typeof e)for(a=new Array(e.length),t=0,u=e.length;t<u;t++)a[t]=l(e[t],t);else if("number"===typeof e)for(a=new Array(e),t=0;t<e;t++)a[t]=l(t+1,t);else if(i(e))if(ie&&e[Symbol.iterator]){a=[];var s=e[Symbol.iterator](),v=s.next();while(!v.done)a.push(l(v.value,a.length)),v=s.next()}else for(r=Object.keys(e),a=new Array(r.length),t=0,u=r.length;t<u;t++)o=r[t],a[t]=l(e[o],o,t);return n(a)||(a=[]),a._isVList=!0,a}function Nl(e,l,a,t){var n,u=this.$scopedSlots[e];u?(a=a||{},t&&(a=B(B({},t),a)),n=u(a)||l):n=this.$slots[e]||l;var r=a&&a.slot;return r?this.$createElement("template",{slot:r},n):n}function Bl(e){return Ke(this.$options,"filters",e,!0)||I}function Dl(e,l){return Array.isArray(e)?-1===e.indexOf(l):e!==l}function Rl(e,l,a,t,n){var u=F.keyCodes[l]||a;return n&&t&&!F.keyCodes[l]?Dl(n,t):u?Dl(u,e):t?S(t)!==l:void 0}function Pl(e,l,a,t,n){if(a)if(i(a)){var u;Array.isArray(a)&&(a=D(a));var r=function(r){if("class"===r||"style"===r||g(r))u=e;else{var o=e.attrs&&e.attrs.type;u=t||F.mustUseProp(l,o,r)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var i=C(r),s=S(r);if(!(i in u)&&!(s in u)&&(u[r]=a[r],n)){var v=e.on||(e.on={});v["update:"+r]=function(e){a[r]=e}}};for(var o in a)r(o)}else;return e}function Il(e,l){var a=this._staticTrees||(this._staticTrees=[]),t=a[e];return t&&!l?t:(t=a[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),Ll(t,"__static__"+e,!1),t)}function Ml(e,l,a){return Ll(e,"__once__"+l+(a?"_"+a:""),!0),e}function Ll(e,l,a){if(Array.isArray(e))for(var t=0;t<e.length;t++)e[t]&&"string"!==typeof e[t]&&jl(e[t],l+"_"+t,a);else jl(e,l,a)}function jl(e,l,a){e.isStatic=!0,e.key=l,e.isOnce=a}function $l(e,l){if(l)if(v(l)){var a=e.on=e.on?B({},e.on):{};for(var t in l){var n=a[t],u=l[t];a[t]=n?[].concat(n,u):u}}else;return e}function Ul(e,l,a,t){l=l||{$stable:!a};for(var n=0;n<e.length;n++){var u=e[n];Array.isArray(u)?Ul(u,l,a):u&&(u.proxy&&(u.fn.proxy=!0),l[u.key]=u.fn)}return t&&(l.$key=t),l}function Fl(e,l){for(var a=0;a<l.length;a+=2){var t=l[a];"string"===typeof t&&t&&(e[l[a]]=l[a+1])}return e}function Hl(e,l){return"string"===typeof e?l+e:e}function Gl(e){e._o=Ml,e._n=p,e._s=d,e._l=El,e._t=Nl,e._q=M,e._i=L,e._m=Il,e._f=Bl,e._k=Rl,e._b=Pl,e._v=ge,e._e=he,e._u=Ul,e._g=$l,e._d=Fl,e._p=Hl}function Kl(e,l,t,n,r){var o,i=this,s=r.options;_(n,"_uid")?(o=Object.create(n),o._original=n):(o=n,n=n._original);var v=u(s._compiled),c=!v;this.data=e,this.props=l,this.children=t,this.parent=n,this.listeners=e.on||a,this.injections=Cl(s.inject,n),this.slots=function(){return i.$slots||Sl(e.scopedSlots,i.$slots=Al(t,n)),i.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Sl(e.scopedSlots,this.slots())}}),v&&(this.$options=s,this.$slots=this.slots(),this.$scopedSlots=Sl(e.scopedSlots,this.$slots)),s._scopeId?this._c=function(e,l,a,t){var u=ta(o,e,l,a,t,c);return u&&!Array.isArray(u)&&(u.fnScopeId=s._scopeId,u.fnContext=n),u}:this._c=function(e,l,a,t){return ta(o,e,l,a,t,c)}}function ql(e,l,t,u,r){var o=e.options,i={},s=o.props;if(n(s))for(var v in s)i[v]=qe(v,s,l||a);else n(t.attrs)&&zl(i,t.attrs),n(t.props)&&zl(i,t.props);var c=new Kl(t,i,r,u,e),b=o.render.call(null,c._c,c);if(b instanceof de)return Vl(b,t,c.parent,o,c);if(Array.isArray(b)){for(var f=ml(b)||[],d=new Array(f.length),p=0;p<f.length;p++)d[p]=Vl(f[p],t,c.parent,o,c);return d}}function Vl(e,l,a,t,n){var u=me(e);return u.fnContext=a,u.fnOptions=t,l.slot&&((u.data||(u.data={})).slot=l.slot),u}function zl(e,l){for(var a in l)e[C(a)]=l[a]}Gl(Kl.prototype);var Xl={init:function(e,l){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var a=e;Xl.prepatch(a,a)}else{var t=e.componentInstance=Yl(e,wa);t.$mount(l?e.elm:void 0,l)}},prepatch:function(e,l){var a=l.componentOptions,t=l.componentInstance=e.componentInstance;Sa(t,a.propsData,a.listeners,l,a.children)},insert:function(e){var l=e.context,a=e.componentInstance;a._isMounted||(a._isMounted=!0,Na(a,"mounted")),e.data.keepAlive&&(l._isMounted?Ha(a):Oa(a,!0))},destroy:function(e){var l=e.componentInstance;l._isDestroyed||(e.data.keepAlive?Ea(l,!0):l.$destroy())}},Wl=Object.keys(Xl);function Jl(e,l,a,r,o){if(!t(e)){var s=a.$options._base;if(i(e)&&(e=s.extend(e)),"function"===typeof e){var v;if(t(e.cid)&&(v=e,e=fa(v,s),void 0===e))return ba(v,l,a,r,o);l=l||{},ct(e),n(l.model)&&ea(e.options,l);var c=pl(l,e,o);if(u(e.options.functional))return ql(e,c,l,a,r);var b=l.on;if(l.on=l.nativeOn,u(e.options.abstract)){var f=l.slot;l={},f&&(l.slot=f)}Ql(l);var d=e.options.name||o,p=new de("vue-component-"+e.cid+(d?"-"+d:""),l,void 0,void 0,void 0,a,{Ctor:e,propsData:c,listeners:b,tag:o,children:r},v);return p}}}function Yl(e,l){var a={_isComponent:!0,_parentVnode:e,parent:l},t=e.data.inlineTemplate;return n(t)&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),new e.componentOptions.Ctor(a)}function Ql(e){for(var l=e.hook||(e.hook={}),a=0;a<Wl.length;a++){var t=Wl[a],n=l[t],u=Xl[t];n===u||n&&n._merged||(l[t]=n?Zl(u,n):u)}}function Zl(e,l){var a=function(a,t){e(a,t),l(a,t)};return a._merged=!0,a}function ea(e,l){var a=e.model&&e.model.prop||"value",t=e.model&&e.model.event||"input";(l.attrs||(l.attrs={}))[a]=l.model.value;var u=l.on||(l.on={}),r=u[t],o=l.model.callback;n(r)?(Array.isArray(r)?-1===r.indexOf(o):r!==o)&&(u[t]=[o].concat(r)):u[t]=o}var la=1,aa=2;function ta(e,l,a,t,n,r){return(Array.isArray(a)||o(a))&&(n=t,t=a,a=void 0),u(r)&&(n=aa),na(e,l,a,t,n)}function na(e,l,a,t,u){if(n(a)&&n(a.__ob__))return he();if(n(a)&&n(a.is)&&(l=a.is),!l)return he();var r,o,i;(Array.isArray(t)&&"function"===typeof t[0]&&(a=a||{},a.scopedSlots={default:t[0]},t.length=0),u===aa?t=ml(t):u===la&&(t=gl(t)),"string"===typeof l)?(o=e.$vnode&&e.$vnode.ns||F.getTagNamespace(l),r=F.isReservedTag(l)?new de(F.parsePlatformTagName(l),a,t,void 0,void 0,e):a&&a.pre||!n(i=Ke(e.$options,"components",l))?new de(l,a,t,void 0,void 0,e):Jl(i,a,e,t,l)):r=Jl(l,a,e,t);return Array.isArray(r)?r:n(r)?(n(o)&&ua(r,o),n(a)&&ra(a),r):he()}function ua(e,l,a){if(e.ns=l,"foreignObject"===e.tag&&(l=void 0,a=!0),n(e.children))for(var r=0,o=e.children.length;r<o;r++){var i=e.children[r];n(i.tag)&&(t(i.ns)||u(a)&&"svg"!==i.tag)&&ua(i,l,a)}}function ra(e){i(e.style)&&vl(e.style),i(e.class)&&vl(e.class)}function oa(e){e._vnode=null,e._staticTrees=null;var l=e.$options,t=e.$vnode=l._parentVnode,n=t&&t.context;e.$slots=Al(l._renderChildren,n),e.$scopedSlots=a,e._c=function(l,a,t,n){return ta(e,l,a,t,n,!1)},e.$createElement=function(l,a,t,n){return ta(e,l,a,t,n,!0)};var u=t&&t.data;Ee(e,"$attrs",u&&u.attrs||a,null,!0),Ee(e,"$listeners",l._parentListeners||a,null,!0)}var ia,sa=null;function va(e){Gl(e.prototype),e.prototype.$nextTick=function(e){return il(e,this)},e.prototype._render=function(){var e,l=this,a=l.$options,t=a.render,n=a._parentVnode;n&&(l.$scopedSlots=Sl(n.data.scopedSlots,l.$slots,l.$scopedSlots)),l.$vnode=n;try{sa=l,e=t.call(l._renderProxy,l.$createElement)}catch(en){Je(en,l,"render"),e=l._vnode}finally{sa=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof de||(e=he()),e.parent=n,e}}function ca(e,l){return(e.__esModule||ie&&"Module"===e[Symbol.toStringTag])&&(e=e.default),i(e)?l.extend(e):e}function ba(e,l,a,t,n){var u=he();return u.asyncFactory=e,u.asyncMeta={data:l,context:a,children:t,tag:n},u}function fa(e,l){if(u(e.error)&&n(e.errorComp))return e.errorComp;if(n(e.resolved))return e.resolved;var a=sa;if(a&&n(e.owners)&&-1===e.owners.indexOf(a)&&e.owners.push(a),u(e.loading)&&n(e.loadingComp))return e.loadingComp;if(a&&!n(e.owners)){var r=e.owners=[a],o=!0,s=null,v=null;a.$on("hook:destroyed",function(){return m(r,a)});var c=function(e){for(var l=0,a=r.length;l<a;l++)r[l].$forceUpdate();e&&(r.length=0,null!==s&&(clearTimeout(s),s=null),null!==v&&(clearTimeout(v),v=null))},b=j(function(a){e.resolved=ca(a,l),o?r.length=0:c(!0)}),d=j(function(l){n(e.errorComp)&&(e.error=!0,c(!0))}),p=e(b,d);return i(p)&&(f(p)?t(e.resolved)&&p.then(b,d):f(p.component)&&(p.component.then(b,d),n(p.error)&&(e.errorComp=ca(p.error,l)),n(p.loading)&&(e.loadingComp=ca(p.loading,l),0===p.delay?e.loading=!0:s=setTimeout(function(){s=null,t(e.resolved)&&t(e.error)&&(e.loading=!0,c(!1))},p.delay||200)),n(p.timeout)&&(v=setTimeout(function(){v=null,t(e.resolved)&&d(null)},p.timeout)))),o=!1,e.loading?e.loadingComp:e.resolved}}function da(e){return e.isComment&&e.asyncFactory}function pa(e){if(Array.isArray(e))for(var l=0;l<e.length;l++){var a=e[l];if(n(a)&&(n(a.componentOptions)||da(a)))return a}}function ha(e){e._events=Object.create(null),e._hasHookEvent=!1;var l=e.$options._parentListeners;l&&_a(e,l)}function ga(e,l){ia.$on(e,l)}function ma(e,l){ia.$off(e,l)}function ya(e,l){var a=ia;return function t(){var n=l.apply(null,arguments);null!==n&&a.$off(e,t)}}function _a(e,l,a){ia=e,dl(l,a||{},ga,ma,ya,e),ia=void 0}function ka(e){var l=/^hook:/;e.prototype.$on=function(e,a){var t=this;if(Array.isArray(e))for(var n=0,u=e.length;n<u;n++)t.$on(e[n],a);else(t._events[e]||(t._events[e]=[])).push(a),l.test(e)&&(t._hasHookEvent=!0);return t},e.prototype.$once=function(e,l){var a=this;function t(){a.$off(e,t),l.apply(a,arguments)}return t.fn=l,a.$on(e,t),a},e.prototype.$off=function(e,l){var a=this;if(!arguments.length)return a._events=Object.create(null),a;if(Array.isArray(e)){for(var t=0,n=e.length;t<n;t++)a.$off(e[t],l);return a}var u,r=a._events[e];if(!r)return a;if(!l)return a._events[e]=null,a;var o=r.length;while(o--)if(u=r[o],u===l||u.fn===l){r.splice(o,1);break}return a},e.prototype.$emit=function(e){var l=this,a=l._events[e];if(a){a=a.length>1?N(a):a;for(var t=N(arguments,1),n='event handler for "'+e+'"',u=0,r=a.length;u<r;u++)Ye(a[u],l,t,l,n)}return l}}var wa=null;function Ca(e){var l=wa;return wa=e,function(){wa=l}}function Aa(e){var l=e.$options,a=l.parent;if(a&&!l.abstract){while(a.$options.abstract&&a.$parent)a=a.$parent;a.$children.push(e)}e.$parent=a,e.$root=a?a.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function xa(e){e.prototype._update=function(e,l){var a=this,t=a.$el,n=a._vnode,u=Ca(a);a._vnode=e,a.$el=n?a.__patch__(n,e):a.__patch__(a.$el,e,l,!1),u(),t&&(t.__vue__=null),a.$el&&(a.$el.__vue__=a),a.$vnode&&a.$parent&&a.$vnode===a.$parent._vnode&&(a.$parent.$el=a.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Na(e,"beforeDestroy"),e._isBeingDestroyed=!0;var l=e.$parent;!l||l._isBeingDestroyed||e.$options.abstract||m(l.$children,e),e._watcher&&e._watcher.teardown();var a=e._watchers.length;while(a--)e._watchers[a].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Na(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function Sa(e,l,t,n,u){var r=n.data.scopedSlots,o=e.$scopedSlots,i=!!(r&&!r.$stable||o!==a&&!o.$stable||r&&e.$scopedSlots.$key!==r.$key),s=!!(u||e.$options._renderChildren||i);if(e.$options._parentVnode=n,e.$vnode=n,e._vnode&&(e._vnode.parent=n),e.$options._renderChildren=u,e.$attrs=n.data.attrs||a,e.$listeners=t||a,l&&e.$options.props){Ae(!1);for(var v=e._props,c=e.$options._propKeys||[],b=0;b<c.length;b++){var f=c[b],d=e.$options.props;v[f]=qe(f,d,l,e)}Ae(!0),e.$options.propsData=l}t=t||a;var p=e.$options._parentListeners;e.$options._parentListeners=t,_a(e,t,p),s&&(e.$slots=Al(u,n.context),e.$forceUpdate())}function Ta(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function Oa(e,l){if(l){if(e._directInactive=!1,Ta(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var a=0;a<e.$children.length;a++)Oa(e.$children[a]);Na(e,"activated")}}function Ea(e,l){if((!l||(e._directInactive=!0,!Ta(e)))&&!e._inactive){e._inactive=!0;for(var a=0;a<e.$children.length;a++)Ea(e.$children[a]);Na(e,"deactivated")}}function Na(e,l){be();var a=e.$options[l],t=l+" hook";if(a)for(var n=0,u=a.length;n<u;n++)Ye(a[n],e,null,e,t);e._hasHookEvent&&e.$emit("hook:"+l),fe()}var Ba=[],Da=[],Ra={},Pa=!1,Ia=!1,Ma=0;function La(){Ma=Ba.length=Da.length=0,Ra={},Pa=Ia=!1}var ja=Date.now;if(W&&!Z){var $a=window.performance;$a&&"function"===typeof $a.now&&ja()>document.createEvent("Event").timeStamp&&(ja=function(){return $a.now()})}function Ua(){var e,l;for(ja(),Ia=!0,Ba.sort(function(e,l){return e.id-l.id}),Ma=0;Ma<Ba.length;Ma++)e=Ba[Ma],e.before&&e.before(),l=e.id,Ra[l]=null,e.run();var a=Da.slice(),t=Ba.slice();La(),Ga(a),Fa(t),ue&&F.devtools&&ue.emit("flush")}function Fa(e){var l=e.length;while(l--){var a=e[l],t=a.vm;t._watcher===a&&t._isMounted&&!t._isDestroyed&&Na(t,"updated")}}function Ha(e){e._inactive=!1,Da.push(e)}function Ga(e){for(var l=0;l<e.length;l++)e[l]._inactive=!0,Oa(e[l],!0)}function Ka(e){var l=e.id;if(null==Ra[l]){if(Ra[l]=!0,Ia){var a=Ba.length-1;while(a>Ma&&Ba[a].id>e.id)a--;Ba.splice(a+1,0,e)}else Ba.push(e);Pa||(Pa=!0,il(Ua))}}var qa=0,Va=function(e,l,a,t,n){this.vm=e,n&&(e._watcher=this),e._watchers.push(this),t?(this.deep=!!t.deep,this.user=!!t.user,this.lazy=!!t.lazy,this.sync=!!t.sync,this.before=t.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=a,this.id=++qa,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new oe,this.newDepIds=new oe,this.expression="","function"===typeof l?this.getter=l:(this.getter=V(l),this.getter||(this.getter=R)),this.value=this.lazy?void 0:this.get()};Va.prototype.get=function(){var e;be(this);var l=this.vm;try{e=this.getter.call(l,l)}catch(en){if(!this.user)throw en;Je(en,l,'getter for watcher "'+this.expression+'"')}finally{this.deep&&vl(e),fe(),this.cleanupDeps()}return e},Va.prototype.addDep=function(e){var l=e.id;this.newDepIds.has(l)||(this.newDepIds.add(l),this.newDeps.push(e),this.depIds.has(l)||e.addSub(this))},Va.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var l=this.deps[e];this.newDepIds.has(l.id)||l.removeSub(this)}var a=this.depIds;this.depIds=this.newDepIds,this.newDepIds=a,this.newDepIds.clear(),a=this.deps,this.deps=this.newDeps,this.newDeps=a,this.newDeps.length=0},Va.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Ka(this)},Va.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||i(e)||this.deep){var l=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,l)}catch(en){Je(en,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,l)}}},Va.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Va.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},Va.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||m(this.vm._watchers,this);var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1}};var za={enumerable:!0,configurable:!0,get:R,set:R};function Xa(e,l,a){za.get=function(){return this[l][a]},za.set=function(e){this[l][a]=e},Object.defineProperty(e,a,za)}function Wa(e){e._watchers=[];var l=e.$options;l.props&&Ja(e,l.props),l.methods&&nt(e,l.methods),l.data?Ya(e):Oe(e._data={},!0),l.computed&&et(e,l.computed),l.watch&&l.watch!==ae&&ut(e,l.watch)}function Ja(e,l){var a=e.$options.propsData||{},t=e._props={},n=e.$options._propKeys=[],u=!e.$parent;u||Ae(!1);var r=function(u){n.push(u);var r=qe(u,l,a,e);Ee(t,u,r),u in e||Xa(e,"_props",u)};for(var o in l)r(o);Ae(!0)}function Ya(e){var l=e.$options.data;l=e._data="function"===typeof l?Qa(l,e):l||{},v(l)||(l={});var a=Object.keys(l),t=e.$options.props,n=(e.$options.methods,a.length);while(n--){var u=a[n];0,t&&_(t,u)||G(u)||Xa(e,"_data",u)}Oe(l,!0)}function Qa(e,l){be();try{return e.call(l,l)}catch(en){return Je(en,l,"data()"),{}}finally{fe()}}var Za={lazy:!0};function et(e,l){var a=e._computedWatchers=Object.create(null),t=ne();for(var n in l){var u=l[n],r="function"===typeof u?u:u.get;0,t||(a[n]=new Va(e,r||R,R,Za)),n in e||lt(e,n,u)}}function lt(e,l,a){var t=!ne();"function"===typeof a?(za.get=t?at(l):tt(a),za.set=R):(za.get=a.get?t&&!1!==a.cache?at(l):tt(a.get):R,za.set=a.set||R),Object.defineProperty(e,l,za)}function at(e){return function(){var l=this._computedWatchers&&this._computedWatchers[e];if(l)return l.dirty&&l.evaluate(),ce.SharedObject.target&&l.depend(),l.value}}function tt(e){return function(){return e.call(this,this)}}function nt(e,l){e.$options.props;for(var a in l)e[a]="function"!==typeof l[a]?R:E(l[a],e)}function ut(e,l){for(var a in l){var t=l[a];if(Array.isArray(t))for(var n=0;n<t.length;n++)rt(e,a,t[n]);else rt(e,a,t)}}function rt(e,l,a,t){return v(a)&&(t=a,a=a.handler),"string"===typeof a&&(a=e[a]),e.$watch(l,a,t)}function ot(e){var l={get:function(){return this._data}},a={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",l),Object.defineProperty(e.prototype,"$props",a),e.prototype.$set=Ne,e.prototype.$delete=Be,e.prototype.$watch=function(e,l,a){var t=this;if(v(l))return rt(t,e,l,a);a=a||{},a.user=!0;var n=new Va(t,e,l,a);if(a.immediate)try{l.call(t,n.value)}catch(u){Je(u,t,'callback for immediate watcher "'+n.expression+'"')}return function(){n.teardown()}}}var it=0;function st(e){e.prototype._init=function(e){var l=this;l._uid=it++,l._isVue=!0,e&&e._isComponent?vt(l,e):l.$options=Ge(ct(l.constructor),e||{},l),l._renderProxy=l,l._self=l,Aa(l),ha(l),oa(l),Na(l,"beforeCreate"),"mp-toutiao"!==l.mpHost&&wl(l),Wa(l),"mp-toutiao"!==l.mpHost&&kl(l),"mp-toutiao"!==l.mpHost&&Na(l,"created"),l.$options.el&&l.$mount(l.$options.el)}}function vt(e,l){var a=e.$options=Object.create(e.constructor.options),t=l._parentVnode;a.parent=l.parent,a._parentVnode=t;var n=t.componentOptions;a.propsData=n.propsData,a._parentListeners=n.listeners,a._renderChildren=n.children,a._componentTag=n.tag,l.render&&(a.render=l.render,a.staticRenderFns=l.staticRenderFns)}function ct(e){var l=e.options;if(e.super){var a=ct(e.super),t=e.superOptions;if(a!==t){e.superOptions=a;var n=bt(e);n&&B(e.extendOptions,n),l=e.options=Ge(a,e.extendOptions),l.name&&(l.components[l.name]=e)}}return l}function bt(e){var l,a=e.options,t=e.sealedOptions;for(var n in a)a[n]!==t[n]&&(l||(l={}),l[n]=a[n]);return l}function ft(e){this._init(e)}function dt(e){e.use=function(e){var l=this._installedPlugins||(this._installedPlugins=[]);if(l.indexOf(e)>-1)return this;var a=N(arguments,1);return a.unshift(this),"function"===typeof e.install?e.install.apply(e,a):"function"===typeof e&&e.apply(null,a),l.push(e),this}}function pt(e){e.mixin=function(e){return this.options=Ge(this.options,e),this}}function ht(e){e.cid=0;var l=1;e.extend=function(e){e=e||{};var a=this,t=a.cid,n=e._Ctor||(e._Ctor={});if(n[t])return n[t];var u=e.name||a.options.name;var r=function(e){this._init(e)};return r.prototype=Object.create(a.prototype),r.prototype.constructor=r,r.cid=l++,r.options=Ge(a.options,e),r["super"]=a,r.options.props&&gt(r),r.options.computed&&mt(r),r.extend=a.extend,r.mixin=a.mixin,r.use=a.use,$.forEach(function(e){r[e]=a[e]}),u&&(r.options.components[u]=r),r.superOptions=a.options,r.extendOptions=e,r.sealedOptions=B({},r.options),n[t]=r,r}}function gt(e){var l=e.options.props;for(var a in l)Xa(e.prototype,"_props",a)}function mt(e){var l=e.options.computed;for(var a in l)lt(e.prototype,a,l[a])}function yt(e){$.forEach(function(l){e[l]=function(e,a){return a?("component"===l&&v(a)&&(a.name=a.name||e,a=this.options._base.extend(a)),"directive"===l&&"function"===typeof a&&(a={bind:a,update:a}),this.options[l+"s"][e]=a,a):this.options[l+"s"][e]}})}function _t(e){return e&&(e.Ctor.options.name||e.tag)}function kt(e,l){return Array.isArray(e)?e.indexOf(l)>-1:"string"===typeof e?e.split(",").indexOf(l)>-1:!!c(e)&&e.test(l)}function wt(e,l){var a=e.cache,t=e.keys,n=e._vnode;for(var u in a){var r=a[u];if(r){var o=_t(r.componentOptions);o&&!l(o)&&Ct(a,u,t,n)}}}function Ct(e,l,a,t){var n=e[l];!n||t&&n.tag===t.tag||n.componentInstance.$destroy(),e[l]=null,m(a,l)}st(ft),ot(ft),ka(ft),xa(ft),va(ft);var At=[String,RegExp,Array],xt={name:"keep-alive",abstract:!0,props:{include:At,exclude:At,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)Ct(this.cache,e,this.keys)},mounted:function(){var e=this;this.$watch("include",function(l){wt(e,function(e){return kt(l,e)})}),this.$watch("exclude",function(l){wt(e,function(e){return!kt(l,e)})})},render:function(){var e=this.$slots.default,l=pa(e),a=l&&l.componentOptions;if(a){var t=_t(a),n=this,u=n.include,r=n.exclude;if(u&&(!t||!kt(u,t))||r&&t&&kt(r,t))return l;var o=this,i=o.cache,s=o.keys,v=null==l.key?a.Ctor.cid+(a.tag?"::"+a.tag:""):l.key;i[v]?(l.componentInstance=i[v].componentInstance,m(s,v),s.push(v)):(i[v]=l,s.push(v),this.max&&s.length>parseInt(this.max)&&Ct(i,s[0],s,this._vnode)),l.data.keepAlive=!0}return l||e&&e[0]}},St={KeepAlive:xt};function Tt(e){var l={get:function(){return F}};Object.defineProperty(e,"config",l),e.util={warn:se,extend:B,mergeOptions:Ge,defineReactive:Ee},e.set=Ne,e.delete=Be,e.nextTick=il,e.observable=function(e){return Oe(e),e},e.options=Object.create(null),$.forEach(function(l){e.options[l+"s"]=Object.create(null)}),e.options._base=e,B(e.options.components,St),dt(e),pt(e),ht(e),yt(e)}Tt(ft),Object.defineProperty(ft.prototype,"$isServer",{get:ne}),Object.defineProperty(ft.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(ft,"FunctionalRenderContext",{value:Kl}),ft.version="2.6.10";var Ot="[object Array]",Et="[object Object]";function Nt(e,l){var a={};return Bt(e,l),Dt(e,l,"",a),a}function Bt(e,l){if(e!==l){var a=Pt(e),t=Pt(l);if(a==Et&&t==Et){if(Object.keys(e).length>=Object.keys(l).length)for(var n in l){var u=e[n];void 0===u?e[n]=null:Bt(u,l[n])}}else a==Ot&&t==Ot&&e.length>=l.length&&l.forEach(function(l,a){Bt(e[a],l)})}}function Dt(e,l,a,t){if(e!==l){var n=Pt(e),u=Pt(l);if(n==Et)if(u!=Et||Object.keys(e).length<Object.keys(l).length)Rt(t,a,e);else{var r=function(n){var u=e[n],r=l[n],o=Pt(u),i=Pt(r);if(o!=Ot&&o!=Et)u!=l[n]&&Rt(t,(""==a?"":a+".")+n,u);else if(o==Ot)i!=Ot?Rt(t,(""==a?"":a+".")+n,u):u.length<r.length?Rt(t,(""==a?"":a+".")+n,u):u.forEach(function(e,l){Dt(e,r[l],(""==a?"":a+".")+n+"["+l+"]",t)});else if(o==Et)if(i!=Et||Object.keys(u).length<Object.keys(r).length)Rt(t,(""==a?"":a+".")+n,u);else for(var s in u)Dt(u[s],r[s],(""==a?"":a+".")+n+"."+s,t)};for(var o in e)r(o)}else n==Ot?u!=Ot?Rt(t,a,e):e.length<l.length?Rt(t,a,e):e.forEach(function(e,n){Dt(e,l[n],a+"["+n+"]",t)}):Rt(t,a,e)}}function Rt(e,l,a){e[l]=a}function Pt(e){return Object.prototype.toString.call(e)}function It(e){if(e.__next_tick_callbacks&&e.__next_tick_callbacks.length){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var l=e.$scope;console.log("["+ +new Date+"]["+(l.is||l.route)+"]["+e._uid+"]:flushCallbacks["+e.__next_tick_callbacks.length+"]")}var a=e.__next_tick_callbacks.slice(0);e.__next_tick_callbacks.length=0;for(var t=0;t<a.length;t++)a[t]()}}function Mt(e){return Ba.find(function(l){return e._watcher===l})}function Lt(e,l){if(!e.__next_tick_pending&&!Mt(e)){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var a=e.$scope;console.log("["+ +new Date+"]["+(a.is||a.route)+"]["+e._uid+"]:nextVueTick")}return il(l,e)}if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var t=e.$scope;console.log("["+ +new Date+"]["+(t.is||t.route)+"]["+e._uid+"]:nextMPTick")}var n;if(e.__next_tick_callbacks||(e.__next_tick_callbacks=[]),e.__next_tick_callbacks.push(function(){if(l)try{l.call(e)}catch(en){Je(en,e,"nextTick")}else n&&n(e)}),!l&&"undefined"!==typeof Promise)return new Promise(function(e){n=e})}function jt(e){var l=Object.create(null),a=[].concat(Object.keys(e._data||{}),Object.keys(e._computedWatchers||{}));return a.reduce(function(l,a){return l[a]=e[a],l},l),Object.assign(l,e.$mp.data||{}),Array.isArray(e.$options.behaviors)&&-1!==e.$options.behaviors.indexOf("uni://form-field")&&(l["name"]=e.name,l["value"]=e.value),JSON.parse(JSON.stringify(l))}var $t=function(e,l){var a=this;if(null!==l&&("page"===this.mpType||"component"===this.mpType)){var t=this.$scope,n=Object.create(null);try{n=jt(this)}catch(o){console.error(o)}n.__webviewId__=t.data.__webviewId__;var u=Object.create(null);Object.keys(n).forEach(function(e){u[e]=t.data[e]});var r=Nt(n,u);Object.keys(r).length?(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(t.is||t.route)+"]["+this._uid+"]差量更新",JSON.stringify(r)),this.__next_tick_pending=!0,t.setData(r,function(){a.__next_tick_pending=!1,It(a)})):It(this)}};function Ut(){}function Ft(e,l,a){if(!e.mpType)return e;"app"===e.mpType&&(e.$options.render=Ut),e.$options.render||(e.$options.render=Ut),"mp-toutiao"!==e.mpHost&&Na(e,"beforeMount");var t=function(){e._update(e._render(),a)};return new Va(e,t,R,{before:function(){e._isMounted&&!e._isDestroyed&&Na(e,"beforeUpdate")}},!0),a=!1,e}function Ht(e,l){return n(e)||n(l)?Gt(e,Kt(l)):""}function Gt(e,l){return e?l?e+" "+l:e:l||""}function Kt(e){return Array.isArray(e)?qt(e):i(e)?Vt(e):"string"===typeof e?e:""}function qt(e){for(var l,a="",t=0,u=e.length;t<u;t++)n(l=Kt(e[t]))&&""!==l&&(a&&(a+=" "),a+=l);return a}function Vt(e){var l="";for(var a in e)e[a]&&(l&&(l+=" "),l+=a);return l}var zt=k(function(e){var l={},a=/;(?![^(]*\))/g,t=/:(.+)/;return e.split(a).forEach(function(e){if(e){var a=e.split(t);a.length>1&&(l[a[0].trim()]=a[1].trim())}}),l});function Xt(e){return Array.isArray(e)?D(e):"string"===typeof e?zt(e):e}var Wt=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Jt(e,l){var a=l.split("."),t=a[0];return 0===t.indexOf("__$n")&&(t=parseInt(t.replace("__$n",""))),1===a.length?e[t]:Jt(e[t],a.slice(1).join("."))}function Yt(e){e.config.errorHandler=function(e){console.error(e)};var l=e.prototype.$emit;e.prototype.$emit=function(e){return this.$scope&&e&&this.$scope["triggerEvent"](e,{__args__:N(arguments,1)}),l.apply(this,arguments)},e.prototype.$nextTick=function(e){return Lt(this,e)},Wt.forEach(function(l){e.prototype[l]=function(e){if(this.$scope)return this.$scope[l](e)}}),e.prototype.__init_provide=kl,e.prototype.__init_injections=wl,e.prototype.__call_hook=function(e,l){var a=this;be();var t,n=a.$options[e],u=e+" hook";if(n)for(var r=0,o=n.length;r<o;r++)t=Ye(n[r],a,l?[l]:null,a,u);return a._hasHookEvent&&a.$emit("hook:"+e),fe(),t},e.prototype.__set_model=function(e,l,a,t){Array.isArray(t)&&(-1!==t.indexOf("trim")&&(a=a.trim()),-1!==t.indexOf("number")&&(a=this._n(a))),e||(e=this),e[l]=a},e.prototype.__set_sync=function(e,l,a){e||(e=this),e[l]=a},e.prototype.__get_orig=function(e){return v(e)&&e["$orig"]||e},e.prototype.__get_value=function(e,l){return Jt(l||this,e)},e.prototype.__get_class=function(e,l){return Ht(l,e)},e.prototype.__get_style=function(e,l){if(!e&&!l)return"";var a=Xt(e),t=l?B(l,a):a;return Object.keys(t).map(function(e){return S(e)+":"+t[e]}).join(";")},e.prototype.__map=function(e,l){var a,t,n,u,r;if(Array.isArray(e)){for(a=new Array(e.length),t=0,n=e.length;t<n;t++)a[t]=l(e[t],t);return a}if(i(e)){for(u=Object.keys(e),a=Object.create(null),t=0,n=u.length;t<n;t++)r=u[t],a[r]=l(e[r],r,t);return a}return[]}}var Qt=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function Zt(e){var l=e.extend;e.extend=function(e){e=e||{};var a=e.methods;return a&&Object.keys(a).forEach(function(l){-1!==Qt.indexOf(l)&&(e[l]=a[l],delete a[l])}),l.call(this,e)};var a=e.config.optionMergeStrategies,t=a.created;Qt.forEach(function(e){a[e]=t}),e.prototype.__lifecycle_hooks__=Qt}ft.prototype.__patch__=$t,ft.prototype.$mount=function(e,l){return Ft(this,e,l)},Zt(ft),Yt(ft),l["default"]=ft}.call(this,a("c8ba"))},"6e42":function(e,l,a){"use strict";(function(e){Object.defineProperty(l,"__esModule",{value:!0}),l.createApp=dl,l.createComponent=Al,l.createPage=Cl,l.default=void 0;var t=n(a("66fd"));function n(e){return e&&e.__esModule?e:{default:e}}function u(e,l){return i(e)||o(e,l)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function o(e,l){var a=[],t=!0,n=!1,u=void 0;try{for(var r,o=e[Symbol.iterator]();!(t=(r=o.next()).done);t=!0)if(a.push(r.value),l&&a.length===l)break}catch(i){n=!0,u=i}finally{try{t||null==o["return"]||o["return"]()}finally{if(n)throw u}}return a}function i(e){if(Array.isArray(e))return e}function s(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}function v(e){return f(e)||b(e)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function b(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function f(e){if(Array.isArray(e)){for(var l=0,a=new Array(e.length);l<e.length;l++)a[l]=e[l];return a}}var d=Object.prototype.toString,p=Object.prototype.hasOwnProperty;function h(e){return"function"===typeof e}function g(e){return"string"===typeof e}function m(e){return"[object Object]"===d.call(e)}function y(e,l){return p.call(e,l)}function _(){}function k(e){var l=Object.create(null);return function(a){var t=l[a];return t||(l[a]=e(a))}}var w=/-(\w)/g,C=k(function(e){return e.replace(w,function(e,l){return l?l.toUpperCase():""})}),A=["invoke","success","fail","complete","returnValue"],x={},S={};function T(e,l){var a=l?e?e.concat(l):Array.isArray(l)?l:[l]:e;return a?O(a):a}function O(e){for(var l=[],a=0;a<e.length;a++)-1===l.indexOf(e[a])&&l.push(e[a]);return l}function E(e,l){var a=e.indexOf(l);-1!==a&&e.splice(a,1)}function N(e,l){Object.keys(l).forEach(function(a){-1!==A.indexOf(a)&&h(l[a])&&(e[a]=T(e[a],l[a]))})}function B(e,l){e&&l&&Object.keys(l).forEach(function(a){-1!==A.indexOf(a)&&h(l[a])&&E(e[a],l[a])})}function D(e,l){"string"===typeof e&&m(l)?N(S[e]||(S[e]={}),l):m(e)&&N(x,e)}function R(e,l){"string"===typeof e?m(l)?B(S[e],l):delete S[e]:m(e)&&B(x,e)}function P(e){return function(l){return e(l)||l}}function I(e){return!!e&&("object"===typeof e||"function"===typeof e)&&"function"===typeof e.then}function M(e,l){for(var a=!1,t=0;t<e.length;t++){var n=e[t];if(a)a=Promise.then(P(n));else{var u=n(l);if(I(u)&&(a=Promise.resolve(u)),!1===u)return{then:function(){}}}}return a||{then:function(e){return e(l)}}}function L(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(a){if(Array.isArray(e[a])){var t=l[a];l[a]=function(l){M(e[a],l).then(function(e){return h(t)&&t(e)||e})}}}),l}function j(e,l){var a=[];Array.isArray(x.returnValue)&&a.push.apply(a,v(x.returnValue));var t=S[e];return t&&Array.isArray(t.returnValue)&&a.push.apply(a,v(t.returnValue)),a.forEach(function(e){l=e(l)||l}),l}function $(e){var l=Object.create(null);Object.keys(x).forEach(function(e){"returnValue"!==e&&(l[e]=x[e].slice())});var a=S[e];return a&&Object.keys(a).forEach(function(e){"returnValue"!==e&&(l[e]=(l[e]||[]).concat(a[e]))}),l}function U(e,l,a){for(var t=arguments.length,n=new Array(t>3?t-3:0),u=3;u<t;u++)n[u-3]=arguments[u];var r=$(e);if(r&&Object.keys(r).length){if(Array.isArray(r.invoke)){var o=M(r.invoke,a);return o.then(function(e){return l.apply(void 0,[L(r,e)].concat(n))})}return l.apply(void 0,[L(r,a)].concat(n))}return l.apply(void 0,[a].concat(n))}var F={returnValue:function(e){return I(e)?e.then(function(e){return e[1]}).catch(function(e){return e[0]}):e}},H=/^\$|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,G=/^create|Manager$/,K=/^on/;function q(e){return G.test(e)}function V(e){return H.test(e)}function z(e){return K.test(e)}function X(e){return e.then(function(e){return[null,e]}).catch(function(e){return[e]})}function W(e){return!(q(e)||V(e)||z(e))}function J(e,l){return W(e)?function(){for(var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length,n=new Array(t>1?t-1:0),u=1;u<t;u++)n[u-1]=arguments[u];return h(a.success)||h(a.fail)||h(a.complete)?j(e,U.apply(void 0,[e,l,a].concat(n))):j(e,X(new Promise(function(t,u){U.apply(void 0,[e,l,Object.assign({},a,{success:t,fail:u})].concat(n)),Promise.prototype.finally||(Promise.prototype.finally=function(e){var l=this.constructor;return this.then(function(a){return l.resolve(e()).then(function(){return a})},function(a){return l.resolve(e()).then(function(){throw a})})})})))}:l}var Y=1e-4,Q=750,Z=!1,ee=0,le=0;function ae(){var e=wx.getSystemInfoSync(),l=e.platform,a=e.pixelRatio,t=e.windowWidth;ee=t,le=a,Z="ios"===l}function te(e,l){if(0===ee&&ae(),e=Number(e),0===e)return 0;var a=e/Q*(l||ee);return a<0&&(a=-a),a=Math.floor(a+Y),0===a?1!==le&&Z?.5:1:e<0?-a:a}var ne={promiseInterceptor:F},ue=Object.freeze({upx2px:te,interceptors:ne,addInterceptor:D,removeInterceptor:R}),re={},oe=[],ie=[],se=["success","fail","cancel","complete"];function ve(e,l,a){return function(t){return l(be(e,t,a))}}function ce(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(m(l)){var u=!0===n?l:{};for(var r in h(a)&&(a=a(l,u)||{}),l)if(y(a,r)){var o=a[r];h(o)&&(o=o(l[r],l,u)),o?g(o)?u[o]=l[r]:m(o)&&(u[o.name?o.name:r]=o.value):console.warn("app-plus ".concat(e,"暂不支持").concat(r))}else-1!==se.indexOf(r)?u[r]=ve(e,l[r],t):n||(u[r]=l[r]);return u}return h(l)&&(l=ve(e,l,t)),l}function be(e,l,a){var t=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return h(re.returnValue)&&(l=re.returnValue(e,l)),ce(e,l,a,{},t)}function fe(e,l){if(y(re,e)){var a=re[e];return a?function(l,t){var n=a;h(a)&&(n=a(l)),l=ce(e,l,n.args,n.returnValue);var u=[l];"undefined"!==typeof t&&u.push(t);var r=wx[n.name||e].apply(wx,u);return V(e)?be(e,r,n.returnValue,q(e)):r}:function(){console.error("app-plus 暂不支持".concat(e))}}return l}var de=Object.create(null),pe=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function he(e){return function(l){var a=l.fail,t=l.complete,n={errMsg:"".concat(e,":fail:暂不支持 ").concat(e," 方法")};h(a)&&a(n),h(t)&&t(n)}}pe.forEach(function(e){de[e]=he(e)});var ge=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return e||(e=new t.default),e};var e}();function me(e,l,a){return e[l].apply(e,a)}function ye(){return me(ge(),"$on",Array.prototype.slice.call(arguments))}function _e(){return me(ge(),"$off",Array.prototype.slice.call(arguments))}function ke(){return me(ge(),"$once",Array.prototype.slice.call(arguments))}function we(){return me(ge(),"$emit",Array.prototype.slice.call(arguments))}var Ce=Object.freeze({$on:ye,$off:_e,$once:ke,$emit:we});function Ae(e){return"undefined"!==typeof weex?weex.requireModule(e):__requireNativePlugin__(e)}function xe(e){e.$processed=!0,e.postMessage=function(l){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:l},e.id)};var l=[];if(e.onMessage=function(e){l.push(e)},e.$consumeMessage=function(e){l.forEach(function(l){return l(e)})},e.__uniapp_mask_id){var a=e.__uniapp_mask,t="0"===e.__uniapp_mask_id?{setStyle:function(e){var l=e.mask;Ae("uni-tabview").setMask({color:l})}}:plus.webview.getWebviewById(e.__uniapp_mask_id),n=e.show,u=e.hide,r=e.close,o=function(){t.setStyle({mask:a})},i=function(){t.setStyle({mask:"none"})};e.show=function(){o();for(var l=arguments.length,a=new Array(l),t=0;t<l;t++)a[t]=arguments[t];return n.apply(e,a)},e.hide=function(){i();for(var l=arguments.length,a=new Array(l),t=0;t<l;t++)a[t]=arguments[t];return u.apply(e,a)},e.close=function(){i(),l=[];for(var a=arguments.length,t=new Array(a),n=0;n<a;n++)t[n]=arguments[n];return r.apply(e,t)}}}function Se(e){var l=plus.webview.getWebviewById(e);return l&&!l.$processed&&xe(l),l}var Te=Object.freeze({getSubNVueById:Se,requireNativePlugin:Ae}),Oe=Page,Ee=Component,Ne=/:/g,Be=k(function(e){return C(e.replace(Ne,"-"))});function De(e){if(wx.canIUse("nextTick")){var l=e.triggerEvent;e.triggerEvent=function(a){for(var t=arguments.length,n=new Array(t>1?t-1:0),u=1;u<t;u++)n[u-1]=arguments[u];return l.apply(e,[Be(a)].concat(n))}}}function Re(e,l){var a=l[e];l[e]=a?function(){De(this);for(var e=arguments.length,l=new Array(e),t=0;t<e;t++)l[t]=arguments[t];return a.apply(this,l)}:function(){De(this)}}Page=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Re("onLoad",e),Oe(e)},Component=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Re("created",e),Ee(e)};var Pe=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Ie(e,l){var a=e.$mp[e.mpType];l.forEach(function(l){y(a,l)&&(e[l]=a[l])})}function Me(e,l){if(!l)return!0;if(t.default.options&&Array.isArray(t.default.options[e]))return!0;if(l=l.default||l,h(l))return!!h(l.extendOptions[e])||!!(l.super&&l.super.options&&Array.isArray(l.super.options[e]));if(h(l[e]))return!0;var a=l.mixins;return Array.isArray(a)?!!a.find(function(l){return Me(e,l)}):void 0}function Le(e,l,a){l.forEach(function(l){Me(l,a)&&(e[l]=function(e){return this.$vm&&this.$vm.__call_hook(l,e)})})}function je(e,l){var a;return l=l.default||l,h(l)?(a=l,l=a.extendOptions):a=e.extend(l),[a,l]}function $e(e,l){if(Array.isArray(l)&&l.length){var a=Object.create(null);l.forEach(function(e){a[e]=!0}),e.$scopedSlots=e.$slots=a}}function Ue(e,l){e=(e||"").split(",");var a=e.length;1===a?l._$vueId=e[0]:2===a&&(l._$vueId=e[0],l._$vuePid=e[1])}function Fe(e,l){var a=e.data||{},t=e.methods||{};if("function"===typeof a)try{a=a.call(l)}catch(n){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",a)}else try{a=JSON.parse(JSON.stringify(a))}catch(n){}return m(a)||(a={}),Object.keys(t).forEach(function(e){-1!==l.__lifecycle_hooks__.indexOf(e)||y(a,e)||(a[e]=t[e])}),a}var He=[String,Number,Boolean,Object,Array,null];function Ge(e){return function(l,a){this.$vm&&(this.$vm[e]=l)}}function Ke(e,l){var a=e["behaviors"],t=e["extends"],n=e["mixins"],u=e["props"];u||(e["props"]=u=[]);var r=[];return Array.isArray(a)&&a.forEach(function(e){r.push(e.replace("uni://","wx".concat("://"))),"uni://form-field"===e&&(Array.isArray(u)?(u.push("name"),u.push("value")):(u["name"]={type:String,default:""},u["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),m(t)&&t.props&&r.push(l({properties:Ve(t.props,!0)})),Array.isArray(n)&&n.forEach(function(e){m(e)&&e.props&&r.push(l({properties:Ve(e.props,!0)}))}),r}function qe(e,l,a,t){return Array.isArray(l)&&1===l.length?l[0]:l}function Ve(e){var l=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return l||(a.vueId={type:String,value:""},a.vueSlots={type:null,value:[],observer:function(e,l){var a=Object.create(null);e.forEach(function(e){a[e]=!0}),this.setData({$slots:a})}}),Array.isArray(e)?e.forEach(function(e){a[e]={type:null,observer:Ge(e)}}):m(e)&&Object.keys(e).forEach(function(l){var t=e[l];if(m(t)){var n=t["default"];h(n)&&(n=n()),t.type=qe(l,t.type),a[l]={type:-1!==He.indexOf(t.type)?t.type:null,value:n,observer:Ge(l)}}else{var u=qe(l,t);a[l]={type:-1!==He.indexOf(u)?u:null,observer:Ge(l)}}}),a}function ze(e){try{e.mp=JSON.parse(JSON.stringify(e))}catch(l){}return e.stopPropagation=_,e.preventDefault=_,e.target=e.target||{},y(e,"detail")||(e.detail={}),m(e.detail)&&(e.target=Object.assign({},e.target,e.detail)),e}function Xe(e,l){var a=e;return l.forEach(function(l){var t=l[0],n=l[2];if(t||"undefined"!==typeof n){var u=l[1],r=l[3],o=t?e.__get_value(t,a):a;Number.isInteger(o)?a=n:u?Array.isArray(o)?a=o.find(function(l){return e.__get_value(u,l)===n}):m(o)?a=Object.keys(o).find(function(l){return e.__get_value(u,o[l])===n}):console.error("v-for 暂不支持循环数据：",o):a=o[n],r&&(a=e.__get_value(r,a))}}),a}function We(e,l,a){var t={};return Array.isArray(l)&&l.length&&l.forEach(function(l,n){"string"===typeof l?l?"$event"===l?t["$"+n]=a:0===l.indexOf("$event.")?t["$"+n]=e.__get_value(l.replace("$event.",""),a):t["$"+n]=e.__get_value(l):t["$"+n]=e:t["$"+n]=Xe(e,l)}),t}function Je(e){for(var l={},a=1;a<e.length;a++){var t=e[a];l[t[0]]=t[1]}return l}function Ye(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],n=arguments.length>4?arguments[4]:void 0,u=arguments.length>5?arguments[5]:void 0,r=!1;if(n&&(r=l.currentTarget&&l.currentTarget.dataset&&"wx"===l.currentTarget.dataset.comType,!a.length))return r?[l]:l.detail.__args__||l.detail;var o=We(e,t,l),i=[];return a.forEach(function(e){"$event"===e?"__set_model"!==u||n?n&&!r?i.push(l.detail.__args__[0]):i.push(l):i.push(l.target.value):Array.isArray(e)&&"o"===e[0]?i.push(Je(e)):"string"===typeof e&&y(o,e)?i.push(o[e]):i.push(e)}),i}var Qe="~",Ze="^";function el(e,l){return e===l||"regionchange"===l&&("begin"===e||"end"===e)}function ll(e){var l=this;e=ze(e);var a=(e.currentTarget||e.target).dataset;if(!a)return console.warn("事件信息不存在");var t=a.eventOpts||a["event-opts"];if(!t)return console.warn("事件信息不存在");var n=e.type,u=[];return t.forEach(function(a){var t=a[0],r=a[1],o=t.charAt(0)===Ze;t=o?t.slice(1):t;var i=t.charAt(0)===Qe;t=i?t.slice(1):t,r&&el(n,t)&&r.forEach(function(a){var t=a[0];if(t){var n=l.$vm;n.$options.generic&&n.$parent&&n.$parent.$parent&&(n=n.$parent.$parent);var r=n[t];if(!h(r))throw new Error(" _vm.".concat(t," is not a function"));if(i){if(r.once)return;r.once=!0}u.push(r.apply(n,Ye(l.$vm,e,a[1],a[2],o,t)))}})}),"input"===n&&1===u.length&&"undefined"!==typeof u[0]?u[0]:void 0}var al=["onShow","onHide","onError","onPageNotFound"];function tl(e,l){var a=l.mocks,n=l.initRefs;e.$options.store&&(t.default.prototype.$store=e.$options.store),t.default.prototype.mpHost="app-plus",t.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=s({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(n(this),Ie(this,a)))}});var u={onLaunch:function(l){this.$vm||(this.$vm=e,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",l),this.$vm.__call_hook("onLaunch",l))}};return u.globalData=e.$options.globalData||{},Le(u,al),u}var nl=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function ul(e,l){var a=e.$children,t=a.find(function(e){return e.$scope._$vueId===l});if(t)return t;for(var n=a.length-1;n>=0;n--)if(t=ul(a[n],l),t)return t}function rl(e){return Behavior(e)}function ol(){return!!this.route}function il(e){this.triggerEvent("__l",e)}function sl(e){var l=e.$scope;Object.defineProperty(e,"$refs",{get:function(){var e={},a=l.selectAllComponents(".vue-ref");a.forEach(function(l){var a=l.dataset.ref;e[a]=l.$vm||l});var t=l.selectAllComponents(".vue-ref-in-for");return t.forEach(function(l){var a=l.dataset.ref;e[a]||(e[a]=[]),e[a].push(l.$vm||l)}),e}})}function vl(e){var l,a=e.detail||e.value,t=a.vuePid,n=a.vueOptions;t&&(l=ul(this.$vm,t)),l||(l=this.$vm),n.parent=l}function cl(e){return tl(e,{mocks:nl,initRefs:sl})}var bl=["onUniNViewMessage"];function fl(e){var l=cl(e);return Le(l,bl),l}function dl(e){return App(fl(e)),e}function pl(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=l.isPage,n=l.initRelation,r=je(t.default,e),o=u(r,2),i=o[0],s=o[1],v={options:{multipleSlots:!0,addGlobalClass:!0},data:Fe(s,t.default.prototype),behaviors:Ke(s,rl),properties:Ve(s.props,!1,s.__file),lifetimes:{attached:function(){var e=this.properties,l={mpType:a.call(this)?"page":"component",mpInstance:this,propsData:e};Ue(e.vueId,this),n.call(this,{vuePid:this._$vuePid,vueOptions:l}),this.$vm=new i(l),$e(this.$vm,e.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(e){this.$vm&&this.$vm.__call_hook("onPageShow",e)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(e){this.$vm&&this.$vm.__call_hook("onPageResize",e)}},methods:{__l:vl,__e:ll}};return Array.isArray(s.wxsCallMethods)&&s.wxsCallMethods.forEach(function(e){v.methods[e]=function(l){return this.$vm[e](l)}}),a?v:[v,i]}function hl(e){return pl(e,{isPage:ol,initRelation:il})}function gl(e){var l=hl(e);return l.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},l}var ml=["onShow","onHide","onUnload"];function yl(e,l){l.isPage,l.initRelation;var a=gl(e);return Le(a.methods,ml,e),a.methods.onLoad=function(e){this.$vm.$mp.query=e,this.$vm.__call_hook("onLoad",e)},a}function _l(e){return yl(e,{isPage:ol,initRelation:il})}ml.push.apply(ml,Pe);var kl=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function wl(e){var l=_l(e);return Le(l.methods,kl),l}function Cl(e){return Component(wl(e))}function Al(e){return Component(gl(e))}oe.forEach(function(e){re[e]=!1}),ie.forEach(function(e){var l=re[e]&&re[e].name?re[e].name:e;wx.canIUse(l)||(re[e]=!1)});var xl={};Object.keys(ue).forEach(function(e){xl[e]=ue[e]}),Object.keys(Ce).forEach(function(e){xl[e]=Ce[e]}),Object.keys(Te).forEach(function(e){xl[e]=J(e,Te[e])}),Object.keys(wx).forEach(function(e){(y(wx,e)||y(re,e))&&(xl[e]=J(e,fe(e,wx[e])))}),"undefined"!==typeof e&&(e.uni=xl,e.UniEmitter=Ce),wx.createApp=dl,wx.createPage=Cl,wx.createComponent=Al;var Sl=xl,Tl=Sl;l.default=Tl}).call(this,a("c8ba"))},"72b4":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=[[{label:"市辖区",value:"1101"}],[{label:"市辖区",value:"1201"}],[{label:"石家庄市",value:"1301"},{label:"唐山市",value:"1302"},{label:"秦皇岛市",value:"1303"},{label:"邯郸市",value:"1304"},{label:"邢台市",value:"1305"},{label:"保定市",value:"1306"},{label:"张家口市",value:"1307"},{label:"承德市",value:"1308"},{label:"沧州市",value:"1309"},{label:"廊坊市",value:"1310"},{label:"衡水市",value:"1311"}],[{label:"太原市",value:"1401"},{label:"大同市",value:"1402"},{label:"阳泉市",value:"1403"},{label:"长治市",value:"1404"},{label:"晋城市",value:"1405"},{label:"朔州市",value:"1406"},{label:"晋中市",value:"1407"},{label:"运城市",value:"1408"},{label:"忻州市",value:"1409"},{label:"临汾市",value:"1410"},{label:"吕梁市",value:"1411"}],[{label:"呼和浩特市",value:"1501"},{label:"包头市",value:"1502"},{label:"乌海市",value:"1503"},{label:"赤峰市",value:"1504"},{label:"通辽市",value:"1505"},{label:"鄂尔多斯市",value:"1506"},{label:"呼伦贝尔市",value:"1507"},{label:"巴彦淖尔市",value:"1508"},{label:"乌兰察布市",value:"1509"},{label:"兴安盟",value:"1522"},{label:"锡林郭勒盟",value:"1525"},{label:"阿拉善盟",value:"1529"}],[{label:"沈阳市",value:"2101"},{label:"大连市",value:"2102"},{label:"鞍山市",value:"2103"},{label:"抚顺市",value:"2104"},{label:"本溪市",value:"2105"},{label:"丹东市",value:"2106"},{label:"锦州市",value:"2107"},{label:"营口市",value:"2108"},{label:"阜新市",value:"2109"},{label:"辽阳市",value:"2110"},{label:"盘锦市",value:"2111"},{label:"铁岭市",value:"2112"},{label:"朝阳市",value:"2113"},{label:"葫芦岛市",value:"2114"}],[{label:"长春市",value:"2201"},{label:"吉林市",value:"2202"},{label:"四平市",value:"2203"},{label:"辽源市",value:"2204"},{label:"通化市",value:"2205"},{label:"白山市",value:"2206"},{label:"松原市",value:"2207"},{label:"白城市",value:"2208"},{label:"延边朝鲜族自治州",value:"2224"}],[{label:"哈尔滨市",value:"2301"},{label:"齐齐哈尔市",value:"2302"},{label:"鸡西市",value:"2303"},{label:"鹤岗市",value:"2304"},{label:"双鸭山市",value:"2305"},{label:"大庆市",value:"2306"},{label:"伊春市",value:"2307"},{label:"佳木斯市",value:"2308"},{label:"七台河市",value:"2309"},{label:"牡丹江市",value:"2310"},{label:"黑河市",value:"2311"},{label:"绥化市",value:"2312"},{label:"大兴安岭地区",value:"2327"}],[{label:"市辖区",value:"3101"}],[{label:"南京市",value:"3201"},{label:"无锡市",value:"3202"},{label:"徐州市",value:"3203"},{label:"常州市",value:"3204"},{label:"苏州市",value:"3205"},{label:"南通市",value:"3206"},{label:"连云港市",value:"3207"},{label:"淮安市",value:"3208"},{label:"盐城市",value:"3209"},{label:"扬州市",value:"3210"},{label:"镇江市",value:"3211"},{label:"泰州市",value:"3212"},{label:"宿迁市",value:"3213"}],[{label:"杭州市",value:"3301"},{label:"宁波市",value:"3302"},{label:"温州市",value:"3303"},{label:"嘉兴市",value:"3304"},{label:"湖州市",value:"3305"},{label:"绍兴市",value:"3306"},{label:"金华市",value:"3307"},{label:"衢州市",value:"3308"},{label:"舟山市",value:"3309"},{label:"台州市",value:"3310"},{label:"丽水市",value:"3311"}],[{label:"合肥市",value:"3401"},{label:"芜湖市",value:"3402"},{label:"蚌埠市",value:"3403"},{label:"淮南市",value:"3404"},{label:"马鞍山市",value:"3405"},{label:"淮北市",value:"3406"},{label:"铜陵市",value:"3407"},{label:"安庆市",value:"3408"},{label:"黄山市",value:"3410"},{label:"滁州市",value:"3411"},{label:"阜阳市",value:"3412"},{label:"宿州市",value:"3413"},{label:"六安市",value:"3415"},{label:"亳州市",value:"3416"},{label:"池州市",value:"3417"},{label:"宣城市",value:"3418"}],[{label:"福州市",value:"3501"},{label:"厦门市",value:"3502"},{label:"莆田市",value:"3503"},{label:"三明市",value:"3504"},{label:"泉州市",value:"3505"},{label:"漳州市",value:"3506"},{label:"南平市",value:"3507"},{label:"龙岩市",value:"3508"},{label:"宁德市",value:"3509"}],[{label:"南昌市",value:"3601"},{label:"景德镇市",value:"3602"},{label:"萍乡市",value:"3603"},{label:"九江市",value:"3604"},{label:"新余市",value:"3605"},{label:"鹰潭市",value:"3606"},{label:"赣州市",value:"3607"},{label:"吉安市",value:"3608"},{label:"宜春市",value:"3609"},{label:"抚州市",value:"3610"},{label:"上饶市",value:"3611"}],[{label:"济南市",value:"3701"},{label:"青岛市",value:"3702"},{label:"淄博市",value:"3703"},{label:"枣庄市",value:"3704"},{label:"东营市",value:"3705"},{label:"烟台市",value:"3706"},{label:"潍坊市",value:"3707"},{label:"济宁市",value:"3708"},{label:"泰安市",value:"3709"},{label:"威海市",value:"3710"},{label:"日照市",value:"3711"},{label:"莱芜市",value:"3712"},{label:"临沂市",value:"3713"},{label:"德州市",value:"3714"},{label:"聊城市",value:"3715"},{label:"滨州市",value:"3716"},{label:"菏泽市",value:"3717"}],[{label:"郑州市",value:"4101"},{label:"开封市",value:"4102"},{label:"洛阳市",value:"4103"},{label:"平顶山市",value:"4104"},{label:"安阳市",value:"4105"},{label:"鹤壁市",value:"4106"},{label:"新乡市",value:"4107"},{label:"焦作市",value:"4108"},{label:"濮阳市",value:"4109"},{label:"许昌市",value:"4110"},{label:"漯河市",value:"4111"},{label:"三门峡市",value:"4112"},{label:"南阳市",value:"4113"},{label:"商丘市",value:"4114"},{label:"信阳市",value:"4115"},{label:"周口市",value:"4116"},{label:"驻马店市",value:"4117"},{label:"省直辖县级行政区划",value:"4190"}],[{label:"武汉市",value:"4201"},{label:"黄石市",value:"4202"},{label:"十堰市",value:"4203"},{label:"宜昌市",value:"4205"},{label:"襄阳市",value:"4206"},{label:"鄂州市",value:"4207"},{label:"荆门市",value:"4208"},{label:"孝感市",value:"4209"},{label:"荆州市",value:"4210"},{label:"黄冈市",value:"4211"},{label:"咸宁市",value:"4212"},{label:"随州市",value:"4213"},{label:"恩施土家族苗族自治州",value:"4228"},{label:"省直辖县级行政区划",value:"4290"}],[{label:"长沙市",value:"4301"},{label:"株洲市",value:"4302"},{label:"湘潭市",value:"4303"},{label:"衡阳市",value:"4304"},{label:"邵阳市",value:"4305"},{label:"岳阳市",value:"4306"},{label:"常德市",value:"4307"},{label:"张家界市",value:"4308"},{label:"益阳市",value:"4309"},{label:"郴州市",value:"4310"},{label:"永州市",value:"4311"},{label:"怀化市",value:"4312"},{label:"娄底市",value:"4313"},{label:"湘西土家族苗族自治州",value:"4331"}],[{label:"广州市",value:"4401"},{label:"韶关市",value:"4402"},{label:"深圳市",value:"4403"},{label:"珠海市",value:"4404"},{label:"汕头市",value:"4405"},{label:"佛山市",value:"4406"},{label:"江门市",value:"4407"},{label:"湛江市",value:"4408"},{label:"茂名市",value:"4409"},{label:"肇庆市",value:"4412"},{label:"惠州市",value:"4413"},{label:"梅州市",value:"4414"},{label:"汕尾市",value:"4415"},{label:"河源市",value:"4416"},{label:"阳江市",value:"4417"},{label:"清远市",value:"4418"},{label:"东莞市",value:"4419"},{label:"中山市",value:"4420"},{label:"潮州市",value:"4451"},{label:"揭阳市",value:"4452"},{label:"云浮市",value:"4453"}],[{label:"南宁市",value:"4501"},{label:"柳州市",value:"4502"},{label:"桂林市",value:"4503"},{label:"梧州市",value:"4504"},{label:"北海市",value:"4505"},{label:"防城港市",value:"4506"},{label:"钦州市",value:"4507"},{label:"贵港市",value:"4508"},{label:"玉林市",value:"4509"},{label:"百色市",value:"4510"},{label:"贺州市",value:"4511"},{label:"河池市",value:"4512"},{label:"来宾市",value:"4513"},{label:"崇左市",value:"4514"}],[{label:"海口市",value:"4601"},{label:"三亚市",value:"4602"},{label:"三沙市",value:"4603"},{label:"儋州市",value:"4604"},{label:"省直辖县级行政区划",value:"4690"}],[{label:"市辖区",value:"5001"},{label:"县",value:"5002"}],[{label:"成都市",value:"5101"},{label:"自贡市",value:"5103"},{label:"攀枝花市",value:"5104"},{label:"泸州市",value:"5105"},{label:"德阳市",value:"5106"},{label:"绵阳市",value:"5107"},{label:"广元市",value:"5108"},{label:"遂宁市",value:"5109"},{label:"内江市",value:"5110"},{label:"乐山市",value:"5111"},{label:"南充市",value:"5113"},{label:"眉山市",value:"5114"},{label:"宜宾市",value:"5115"},{label:"广安市",value:"5116"},{label:"达州市",value:"5117"},{label:"雅安市",value:"5118"},{label:"巴中市",value:"5119"},{label:"资阳市",value:"5120"},{label:"阿坝藏族羌族自治州",value:"5132"},{label:"甘孜藏族自治州",value:"5133"},{label:"凉山彝族自治州",value:"5134"}],[{label:"贵阳市",value:"5201"},{label:"六盘水市",value:"5202"},{label:"遵义市",value:"5203"},{label:"安顺市",value:"5204"},{label:"毕节市",value:"5205"},{label:"铜仁市",value:"5206"},{label:"黔西南布依族苗族自治州",value:"5223"},{label:"黔东南苗族侗族自治州",value:"5226"},{label:"黔南布依族苗族自治州",value:"5227"}],[{label:"昆明市",value:"5301"},{label:"曲靖市",value:"5303"},{label:"玉溪市",value:"5304"},{label:"保山市",value:"5305"},{label:"昭通市",value:"5306"},{label:"丽江市",value:"5307"},{label:"普洱市",value:"5308"},{label:"临沧市",value:"5309"},{label:"楚雄彝族自治州",value:"5323"},{label:"红河哈尼族彝族自治州",value:"5325"},{label:"文山壮族苗族自治州",value:"5326"},{label:"西双版纳傣族自治州",value:"5328"},{label:"大理白族自治州",value:"5329"},{label:"德宏傣族景颇族自治州",value:"5331"},{label:"怒江傈僳族自治州",value:"5333"},{label:"迪庆藏族自治州",value:"5334"}],[{label:"拉萨市",value:"5401"},{label:"日喀则市",value:"5402"},{label:"昌都市",value:"5403"},{label:"林芝市",value:"5404"},{label:"山南市",value:"5405"},{label:"那曲地区",value:"5424"},{label:"阿里地区",value:"5425"}],[{label:"西安市",value:"6101"},{label:"铜川市",value:"6102"},{label:"宝鸡市",value:"6103"},{label:"咸阳市",value:"6104"},{label:"渭南市",value:"6105"},{label:"延安市",value:"6106"},{label:"汉中市",value:"6107"},{label:"榆林市",value:"6108"},{label:"安康市",value:"6109"},{label:"商洛市",value:"6110"}],[{label:"兰州市",value:"6201"},{label:"嘉峪关市",value:"6202"},{label:"金昌市",value:"6203"},{label:"白银市",value:"6204"},{label:"天水市",value:"6205"},{label:"武威市",value:"6206"},{label:"张掖市",value:"6207"},{label:"平凉市",value:"6208"},{label:"酒泉市",value:"6209"},{label:"庆阳市",value:"6210"},{label:"定西市",value:"6211"},{label:"陇南市",value:"6212"},{label:"临夏回族自治州",value:"6229"},{label:"甘南藏族自治州",value:"6230"}],[{label:"西宁市",value:"6301"},{label:"海东市",value:"6302"},{label:"海北藏族自治州",value:"6322"},{label:"黄南藏族自治州",value:"6323"},{label:"海南藏族自治州",value:"6325"},{label:"果洛藏族自治州",value:"6326"},{label:"玉树藏族自治州",value:"6327"},{label:"海西蒙古族藏族自治州",value:"6328"}],[{label:"银川市",value:"6401"},{label:"石嘴山市",value:"6402"},{label:"吴忠市",value:"6403"},{label:"固原市",value:"6404"},{label:"中卫市",value:"6405"}],[{label:"乌鲁木齐市",value:"6501"},{label:"克拉玛依市",value:"6502"},{label:"吐鲁番市",value:"6504"},{label:"哈密市",value:"6505"},{label:"昌吉回族自治州",value:"6523"},{label:"博尔塔拉蒙古自治州",value:"6527"},{label:"巴音郭楞蒙古自治州",value:"6528"},{label:"阿克苏地区",value:"6529"},{label:"克孜勒苏柯尔克孜自治州",value:"6530"},{label:"喀什地区",value:"6531"},{label:"和田地区",value:"6532"},{label:"伊犁哈萨克自治州",value:"6540"},{label:"塔城地区",value:"6542"},{label:"阿勒泰地区",value:"6543"},{label:"自治区直辖县级行政区划",value:"6590"}],[{label:"台北",value:"6601"},{label:"高雄",value:"6602"},{label:"基隆",value:"6603"},{label:"台中",value:"6604"},{label:"台南",value:"6605"},{label:"新竹",value:"6606"},{label:"嘉义",value:"6607"},{label:"宜兰",value:"6608"},{label:"桃园",value:"6609"},{label:"苗栗",value:"6610"},{label:"彰化",value:"6611"},{label:"南投",value:"6612"},{label:"云林",value:"6613"},{label:"屏东",value:"6614"},{label:"台东",value:"6615"},{label:"花莲",value:"6616"},{label:"澎湖",value:"6617"}],[{label:"香港岛",value:"6701"},{label:"九龙",value:"6702"},{label:"新界",value:"6703"}],[{label:"澳门半岛",value:"6801"},{label:"氹仔岛",value:"6802"},{label:"路环岛",value:"6803"},{label:"路氹城",value:"6804"}]],n=t;l.default=n},8189:function(e){e.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-23620191019001",_inBundle:!1,_integrity:"sha512-gBpkjEOQ/LhTnXBVi266PoTNT5VJtbYoEVy+gZ8/LN9/jKEWeWndd2Lu7vn7hmUySVM5K5UV/Bd5LEVkgXB8mA==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-23620191019001.tgz",_shasum:"5c006b903ae7bc407c8b1786de249ffbf72da996",_spec:"@dcloudio/uni-stat@next",_where:"/Users/fxy/Documents/DCloud/HbuilderX-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"bc995d4b43b68e7fe7914ae6b2112117d36e63a8",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-23620191019001"}},"83a8":function(e,l,a){"use strict";var t;function n(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var u=(t={Bucket:"cscb-1259085570",Region:"ap-chengdu",http:"http://cscb2.kelinteng.com",https:"https://cscb2.kelinteng.com",UPLOAD_HOST:"http://txcos.kelinteng.com/",getAreaData:"area/areaData",login:"wemini/login",register:"wemini/register",adlist:"wemini/adlist",getTaskList:"wemini/getTaskList",getTaskCategoryList:"wemini/getTaskCategoryList"},n(t,"getTaskList","wemini/getTaskList"),n(t,"taskDetail","wemini/taskDetail"),n(t,"taskDetailLog","wemini/taskDetailLog"),n(t,"taskDetailTimeLine","wemini/taskDetailTimeLine"),n(t,"lookbidlog","wemini/lookbidlog"),n(t,"sureorder","wemini/sureorder"),n(t,"postOrder","wemini/postOrder"),n(t,"payResult","wemini/payResult"),n(t,"taskDetail","wemini/taskDetail"),n(t,"fastbid","wemini/fastbid"),n(t,"taskDetail","wemini/taskDetail"),n(t,"publishbid","wemini/publishbid"),n(t,"bidCategoryList","wemini/bidCategoryList"),n(t,"getCarNew","wemini/getCarNew"),n(t,"taskLogDetail","wemini/taskLogDetail"),n(t,"qcloud_key","wemini/qcloud_key"),n(t,"bidding","wemini/bidding"),n(t,"myPubData","wemini/myPubData"),n(t,"myTaskList","wemini/myTaskList"),n(t,"closeTask","wemini/closeTask"),n(t,"isSeller","wemini/isSeller"),n(t,"isBidding","wemini/isBidding"),n(t,"scanTask","wemini/scanTask"),n(t,"seller","wemini/seller"),n(t,"getCYTaskList","wemini/getCYTaskList"),n(t,"getMyServiceList","wemini/getMyServiceList"),n(t,"getMyIncomeList","wemini/getMyIncomeList"),n(t,"logcscb","wemini/logcscb"),n(t,"gettypelist","wemini/gettypelist"),n(t,"getSellerList","wemini/sellerlist"),n(t,"sellerinfo","wemini/sellerinfo"),t),r=u;l.default=r},"921b":function(e,l,a){"use strict";(function(e){var l=a("8189");function t(e,l){return!l||"object"!==typeof l&&"function"!==typeof l?n(e):l}function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}function r(e,l){if("function"!==typeof l&&null!==l)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(l&&l.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),l&&o(e,l)}function o(e,l){return o=Object.setPrototypeOf||function(e,l){return e.__proto__=l,e},o(e,l)}function i(e,l){if(!(e instanceof l))throw new TypeError("Cannot call a class as a function")}function s(e,l){for(var a=0;a<l.length;a++){var t=l[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function v(e,l,a){return l&&s(e.prototype,l),a&&s(e,a),e}var c=l.version,b="https://tongji.dcloud.io/uni/stat",f="https://tongji.dcloud.io/uni/stat.gif",d=1800,p=300,h=10,g="__DC_STAT_UUID",m="__DC_UUID_VALUE";function y(){var l="";if("n"===C()){try{l=plus.runtime.getDCloudId()}catch(a){l=""}return l}try{l=e.getStorageSync(g)}catch(a){l=m}if(!l){l=Date.now()+""+Math.floor(1e7*Math.random());try{e.setStorageSync(g,l)}catch(a){e.setStorageSync(g,m)}}return l}var _=function(e){var l=Object.keys(e),a=l.sort(),t={},n="";for(var u in a)t[a[u]]=e[a[u]],n+=a[u]+"="+e[a[u]]+"&";return{sign:"",options:n.substr(0,n.length-1)}},k=function(e){var l="";for(var a in e)l+=a+"="+e[a]+"&";return l.substr(0,l.length-1)},w=function(){return parseInt((new Date).getTime()/1e3)},C=function(){var e={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return e["app-plus"]},A=function(){var l="";return"wx"!==C()&&"qq"!==C()||e.canIUse("getAccountInfoSync")&&(l=e.getAccountInfoSync().miniProgram.appId||""),l},x=function(){return"n"===C()?plus.runtime.version:""},S=function(){var e=C(),l="";return"n"===e&&(l=plus.runtime.channel),l},T=function(l){var a=C(),t="";return l||("wx"===a&&(t=e.getLaunchOptionsSync().scene),t)},O="First__Visit__Time",E="Last__Visit__Time",N=function(){var l=e.getStorageSync(O),a=0;return l?a=l:(a=w(),e.setStorageSync(O,a),e.removeStorageSync(E)),a},B=function(){var l=e.getStorageSync(E),a=0;return a=l||"",e.setStorageSync(E,w()),a},D="__page__residence__time",R=0,P=0,I=function(){return R=w(),"n"===C()&&e.setStorageSync(D,w()),R},M=function(){return P=w(),"n"===C()&&(R=e.getStorageSync(D)),P-R},L="Total__Visit__Count",j=function(){var l=e.getStorageSync(L),a=1;return l&&(a=l,a++),e.setStorageSync(L,a),a},$=function(e){var l={};for(var a in e)l[a]=encodeURIComponent(e[a]);return l},U=0,F=0,H=function(){var e=(new Date).getTime();return U=e,F=0,e},G=function(){var e=(new Date).getTime();return F=e,e},K=function(e){var l=0;if(0!==U&&(l=F-U),l=parseInt(l/1e3),l=l<1?1:l,"app"===e){var a=l>p;return{residenceTime:l,overtime:a}}if("page"===e){var t=l>d;return{residenceTime:l,overtime:t}}return{residenceTime:l}},q=function(){var e=getCurrentPages(),l=e[e.length-1],a=l.$vm;return"bd"===C()?a.$mp&&a.$mp.page.is:a.$scope&&a.$scope.route||a.$mp&&a.$mp.page.route},V=function(e){var l=getCurrentPages(),a=l[l.length-1],t=a.$vm,n=e._query,u=n&&"{}"!==JSON.stringify(n)?"?"+JSON.stringify(n):"";return e._query="","bd"===C()?t.$mp&&t.$mp.page.is+u:t.$scope&&t.$scope.route+u||t.$mp&&t.$mp.page.route+u},z=function(e){return!!("page"===e.mpType||e.$mp&&"page"===e.$mp.mpType||"page"===e.$options.mpType)},X=function(e,l){return e?"string"!==typeof e?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):e.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof l&&"object"!==typeof l?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof l&&l.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===e&&"string"!==typeof l?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},W=a("4fda").default,J=a("2387").default||a("2387"),Y=e.getSystemInfoSync(),Q=function(){function l(){i(this,l),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:y(),ut:C(),mpn:A(),ak:J.appid,usv:c,v:x(),ch:S(),cn:"",pn:"",ct:"",t:w(),tt:"",p:"android"===Y.platform?"a":"i",brand:Y.brand||"",md:Y.model,sv:Y.system.replace(/(Android|iOS)\s/,""),mpsdk:Y.SDKVersion||"",mpv:Y.version||"",lang:Y.language,pr:Y.pixelRatio,ww:Y.windowWidth,wh:Y.windowHeight,sw:Y.screenWidth,sh:Y.screenHeight}}return v(l,[{key:"_applicationShow",value:function(){if(this.__licationHide){G();var e=K("app");if(e.overtime){var l={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(l)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(e,l){this.__licationHide=!0,G();var a=K();H();var t=V(this);this._sendHideRequest({urlref:t,urlref_ts:a.residenceTime},l)}},{key:"_pageShow",value:function(){var e=V(this),l=q();if(this._navigationBarTitle.config=W&&W.pages[l]&&W.pages[l].titleNView&&W.pages[l].titleNView.titleText||W&&W.pages[l]&&W.pages[l].navigationBarTitleText||"",this.__licationShow)return H(),this.__licationShow=!1,void(this._lastPageRoute=e);G(),this._lastPageRoute=e;var a=K("page");if(a.overtime){var t={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(t)}H()}},{key:"_pageHide",value:function(){if(!this.__licationHide){G();var e=K("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:e.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(e){this._sendEventRequest({key:e},0)}},{key:"_sendReportRequest",value:function(e){this._navigationBarTitle.lt="1";var l=e.query&&"{}"!==JSON.stringify(e.query)?"?"+JSON.stringify(e.query):"";this.statData.lt="1",this.statData.url=e.path+l||"",this.statData.t=w(),this.statData.sc=T(e.scene),this.statData.fvts=N(),this.statData.lvts=B(),this.statData.tvc=j(),"n"===C()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(e){var l=e.url,a=e.urlref,t=e.urlref_ts;this._navigationBarTitle.lt="11";var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:l,tt:this.statData.tt,urlref:a,urlref_ts:t,ch:this.statData.ch,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(n)}},{key:"_sendHideRequest",value:function(e,l){var a=e.urlref,t=e.urlref_ts,n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:a,urlref_ts:t,ch:this.statData.ch,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(n,l)}},{key:"_sendEventRequest",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=e.key,a=void 0===l?"":l,t=e.value,n=void 0===t?"":t,u=this._lastPageRoute,r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:u,ch:this.statData.ch,e_n:a,e_v:"object"===typeof n?JSON.stringify(n):n.toString(),usv:this.statData.usv,t:w(),p:this.statData.p};this.request(r)}},{key:"getNetworkInfo",value:function(){var l=this;e.getNetworkType({success:function(e){l.statData.net=e.networkType,l.getLocation()}})}},{key:"getProperty",value:function(){var e=this;plus.runtime.getProperty(plus.runtime.appid,function(l){e.statData.v=l.version||"",e.getNetworkInfo()})}},{key:"getLocation",value:function(){var l=this;J.getLocation?e.getLocation({type:"wgs84",geocode:!0,success:function(e){e.address&&(l.statData.cn=e.address.country,l.statData.pn=e.address.province,l.statData.ct=e.address.city),l.statData.lat=e.latitude,l.statData.lng=e.longitude,l.request(l.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(l,a){var t=this,n=w(),u=this._navigationBarTitle;l.ttn=u.page,l.ttpj=u.config,l.ttc=u.report;var r=this._reportingRequestData;if("n"===C()&&(r=e.getStorageSync("__UNI__STAT__DATA")||{}),r[l.lt]||(r[l.lt]=[]),r[l.lt].push(l),"n"===C()&&e.setStorageSync("__UNI__STAT__DATA",r),!(M()<h)||a){var o=this._reportingRequestData;"n"===C()&&(o=e.getStorageSync("__UNI__STAT__DATA")),I();var i=[],s=[],v=[],b=function(e){var l=o[e];l.forEach(function(l){var a=k(l);0===e?i.push(a):3===e?v.push(a):s.push(a)})};for(var f in o)b(f);i.push.apply(i,s.concat(v));var d={usv:c,t:n,requests:JSON.stringify(i)};this._reportingRequestData={},"n"===C()&&e.removeStorageSync("__UNI__STAT__DATA"),"h5"!==l.ut?"n"!==C()||"a"!==this.statData.p?this._sendRequest(d):setTimeout(function(){t._sendRequest(d)},200):this.imageRequest(d)}}},{key:"_sendRequest",value:function(l){var a=this;e.request({url:b,method:"POST",data:l,success:function(){},fail:function(e){++a._retry<3&&setTimeout(function(){a._sendRequest(l)},1e3)}})}},{key:"imageRequest",value:function(e){var l=new Image,a=_($(e)).options;l.src=f+"?"+a}},{key:"sendEvent",value:function(e,l){X(e,l)||("title"!==e?this._sendEventRequest({key:e,value:"object"===typeof l?JSON.stringify(l):l},1):this._navigationBarTitle.report=l)}}]),l}(),Z=function(l){function a(){var l;return i(this,a),l=t(this,u(a).call(this)),l.instance=null,"function"===typeof e.addInterceptor&&(l.addInterceptorInit(),l.interceptLogin(),l.interceptShare(!0),l.interceptRequestPayment()),l}return r(a,l),v(a,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new a),this.instance}}]),v(a,[{key:"addInterceptorInit",value:function(){var l=this;e.addInterceptor("setNavigationBarTitle",{invoke:function(e){l._navigationBarTitle.page=e.title}})}},{key:"interceptLogin",value:function(){var l=this;e.addInterceptor("login",{complete:function(){l._login()}})}},{key:"interceptShare",value:function(l){var a=this;l?e.addInterceptor("share",{success:function(){a._share()},fail:function(){a._share()}}):a._share()}},{key:"interceptRequestPayment",value:function(){var l=this;e.addInterceptor("requestPayment",{success:function(){l._payment("pay_success")},fail:function(){l._payment("pay_fail")}})}},{key:"report",value:function(e,l){this.self=l,I(),this.__licationShow=!0,this._sendReportRequest(e,!0)}},{key:"load",value:function(e,l){if(!l.$scope&&!l.$mp){var a=getCurrentPages();l.$scope=a[a.length-1]}this.self=l,this._query=e}},{key:"show",value:function(e){this.self=e,z(e)?this._pageShow(e):this._applicationShow(e)}},{key:"ready",value:function(e){}},{key:"hide",value:function(e){this.self=e,z(e)?this._pageHide(e):this._applicationHide(e,!0)}},{key:"error",value:function(e){this._platform;var l="";l=e.message?e.stack:JSON.stringify(e);var a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:l,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(a)}}]),a}(Q),ee=Z.getInstance(),le=!1,ae={onLaunch:function(e){ee.report(e,this)},onReady:function(){ee.ready(this)},onLoad:function(e){if(ee.load(e,this),this.$scope&&this.$scope.onShareAppMessage){var l=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(e){return ee.interceptShare(!1),l.call(this,e)}}},onShow:function(){le=!1,ee.show(this)},onHide:function(){le=!0,ee.hide(this)},onUnload:function(){le?le=!1:ee.hide(this)},onError:function(e){ee.error(e)}};function te(){var l=a("66fd");(l.default||l).mixin(ae),e.report=function(e,l){ee.sendEvent(e,l)}}te()}).call(this,a("6e42")["default"])},"96cf":function(e,l){!function(l){"use strict";var a,t=Object.prototype,n=t.hasOwnProperty,u="function"===typeof Symbol?Symbol:{},r=u.iterator||"@@iterator",o=u.asyncIterator||"@@asyncIterator",i=u.toStringTag||"@@toStringTag",s="object"===typeof e,v=l.regeneratorRuntime;if(v)s&&(e.exports=v);else{v=l.regeneratorRuntime=s?e.exports:{},v.wrap=_;var c="suspendedStart",b="suspendedYield",f="executing",d="completed",p={},h={};h[r]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(D([])));m&&m!==t&&n.call(m,r)&&(h=m);var y=A.prototype=w.prototype=Object.create(h);C.prototype=y.constructor=A,A.constructor=C,A[i]=C.displayName="GeneratorFunction",v.isGeneratorFunction=function(e){var l="function"===typeof e&&e.constructor;return!!l&&(l===C||"GeneratorFunction"===(l.displayName||l.name))},v.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,A):(e.__proto__=A,i in e||(e[i]="GeneratorFunction")),e.prototype=Object.create(y),e},v.awrap=function(e){return{__await:e}},x(S.prototype),S.prototype[o]=function(){return this},v.AsyncIterator=S,v.async=function(e,l,a,t){var n=new S(_(e,l,a,t));return v.isGeneratorFunction(l)?n:n.next().then(function(e){return e.done?e.value:n.next()})},x(y),y[i]="Generator",y[r]=function(){return this},y.toString=function(){return"[object Generator]"},v.keys=function(e){var l=[];for(var a in e)l.push(a);return l.reverse(),function a(){while(l.length){var t=l.pop();if(t in e)return a.value=t,a.done=!1,a}return a.done=!0,a}},v.values=D,B.prototype={constructor:B,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=a,this.done=!1,this.delegate=null,this.method="next",this.arg=a,this.tryEntries.forEach(N),!e)for(var l in this)"t"===l.charAt(0)&&n.call(this,l)&&!isNaN(+l.slice(1))&&(this[l]=a)},stop:function(){this.done=!0;var e=this.tryEntries[0],l=e.completion;if("throw"===l.type)throw l.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var l=this;function t(t,n){return o.type="throw",o.arg=e,l.next=t,n&&(l.method="next",l.arg=a),!!n}for(var u=this.tryEntries.length-1;u>=0;--u){var r=this.tryEntries[u],o=r.completion;if("root"===r.tryLoc)return t("end");if(r.tryLoc<=this.prev){var i=n.call(r,"catchLoc"),s=n.call(r,"finallyLoc");if(i&&s){if(this.prev<r.catchLoc)return t(r.catchLoc,!0);if(this.prev<r.finallyLoc)return t(r.finallyLoc)}else if(i){if(this.prev<r.catchLoc)return t(r.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return t(r.finallyLoc)}}}},abrupt:function(e,l){for(var a=this.tryEntries.length-1;a>=0;--a){var t=this.tryEntries[a];if(t.tryLoc<=this.prev&&n.call(t,"finallyLoc")&&this.prev<t.finallyLoc){var u=t;break}}u&&("break"===e||"continue"===e)&&u.tryLoc<=l&&l<=u.finallyLoc&&(u=null);var r=u?u.completion:{};return r.type=e,r.arg=l,u?(this.method="next",this.next=u.finallyLoc,p):this.complete(r)},complete:function(e,l){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&l&&(this.next=l),p},finish:function(e){for(var l=this.tryEntries.length-1;l>=0;--l){var a=this.tryEntries[l];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),N(a),p}},catch:function(e){for(var l=this.tryEntries.length-1;l>=0;--l){var a=this.tryEntries[l];if(a.tryLoc===e){var t=a.completion;if("throw"===t.type){var n=t.arg;N(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,l,t){return this.delegate={iterator:D(e),resultName:l,nextLoc:t},"next"===this.method&&(this.arg=a),p}}}function _(e,l,a,t){var n=l&&l.prototype instanceof w?l:w,u=Object.create(n.prototype),r=new B(t||[]);return u._invoke=T(e,a,r),u}function k(e,l,a){try{return{type:"normal",arg:e.call(l,a)}}catch(t){return{type:"throw",arg:t}}}function w(){}function C(){}function A(){}function x(e){["next","throw","return"].forEach(function(l){e[l]=function(e){return this._invoke(l,e)}})}function S(e){function l(a,t,u,r){var o=k(e[a],e,t);if("throw"!==o.type){var i=o.arg,s=i.value;return s&&"object"===typeof s&&n.call(s,"__await")?Promise.resolve(s.__await).then(function(e){l("next",e,u,r)},function(e){l("throw",e,u,r)}):Promise.resolve(s).then(function(e){i.value=e,u(i)},function(e){return l("throw",e,u,r)})}r(o.arg)}var a;function t(e,t){function n(){return new Promise(function(a,n){l(e,t,a,n)})}return a=a?a.then(n,n):n()}this._invoke=t}function T(e,l,a){var t=c;return function(n,u){if(t===f)throw new Error("Generator is already running");if(t===d){if("throw"===n)throw u;return R()}a.method=n,a.arg=u;while(1){var r=a.delegate;if(r){var o=O(r,a);if(o){if(o===p)continue;return o}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(t===c)throw t=d,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);t=f;var i=k(e,l,a);if("normal"===i.type){if(t=a.done?d:b,i.arg===p)continue;return{value:i.arg,done:a.done}}"throw"===i.type&&(t=d,a.method="throw",a.arg=i.arg)}}}function O(e,l){var t=e.iterator[l.method];if(t===a){if(l.delegate=null,"throw"===l.method){if(e.iterator.return&&(l.method="return",l.arg=a,O(e,l),"throw"===l.method))return p;l.method="throw",l.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=k(t,e.iterator,l.arg);if("throw"===n.type)return l.method="throw",l.arg=n.arg,l.delegate=null,p;var u=n.arg;return u?u.done?(l[e.resultName]=u.value,l.next=e.nextLoc,"return"!==l.method&&(l.method="next",l.arg=a),l.delegate=null,p):u:(l.method="throw",l.arg=new TypeError("iterator result is not an object"),l.delegate=null,p)}function E(e){var l={tryLoc:e[0]};1 in e&&(l.catchLoc=e[1]),2 in e&&(l.finallyLoc=e[2],l.afterLoc=e[3]),this.tryEntries.push(l)}function N(e){var l=e.completion||{};l.type="normal",delete l.arg,e.completion=l}function B(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function D(e){if(e){var l=e[r];if(l)return l.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var t=-1,u=function l(){while(++t<e.length)if(n.call(e,t))return l.value=e[t],l.done=!1,l;return l.value=a,l.done=!0,l};return u.next=u}}return{next:R}}function R(){return{value:a,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"9cc1":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=[{label:"北京市",value:"11"},{label:"天津市",value:"12"},{label:"河北省",value:"13"},{label:"山西省",value:"14"},{label:"内蒙古自治区",value:"15"},{label:"辽宁省",value:"21"},{label:"吉林省",value:"22"},{label:"黑龙江省",value:"23"},{label:"上海市",value:"31"},{label:"江苏省",value:"32"},{label:"浙江省",value:"33"},{label:"安徽省",value:"34"},{label:"福建省",value:"35"},{label:"江西省",value:"36"},{label:"山东省",value:"37"},{label:"河南省",value:"41"},{label:"湖北省",value:"42"},{label:"湖南省",value:"43"},{label:"广东省",value:"44"},{label:"广西壮族自治区",value:"45"},{label:"海南省",value:"46"},{label:"重庆市",value:"50"},{label:"四川省",value:"51"},{label:"贵州省",value:"52"},{label:"云南省",value:"53"},{label:"西藏自治区",value:"54"},{label:"陕西省",value:"61"},{label:"甘肃省",value:"62"},{label:"青海省",value:"63"},{label:"宁夏回族自治区",value:"64"},{label:"新疆维吾尔自治区",value:"65"},{label:"台湾",value:"66"},{label:"香港",value:"67"},{label:"澳门",value:"68"}],n=t;l.default=n},"9df1":function(e,l,a){"use strict";(function(l){var a;(function(){function e(e,l){for(var a=1,n=t(e),u=0,r=p.length;u<=r;u++){var i=0;switch(l){case o.L:i=p[u][0];break;case o.M:i=p[u][1];break;case o.Q:i=p[u][2];break;case o.H:i=p[u][3];break}if(n<=i)break;a++}if(a>p.length)throw new Error("Too long data");return a}function t(e){var l=encodeURI(e).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return l.length+(l.length!=e?3:0)}function n(e){this.mode=r.MODE_8BIT_BYTE,this.data=e,this.parsedData=[];for(var l=0,a=this.data.length;l<a;l++){var t=[],n=this.data.charCodeAt(l);n>65536?(t[0]=240|(1835008&n)>>>18,t[1]=128|(258048&n)>>>12,t[2]=128|(4032&n)>>>6,t[3]=128|63&n):n>2048?(t[0]=224|(61440&n)>>>12,t[1]=128|(4032&n)>>>6,t[2]=128|63&n):n>128?(t[0]=192|(1984&n)>>>6,t[1]=128|63&n):t[0]=n,this.parsedData.push(t)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function u(e,l){this.typeNumber=e,this.errorCorrectLevel=l,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}n.prototype={getLength:function(e){return this.parsedData.length},write:function(e){for(var l=0,a=this.parsedData.length;l<a;l++)e.put(this.parsedData[l],8)}},u.prototype={addData:function(e){var l=new n(e);this.dataList.push(l),this.dataCache=null},isDark:function(e,l){if(e<0||this.moduleCount<=e||l<0||this.moduleCount<=l)throw new Error(e+","+l);return this.modules[e][l]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(e,l){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var a=0;a<this.moduleCount;a++){this.modules[a]=new Array(this.moduleCount);for(var t=0;t<this.moduleCount;t++)this.modules[a][t]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(e,l),this.typeNumber>=7&&this.setupTypeNumber(e),null==this.dataCache&&(this.dataCache=u.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,l)},setupPositionProbePattern:function(e,l){for(var a=-1;a<=7;a++)if(!(e+a<=-1||this.moduleCount<=e+a))for(var t=-1;t<=7;t++)l+t<=-1||this.moduleCount<=l+t||(this.modules[e+a][l+t]=0<=a&&a<=6&&(0==t||6==t)||0<=t&&t<=6&&(0==a||6==a)||2<=a&&a<=4&&2<=t&&t<=4)},getBestMaskPattern:function(){for(var e=0,l=0,a=0;a<8;a++){this.makeImpl(!0,a);var t=s.getLostPoint(this);(0==a||e>t)&&(e=t,l=a)}return l},createMovieClip:function(e,l,a){var t=e.createEmptyMovieClip(l,a),n=1;this.make();for(var u=0;u<this.modules.length;u++)for(var r=u*n,o=0;o<this.modules[u].length;o++){var i=o*n,s=this.modules[u][o];s&&(t.beginFill(0,100),t.moveTo(i,r),t.lineTo(i+n,r),t.lineTo(i+n,r+n),t.lineTo(i,r+n),t.endFill())}return t},setupTimingPattern:function(){for(var e=8;e<this.moduleCount-8;e++)null==this.modules[e][6]&&(this.modules[e][6]=e%2==0);for(var l=8;l<this.moduleCount-8;l++)null==this.modules[6][l]&&(this.modules[6][l]=l%2==0)},setupPositionAdjustPattern:function(){for(var e=s.getPatternPosition(this.typeNumber),l=0;l<e.length;l++)for(var a=0;a<e.length;a++){var t=e[l],n=e[a];if(null==this.modules[t][n])for(var u=-2;u<=2;u++)for(var r=-2;r<=2;r++)this.modules[t+u][n+r]=-2==u||2==u||-2==r||2==r||0==u&&0==r}},setupTypeNumber:function(e){for(var l=s.getBCHTypeNumber(this.typeNumber),a=0;a<18;a++){var t=!e&&1==(l>>a&1);this.modules[Math.floor(a/3)][a%3+this.moduleCount-8-3]=t}for(a=0;a<18;a++){t=!e&&1==(l>>a&1);this.modules[a%3+this.moduleCount-8-3][Math.floor(a/3)]=t}},setupTypeInfo:function(e,l){for(var a=this.errorCorrectLevel<<3|l,t=s.getBCHTypeInfo(a),n=0;n<15;n++){var u=!e&&1==(t>>n&1);n<6?this.modules[n][8]=u:n<8?this.modules[n+1][8]=u:this.modules[this.moduleCount-15+n][8]=u}for(n=0;n<15;n++){u=!e&&1==(t>>n&1);n<8?this.modules[8][this.moduleCount-n-1]=u:n<9?this.modules[8][15-n-1+1]=u:this.modules[8][15-n-1]=u}this.modules[this.moduleCount-8][8]=!e},mapData:function(e,l){for(var a=-1,t=this.moduleCount-1,n=7,u=0,r=this.moduleCount-1;r>0;r-=2){6==r&&r--;while(1){for(var o=0;o<2;o++)if(null==this.modules[t][r-o]){var i=!1;u<e.length&&(i=1==(e[u]>>>n&1));var v=s.getMask(l,t,r-o);v&&(i=!i),this.modules[t][r-o]=i,n--,-1==n&&(u++,n=7)}if(t+=a,t<0||this.moduleCount<=t){t-=a,a=-a;break}}}}},u.PAD0=236,u.PAD1=17,u.createData=function(e,l,a){for(var t=f.getRSBlocks(e,l),n=new d,r=0;r<a.length;r++){var o=a[r];n.put(o.mode,4),n.put(o.getLength(),s.getLengthInBits(o.mode,e)),o.write(n)}var i=0;for(r=0;r<t.length;r++)i+=t[r].dataCount;if(n.getLengthInBits()>8*i)throw new Error("code length overflow. ("+n.getLengthInBits()+">"+8*i+")");n.getLengthInBits()+4<=8*i&&n.put(0,4);while(n.getLengthInBits()%8!=0)n.putBit(!1);while(1){if(n.getLengthInBits()>=8*i)break;if(n.put(u.PAD0,8),n.getLengthInBits()>=8*i)break;n.put(u.PAD1,8)}return u.createBytes(n,t)},u.createBytes=function(e,l){for(var a=0,t=0,n=0,u=new Array(l.length),r=new Array(l.length),o=0;o<l.length;o++){var i=l[o].dataCount,v=l[o].totalCount-i;t=Math.max(t,i),n=Math.max(n,v),u[o]=new Array(i);for(var c=0;c<u[o].length;c++)u[o][c]=255&e.buffer[c+a];a+=i;var f=s.getErrorCorrectPolynomial(v),d=new b(u[o],f.getLength()-1),p=d.mod(f);r[o]=new Array(f.getLength()-1);for(c=0;c<r[o].length;c++){var h=c+p.getLength()-r[o].length;r[o][c]=h>=0?p.get(h):0}}var g=0;for(c=0;c<l.length;c++)g+=l[c].totalCount;var m=new Array(g),y=0;for(c=0;c<t;c++)for(o=0;o<l.length;o++)c<u[o].length&&(m[y++]=u[o][c]);for(c=0;c<n;c++)for(o=0;o<l.length;o++)c<r[o].length&&(m[y++]=r[o][c]);return m};for(var r={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},o={L:1,M:0,Q:3,H:2},i={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},s={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(e){var l=e<<10;while(s.getBCHDigit(l)-s.getBCHDigit(s.G15)>=0)l^=s.G15<<s.getBCHDigit(l)-s.getBCHDigit(s.G15);return(e<<10|l)^s.G15_MASK},getBCHTypeNumber:function(e){var l=e<<12;while(s.getBCHDigit(l)-s.getBCHDigit(s.G18)>=0)l^=s.G18<<s.getBCHDigit(l)-s.getBCHDigit(s.G18);return e<<12|l},getBCHDigit:function(e){var l=0;while(0!=e)l++,e>>>=1;return l},getPatternPosition:function(e){return s.PATTERN_POSITION_TABLE[e-1]},getMask:function(e,l,a){switch(e){case i.PATTERN000:return(l+a)%2==0;case i.PATTERN001:return l%2==0;case i.PATTERN010:return a%3==0;case i.PATTERN011:return(l+a)%3==0;case i.PATTERN100:return(Math.floor(l/2)+Math.floor(a/3))%2==0;case i.PATTERN101:return l*a%2+l*a%3==0;case i.PATTERN110:return(l*a%2+l*a%3)%2==0;case i.PATTERN111:return(l*a%3+(l+a)%2)%2==0;default:throw new Error("bad maskPattern:"+e)}},getErrorCorrectPolynomial:function(e){for(var l=new b([1],0),a=0;a<e;a++)l=l.multiply(new b([1,v.gexp(a)],0));return l},getLengthInBits:function(e,l){if(1<=l&&l<10)switch(e){case r.MODE_NUMBER:return 10;case r.MODE_ALPHA_NUM:return 9;case r.MODE_8BIT_BYTE:return 8;case r.MODE_KANJI:return 8;default:throw new Error("mode:"+e)}else if(l<27)switch(e){case r.MODE_NUMBER:return 12;case r.MODE_ALPHA_NUM:return 11;case r.MODE_8BIT_BYTE:return 16;case r.MODE_KANJI:return 10;default:throw new Error("mode:"+e)}else{if(!(l<41))throw new Error("type:"+l);switch(e){case r.MODE_NUMBER:return 14;case r.MODE_ALPHA_NUM:return 13;case r.MODE_8BIT_BYTE:return 16;case r.MODE_KANJI:return 12;default:throw new Error("mode:"+e)}}},getLostPoint:function(e){for(var l=e.getModuleCount(),a=0,t=0;t<l;t++)for(var n=0;n<l;n++){for(var u=0,r=e.isDark(t,n),o=-1;o<=1;o++)if(!(t+o<0||l<=t+o))for(var i=-1;i<=1;i++)n+i<0||l<=n+i||0==o&&0==i||r==e.isDark(t+o,n+i)&&u++;u>5&&(a+=3+u-5)}for(t=0;t<l-1;t++)for(n=0;n<l-1;n++){var s=0;e.isDark(t,n)&&s++,e.isDark(t+1,n)&&s++,e.isDark(t,n+1)&&s++,e.isDark(t+1,n+1)&&s++,0!=s&&4!=s||(a+=3)}for(t=0;t<l;t++)for(n=0;n<l-6;n++)e.isDark(t,n)&&!e.isDark(t,n+1)&&e.isDark(t,n+2)&&e.isDark(t,n+3)&&e.isDark(t,n+4)&&!e.isDark(t,n+5)&&e.isDark(t,n+6)&&(a+=40);for(n=0;n<l;n++)for(t=0;t<l-6;t++)e.isDark(t,n)&&!e.isDark(t+1,n)&&e.isDark(t+2,n)&&e.isDark(t+3,n)&&e.isDark(t+4,n)&&!e.isDark(t+5,n)&&e.isDark(t+6,n)&&(a+=40);var v=0;for(n=0;n<l;n++)for(t=0;t<l;t++)e.isDark(t,n)&&v++;var c=Math.abs(100*v/l/l-50)/5;return a+=10*c,a}},v={glog:function(e){if(e<1)throw new Error("glog("+e+")");return v.LOG_TABLE[e]},gexp:function(e){while(e<0)e+=255;while(e>=256)e-=255;return v.EXP_TABLE[e]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},c=0;c<8;c++)v.EXP_TABLE[c]=1<<c;for(c=8;c<256;c++)v.EXP_TABLE[c]=v.EXP_TABLE[c-4]^v.EXP_TABLE[c-5]^v.EXP_TABLE[c-6]^v.EXP_TABLE[c-8];for(c=0;c<255;c++)v.LOG_TABLE[v.EXP_TABLE[c]]=c;function b(e,l){if(void 0==e.length)throw new Error(e.length+"/"+l);var a=0;while(a<e.length&&0==e[a])a++;this.num=new Array(e.length-a+l);for(var t=0;t<e.length-a;t++)this.num[t]=e[t+a]}function f(e,l){this.totalCount=e,this.dataCount=l}function d(){this.buffer=[],this.length=0}b.prototype={get:function(e){return this.num[e]},getLength:function(){return this.num.length},multiply:function(e){for(var l=new Array(this.getLength()+e.getLength()-1),a=0;a<this.getLength();a++)for(var t=0;t<e.getLength();t++)l[a+t]^=v.gexp(v.glog(this.get(a))+v.glog(e.get(t)));return new b(l,0)},mod:function(e){if(this.getLength()-e.getLength()<0)return this;for(var l=v.glog(this.get(0))-v.glog(e.get(0)),a=new Array(this.getLength()),t=0;t<this.getLength();t++)a[t]=this.get(t);for(t=0;t<e.getLength();t++)a[t]^=v.gexp(v.glog(e.get(t))+l);return new b(a,0).mod(e)}},f.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],f.getRSBlocks=function(e,l){var a=f.getRsBlockTable(e,l);if(void 0==a)throw new Error("bad rs block @ typeNumber:"+e+"/errorCorrectLevel:"+l);for(var t=a.length/3,n=[],u=0;u<t;u++)for(var r=a[3*u+0],o=a[3*u+1],i=a[3*u+2],s=0;s<r;s++)n.push(new f(o,i));return n},f.getRsBlockTable=function(e,l){switch(l){case o.L:return f.RS_BLOCK_TABLE[4*(e-1)+0];case o.M:return f.RS_BLOCK_TABLE[4*(e-1)+1];case o.Q:return f.RS_BLOCK_TABLE[4*(e-1)+2];case o.H:return f.RS_BLOCK_TABLE[4*(e-1)+3];default:return}},d.prototype={get:function(e){var l=Math.floor(e/8);return 1==(this.buffer[l]>>>7-e%8&1)},put:function(e,l){for(var a=0;a<l;a++)this.putBit(1==(e>>>l-a-1&1))},getLengthInBits:function(){return this.length},putBit:function(e){var l=Math.floor(this.length/8);this.buffer.length<=l&&this.buffer.push(0),e&&(this.buffer[l]|=128>>>this.length%8),this.length++}};var p=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];a=function(e,l){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:o.H},"string"===typeof l&&(l={text:l}),l)for(var a in l)this._htOption[a]=l[a];this._oQRCode=null,this.canvasId=e,this._htOption.text&&this.canvasId&&this.makeCode(this._htOption.text)},a.prototype.makeCode=function(l){this._oQRCode=new u(e(l,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(l),this._oQRCode.make(),this.makeImage()},a.prototype.makeImage=function(){var e;e=this._htOption.usingIn?wx.createCanvasContext(this.canvasId,this._htOption.usingIn):wx.createCanvasContext(this.canvasId);var l=this._htOption,a=this._oQRCode,t=a.getModuleCount(),n=l.width/t,u=l.height/t,r=Math.round(n),o=Math.round(u);l.image&&""!=l.image&&e.drawImage(l.image,0,0,l.width,l.height);for(var i=0;i<t;i++)for(var s=0;s<t;s++){var v=a.isDark(i,s),c=s*n,b=i*u;e.setStrokeStyle(v?l.colorDark:l.colorLight),e.setLineWidth(1),e.setFillStyle(v?l.colorDark:l.colorLight),e.fillRect(c,b,n,u),e.strokeRect(Math.floor(c)+.5,Math.floor(b)+.5,r,o),e.strokeRect(Math.ceil(c)-.5,Math.ceil(b)-.5,r,o)}e.draw()},a.prototype.exportImage=function(e){e&&wx.canvasToTempFilePath({x:0,y:0,width:this._htOption.width,height:this._htOption.height,destWidth:this._htOption.width,destHeight:this._htOption.height,canvasId:this.canvasId,success:function(a){console.log(l(a.tempFilePath," at utils\\weapp-qrcode.js:415")),e(a.tempFilePath)}})},a.CorrectLevel=o})(),e.exports=a}).call(this,a("0de9")["default"])},a34a:function(e,l,a){e.exports=a("bbdd")},bbdd:function(e,l,a){var t=function(){return this||"object"===typeof self&&self}()||Function("return this")(),n=t.regeneratorRuntime&&Object.getOwnPropertyNames(t).indexOf("regeneratorRuntime")>=0,u=n&&t.regeneratorRuntime;if(t.regeneratorRuntime=void 0,e.exports=a("96cf"),n)t.regeneratorRuntime=u;else try{delete t.regeneratorRuntime}catch(r){t.regeneratorRuntime=void 0}},c8ba:function(e,l){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(t){"object"===typeof window&&(a=window)}e.exports=a},eeb8:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=[{value:11e4,label:"北京市",children:[{value:110101,label:"东城区"},{value:110102,label:"西城区"},{value:110105,label:"朝阳区"},{value:110106,label:"丰台区"},{value:110107,label:"石景山区"},{value:110108,label:"海淀区"},{value:110109,label:"门头沟区"},{value:110111,label:"房山区"},{value:110112,label:"通州区"},{value:110113,label:"顺义区"},{value:110114,label:"昌平区"},{value:110115,label:"大兴区"},{value:110116,label:"怀柔区"},{value:110117,label:"平谷区"},{value:110118,label:"密云区"},{value:110119,label:"延庆区"}]},{value:12e4,label:"天津市",children:[{value:120101,label:"和平区"},{value:120102,label:"河东区"},{value:120103,label:"河西区"},{value:120104,label:"南开区"},{value:120105,label:"河北区"},{value:120106,label:"红桥区"},{value:120110,label:"东丽区"},{value:120111,label:"西青区"},{value:120112,label:"津南区"},{value:120113,label:"北辰区"},{value:120114,label:"武清区"},{value:120115,label:"宝坻区"},{value:120116,label:"滨海新区"},{value:120117,label:"宁河区"},{value:120118,label:"静海区"},{value:120119,label:"蓟州区"}]},{value:13e4,label:"河北省",children:[{value:130100,label:"石家庄市"},{value:130200,label:"唐山市"},{value:130300,label:"秦皇岛市"},{value:130400,label:"邯郸市"},{value:130500,label:"邢台市"},{value:130600,label:"保定市"},{value:130700,label:"张家口市"},{value:130800,label:"承德市"},{value:130900,label:"沧州市"},{value:131e3,label:"廊坊市"},{value:131100,label:"衡水市"},{value:139e3,label:"省直辖县级行政区划"}]},{value:14e4,label:"山西省",children:[{value:140100,label:"太原市"},{value:140200,label:"大同市"},{value:140300,label:"阳泉市"},{value:140400,label:"长治市"},{value:140500,label:"晋城市"},{value:140600,label:"朔州市"},{value:140700,label:"晋中市"},{value:140800,label:"运城市"},{value:140900,label:"忻州市"},{value:141e3,label:"临汾市"},{value:141100,label:"吕梁市"}]},{value:15e4,label:"内蒙古自治区",children:[{value:150100,label:"呼和浩特市"},{value:150200,label:"包头市"},{value:150300,label:"乌海市"},{value:150400,label:"赤峰市"},{value:150500,label:"通辽市"},{value:150600,label:"鄂尔多斯市"},{value:150700,label:"呼伦贝尔市"},{value:150800,label:"巴彦淖尔市"},{value:150900,label:"乌兰察布市"},{value:152200,label:"兴安盟"},{value:152500,label:"锡林郭勒盟"},{value:152900,label:"阿拉善盟"}]},{value:21e4,label:"辽宁省",children:[{value:210100,label:"沈阳市"},{value:210200,label:"大连市"},{value:210300,label:"鞍山市"},{value:210400,label:"抚顺市"},{value:210500,label:"本溪市"},{value:210600,label:"丹东市"},{value:210700,label:"锦州市"},{value:210800,label:"营口市"},{value:210900,label:"阜新市"},{value:211e3,label:"辽阳市"},{value:211100,label:"盘锦市"},{value:211200,label:"铁岭市"},{value:211300,label:"朝阳市"},{value:211400,label:"葫芦岛市"}]},{value:22e4,label:"吉林省",children:[{value:220100,label:"长春市"},{value:220200,label:"吉林市"},{value:220300,label:"四平市"},{value:220400,label:"辽源市"},{value:220500,label:"通化市"},{value:220600,label:"白山市"},{value:220700,label:"松原市"},{value:220800,label:"白城市"},{value:222400,label:"延边朝鲜族自治州"}]},{value:23e4,label:"黑龙江省",children:[{value:230100,label:"哈尔滨市"},{value:230200,label:"齐齐哈尔市"},{value:230300,label:"鸡西市"},{value:230400,label:"鹤岗市"},{value:230500,label:"双鸭山市"},{value:230600,label:"大庆市"},{value:230700,label:"伊春市"},{value:230800,label:"佳木斯市"},{value:230900,label:"七台河市"},{value:231e3,label:"牡丹江市"},{value:231100,label:"黑河市"},{value:231200,label:"绥化市"},{value:232700,label:"大兴安岭地区"}]},{value:31e4,label:"上海市",children:[{value:310101,label:"黄浦区"},{value:310104,label:"徐汇区"},{value:310105,label:"长宁区"},{value:310106,label:"静安区"},{value:310107,label:"普陀区"},{value:310109,label:"虹口区"},{value:310110,label:"杨浦区"},{value:310112,label:"闵行区"},{value:310113,label:"宝山区"},{value:310114,label:"嘉定区"},{value:310115,label:"浦东新区"},{value:310116,label:"金山区"},{value:310117,label:"松江区"},{value:310118,label:"青浦区"},{value:310120,label:"奉贤区"},{value:310151,label:"崇明区"}]},{value:32e4,label:"江苏省",children:[{value:320100,label:"南京市"},{value:320200,label:"无锡市"},{value:320300,label:"徐州市"},{value:320400,label:"常州市"},{value:320500,label:"苏州市"},{value:320600,label:"南通市"},{value:320700,label:"连云港市"},{value:320800,label:"淮安市"},{value:320900,label:"盐城市"},{value:321e3,label:"扬州市"},{value:321100,label:"镇江市"},{value:321200,label:"泰州市"},{value:321300,label:"宿迁市"}]},{value:33e4,label:"浙江省",children:[{value:330100,label:"杭州市"},{value:330200,label:"宁波市"},{value:330300,label:"温州市"},{value:330400,label:"嘉兴市"},{value:330500,label:"湖州市"},{value:330600,label:"绍兴市"},{value:330700,label:"金华市"},{value:330800,label:"衢州市"},{value:330900,label:"舟山市"},{value:331e3,label:"台州市"},{value:331100,label:"丽水市"}]},{value:34e4,label:"安徽省",children:[{value:340100,label:"合肥市"},{value:340200,label:"芜湖市"},{value:340300,label:"蚌埠市"},{value:340400,label:"淮南市"},{value:340500,label:"马鞍山市"},{value:340600,label:"淮北市"},{value:340700,label:"铜陵市"},{value:340800,label:"安庆市"},{value:341e3,label:"黄山市"},{value:341100,label:"滁州市"},{value:341200,label:"阜阳市"},{value:341300,label:"宿州市"},{value:341500,label:"六安市"},{value:341600,label:"亳州市"},{value:341700,label:"池州市"},{value:341800,label:"宣城市"}]},{value:35e4,label:"福建省",children:[{value:350100,label:"福州市"},{value:350200,label:"厦门市"},{value:350300,label:"莆田市"},{value:350400,label:"三明市"},{value:350500,label:"泉州市"},{value:350600,label:"漳州市"},{value:350700,label:"南平市"},{value:350800,label:"龙岩市"},{value:350900,label:"宁德市"}]},{value:36e4,label:"江西省",children:[{value:360100,label:"南昌市"},{value:360200,label:"景德镇市"},{value:360300,label:"萍乡市"},{value:360400,label:"九江市"},{value:360500,label:"新余市"},{value:360600,label:"鹰潭市"},{value:360700,label:"赣州市"},{value:360800,label:"吉安市"},{value:360900,label:"宜春市"},{value:361e3,label:"抚州市"},{value:361100,label:"上饶市"}]},{value:37e4,label:"山东省",children:[{value:370100,label:"济南市"},{value:370200,label:"青岛市"},{value:370300,label:"淄博市"},{value:370400,label:"枣庄市"},{value:370500,label:"东营市"},{value:370600,label:"烟台市"},{value:370700,label:"潍坊市"},{value:370800,label:"济宁市"},{value:370900,label:"泰安市"},{value:371e3,label:"威海市"},{value:371100,label:"日照市"},{value:371200,label:"莱芜市"},{value:371300,label:"临沂市"},{value:371400,label:"德州市"},{value:371500,label:"聊城市"},{value:371600,label:"滨州市"},{value:371700,label:"菏泽市"}]},{value:41e4,label:"河南省",children:[{value:410100,label:"郑州市"},{value:410200,label:"开封市"},{value:410300,label:"洛阳市"},{value:410400,label:"平顶山市"},{value:410500,label:"安阳市"},{value:410600,label:"鹤壁市"},{value:410700,label:"新乡市"},{value:410800,label:"焦作市"},{value:410900,label:"濮阳市"},{value:411e3,label:"许昌市"},{value:411100,label:"漯河市"},{value:411200,label:"三门峡市"},{value:411300,label:"南阳市"},{value:411400,label:"商丘市"},{value:411500,label:"信阳市"},{value:411600,label:"周口市"},{value:411700,label:"驻马店市"},{value:419e3,label:"省直辖县级行政区划"}]},{value:42e4,label:"湖北省",children:[{value:420100,label:"武汉市"},{value:420200,label:"黄石市"},{value:420300,label:"十堰市"},{value:420500,label:"宜昌市"},{value:420600,label:"襄阳市"},{value:420700,label:"鄂州市"},{value:420800,label:"荆门市"},{value:420900,label:"孝感市"},{value:421e3,label:"荆州市"},{value:421100,label:"黄冈市"},{value:421200,label:"咸宁市"},{value:421300,label:"随州市"},{value:422800,label:"恩施土家族苗族自治州"},{value:429e3,label:"省直辖县级行政区划"}]},{value:43e4,label:"湖南省",children:[{value:430100,label:"长沙市"},{value:430200,label:"株洲市"},{value:430300,label:"湘潭市"},{value:430400,label:"衡阳市"},{value:430500,label:"邵阳市"},{value:430600,label:"岳阳市"},{value:430700,label:"常德市"},{value:430800,label:"张家界市"},{value:430900,label:"益阳市"},{value:431e3,label:"郴州市"},{value:431100,label:"永州市"},{value:431200,label:"怀化市"},{value:431300,label:"娄底市"},{value:433100,label:"湘西土家族苗族自治州"}]},{value:44e4,label:"广东省",children:[{value:440100,label:"广州市"},{value:440200,label:"韶关市"},{value:440300,label:"深圳市"},{value:440400,label:"珠海市"},{value:440500,label:"汕头市"},{value:440600,label:"佛山市"},{value:440700,label:"江门市"},{value:440800,label:"湛江市"},{value:440900,label:"茂名市"},{value:441200,label:"肇庆市"},{value:441300,label:"惠州市"},{value:441400,label:"梅州市"},{value:441500,label:"汕尾市"},{value:441600,label:"河源市"},{value:441700,label:"阳江市"},{value:441800,label:"清远市"},{value:441900,label:"东莞市"},{value:442e3,label:"中山市"},{value:445100,label:"潮州市"},{value:445200,label:"揭阳市"},{value:445300,label:"云浮市"}]},{value:45e4,label:"广西壮族自治区",children:[{value:450100,label:"南宁市"},{value:450200,label:"柳州市"},{value:450300,label:"桂林市"},{value:450400,label:"梧州市"},{value:450500,label:"北海市"},{value:450600,label:"防城港市"},{value:450700,label:"钦州市"},{value:450800,label:"贵港市"},{value:450900,label:"玉林市"},{value:451e3,label:"百色市"},{value:451100,label:"贺州市"},{value:451200,label:"河池市"},{value:451300,label:"来宾市"},{value:451400,label:"崇左市"}]},{value:46e4,label:"海南省",children:[{value:460100,label:"海口市"},{value:460200,label:"三亚市"},{value:460300,label:"三沙市"},{value:460400,label:"儋州市"},{value:469e3,label:"省直辖县级行政区划"}]},{value:5e5,label:"重庆市",children:[{value:500101,label:"万州区"},{value:500102,label:"涪陵区"},{value:500103,label:"渝中区"},{value:500104,label:"大渡口区"},{value:500105,label:"江北区"},{value:500106,label:"沙坪坝区"},{value:500107,label:"九龙坡区"},{value:500108,label:"南岸区"},{value:500109,label:"北碚区"},{value:500110,label:"綦江区"},{value:500111,label:"大足区"},{value:500112,label:"渝北区"},{value:500113,label:"巴南区"},{value:500114,label:"黔江区"},{value:500115,label:"长寿区"},{value:500116,label:"江津区"},{value:500117,label:"合川区"},{value:500118,label:"永川区"},{value:500119,label:"南川区"},{value:500120,label:"璧山区"},{value:500151,label:"铜梁区"},{value:500152,label:"潼南区"},{value:500153,label:"荣昌区"},{value:500154,label:"开州区"}]},{value:51e4,label:"四川省",children:[{value:510100,label:"成都市"},{value:510300,label:"自贡市"},{value:510400,label:"攀枝花市"},{value:510500,label:"泸州市"},{value:510600,label:"德阳市"},{value:510700,label:"绵阳市"},{value:510800,label:"广元市"},{value:510900,label:"遂宁市"},{value:511e3,label:"内江市"},{value:511100,label:"乐山市"},{value:511300,label:"南充市"},{value:511400,label:"眉山市"},{value:511500,label:"宜宾市"},{value:511600,label:"广安市"},{value:511700,label:"达州市"},{value:511800,label:"雅安市"},{value:511900,label:"巴中市"},{value:512e3,label:"资阳市"},{value:513200,label:"阿坝藏族羌族自治州"},{value:513300,label:"甘孜藏族自治州"},{value:513400,label:"凉山彝族自治州"}]},{value:52e4,label:"贵州省",children:[{value:520100,label:"贵阳市"},{value:520200,label:"六盘水市"},{value:520300,label:"遵义市"},{value:520400,label:"安顺市"},{value:520500,label:"毕节市"},{value:520600,label:"铜仁市"},{value:522300,label:"黔西南布依族苗族自治州"},{value:522600,label:"黔东南苗族侗族自治州"},{value:522700,label:"黔南布依族苗族自治州"}]},{value:53e4,label:"云南省",children:[{value:530100,label:"昆明市"},{value:530300,label:"曲靖市"},{value:530400,label:"玉溪市"},{value:530500,label:"保山市"},{value:530600,label:"昭通市"},{value:530700,label:"丽江市"},{value:530800,label:"普洱市"},{value:530900,label:"临沧市"},{value:532300,label:"楚雄彝族自治州"},{value:532500,label:"红河哈尼族彝族自治州"},{value:532600,label:"文山壮族苗族自治州"},{value:532800,label:"西双版纳傣族自治州"},{value:532900,label:"大理白族自治州"},{value:533100,label:"德宏傣族景颇族自治州"},{value:533300,label:"怒江傈僳族自治州"},{value:533400,label:"迪庆藏族自治州"}]},{value:54e4,label:"西藏自治区",children:[{value:540100,label:"拉萨市"},{value:540200,label:"日喀则市"},{value:540300,label:"昌都市"},{value:540400,label:"林芝市"},{value:540500,label:"山南市"},{value:542400,label:"那曲地区"},{value:542500,label:"阿里地区"}]},{value:61e4,label:"陕西省",children:[{value:610100,label:"西安市"},{value:610200,label:"铜川市"},{value:610300,label:"宝鸡市"},{value:610400,label:"咸阳市"},{value:610500,label:"渭南市"},{value:610600,label:"延安市"},{value:610700,label:"汉中市"},{value:610800,label:"榆林市"},{value:610900,label:"安康市"},{value:611e3,label:"商洛市"}]},{value:62e4,label:"甘肃省",children:[{value:620100,label:"兰州市"},{value:620200,label:"嘉峪关市"},{value:620300,label:"金昌市"},{value:620400,label:"白银市"},{value:620500,label:"天水市"},{value:620600,label:"武威市"},{value:620700,label:"张掖市"},{value:620800,label:"平凉市"},{value:620900,label:"酒泉市"},{value:621e3,label:"庆阳市"},{value:621100,label:"定西市"},{value:621200,label:"陇南市"},{value:622900,label:"临夏回族自治州"},{value:623e3,label:"甘南藏族自治州"}]},{value:63e4,label:"青海省",children:[{value:630100,label:"西宁市"},{value:630200,label:"海东市"},{value:632200,label:"海北藏族自治州"},{value:632300,label:"黄南藏族自治州"},{value:632500,label:"海南藏族自治州"},{value:632600,label:"果洛藏族自治州"},{value:632700,label:"玉树藏族自治州"},{value:632800,label:"海西蒙古族藏族自治州"}]},{value:64e4,label:"宁夏回族自治区",children:[{value:640100,label:"银川市"},{value:640200,label:"石嘴山市"},{value:640300,label:"吴忠市"},{value:640400,label:"固原市"},{value:640500,label:"中卫市"}]},{value:65e4,label:"新疆维吾尔自治区",children:[{value:650100,label:"乌鲁木齐市"},{value:650200,label:"克拉玛依市"},{value:650400,label:"吐鲁番市"},{value:650500,label:"哈密市"},{value:652300,label:"昌吉回族自治州"},{value:652700,label:"博尔塔拉蒙古自治州"},{value:652800,label:"巴音郭楞蒙古自治州"},{value:652900,label:"阿克苏地区"},{value:653e3,label:"克孜勒苏柯尔克孜自治州"},{value:653100,label:"喀什地区"},{value:653200,label:"和田地区"},{value:654e3,label:"伊犁哈萨克自治州"},{value:654200,label:"塔城地区"},{value:654300,label:"阿勒泰地区"},{value:659e3,label:"自治区直辖县级行政区划"}]},{value:71e4,label:"台湾省",children:[{value:"710100",label:"台北市"},{value:"710200",label:"高雄市"},{value:"710300",label:"台南市"},{value:"710400",label:"台中市"},{value:"710500",label:"金门县"},{value:"710600",label:"南投县"},{value:"710700",label:"基隆市"},{value:"710800",label:"新竹市"},{value:"710900",label:"嘉义市"},{value:"711100",label:"新北市"},{value:"711200",label:"宜兰县"},{value:"711300",label:"新竹县"},{value:"711400",label:"桃园县"},{value:"711500",label:"苗栗县"},{value:"711700",label:"彰化县"},{value:"711900",label:"嘉义县"},{value:"712100",label:"云林县"},{value:"712400",label:"屏东县"},{value:"712500",label:"台东县"},{value:"712600",label:"花莲县"},{value:"712700",label:"澎湖县"}]},{value:81e4,label:"香港特别行政区",children:[{value:"810100",label:"香港岛"},{value:"810200",label:"九龙"},{value:"810300",label:"新界"}]},{value:82e4,label:"澳门特别行政区",children:[{value:"820100",label:"澳门半岛"},{value:"820200",label:"氹仔岛"},{value:"820300",label:"路环岛"}]}];l.default=t},ef47:function(e,l,a){"use strict";(function(e){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=n(a("a34a"));function n(e){return e&&e.__esModule?e:{default:e}}function u(e){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{},t=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.forEach(function(l){c(e,l,a[l])})}return e}function r(e,l,a,t,n,u,r){try{var o=e[u](r),i=o.value}catch(s){return void a(s)}o.done?l(i):Promise.resolve(i).then(t,n)}function o(e){return function(){var l=this,a=arguments;return new Promise(function(t,n){var u=e.apply(l,a);function o(e){r(u,t,n,o,i,"next",e)}function i(e){r(u,t,n,o,i,"throw",e)}o(void 0)})}}function i(e,l){if(!(e instanceof l))throw new TypeError("Cannot call a class as a function")}function s(e,l){for(var a=0;a<l.length;a++){var t=l[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function v(e,l,a){return l&&s(e.prototype,l),a&&s(e,a),e}function c(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}var b=function(){function l(){var e,a=this;i(this,l),c(this,"config",{baseUrl:"",header:(e={"content-type":"application/json;charset=UTF-8"},c(e,"content-type","application/x-www-form-urlencoded"),c(e,"cscb-token","8631a2fc993b1963a8636a36edd7724a"),c(e,"cscb-login-token",""),e),method:"POST",dataType:"json",responseType:"text"}),c(this,"interceptor",{request:function(e){e&&(a.requestBeforeFun=e)},response:function(e,l){e&&l&&(a.requestComFun=e,a.requestComFail=l)}})}return v(l,[{key:"requestBeforeFun",value:function(e){return e}},{key:"requestComFun",value:function(e){return e}},{key:"requestComFail",value:function(e){return e}},{key:"validateStatus",value:function(e){return 200===e.statusCode}},{key:"setConfig",value:function(e){this.config=e(this.config)}},{key:"request",value:function(){var a=o(t.default.mark(function a(){var n,r=this,o=arguments;return t.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=o.length>0&&void 0!==o[0]?o[0]:{},n.baseUrl=this.config.baseUrl,n.dataType=n.dataType||this.config.dataType,n.responseType=n.responseType||this.config.responseType,n.url=n.url||"",n.data=n.data||{},n.params=n.params||{},n.header=n.header||this.config.header,n.method=n.method||this.config.method,a.abrupt("return",new Promise(function(a,t){var o=!0,i={};n.complete=function(e){e.config=i,r.validateStatus(e)?(e=r.requestComFun(e),a(e)):(e=r.requestComFail(e),t(e))};var s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"handle cancel",l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n,a={errMsg:e,config:l};t(a),o=!1};i=u({},r.requestBeforeFun(n,s));var v=u({},i);if(o){var c=l.posUrl(n.url)?n.url:n.baseUrl+n.url;if("{}"!==JSON.stringify(n.params)){var b=l.addQueryString(n.params);c+=-1===c.indexOf("?")?"?".concat(b):"&".concat(b)}v.url=c,e.request(v)}}));case 10:case"end":return a.stop()}},a,this)}));function n(){return a.apply(this,arguments)}return n}()},{key:"get",value:function(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request(u({url:e,method:"GET"},l))}},{key:"post",value:function(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(u({url:e,data:l,method:"POST"},a))}},{key:"put",value:function(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(u({url:e,data:l,method:"PUT"},a))}},{key:"delete",value:function(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(u({url:e,data:l,method:"DELETE"},a))}},{key:"connect",value:function(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(u({url:e,data:l,method:"CONNECT"},a))}},{key:"head",value:function(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(u({url:e,data:l,method:"HEAD"},a))}},{key:"options",value:function(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(u({url:e,data:l,method:"OPTIONS"},a))}},{key:"trace",value:function(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(u({url:e,data:l,method:"TRACE"},a))}},{key:"upload",value:function(a,t){var n=this,r=t.files,o=t.filePath,i=t.name,s=t.header,v=t.formData;return new Promise(function(t,c){var b=!0,f={},d={baseUrl:n.config.baseUrl,url:a,files:r,filePath:o,method:"UPLOAD",name:i,header:s||n.config.header,formData:v,complete:function(e){e.config=f,200===e.statusCode?(e=n.requestComFun(e),t(e)):(e=n.requestComFail(e),c(e))}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"handle cancel",l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d,a={errMsg:e,config:l};c(a),b=!1};f=u({},n.requestBeforeFun(d,p));var h=u({},f);b&&(h.url=l.posUrl(a)?a:n.config.baseUrl+a,e.uploadFile(h))})}}],[{key:"posUrl",value:function(e){return/(http|https):\/\/([\w.]+\/?)\S*/.test(e)}},{key:"addQueryString",value:function(e){var l="";return Object.keys(e).forEach(function(a){l+=a+"="+e[a]+"&"}),l.substring(0,l.length-1)}}]),l}();l.default=b}).call(this,a("6e42")["default"])}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'colorui/components/cu-custom';__wxRouteBegin = true;__wxAppCurrentFile__ = 'colorui/components/cu-custom.js';

define('colorui/components/cu-custom.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["colorui/components/cu-custom"], {
  "0d36": function d36(t, n, a) {
    "use strict";

    var u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        e = [];

    a.d(n, "a", function () {
      return u;
    }), a.d(n, "b", function () {
      return e;
    });
  },
  9179: function _(t, n, a) {
    "use strict";

    a.r(n);
    var u = a("9c5d"),
        e = a.n(u);

    for (var o in u) {
      "default" !== o && function (t) {
        a.d(n, t, function () {
          return u[t];
        });
      }(o);
    }

    n["default"] = e.a;
  },
  "9c5d": function c5d(t, n, a) {
    "use strict";

    (function (t, a) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var u = {
        data: function data() {
          return {
            StatusBar: this.StatusBar,
            CustomBar: this.CustomBar
          };
        },
        name: "cu-custom",
        computed: {
          style: function style() {
            var t = this.StatusBar,
                n = this.CustomBar,
                a = this.bgImage,
                u = "height:".concat(n, "px;padding-top:").concat(t, "px;");
            return this.bgImage && (u = "".concat(u, "background-image:url(").concat(a, ");")), u;
          }
        },
        onShow: function onShow() {
          console.log(t("success", " at colorui\\components\\cu-custom.vue:56"));
        },
        props: {
          bgColor: {
            type: String,
            default: ""
          },
          isCustom: {
            type: [Boolean, String],
            default: !1
          },
          isBack: {
            type: [Boolean, String],
            default: !1
          },
          bgImage: {
            type: String,
            default: ""
          }
        },
        methods: {
          BackPage: function BackPage() {
            a.navigateBack({
              delta: 1
            });
          }
        }
      };
      n.default = u;
    }).call(this, a("0de9")["default"], a("6e42")["default"]);
  },
  a90b: function a90b(t, n, a) {},
  ac08: function ac08(t, n, a) {
    "use strict";

    var u = a("a90b"),
        e = a.n(u);
    e.a;
  },
  f761: function f761(t, n, a) {
    "use strict";

    a.r(n);
    var u = a("0d36"),
        e = a("9179");

    for (var o in e) {
      "default" !== o && function (t) {
        a.d(n, t, function () {
          return e[t];
        });
      }(o);
    }

    a("ac08");
    var c = a("2877"),
        r = Object(c["a"])(e["default"], u["a"], u["b"], !1, null, null, null);
    n["default"] = r.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['colorui/components/cu-custom-create-component', {
  'colorui/components/cu-custom-create-component': function coloruiComponentsCuCustomCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("f761"));
  }
}, [['colorui/components/cu-custom-create-component']]]);
});
require('colorui/components/cu-custom.js');
__wxRoute = 'components/dateTime/dateTime';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/dateTime/dateTime.js';

define('components/dateTime/dateTime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/dateTime/dateTime"], {
  "084e": function e(t, _e, s) {
    "use strict";

    s.r(_e);
    var a = s("370c"),
        i = s.n(a);

    for (var n in a) {
      "default" !== n && function (t) {
        s.d(_e, t, function () {
          return a[t];
        });
      }(n);
    }

    _e["default"] = i.a;
  },
  "34af": function af(t, e, s) {},
  "370c": function c(t, e, s) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var a = {
      name: "tuiDatetime",
      props: {
        type: {
          type: Number,
          default: 1
        },
        startYear: {
          type: Number,
          default: 1980
        },
        endYear: {
          type: Number,
          default: 2050
        },
        cancelColor: {
          type: String,
          default: "#888"
        },
        color: {
          type: String,
          default: "#5677fc"
        },
        setDateTime: {
          type: String,
          default: ""
        }
      },
      data: function data() {
        return {
          isShow: !1,
          years: [],
          months: [],
          days: [],
          hours: [],
          minutes: [],
          year: 0,
          month: 0,
          day: 0,
          hour: 0,
          minute: 0,
          startDate: "",
          endDate: "",
          value: [0, 0, 0, 0, 0],
          reset: !1
        };
      },
      mounted: function mounted() {
        this.initData();
      },
      computed: {
        yearOrMonth: function yearOrMonth() {
          return "".concat(this.year, "-").concat(this.month);
        },
        propsChange: function propsChange() {
          return "".concat(this.setDateTime, "-").concat(this.type, "-").concat(this.startYear, "-").concat(this.endYear);
        }
      },
      watch: {
        yearOrMonth: function yearOrMonth() {
          this.setDays();
        },
        propsChange: function propsChange() {
          var t = this;
          this.reset = !0, setTimeout(function () {
            t.initData();
          }, 10);
        }
      },
      methods: {
        stop: function stop() {},
        formatNum: function formatNum(t) {
          return t < 10 ? "0" + t : t + "";
        },
        generateArray: function generateArray(t, e) {
          return Array.from(new Array(e + 1).keys()).slice(t);
        },
        getIndex: function getIndex(t, e) {
          var s = t.indexOf(e);
          return ~s ? s : 0;
        },
        initSelectValue: function initSelectValue() {
          var t = this.setDateTime.replace(/\-/g, "/");
          t = t && -1 == t.indexOf("/") ? "2020/01/01 ".concat(t) : t;
          var e = null;
          e = t ? new Date(t) : new Date(), this.year = e.getFullYear(), this.month = e.getMonth() + 1, this.day = e.getDate(), this.hour = e.getHours(), this.minute = e.getMinutes();
        },
        initData: function initData() {
          switch (this.initSelectValue(), this.reset = !1, this.type) {
            case 1:
              this.value = [0, 0, 0, 0, 0], this.setYears(), this.setMonths(), this.setDays(), this.setHours(), this.setMinutes();
              break;

            case 2:
              this.value = [0, 0, 0], this.setYears(), this.setMonths(), this.setDays();
              break;

            case 3:
              this.value = [0, 0], this.setYears(), this.setMonths();
              break;

            case 4:
              this.value = [0, 0], this.setHours(), this.setMinutes();
              break;

            default:
              break;
          }
        },
        setYears: function setYears() {
          var t = this;
          this.years = this.generateArray(this.startYear, this.endYear), setTimeout(function () {
            t.$set(t.value, 0, t.getIndex(t.years, t.year));
          }, 8);
        },
        setMonths: function setMonths() {
          var t = this;
          this.months = this.generateArray(1, 12), setTimeout(function () {
            t.$set(t.value, 1, t.getIndex(t.months, t.month));
          }, 8);
        },
        setDays: function setDays() {
          var t = this;

          if (3 != this.type && 4 != this.type) {
            var e = new Date(this.year, this.month, 0).getDate();
            this.days = this.generateArray(1, e), setTimeout(function () {
              t.$set(t.value, 2, t.getIndex(t.days, t.day));
            }, 8);
          }
        },
        setHours: function setHours() {
          var t = this;
          this.hours = this.generateArray(0, 23), setTimeout(function () {
            t.$set(t.value, t.value.length - 2, t.getIndex(t.hours, t.hour));
          }, 8);
        },
        setMinutes: function setMinutes() {
          var t = this;
          this.minutes = this.generateArray(0, 59), setTimeout(function () {
            t.$set(t.value, t.value.length - 1, t.getIndex(t.minutes, t.minute));
          }, 8);
        },
        show: function show() {
          var t = this;
          setTimeout(function () {
            t.isShow = !0;
          }, 50);
        },
        hide: function hide() {
          this.isShow = !1;
        },
        change: function change(t) {
          switch (this.value = t.detail.value, this.type) {
            case 1:
              this.year = this.years[this.value[0]], this.month = this.months[this.value[1]], this.day = this.days[this.value[2]], this.hour = this.hours[this.value[3]], this.minute = this.minutes[this.value[4]];
              break;

            case 2:
              this.year = this.years[this.value[0]], this.month = this.months[this.value[1]], this.day = this.days[this.value[2]];
              break;

            case 3:
              this.year = this.years[this.value[0]], this.month = this.months[this.value[1]];
              break;

            case 4:
              this.hour = this.hours[this.value[0]], this.minute = this.minutes[this.value[1]];
              break;

            default:
              break;
          }
        },
        btnFix: function btnFix() {
          var t = {},
              e = this.year,
              s = this.formatNum(this.month || 0),
              a = this.formatNum(this.day || 0),
              i = this.formatNum(this.hour || 0),
              n = this.formatNum(this.minute || 0);

          switch (this.type) {
            case 1:
              t = {
                year: e,
                month: s,
                day: a,
                hour: i,
                minute: n,
                result: "".concat(e, "-").concat(s, "-").concat(a, " ").concat(i, ":").concat(n)
              };
              break;

            case 2:
              t = {
                year: e,
                month: s,
                day: a,
                result: "".concat(e, "-").concat(s, "-").concat(a)
              };
              break;

            case 3:
              t = {
                year: e,
                month: s,
                result: "".concat(e, "-").concat(s)
              };
              break;

            case 4:
              t = {
                hour: i,
                minute: n,
                result: "".concat(i, ":").concat(n)
              };
              break;

            default:
              break;
          }

          this.$emit("confirm", t), this.hide();
        }
      }
    };
    e.default = a;
  },
  "64df": function df(t, e, s) {
    "use strict";

    var a = function a() {
      var t = this,
          e = t.$createElement,
          s = (t._self._c, t.__map(t.months, function (e, s) {
        var a = t.formatNum(e);
        return {
          $orig: t.__get_orig(e),
          m0: a
        };
      })),
          a = t.__map(t.days, function (e, s) {
        var a = t.formatNum(e);
        return {
          $orig: t.__get_orig(e),
          m1: a
        };
      }),
          i = t.__map(t.hours, function (e, s) {
        var a = t.formatNum(e);
        return {
          $orig: t.__get_orig(e),
          m2: a
        };
      }),
          n = t.__map(t.minutes, function (e, s) {
        var a = t.formatNum(e);
        return {
          $orig: t.__get_orig(e),
          m3: a
        };
      });

      t.$mp.data = Object.assign({}, {
        $root: {
          l0: s,
          l1: a,
          l2: i,
          l3: n
        }
      });
    },
        i = [];

    s.d(e, "a", function () {
      return a;
    }), s.d(e, "b", function () {
      return i;
    });
  },
  f263: function f263(t, e, s) {
    "use strict";

    var a = s("34af"),
        i = s.n(a);
    i.a;
  },
  fbc8: function fbc8(t, e, s) {
    "use strict";

    s.r(e);
    var a = s("64df"),
        i = s("084e");

    for (var n in i) {
      "default" !== n && function (t) {
        s.d(e, t, function () {
          return i[t];
        });
      }(n);
    }

    s("f263");
    var r = s("2877"),
        u = Object(r["a"])(i["default"], a["a"], a["b"], !1, null, null, null);
    e["default"] = u.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/dateTime/dateTime-create-component', {
  'components/dateTime/dateTime-create-component': function componentsDateTimeDateTimeCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("fbc8"));
  }
}, [['components/dateTime/dateTime-create-component']]]);
});
require('components/dateTime/dateTime.js');
__wxRoute = 'components/icon/icon';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/icon/icon.js';

define('components/icon/icon.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/icon/icon"], {
  a2a5: function a2a5(e, t, n) {
    "use strict";

    var u = n("ce94"),
        a = n.n(u);
    a.a;
  },
  c8f0: function c8f0(e, t, n) {
    "use strict";

    var u = function u() {
      var e = this,
          t = e.$createElement;
      e._self._c;
    },
        a = [];

    n.d(t, "a", function () {
      return u;
    }), n.d(t, "b", function () {
      return a;
    });
  },
  cc21: function cc21(e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var u = {
      name: "tuiIcon",
      props: {
        name: {
          type: String,
          default: ""
        },
        size: {
          type: Number,
          default: 32
        },
        color: {
          type: String,
          default: ""
        },
        bold: {
          type: Boolean,
          default: !1
        },
        visible: {
          type: Boolean,
          default: !0
        },
        index: {
          type: Number,
          default: 0
        }
      },
      methods: {
        handleClick: function handleClick(e) {
          this.$emit("click", {
            index: e
          });
        }
      }
    };
    t.default = u;
  },
  ce94: function ce94(e, t, n) {},
  d8ea: function d8ea(e, t, n) {
    "use strict";

    n.r(t);
    var u = n("c8f0"),
        a = n("f86e");

    for (var c in a) {
      "default" !== c && function (e) {
        n.d(t, e, function () {
          return a[e];
        });
      }(c);
    }

    n("a2a5");
    var i = n("2877"),
        o = Object(i["a"])(a["default"], u["a"], u["b"], !1, null, null, null);
    t["default"] = o.exports;
  },
  f86e: function f86e(e, t, n) {
    "use strict";

    n.r(t);
    var u = n("cc21"),
        a = n.n(u);

    for (var c in u) {
      "default" !== c && function (e) {
        n.d(t, e, function () {
          return u[e];
        });
      }(c);
    }

    t["default"] = a.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/icon/icon-create-component', {
  'components/icon/icon-create-component': function componentsIconIconCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("d8ea"));
  }
}, [['components/icon/icon-create-component']]]);
});
require('components/icon/icon.js');
__wxRoute = 'components/list-cell/list-cell';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/list-cell/list-cell.js';

define('components/list-cell/list-cell.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/list-cell/list-cell"], {
  "0fd1": function fd1(t, e, n) {
    "use strict";

    var a = n("cfb4"),
        l = n.n(a);
    l.a;
  },
  "6aab": function aab(t, e, n) {
    "use strict";

    var a = function a() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        l = [];

    n.d(e, "a", function () {
      return a;
    }), n.d(e, "b", function () {
      return l;
    });
  },
  "6dd1": function dd1(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("a16d"),
        l = n.n(a);

    for (var u in a) {
      "default" !== u && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(u);
    }

    e["default"] = l.a;
  },
  a16d: function a16d(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var a = {
      name: "tuiListCell",
      props: {
        arrow: {
          type: Boolean,
          default: !1
        },
        hover: {
          type: Boolean,
          default: !0
        },
        lineLeft: {
          type: Boolean,
          default: !0
        },
        lineRight: {
          type: Boolean,
          default: !1
        },
        padding: {
          type: String,
          default: "26rpx 30rpx"
        },
        last: {
          type: Boolean,
          default: !1
        },
        radius: {
          type: Boolean,
          default: !1
        },
        bgcolor: {
          type: String,
          default: "#fff"
        },
        size: {
          type: Number,
          default: 32
        },
        color: {
          type: String,
          default: "#333"
        },
        index: {
          type: Number,
          default: 0
        }
      },
      methods: {
        handleClick: function handleClick() {
          this.$emit("click", {
            index: this.index
          });
        }
      }
    };
    e.default = a;
  },
  cfb4: function cfb4(t, e, n) {},
  d817: function d817(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("6aab"),
        l = n("6dd1");

    for (var u in l) {
      "default" !== u && function (t) {
        n.d(e, t, function () {
          return l[t];
        });
      }(u);
    }

    n("0fd1");
    var o = n("2877"),
        i = Object(o["a"])(l["default"], a["a"], a["b"], !1, null, null, null);
    e["default"] = i.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/list-cell/list-cell-create-component', {
  'components/list-cell/list-cell-create-component': function componentsListCellListCellCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("d817"));
  }
}, [['components/list-cell/list-cell-create-component']]]);
});
require('components/list-cell/list-cell.js');
__wxRoute = 'components/loadmore/loadmore';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/loadmore/loadmore.js';

define('components/loadmore/loadmore.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/loadmore/loadmore"], {
  "2b83": function b83(t, e, n) {},
  "357d": function d(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("7cc3"),
        r = n("85fd");

    for (var a in r) {
      "default" !== a && function (t) {
        n.d(e, t, function () {
          return r[t];
        });
      }(a);
    }

    n("d17e");
    var o = n("2877"),
        f = Object(o["a"])(r["default"], u["a"], u["b"], !1, null, null, null);
    e["default"] = f.exports;
  },
  "6e63": function e63(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var u = {
      name: "tuiLoadmore",
      props: {
        text: {
          type: String,
          default: "正在加载..."
        },
        visible: {
          type: Boolean,
          default: !1
        },
        index: {
          type: Number,
          default: 1
        },
        type: {
          type: String,
          default: ""
        }
      }
    };
    e.default = u;
  },
  "7cc3": function cc3(t, e, n) {
    "use strict";

    var u = function u() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        r = [];

    n.d(e, "a", function () {
      return u;
    }), n.d(e, "b", function () {
      return r;
    });
  },
  "85fd": function fd(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("6e63"),
        r = n.n(u);

    for (var a in u) {
      "default" !== a && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(a);
    }

    e["default"] = r.a;
  },
  d17e: function d17e(t, e, n) {
    "use strict";

    var u = n("2b83"),
        r = n.n(u);
    r.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/loadmore/loadmore-create-component', {
  'components/loadmore/loadmore-create-component': function componentsLoadmoreLoadmoreCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("357d"));
  }
}, [['components/loadmore/loadmore-create-component']]]);
});
require('components/loadmore/loadmore.js');
__wxRoute = 'components/mpvue-citypicker/mpvueCityPicker';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/mpvue-citypicker/mpvueCityPicker.js';

define('components/mpvue-citypicker/mpvueCityPicker.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/mpvue-citypicker/mpvueCityPicker"], {
  "1d94": function d94(t, e, i) {
    "use strict";

    var a = i("b082"),
        u = i.n(a);
    u.a;
  },
  6699: function _(t, e, i) {
    "use strict";

    i.r(e);
    var a = i("a0f7"),
        u = i("e29c");

    for (var n in u) {
      "default" !== n && function (t) {
        i.d(e, t, function () {
          return u[t];
        });
      }(n);
    }

    i("1d94");
    var r = i("2877"),
        c = Object(r["a"])(u["default"], a["a"], a["b"], !1, null, null, null);
    e["default"] = c.exports;
  },
  "96b8": function b8(t, e, i) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var a = r(i("9cc1")),
        u = r(i("72b4")),
        n = r(i("4f90"));

    function r(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    var c = {
      data: function data() {
        return {
          pickerValue: [0, 0, 0],
          provinceDataList: a.default,
          cityDataList: u.default[0],
          areaDataList: n.default[0][0],
          showPicker: !1
        };
      },
      created: function created() {
        this.init();
      },
      props: {
        pickerValueDefault: {
          type: Array,
          default: function _default() {
            return [0, 0, 0];
          }
        },
        themeColor: String
      },
      watch: {
        pickerValueDefault: function pickerValueDefault() {
          this.init();
        }
      },
      methods: {
        init: function init() {
          this.handPickValueDefault();
          var t = this.pickerValueDefault;
          this.cityDataList = u.default[t[0]], this.areaDataList = n.default[t[0]][t[1]], this.pickerValue = t;
        },
        show: function show() {
          var t = this;
          setTimeout(function () {
            t.showPicker = !0;
          }, 0);
        },
        maskClick: function maskClick() {
          this.pickerCancel();
        },
        pickerCancel: function pickerCancel() {
          this.showPicker = !1, this._$emit("onCancel");
        },
        pickerConfirm: function pickerConfirm(t) {
          this.showPicker = !1, this._$emit("onConfirm");
        },
        showPickerView: function showPickerView() {
          this.showPicker = !0;
        },
        handPickValueDefault: function handPickValueDefault() {
          var t = this.pickerValueDefault,
              e = t[0],
              i = t[1],
              r = t[2];
          0 === e && 0 === i && 0 === r || (e > a.default.length - 1 && (this.pickerValueDefault[0] = e = a.default.length - 1), i > u.default[e].length - 1 && (this.pickerValueDefault[1] = i = u.default[e].length - 1), r > n.default[e][i].length - 1 && (this.pickerValueDefault[2] = n.default[e][i].length - 1));
        },
        pickerChange: function pickerChange(t) {
          var e = t.mp.detail.value;
          this.pickerValue[0] !== e[0] ? (this.cityDataList = u.default[e[0]], this.areaDataList = n.default[e[0]][0], e[1] = 0, e[2] = 0) : this.pickerValue[1] !== e[1] && (this.areaDataList = n.default[e[0]][e[1]], e[2] = 0), this.pickerValue = e, this._$emit("onChange");
        },
        _$emit: function _$emit(t) {
          var e = {
            label: this._getLabel(),
            value: this.pickerValue,
            cityCode: this._getCityCode()
          };
          this.$emit(t, e);
        },
        _getLabel: function _getLabel() {
          var t = this.provinceDataList[this.pickerValue[0]].label + "-" + this.cityDataList[this.pickerValue[1]].label + "-" + this.areaDataList[this.pickerValue[2]].label;
          return t;
        },
        _getCityCode: function _getCityCode() {
          return this.areaDataList[this.pickerValue[2]].value;
        }
      }
    };
    e.default = c;
  },
  a0f7: function a0f7(t, e, i) {
    "use strict";

    var a = function a() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        u = [];

    i.d(e, "a", function () {
      return a;
    }), i.d(e, "b", function () {
      return u;
    });
  },
  b082: function b082(t, e, i) {},
  e29c: function e29c(t, e, i) {
    "use strict";

    i.r(e);
    var a = i("96b8"),
        u = i.n(a);

    for (var n in a) {
      "default" !== n && function (t) {
        i.d(e, t, function () {
          return a[t];
        });
      }(n);
    }

    e["default"] = u.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/mpvue-citypicker/mpvueCityPicker-create-component', {
  'components/mpvue-citypicker/mpvueCityPicker-create-component': function componentsMpvueCitypickerMpvueCityPickerCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("6699"));
  }
}, [['components/mpvue-citypicker/mpvueCityPicker-create-component']]]);
});
require('components/mpvue-citypicker/mpvueCityPicker.js');
__wxRoute = 'components/mpvue-picker/mpvuePicker';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/mpvue-picker/mpvuePicker.js';

define('components/mpvue-picker/mpvuePicker.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/mpvue-picker/mpvuePicker"], {
  "3e73": function e73(e, i, l) {
    "use strict";

    l.r(i);
    var r = l("cc94"),
        t = l.n(r);

    for (var a in r) {
      "default" !== a && function (e) {
        l.d(i, e, function () {
          return r[e];
        });
      }(a);
    }

    i["default"] = t.a;
  },
  5620: function _(e, i, l) {
    "use strict";

    var r = l("7871"),
        t = l.n(r);
    t.a;
  },
  6691: function _(e, i, l) {
    "use strict";

    l.r(i);
    var r = l("f311"),
        t = l("3e73");

    for (var a in t) {
      "default" !== a && function (e) {
        l.d(i, e, function () {
          return t[e];
        });
      }(a);
    }

    l("5620");
    var u = l("2877"),
        h = Object(u["a"])(t["default"], r["a"], r["b"], !1, null, null, null);
    i["default"] = h.exports;
  },
  7871: function _(e, i, l) {},
  cc94: function cc94(e, i, l) {
    "use strict";

    function r(e, i, l) {
      return i in e ? Object.defineProperty(e, i, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[i] = l, e;
    }

    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = void 0;
    var t = {
      data: function data() {
        return {
          pickerChangeValue: [],
          pickerValue: [],
          pickerValueArrayChange: !0,
          modeChange: !1,
          pickerValueSingleArray: [],
          pickerValueHour: [],
          pickerValueMinute: [],
          pickerValueMulArray: [],
          pickerValueMulTwoOne: [],
          pickerValueMulTwoTwo: [],
          pickerValueMulThreeOne: [],
          pickerValueMulThreeTwo: [],
          pickerValueMulThreeThree: [],
          showPicker: !1
        };
      },
      props: {
        mode: {
          type: String,
          default: "selector"
        },
        pickerValueArray: {
          type: Array,
          default: function _default() {
            return [];
          }
        },
        pickerValueDefault: {
          type: Array,
          default: function _default() {
            return [];
          }
        },
        deepLength: {
          type: Number,
          default: 2
        },
        themeColor: String
      },
      watch: r({
        pickerValueArray: function pickerValueArray(e, i) {
          this.pickerValueArrayChange = !0;
        },
        mode: function mode(e, i) {
          this.modeChange = !0;
        }
      }, "pickerValueArray", function (e) {
        this.initPicker(e);
      }),
      methods: {
        initPicker: function initPicker(e) {
          var i = e;
          if (this.pickerValue = this.pickerValueDefault, "selector" === this.mode) this.pickerValueSingleArray = e;else if ("timeSelector" === this.mode) {
            this.modeChange = !1;

            for (var l = [], r = [], t = 0; t < 24; t++) {
              l.push({
                value: t,
                label: t > 9 ? "".concat(t, " 时") : "0".concat(t, " 时")
              });
            }

            for (var a = 0; a < 60; a++) {
              r.push({
                value: a,
                label: a > 9 ? "".concat(a, " 分") : "0".concat(a, " 分")
              });
            }

            this.pickerValueHour = l, this.pickerValueMinute = r;
          } else if ("multiSelector" === this.mode) this.pickerValueMulArray = e;else if ("multiLinkageSelector" === this.mode && 2 === this.deepLength) {
            for (var u = [], h = [], c = 0, n = i.length; c < n; c++) {
              u.push(i[c]);
            }

            if (2 === this.pickerValueDefault.length) for (var s = this.pickerValueDefault[0], o = 0, p = i[s].children.length; o < p; o++) {
              h.push(i[s].children[o]);
            } else for (var k = 0, V = i[0].children.length; k < V; k++) {
              h.push(i[0].children[k]);
            }
            this.pickerValueMulTwoOne = u, this.pickerValueMulTwoTwo = h;
          } else if ("multiLinkageSelector" === this.mode && 3 === this.deepLength) {
            for (var d = [], f = [], g = [], v = 0, m = i.length; v < m; v++) {
              d.push(i[v]);
            }

            if (this.pickerValueDefault = 3 === this.pickerValueDefault.length ? this.pickerValueDefault : [0, 0, 0], 3 === this.pickerValueDefault.length) {
              for (var T = this.pickerValueDefault[0], b = 0, M = i[T].children.length; b < M; b++) {
                f.push(i[T].children[b]);
              }

              for (var w = this.pickerValueDefault[1], A = 0, y = i[T].children[w].children.length; A < y; A++) {
                g.push(i[T].children[w].children[A]);
              }
            }

            this.pickerValueMulThreeOne = d, this.pickerValueMulThreeTwo = f, this.pickerValueMulThreeThree = g;
          }
        },
        show: function show() {
          var e = this;
          setTimeout(function () {
            e.pickerValueArrayChange || e.modeChange ? (e.initPicker(e.pickerValueArray), e.showPicker = !0, e.pickerValueArrayChange = !1, e.modeChange = !1) : e.showPicker = !0;
          }, 0);
        },
        maskClick: function maskClick() {
          this.pickerCancel();
        },
        pickerCancel: function pickerCancel() {
          this.showPicker = !1, this._initPickerVale();
          var e = {
            index: this.pickerValue,
            value: this._getPickerLabelAndValue(this.pickerValue, this.mode).value,
            label: this._getPickerLabelAndValue(this.pickerValue, this.mode).label
          };
          this.$emit("onCancel", e);
        },
        pickerConfirm: function pickerConfirm(e) {
          this.showPicker = !1, this._initPickerVale();
          var i = {
            index: this.pickerValue,
            value: this._getPickerLabelAndValue(this.pickerValue, this.mode).value,
            label: this._getPickerLabelAndValue(this.pickerValue, this.mode).label
          };
          this.$emit("onConfirm", i);
        },
        showPickerView: function showPickerView() {
          this.showPicker = !0;
        },
        pickerChange: function pickerChange(e) {
          this.pickerValue = e.mp.detail.value;
          var i = {
            index: this.pickerValue,
            value: this._getPickerLabelAndValue(this.pickerValue, this.mode).value,
            label: this._getPickerLabelAndValue(this.pickerValue, this.mode).label
          };
          this.$emit("onChange", i);
        },
        pickerChangeMul: function pickerChangeMul(e) {
          if (2 === this.deepLength) {
            var i = this.pickerValueArray,
                l = e.mp.detail.value;

            if (l[0] !== this.pickerValue[0]) {
              for (var r = [], t = 0, a = i[l[0]].children.length; t < a; t++) {
                r.push(i[l[0]].children[t]);
              }

              this.pickerValueMulTwoTwo = r, l[1] = 0;
            }

            this.pickerValue = l;
          } else if (3 === this.deepLength) {
            var u = this.pickerValueArray,
                h = e.mp.detail.value,
                c = [],
                n = [];

            if (h[0] !== this.pickerValue[0]) {
              this.pickerValueMulThreeTwo = [];

              for (var s = 0, o = u[h[0]].children.length; s < o; s++) {
                c.push(u[h[0]].children[s]);
              }

              for (var p = 0, k = u[h[0]].children[0].children.length; p < k; p++) {
                n.push(u[h[0]].children[0].children[p]);
              }

              h[1] = 0, h[2] = 0, this.pickerValueMulThreeTwo = c, this.pickerValueMulThreeThree = n;
            } else if (h[1] !== this.pickerValue[1]) {
              this.pickerValueMulThreeThree = [], c = this.pickerValueMulThreeTwo;

              for (var V = 0, d = u[h[0]].children[h[1]].children.length; V < d; V++) {
                n.push(u[h[0]].children[h[1]].children[V]);
              }

              h[2] = 0, this.pickerValueMulThreeThree = n;
            }

            this.pickerValue = h;
          }

          var f = {
            index: this.pickerValue,
            value: this._getPickerLabelAndValue(this.pickerValue, this.mode).value,
            label: this._getPickerLabelAndValue(this.pickerValue, this.mode).label
          };
          this.$emit("onChange", f);
        },
        _getPickerLabelAndValue: function _getPickerLabelAndValue(e, i) {
          var l,
              r = [];
          if ("selector" === i) l = this.pickerValueSingleArray[e].label, r.push(this.pickerValueSingleArray[e].value);else if ("timeSelector" === i) l = "".concat(this.pickerValueHour[e[0]].label, "-").concat(this.pickerValueMinute[e[1]].label), r.push(this.pickerValueHour[e[0]].value), r.push(this.pickerValueHour[e[1]].value);else if ("multiSelector" === i) for (var t = 0; t < e.length; t++) {
            t > 0 ? l += this.pickerValueMulArray[t][e[t]].label + (t === e.length - 1 ? "" : "-") : l = this.pickerValueMulArray[t][e[t]].label + "-", r.push(this.pickerValueMulArray[t][e[t]].value);
          } else "multiLinkageSelector" === i && (l = 2 === this.deepLength ? "".concat(this.pickerValueMulTwoOne[e[0]].label, "-").concat(this.pickerValueMulTwoTwo[e[1]].label) : "".concat(this.pickerValueMulThreeOne[e[0]].label, "-").concat(this.pickerValueMulThreeTwo[e[1]].label, "-").concat(this.pickerValueMulThreeThree[e[2]].label), 2 === this.deepLength ? (r.push(this.pickerValueMulTwoOne[e[0]].value), r.push(this.pickerValueMulTwoTwo[e[1]].value)) : (r.push(this.pickerValueMulThreeOne[e[0]].value), r.push(this.pickerValueMulThreeTwo[e[1]].value), r.push(this.pickerValueMulThreeThree[e[2]].value)));
          return {
            label: l,
            value: r
          };
        },
        _initPickerVale: function _initPickerVale() {
          0 === this.pickerValue.length && ("selector" === this.mode ? this.pickerValue = [0] : "multiSelector" === this.mode ? this.pickerValue = new Int8Array(this.pickerValueArray.length) : "multiLinkageSelector" === this.mode && 2 === this.deepLength ? this.pickerValue = [0, 0] : "multiLinkageSelector" === this.mode && 3 === this.deepLength && (this.pickerValue = [0, 0, 0]));
        }
      }
    };
    i.default = t;
  },
  f311: function f311(e, i, l) {
    "use strict";

    var r = function r() {
      var e = this,
          i = e.$createElement;
      e._self._c;
    },
        t = [];

    l.d(i, "a", function () {
      return r;
    }), l.d(i, "b", function () {
      return t;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/mpvue-picker/mpvuePicker-create-component', {
  'components/mpvue-picker/mpvuePicker-create-component': function componentsMpvuePickerMpvuePickerCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("6691"));
  }
}, [['components/mpvue-picker/mpvuePicker-create-component']]]);
});
require('components/mpvue-picker/mpvuePicker.js');
__wxRoute = 'components/nomore/nomore';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/nomore/nomore.js';

define('components/nomore/nomore.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/nomore/nomore"], {
  "0299": function _(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var u = {
      name: "tuiNomore",
      props: {
        visible: {
          type: Boolean,
          default: !1
        },
        bgcolor: {
          type: String,
          default: "#f1f1f1"
        },
        isDot: {
          type: Boolean,
          default: !1
        },
        text: {
          type: String,
          default: "没有更多了"
        }
      },
      data: function data() {
        return {
          dotText: "●"
        };
      }
    };
    n.default = u;
  },
  2538: function _(t, n, e) {
    "use strict";

    var u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        o = [];

    e.d(n, "a", function () {
      return u;
    }), e.d(n, "b", function () {
      return o;
    });
  },
  7580: function _(t, n, e) {},
  "93d0": function d0(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("2538"),
        o = e("9cb0");

    for (var r in o) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(r);
    }

    e("bad3");
    var a = e("2877"),
        f = Object(a["a"])(o["default"], u["a"], u["b"], !1, null, null, null);
    n["default"] = f.exports;
  },
  "9cb0": function cb0(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("0299"),
        o = e.n(u);

    for (var r in u) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(r);
    }

    n["default"] = o.a;
  },
  bad3: function bad3(t, n, e) {
    "use strict";

    var u = e("7580"),
        o = e.n(u);
    o.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/nomore/nomore-create-component', {
  'components/nomore/nomore-create-component': function componentsNomoreNomoreCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("93d0"));
  }
}, [['components/nomore/nomore-create-component']]]);
});
require('components/nomore/nomore.js');
__wxRoute = 'components/sticky/sticky';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/sticky/sticky.js';

define('components/sticky/sticky.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/sticky/sticky"], {
  "05ae": function ae(t, e, i) {
    "use strict";

    var n = i("dc35"),
        c = i.n(n);
    c.a;
  },
  3752: function _(t, e, i) {
    "use strict";

    (function (t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var i = {
        name: "tuiSticky",
        props: {
          scrollTop: {
            type: Number
          },
          stickyTop: {
            type: Number,
            default: 0
          },
          stickyHeight: {
            type: String,
            default: "auto"
          },
          bgColor: {
            type: String,
            default: "none"
          }
        },
        watch: {
          scrollTop: function scrollTop(t, e) {
            this.updateStickyChange();
          }
        },
        onReady: function onReady() {
          this.updateScrollChange();
        },
        data: function data() {
          return {
            timer: null,
            top: 0,
            height: 0,
            isFixed: !1
          };
        },
        methods: {
          updateStickyChange: function updateStickyChange() {
            var t = this.top,
                e = this.height,
                i = this.scrollTop,
                n = this.stickyTop;
            this.isFixed = i + n >= t && i + n < t + e;
          },
          updateScrollChange: function updateScrollChange() {
            var e = this;
            this.timer && (clearTimeout(this.timer), this.timer = null), this.timer = setTimeout(function () {
              var i = ".tui-sticky-class",
                  n = t.createSelectorQuery().in(e);
              n.select(i).boundingClientRect(function (t) {
                t && (e.top = t.top + (e.scrollTop || 0), e.height = t.height);
              }).exec();
            }, 0);
          }
        }
      };
      e.default = i;
    }).call(this, i("6e42")["default"]);
  },
  4755: function _(t, e, i) {
    "use strict";

    var n = function n() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        c = [];

    i.d(e, "a", function () {
      return n;
    }), i.d(e, "b", function () {
      return c;
    });
  },
  a94f: function a94f(t, e, i) {
    "use strict";

    i.r(e);
    var n = i("4755"),
        c = i("cb0c");

    for (var u in c) {
      "default" !== u && function (t) {
        i.d(e, t, function () {
          return c[t];
        });
      }(u);
    }

    i("05ae");
    var o = i("2877"),
        r = Object(o["a"])(c["default"], n["a"], n["b"], !1, null, null, null);
    e["default"] = r.exports;
  },
  cb0c: function cb0c(t, e, i) {
    "use strict";

    i.r(e);
    var n = i("3752"),
        c = i.n(n);

    for (var u in n) {
      "default" !== u && function (t) {
        i.d(e, t, function () {
          return n[t];
        });
      }(u);
    }

    e["default"] = c.a;
  },
  dc35: function dc35(t, e, i) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/sticky/sticky-create-component', {
  'components/sticky/sticky-create-component': function componentsStickyStickyCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("a94f"));
  }
}, [['components/sticky/sticky-create-component']]]);
});
require('components/sticky/sticky.js');
__wxRoute = 'components/tips/tips';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/tips/tips.js';

define('components/tips/tips.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/tips/tips"], {
  1002: function _(t, e, n) {},
  "213d": function d(t, e, n) {
    "use strict";

    var u = function u() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        i = [];

    n.d(e, "a", function () {
      return u;
    }), n.d(e, "b", function () {
      return i;
    });
  },
  "43a9": function a9(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("213d"),
        i = n("f048");

    for (var a in i) {
      "default" !== a && function (t) {
        n.d(e, t, function () {
          return i[t];
        });
      }(a);
    }

    n("d879");
    var r = n("2877"),
        f = Object(r["a"])(i["default"], u["a"], u["b"], !1, null, null, null);
    e["default"] = f.exports;
  },
  d879: function d879(t, e, n) {
    "use strict";

    var u = n("1002"),
        i = n.n(u);
    i.a;
  },
  e6ec: function e6ec(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var u = {
      name: "tuiTips",
      props: {
        fixed: {
          type: Boolean,
          default: !0
        },
        imgUrl: {
          type: String,
          default: ""
        },
        imgWidth: {
          type: Number,
          default: 200
        },
        imgHeight: {
          type: Number,
          default: 200
        },
        btnWidth: {
          type: Number,
          default: 200
        },
        btnText: {
          type: String,
          default: ""
        }
      },
      methods: {
        handleClick: function handleClick(t) {
          this.$emit("click", {});
        }
      }
    };
    e.default = u;
  },
  f048: function f048(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("e6ec"),
        i = n.n(u);

    for (var a in u) {
      "default" !== a && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(a);
    }

    e["default"] = i.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/tips/tips-create-component', {
  'components/tips/tips-create-component': function componentsTipsTipsCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("43a9"));
  }
}, [['components/tips/tips-create-component']]]);
});
require('components/tips/tips.js');
__wxRoute = 'components/top-dropdown/top-dropdown';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/top-dropdown/top-dropdown.js';

define('components/top-dropdown/top-dropdown.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/top-dropdown/top-dropdown"], {
  "16f2": function f2(t, e, n) {
    "use strict";

    (function (t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var n = {
        name: "tuiTopDropdown",
        props: {
          mask: {
            type: Boolean,
            default: !0
          },
          show: {
            type: Boolean,
            default: !1
          },
          bgcolor: {
            type: String,
            default: "#f2f2f2"
          },
          paddingbtm: {
            type: Number,
            default: 0
          },
          height: {
            type: Number,
            default: 580
          },
          translatey: {
            type: Number,
            default: 0
          }
        },
        methods: {
          handleClose: function handleClose() {
            this.show && this.$emit("close", {});
          },
          px: function px(e) {
            return t.upx2px(e) + "px";
          }
        }
      };
      e.default = n;
    }).call(this, n("6e42")["default"]);
  },
  "64b0": function b0(t, e, n) {
    "use strict";

    var a = n("7f26"),
        o = n.n(a);
    o.a;
  },
  7683: function _(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("ef02"),
        o = n("aa95");

    for (var u in o) {
      "default" !== u && function (t) {
        n.d(e, t, function () {
          return o[t];
        });
      }(u);
    }

    n("64b0");
    var r = n("2877"),
        f = Object(r["a"])(o["default"], a["a"], a["b"], !1, null, null, null);
    e["default"] = f.exports;
  },
  "7f26": function f26(t, e, n) {},
  aa95: function aa95(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("16f2"),
        o = n.n(a);

    for (var u in a) {
      "default" !== u && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(u);
    }

    e["default"] = o.a;
  },
  ef02: function ef02(t, e, n) {
    "use strict";

    var a = function a() {
      var t = this,
          e = t.$createElement,
          n = (t._self._c, t.px(t.height)),
          a = t.px(t.paddingbtm),
          o = t.px(t.translatey);
      t.$mp.data = Object.assign({}, {
        $root: {
          m0: n,
          m1: a,
          m2: o
        }
      });
    },
        o = [];

    n.d(e, "a", function () {
      return a;
    }), n.d(e, "b", function () {
      return o;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/top-dropdown/top-dropdown-create-component', {
  'components/top-dropdown/top-dropdown-create-component': function componentsTopDropdownTopDropdownCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("7683"));
  }
}, [['components/top-dropdown/top-dropdown-create-component']]]);
});
require('components/top-dropdown/top-dropdown.js');
__wxRoute = 'components/yq-avatar/yq-avatar';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/yq-avatar/yq-avatar.js';

define('components/yq-avatar/yq-avatar.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/yq-avatar/yq-avatar"], {
  "074a": function a(t, i, e) {},
  1252: function _(t, i, e) {
    "use strict";

    var s = e("074a"),
        h = e.n(s);
    h.a;
  },
  "244d": function d(t, i, e) {
    "use strict";

    e.r(i);
    var s = e("d296"),
        h = e.n(s);

    for (var a in s) {
      "default" !== a && function (t) {
        e.d(i, t, function () {
          return s[t];
        });
      }(a);
    }

    i["default"] = h.a;
  },
  "5cc9": function cc9(t, i, e) {
    "use strict";

    e.r(i);
    var s = e("aa47"),
        h = e("244d");

    for (var a in h) {
      "default" !== a && function (t) {
        e.d(i, t, function () {
          return h[t];
        });
      }(a);
    }

    e("1252");
    var n = e("2877"),
        r = Object(n["a"])(h["default"], s["a"], s["b"], !1, null, null, null);
    i["default"] = r.exports;
  },
  aa47: function aa47(t, i, e) {
    "use strict";

    var s = function s() {
      var t = this,
          i = t.$createElement,
          e = (t._self._c, t.__get_style([t.imgStyle]));
      t.$mp.data = Object.assign({}, {
        $root: {
          s0: e
        }
      });
    },
        h = [];

    e.d(i, "a", function () {
      return s;
    }), e.d(i, "b", function () {
      return h;
    });
  },
  d296: function d296(t, i, e) {
    "use strict";

    (function (t) {
      Object.defineProperty(i, "__esModule", {
        value: !0
      }), i.default = void 0;
      var s = h(e("a34a"));

      function h(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      function a(t, i, e, s, h, a, n) {
        try {
          var r = t[a](n),
              o = r.value;
        } catch (l) {
          return void e(l);
        }

        r.done ? i(o) : Promise.resolve(o).then(s, h);
      }

      function n(t) {
        return function () {
          var i = this,
              e = arguments;
          return new Promise(function (s, h) {
            var n = t.apply(i, e);

            function r(t) {
              a(n, s, h, r, o, "next", t);
            }

            function o(t) {
              a(n, s, h, r, o, "throw", t);
            }

            r(void 0);
          });
        };
      }

      var r = 50,
          o = {
        name: "yq-avatar",
        data: function data() {
          return {
            cvsStyleHeight: "0px",
            styleDisplay: "none",
            styleTop: "-10000px",
            prvTop: "-10000px",
            imgStyle: {},
            selStyle: {},
            showOper: !0,
            imgSrc: {
              imgSrc: ""
            },
            btnWidth: "19%",
            btnDsp: "flex"
          };
        },
        watch: {
          avatarSrc: function avatarSrc() {
            this.imgSrc.imgSrc = this.avatarSrc;
          }
        },
        props: {
          avatarSrc: "",
          avatarStyle: "",
          selWidth: "",
          selHeight: "",
          expWidth: "",
          expHeight: "",
          minScale: "",
          maxScale: "",
          canScale: "",
          canRotate: "",
          lockWidth: "",
          lockHeight: "",
          stretch: "",
          lock: "",
          noTab: "",
          inner: "",
          quality: "",
          index: ""
        },
        created: function created() {
          var i = this;
          this.ctxCanvas = t.createCanvasContext("avatar-canvas", this), this.ctxCanvasOper = t.createCanvasContext("oper-canvas", this), this.ctxCanvasPrv = t.createCanvasContext("prv-canvas", this), this.qlty = parseInt(this.quality) || .9, this.imgSrc.imgSrc = this.avatarSrc, this.letRotate = "false" === this.canRotate || "true" === this.inner ? 0 : 1, this.letScale = "false" === this.canScale ? 0 : 1, this.isin = "true" === this.inner ? 1 : 0, this.indx = this.index || void 0, this.mnScale = this.minScale || .3, this.mxScale = this.maxScale || 4, this.noBar = "true" === this.noTab ? 1 : 0, this.stc = this.stretch, this.lck = this.lock, this.isin ? (this.btnWidth = "24%", this.btnDsp = "none") : (this.btnWidth = "19%", this.btnDsp = "flex"), this.noBar ? (this.moreHeight = 0, this.fWindowResize()) : t.showTabBar({
            complete: function complete(t) {
              i.moreHeight = "showTabBar:ok" === t.errMsg ? 50 : 0, i.fWindowResize();
            }
          });
        },
        methods: {
          fWindowResize: function fWindowResize() {
            var i = t.getSystemInfoSync();
            this.platform = i.platform, this.pixelRatio = i.pixelRatio, this.windowWidth = i.windowWidth, "android" === this.platform ? (this.windowHeight = i.screenHeight + i.statusBarHeight, this.cvsStyleHeight = this.windowHeight - r + "px") : (this.windowHeight = i.windowHeight + this.moreHeight, this.cvsStyleHeight = this.windowHeight - r + 6 + "px"), this.pxRatio = this.windowWidth / 750;
            var e = this.avatarStyle;

            if (e && !0 !== e && (e = e.trim())) {
              e = e.split(";");
              var s = {},
                  h = !0,
                  a = !1,
                  n = void 0;

              try {
                for (var o, l = e[Symbol.iterator](); !(h = (o = l.next()).done); h = !0) {
                  var c = o.value;

                  if (c) {
                    if (c = c.trim().split(":"), c[1].indexOf("upx") >= 0) {
                      var p = c[1].trim().split(" ");

                      for (var d in p) {
                        p[d] && p[d].indexOf("upx") >= 0 && (p[d] = parseFloat(p[d]) * this.pxRatio + "px");
                      }

                      c[1] = p.join(" ");
                    }

                    s[c[0].trim()] = c[1].trim();
                  }
                }
              } catch (f) {
                a = !0, n = f;
              } finally {
                try {
                  h || null == l.return || l.return();
                } finally {
                  if (a) throw n;
                }
              }

              this.imgStyle = s;
            }

            this.expWidth && (this.exportWidth = this.expWidth.indexOf("upx") >= 0 ? parseInt(this.expWidth) * this.pxRatio : parseInt(this.expWidth)), this.expHeight && (this.exportHeight = this.expHeight.indexOf("upx") >= 0 ? parseInt(this.expHeight) * this.pxRatio : parseInt(this.expHeight)), "flex" === this.styleDisplay && this.fDrawInit(!0), this.fHideImg();
          },
          fSelect: function fSelect() {
            var i = this;
            this.fSelecting || (this.fSelecting = !0, setTimeout(function () {
              i.fSelecting = !1;
            }, 500), t.chooseImage({
              count: 1,
              sizeType: ["compressed"],
              sourceType: ["album", "camera"],
              success: function success(e) {
                t.showLoading({
                  mask: !0
                });
                var s = i.imgPath = e.tempFilePaths[0];
                t.getImageInfo({
                  src: s,
                  success: function success(e) {
                    if (i.imgWidth = e.width, i.imgHeight = e.height, i.path = s, !i.hasSel) {
                      var h = i.selStyle || {};
                      if (!i.selWidth || !i.selHeight) return void t.showModal({
                        title: "裁剪框的宽或高没有设置",
                        showCancel: !1
                      });
                      var a = i.selWidth.indexOf("upx") >= 0 ? parseInt(i.selWidth) * i.pxRatio : parseInt(i.selWidth),
                          n = i.selHeight.indexOf("upx") >= 0 ? parseInt(i.selHeight) * i.pxRatio : parseInt(i.selHeight);
                      h.width = a + "px", h.height = n + "px", h.top = (i.windowHeight - n - r) / 2 + "px", h.left = (i.windowWidth - a) / 2 + "px", i.selStyle = h;
                    }

                    i.noBar ? i.fDrawInit(!0) : t.hideTabBar({
                      complete: function complete() {
                        i.fDrawInit(!0);
                      }
                    });
                  },
                  fail: function fail() {
                    t.showToast({
                      title: "error3",
                      duration: 2e3
                    });
                  },
                  complete: function complete() {
                    t.hideLoading();
                  }
                });
              }
            }));
          },
          fUpload: function fUpload() {
            var i = this;

            if (!this.fUploading) {
              this.fUploading = !0, setTimeout(function () {
                i.fUploading = !1;
              }, 1e3);
              var e = this.selStyle,
                  s = parseInt(e.left),
                  h = parseInt(e.top),
                  a = parseInt(e.width),
                  n = parseInt(e.height),
                  r = this.exportWidth || a,
                  o = this.exportHeight || n;
              t.showLoading({
                mask: !0
              }), this.styleDisplay = "none", this.styleTop = "-10000px", this.hasSel = !1, this.fHideImg(), t.canvasToTempFilePath({
                x: s,
                y: h,
                width: a,
                height: n,
                destWidth: r,
                destHeight: o,
                canvasId: "avatar-canvas",
                fileType: "png",
                quality: this.qlty,
                success: function success(t) {
                  t = t.tempFilePath, i.$emit("upload", {
                    avatar: i.imgSrc,
                    path: t,
                    index: i.indx,
                    data: i.rtn
                  });
                },
                fail: function fail(i) {
                  t.showToast({
                    title: "error1",
                    duration: 2e3
                  });
                },
                complete: function complete() {
                  t.hideLoading(), i.noBar || t.showTabBar();
                }
              }, this);
            }
          },
          fPrvUpload: function fPrvUpload() {
            var i = this;

            if (!this.fPrvUploading) {
              this.fPrvUploading = !0, setTimeout(function () {
                i.fPrvUploading = !1;
              }, 1e3);
              var e = this.selStyle,
                  s = (parseInt(e.width), parseInt(e.height), this.prvX),
                  h = this.prvY,
                  a = this.prvWidth,
                  n = this.prvHeight,
                  r = this.exportWidth || a,
                  o = this.exportHeight || n;
              t.showLoading({
                mask: !0
              }), this.styleDisplay = "none", this.styleTop = "-10000px", this.hasSel = !1, this.fHideImg(), t.canvasToTempFilePath({
                x: s,
                y: h,
                width: a,
                height: n,
                destWidth: r,
                destHeight: o,
                canvasId: "prv-canvas",
                fileType: "png",
                quality: this.qlty,
                success: function success(t) {
                  t = t.tempFilePath, i.$emit("upload", {
                    avatar: i.imgSrc,
                    path: t,
                    index: i.indx,
                    data: i.rtn
                  });
                },
                fail: function fail() {
                  t.showToast({
                    title: "error_prv",
                    duration: 2e3
                  });
                },
                complete: function complete() {
                  t.hideLoading(), i.noBar || t.showTabBar();
                }
              }, this);
            }
          },
          fDrawInit: function fDrawInit() {
            var t = this,
                i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                e = this.windowWidth,
                s = this.windowHeight,
                h = this.imgWidth,
                a = this.imgHeight,
                n = h / a,
                o = e - 40,
                l = s - r - 80,
                c = (this.pixelRatio, parseInt(this.selStyle.width)),
                p = parseInt(this.selStyle.height);

            switch (this.fixWidth = 0, this.fixHeight = 0, this.lckWidth = 0, this.lckHeight = 0, this.stc) {
              case "x":
                this.fixWidth = 1;
                break;

              case "y":
                this.fixHeight = 1;
                break;

              case "long":
                n > 1 ? this.fixWidth = 1 : this.fixHeight = 1;
                break;

              case "short":
                n > 1 ? this.fixHeight = 1 : this.fixWidth = 1;
                break;

              case "longSel":
                c > p ? this.fixWidth = 1 : this.fixHeight = 1;
                break;

              case "shortSel":
                c > p ? this.fixHeight = 1 : this.fixWidth = 1;
                break;
            }

            switch (this.lck) {
              case "x":
                this.lckWidth = 1;
                break;

              case "y":
                this.lckHeight = 1;
                break;

              case "long":
                n > 1 ? this.lckWidth = 1 : this.lckHeight = 1;
                break;

              case "short":
                n > 1 ? this.lckHeight = 1 : this.lckWidth = 1;
                break;

              case "longSel":
                c > p ? this.lckWidth = 1 : this.lckHeight = 1;
                break;

              case "shortSel":
                c > p ? this.lckHeight = 1 : this.lckWidth = 1;
                break;
            }

            this.fixWidth ? (o = c, l = o / n) : this.fixHeight ? (l = p, o = l * n) : n < 1 ? a < l ? (o = h, l = a) : (l = l, o = l * n) : h < o ? (o = h, l = a) : (o = o, l = o / n), this.isin && (this.scaleWidth = 0, this.scaleHeight = 0, o < c && (o = c, l = o / n, this.lckHeight = 0), l < p && (l = p, o = l * n, this.lckWidth = 0)), this.scaleSize = 1, this.rotateDeg = 0, this.posWidth = (e - o) / 2, this.posHeight = (s - l - r) / 2, this.useWidth = o, this.useHeight = l;
            var d = this.selStyle,
                f = parseInt(d.left),
                u = parseInt(d.top),
                g = parseInt(d.width),
                v = parseInt(d.height),
                x = (this.canvas, this.canvasOper, this.ctxCanvas),
                w = this.ctxCanvasOper;
            w.setLineWidth(3), w.setStrokeStyle("grey"), w.setGlobalAlpha(.4), w.setFillStyle("black"), w.strokeRect(f, u, g, v), w.fillRect(0, 0, this.windowWidth, u), w.fillRect(0, u, f, v), w.fillRect(0, u + v, this.windowWidth, this.windowHeight - v - u - r), w.fillRect(f + g, u, this.windowWidth - g - f, v), w.setStrokeStyle("red"), w.moveTo(f + 20, u), w.lineTo(f, u), w.lineTo(f, u + 20), w.moveTo(f + g - 20, u), w.lineTo(f + g, u), w.lineTo(f + g, u + 20), w.moveTo(f + 20, u + v), w.lineTo(f, u + v), w.lineTo(f, u + v - 20), w.moveTo(f + g - 20, u + v), w.lineTo(f + g, u + v), w.lineTo(f + g, u + v - 20), w.stroke(), w.draw(!1, function () {
              i && (t.styleDisplay = "flex", t.styleTop = "0", x.setFillStyle("black"), t.fDrawImage());
            }), this.$emit("avtinit");
          },
          fDrawImage: function fDrawImage() {
            var t = Date.now();

            if (!(t - this.drawTm < 20)) {
              this.drawTm = t;
              var i = this.ctxCanvas;
              i.fillRect(0, 0, this.windowWidth, this.windowHeight - r), i.translate(this.posWidth + this.useWidth / 2, this.posHeight + this.useHeight / 2), i.scale(this.scaleSize, this.scaleSize), i.rotate(this.rotateDeg * Math.PI / 180), i.drawImage(this.imgPath, -this.useWidth / 2, -this.useHeight / 2, this.useWidth, this.useHeight), i.draw(!1);
            }
          },
          fHideImg: function fHideImg() {
            this.prvImg = "", this.prvTop = "-10000px", this.showOper = !0, this.prvImgData = null, this.target = null;
          },
          fClose: function fClose() {
            this.styleDisplay = "none", this.styleTop = "-10000px", this.hasSel = !1, this.fHideImg(), this.noBar || t.showTabBar();
          },
          fPreview: function fPreview() {
            var i = this;

            if (!this.fPreviewing) {
              this.fPreviewing = !0, setTimeout(function () {
                i.fPreviewing = !1;
              }, 1e3);
              var e = this.selStyle,
                  s = parseInt(e.left),
                  h = parseInt(e.top),
                  a = parseInt(e.width),
                  n = parseInt(e.height);
              t.showLoading({
                mask: !0
              }), t.canvasToTempFilePath({
                x: s,
                y: h,
                width: a,
                height: n,
                canvasId: "avatar-canvas",
                fileType: "png",
                quality: this.qlty,
                success: function success(t) {
                  i.prvImgTmp = t = t.tempFilePath;
                  var e = i.ctxCanvasPrv,
                      s = i.windowWidth,
                      h = parseInt(i.cvsStyleHeight),
                      a = parseInt(i.selStyle.width),
                      n = parseInt(i.selStyle.height),
                      r = s - 40,
                      o = h - 80,
                      l = r / a,
                      c = n * l;
                  c < o ? (a = r, n = c) : (l = o / n, a *= l, n = o), e.setFillStyle("black"), e.fillRect(0, 0, s, h), i.prvX = s = (s - a) / 2, i.prvY = h = (h - n) / 2, i.prvWidth = a, i.prvHeight = n, e.drawImage(t, s, h, a, n), e.draw(!1), "android" != i.platform && (i.showOper = !1), i.prvTop = "0";
                },
                fail: function fail() {
                  t.showToast({
                    title: "error2",
                    duration: 2e3
                  });
                },
                complete: function complete() {
                  t.hideLoading();
                }
              }, this);
            }
          },
          fChooseImg: function fChooseImg() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;

            if (i) {
              var s = i.selWidth,
                  h = i.selHeight,
                  a = i.expWidth,
                  n = i.expHeight,
                  o = i.quality,
                  l = i.canRotate,
                  c = i.canScale,
                  p = i.minScale,
                  d = i.maxScale,
                  f = i.stretch,
                  u = i.inner,
                  g = i.lock;
              a && (this.exportWidth = a.indexOf("upx") >= 0 ? parseInt(a) * this.pxRatio : parseInt(a)), n && (this.exportHeight = n.indexOf("upx") >= 0 ? parseInt(n) * this.pxRatio : parseInt(n)), this.letRotate = "false" === l ? 0 : 1, this.letScale = "false" === c ? 0 : 1, this.qlty = parseInt(o) || .9, this.mnScale = p || .3, this.mxScale = d || 4, this.stc = f, this.isin = "true" === u ? 1 : 0, this.lck = g, this.isin ? (this.btnWidth = "24%", this.btnDsp = "none") : (this.btnWidth = "19%", this.btnDsp = "flex"), s && h && (s = s.indexOf("upx") >= 0 ? parseInt(s) * this.pxRatio : parseInt(s), h = h.indexOf("upx") >= 0 ? parseInt(h) * this.pxRatio : parseInt(h), this.selStyle.width = s + "px", this.selStyle.height = h + "px", this.selStyle.top = (this.windowHeight - h - r) / 2 + "px", this.selStyle.left = (this.windowWidth - s) / 2 + "px", this.hasSel = !0);
            }

            this.rtn = e, this.indx = t, this.fSelect();
          },
          fRotate: function fRotate() {
            var t = this;

            if ("android" === this.platform) {
              if (this.fRotateing) return;
              this.fRotateing = !0, setTimeout(function () {
                t.fRotateing = !1;
              }, 500);
            }

            this.rotateDeg += 90 - this.rotateDeg % 90, this.fDrawImage();
          },
          fStart: function fStart(t) {
            var i = t.touches,
                e = i[0],
                s = i[1];

            if (this.touch0 = e, this.touch1 = s, s) {
              var h = s.x - e.x,
                  a = s.y - e.y;
              this.fgDistance = Math.sqrt(h * h + a * a);
            }
          },
          fMove: function fMove(t) {
            var i = t.touches,
                e = i[0],
                s = i[1];

            if (s) {
              var h = s.x - e.x,
                  a = s.y - e.y,
                  n = Math.sqrt(h * h + a * a),
                  r = .005 * (n - this.fgDistance),
                  o = this.scaleSize + r;

              do {
                if (!this.letScale) break;
                if (o < this.mnScale) break;
                if (o > this.mxScale) break;

                if (this.isin) {
                  var l = this.useWidth * o,
                      c = this.useHeight * o,
                      p = this.posWidth + this.useWidth / 2,
                      d = this.posHeight + this.useHeight / 2,
                      f = p - l / 2,
                      u = d - c / 2,
                      g = f + l,
                      v = u + c,
                      x = parseInt(this.selStyle.left),
                      w = parseInt(this.selStyle.top),
                      m = parseInt(this.selStyle.width),
                      y = parseInt(this.selStyle.height);
                  if (x < f || x + m > g || w < u || w + y > v) break;
                  this.scaleWidth = (this.useWidth - l) / 2, this.scaleHeight = (this.useHeight - c) / 2;
                }

                this.scaleSize = o;
              } while (0);

              this.fgDistance = n, s.x !== e.x && this.letRotate && (h = (this.touch1.y - this.touch0.y) / (this.touch1.x - this.touch0.x), a = (s.y - e.y) / (s.x - e.x), this.rotateDeg += 180 * Math.atan((a - h) / (1 + h * a)) / Math.PI, this.touch0 = e, this.touch1 = s), this.fDrawImage();
            } else if (this.touch0) {
              var S = e.x - this.touch0.x,
                  H = e.y - this.touch0.y,
                  I = this.posWidth + S,
                  W = this.posHeight + H;

              if (this.isin) {
                var b = this.useWidth * this.scaleSize,
                    k = this.useHeight * this.scaleSize,
                    T = I + this.useWidth / 2,
                    R = W + this.useHeight / 2,
                    D = T - b / 2,
                    P = R - k / 2,
                    C = D + b,
                    M = P + k,
                    O = parseInt(this.selStyle.left),
                    q = parseInt(this.selStyle.top),
                    B = parseInt(this.selStyle.width),
                    L = parseInt(this.selStyle.height);
                !this.lckWidth && Math.abs(S) < 100 && (O >= D && O + B <= C ? this.posWidth = I : O < D ? this.posWidth = O - this.scaleWidth : O + B > C && (this.posWidth = O - (b - B) - this.scaleWidth)), !this.lckHeight && Math.abs(H) < 100 && (q >= P && q + L <= M ? this.posHeight = W : q < P ? this.posHeight = q - this.scaleHeight : q + L > M && (this.posHeight = q - (k - L) - this.scaleHeight));
              } else Math.abs(S) < 100 && !this.lckWidth && (this.posWidth = I), Math.abs(H) < 100 && !this.lckHeight && (this.posHeight = W);

              this.touch0 = e, this.fDrawImage();
            }
          },
          fEnd: function fEnd(t) {
            var i = t.touches,
                e = i && i[0];
            i && i[1];
            e ? this.touch0 = e : (this.touch0 = null, this.touch1 = null);
          },
          fGetImgData: function fGetImgData() {
            var i = this;
            return new Promise(function (e, s) {
              var h = i.prvX,
                  a = i.prvY,
                  n = i.prvWidth,
                  r = i.prvHeight;
              h *= i.pixelRatio, a *= i.pixelRatio, n *= i.pixelRatio, r *= i.pixelRatio, t.canvasGetImageData({
                canvasId: "prv-canvas",
                x: h,
                y: a,
                width: n,
                height: r,
                success: function success(t) {
                  e(t.data);
                },
                fail: function fail(t) {
                  s(t);
                }
              }, i);
            });
          },
          fColorChange: function () {
            var i = n(s.default.mark(function i(e) {
              var h, a, n, r, o, l, c, p, d, f, u, g, v, x, w, m, y, S, H, I, W, b, k, T, R, D, P;
              return s.default.wrap(function (i) {
                while (1) {
                  switch (i.prev = i.next) {
                    case 0:
                      if (h = Date.now(), !(h - this.prvTm < 100)) {
                        i.next = 3;
                        break;
                      }

                      return i.abrupt("return");

                    case 3:
                      if (this.prvTm = h, t.showLoading({
                        mask: !0
                      }), this.prvImgData) {
                        i.next = 11;
                        break;
                      }

                      return i.next = 8, this.fGetImgData().catch(function (i) {
                        t.showToast({
                          title: "error_read",
                          duration: 2e3
                        });
                      });

                    case 8:
                      if (this.prvImgData = i.sent) {
                        i.next = 10;
                        break;
                      }

                      return i.abrupt("return");

                    case 10:
                      this.target = new Uint8ClampedArray(this.prvImgData.length);

                    case 11:
                      if (a = this.prvImgData, n = this.target, r = e.detail.value, 0 === r) n = a;else for (r = (r + 100) / 200, r < .005 && (r = 0), r > .995 && (r = 1), W = a.length - 1; W >= 0; W -= 4) {
                        o = a[W - 3] / 255, l = a[W - 2] / 255, c = a[W - 1] / 255, m = Math.max(o, l, c), w = Math.min(o, l, c), g = m - w, m === w ? d = 0 : m === o && l >= c ? d = (l - c) / g * 60 : m === o && l < c ? d = (l - c) / g * 60 + 360 : m === l ? d = (c - o) / g * 60 + 120 : m === c && (d = (o - l) / g * 60 + 240), u = (m + w) / 2, 0 === u || m === w ? f = 0 : 0 < u && u <= .5 ? f = g / (2 * u) : u > .5 && (f = g / (2 - 2 * u)), a[W] && (p = a[W]), r < .5 ? f = f * r / .5 : r > .5 && (f = 2 * f + 2 * r - f * r / .5 - 1), 0 === f ? o = l = c = Math.round(255 * u) : (u < .5 ? x = u * (1 + f) : u >= .5 && (x = u + f - u * f), v = 2 * u - x, y = d / 360, S = y + 1 / 3, H = y, I = y - 1 / 3, b = function b(t) {
                          return t < 0 ? t + 1 : t > 1 ? t - 1 : t;
                        }, k = function k(t) {
                          return t < 1 / 6 ? v + 6 * (x - v) * t : t >= 1 / 6 && t < .5 ? x : t >= .5 && t < 2 / 3 ? v + 6 * (x - v) * (2 / 3 - t) : v;
                        }, o = S = Math.round(255 * k(b(S))), l = H = Math.round(255 * k(b(H))), c = I = Math.round(255 * k(b(I)))), p && (n[W] = p), n[W - 3] = o, n[W - 2] = l, n[W - 1] = c;
                      }
                      T = this.prvX, R = this.prvY, D = this.prvWidth, P = this.prvHeight, this.ctxCanvasPrv.setFillStyle("black"), this.ctxCanvasPrv.fillRect(T, R, D, P), this.ctxCanvasPrv.draw(!0), T *= this.pixelRatio, R *= this.pixelRatio, D *= this.pixelRatio, P *= this.pixelRatio, t.canvasPutImageData({
                        canvasId: "prv-canvas",
                        x: T,
                        y: R,
                        width: D,
                        height: P,
                        data: n,
                        fail: function fail() {
                          t.showToast({
                            title: "error_put",
                            duration: 2e3
                          });
                        },
                        complete: function complete() {
                          t.hideLoading();
                        }
                      }, this);

                    case 22:
                    case "end":
                      return i.stop();
                  }
                }
              }, i, this);
            }));

            function e(t) {
              return i.apply(this, arguments);
            }

            return e;
          }(),
          btop: function btop(t) {
            return new Promise(function (i, e) {
              var s = t.split(","),
                  h = s[0].match(/:(.*?);/)[1],
                  a = atob(s[1]),
                  n = a.length,
                  r = new Uint8Array(n);

              while (n--) {
                r[n] = a.charCodeAt(n);
              }

              return i((window.URL || window.webkitURL).createObjectURL(new Blob([r], {
                type: h
              })));
            });
          }
        }
      };
      i.default = o;
    }).call(this, e("6e42")["default"]);
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/yq-avatar/yq-avatar-create-component', {
  'components/yq-avatar/yq-avatar-create-component': function componentsYqAvatarYqAvatarCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("5cc9"));
  }
}, [['components/yq-avatar/yq-avatar-create-component']]]);
});
require('components/yq-avatar/yq-avatar.js');

__wxRoute = 'pages/home/home';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/home/home.js';

define('pages/home/home.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/home"],{1350:function(t,e,a){"use strict";a.r(e);var o=a("17d1"),n=a.n(o);for(var i in o)"default"!==i&&function(t){a.d(e,t,function(){return o[t]})}(i);e["default"]=n.a},"17d1":function(t,e,a){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,i=s(a("a34a"));s(a("66fd"));function s(t){return t&&t.__esModule?t:{default:t}}function r(t,e,a,o,n,i,s){try{var r=t[i](s),u=r.value}catch(c){return void a(c)}r.done?e(u):Promise.resolve(u).then(o,n)}function u(t){return function(){var e=this,a=arguments;return new Promise(function(o,n){var i=t.apply(e,a);function s(t){r(i,o,n,s,u,"next",t)}function u(t){r(i,o,n,s,u,"throw",t)}s(void 0)})}}var c={name:"basics",data:function(){return{modalName:!1,myList:[],isLoad:!1,cardCur:0,swiperList:[],getTaskList:[],dotStyle:!1,towerStart:0,direction:"",form:{sort_1:0,sort_2:0,page:1,size:5},city:"定位中",latitude:"",longitude:"",seller:!1}},filters:{km:function(t){return null!=t?(Number(t)/1e3).toFixed(2)+"km":""}},methods:{getUserInfo:function(e){console.log(t(e," at pages\\home\\home.vue:141")),o.login({provider:"weixin",success:function(t){if(void 0==e.detail.iv)return o.showToast({icon:"none",mask:!0,title:"授权失败！"}),void(n.modalName=!0);var a={iv:e.detail.iv,code:t.code,encryptedData:e.detail.encryptedData};n.$api.postWithData(n.api.register,a,function(t){0==t.code?(n.modalName=!0,o.showToast({icon:"none",mask:!0,title:"注册失败"})):(n.modalName=!1,o.setStorageSync("unionid",t.data.member.unionid),o.setStorageSync("openid",t.data.member.openid),o.setStorageSync("seller_id",t.data.seller_manager.seller_id),o.setStorageSync("uid",t.data.member.uid),o.setStorageSync("nickname",t.data.member.nickname),o.setStorageSync("headimg",t.data.member.headimg),o.setStorageSync("isLogin",!0))})}})},sendRequest:function(){this.$http.get(this.api.getAreaData).then(function(t){o.showToast({title:"请求成功",icon:"success",mask:!0})}).catch(function(e){console.log(t("request fail",e," at pages\\home\\home.vue:180"))})},sendRequest1:function(){var t=u(i.default.mark(function t(){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.post(this.api.getAreaData);case 2:t.sent,o.showToast({title:"请求成功",icon:"success",mask:!0});case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),cardSwiper:function(t){this.cardCur=t.detail.current},cutTab:function(){o.switchTab({url:"../market/home"})},more:function(){this.$api.post(this.api.getCarNew,function(t){-1==t?n.modalName=!0:o.navigateTo({url:"/pages/market/more"})})},navigateTo:function(t,e){this.$api.post(this.api.getCarNew,function(a){if(-1==a)n.modalName=!0;else{var i=o.getStorageSync("uid");n.$api.post(n.api.isSeller,function(a){2==a.code?n.seller=!0:n.seller=!1,e.uid==i||n.seller?o.navigateTo({url:t}):n.$api.msg("仅限发布者和商家可查看详情")})}})},getLocation:function(){this.isLoad=!0,console.log(t(this.long," at pages\\home\\home.vue:239")),console.log(t(this.lat," at pages\\home\\home.vue:240"));var e={sort_1:0,sort_2:0,page:1,size:5,longitude:this.long,latitude:this.lat};this.$api.postWithData(this.api.getTaskList,e,function(t){n.isLoad=!1,n.getTaskList=t.data;for(var e=0;e<n.getTaskList.length;e++)n.getTaskList[e].image=""==n.getTaskList[e].image?"../../static/logo.jpg":n.getTaskList[e].image.split(",")[0]}),0!=this.lat&&this.$api.get("https://api.map.baidu.com/reverse_geocoding/v3/?ak=Ulna6HAk7FsVuGeG4aOsV1wWZtxcosrC&output=json&coordtype=wgs84ll&location="+this.lat+","+this.long,function(t){n.city=t.result.addressComponent.city})}},onTabItemTap:function(e){console.log(t(e," at pages\\home\\home.vue:270"))},mounted:function(){console.log(t(this.$api.isLogin," at pages\\home\\home.vue:273")),n=this,this.$api.post(this.api.adlist,function(e){console.log(t(e," at pages\\home\\home.vue:277")),n.swiperList=e.data}),this.getLocation(),this.$eventBus.$on("initData",function(t){n.getLocation()}),this.$eventBus.$on("register",function(t){n.modalName=!0}),o.setNavigationBarColor({frontColor:"#000000",backgroundColor:"#ff0000"})},onLoad:function(){}};e.default=c}).call(this,a("0de9")["default"],a("6e42")["default"])},"64cf":function(t,e,a){},"6f8b":function(t,e,a){"use strict";(function(t){a("2899"),a("921b");o(a("66fd"));var e=o(a("ec20"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},"8b51":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=(t._self._c,t.__map(t.getTaskList,function(e,a){var o=t._f("km")(null==e.distance?0:e.distance);return{$orig:t.__get_orig(e),f0:o}}));t.$mp.data=Object.assign({},{$root:{l0:a}})},n=[];a.d(e,"a",function(){return o}),a.d(e,"b",function(){return n})},ec20:function(t,e,a){"use strict";a.r(e);var o=a("8b51"),n=a("1350");for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);a("fe9e");var s=a("2877"),r=Object(s["a"])(n["default"],o["a"],o["b"],!1,null,null,null);e["default"]=r.exports},fe9e:function(t,e,a){"use strict";var o=a("64cf"),n=a.n(o);n.a}},[["6f8b","common/runtime","common/vendor"]]]);
});
require('pages/home/home.js');
__wxRoute = 'pages/mine/points';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mine/points.js';

define('pages/mine/points.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/points"],{"093d":function(t,e,n){"use strict";n.r(e);var a=n("55f4"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=i.a},"113e":function(t,e,n){"use strict";n.r(e);var a=n("80ef"),i=n("093d");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("b66a");var o=n("2877"),u=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=u.exports},"440f":function(t,e,n){"use strict";(function(t){n("2899"),n("921b");a(n("66fd"));var e=a(n("113e"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"55f4":function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(){return n.e("components/dateTime/dateTime").then(n.bind(null,"fbc8"))},r=(n("5771"),{components:{tuiDatetime:i},data:function(){return{TabCur:0,winHeight:"",currentTab:0,type:1,startYear:1980,endYear:2030,cancelColor:"#888",color:"#5677fc",setDateTime:"",year:(new Date).getFullYear(),month:(new Date).getMonth()+1}},onLoad:function(){var e=this;t.getSystemInfo({success:function(t){var n=t.windowHeight;e.winHeight=n}})},methods:{tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=10*(t.currentTarget.dataset.id-1)},switchTab:function(t){this.TabCur=t.detail.current},show:function(){this.cancelColor="#888",this.color="#5677fc",this.setDateTime="",this.startYear=1980,this.endYear=2030,this.type=3,this.$refs.dateTime.show()},change:function(t){console.log(a(t," at pages\\mine\\points.vue:111")),this.year=t.year,this.month=t.month}}});e.default=r}).call(this,n("6e42")["default"],n("0de9")["default"])},"80ef":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},b66a:function(t,e,n){"use strict";var a=n("f345"),i=n.n(a);i.a},f345:function(t,e,n){}},[["440f","common/runtime","common/vendor"]]]);
});
require('pages/mine/points.js');
__wxRoute = 'pages/index/dialog';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/dialog.js';

define('pages/index/dialog.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/dialog"],{"312f":function(n,t,e){"use strict";(function(n){e("2899"),e("921b");u(e("66fd"));var t=u(e("4ea8"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},"332e":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{active:!0}},onLoad:function(){},onShow:function(){},onHide:function(){},methods:{goToPage:function(t){t&&n.navigateTo({url:t})}}};t.default=e}).call(this,e("6e42")["default"])},4068:function(n,t,e){},"4ea8":function(n,t,e){"use strict";e.r(t);var u=e("f66f"),o=e("6836");for(var a in o)"default"!==a&&function(n){e.d(t,n,function(){return o[n]})}(a);e("7260");var f=e("2877"),c=Object(f["a"])(o["default"],u["a"],u["b"],!1,null,"c56b6c40",null);t["default"]=c.exports},6836:function(n,t,e){"use strict";e.r(t);var u=e("332e"),o=e.n(u);for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);t["default"]=o.a},7260:function(n,t,e){"use strict";var u=e("4068"),o=e.n(u);o.a},f66f:function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return o})}},[["312f","common/runtime","common/vendor"]]]);
});
require('pages/index/dialog.js');
__wxRoute = 'pages/mine/order_detail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mine/order_detail.js';

define('pages/mine/order_detail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/order_detail"],{"0edb":function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n,a,i,r,o){try{var s=e[r](o),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(a,i)}function s(e){return function(){var t=this,n=arguments;return new Promise(function(a,i){var r=e.apply(t,n);function s(e){o(r,a,i,s,u,"next",e)}function u(e){o(r,a,i,s,u,"throw",e)}s(void 0)})}}var u={data:function(){return{title:"request-payment",loading:!1,price:1,providerList:[]}},methods:{fenzhuangH5pay:function(){wx.chooseWXPay({timestamp:1414561699,nonceStr:"5K8264ILTKCH16CQ2502SI8ZNMTM67VS",package:"prepay_id=123456789",signType:"MD5",paySign:"C380BEC2BFD727A4B6845133519F3AD6",success:function(e){}})},isWechat:function(){var e=window.navigator.userAgent.toLowerCase();return"micromessenger"==e.match(/micromessenger/i)},jsApiCall:function(e,t,n){WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:"wx0f540572b7afe6af",timeStamp:"",nonceStr:"",package:"prepay_id=",signType:"",paySign:""},function(e){var a=e.err_msg?e.err_msg:e.errMsg;switch(a){case"get_brand_wcpay_request:ok":t&&t(e);break;default:WeixinJSBridge.log("支付失败!"+a+",请返回重试."),n&&n({msg:a});break}})},payment:function(e,t,n){this.isWechat()&&("undefined"==typeof WeixinJSBridge?document.addEventListener?document.addEventListener("WeixinJSBridgeReady",this.jsApiCall,!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",this.jsApiCall),document.attachEvent("onWeixinJSBridgeReady",this.jsApiCall)):this.jsApiCall(e,t,n))},PayH5:function(){this.payment()},requestPayment:function(){var t=s(i.default.mark(function t(n,r){var o,s=this;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.providerList[r].loading=!0,t.next=3,this.getOrderInfo(n.id);case 3:if(o=t.sent,console.log(e("得到订单信息",o," at pages\\mine\\order_detail.vue:157")),200===o.statusCode){t.next=9;break}return console.log(e("获得订单信息失败",o," at pages\\mine\\order_detail.vue:159")),a.showModal({content:"获得订单信息失败",showCancel:!1}),t.abrupt("return");case 9:a.requestPayment({provider:n.id,orderInfo:o.data,success:function(t){console.log(e("success",t," at pages\\mine\\order_detail.vue:171")),a.showToast({title:"感谢您的赞助!"})},fail:function(t){console.log(e("fail",t," at pages\\mine\\order_detail.vue:177")),a.showModal({content:"支付失败,原因为: "+t.errMsg,showCancel:!1})},complete:function(){s.providerList[r].loading=!1}});case 10:case"end":return t.stop()}},t,this)}));function n(e,n){return t.apply(this,arguments)}return n}(),getOrderInfo:function(t){var n="";n=plus.runtime.appid,console.log(e(n," at pages\\mine\\order_detail.vue:192"));var i="https://demo.dcloud.net.cn/payment/?payid="+t+"&appid="+n+"&total="+this.price;return new Promise(function(e){a.request({url:i,success:function(t){e(t)},fail:function(t){e(t)}})})}},onLoad:function(){var t=this;a.getProvider({service:"payment",success:function(n){console.log(e("payment success:"+JSON.stringify(n)," at pages\\mine\\order_detail.vue:213"));var a=[];n.provider.map(function(e){switch(e){case"alipay":a.push({name:"支付宝",id:e,loading:!1});break;case"wxpay":a.push({name:"微信",id:e,loading:!1});break;default:break}}),t.providerList=a},fail:function(t){console.log(e("获取支付通道失败：",t," at pages\\mine\\order_detail.vue:238"))}})}};t.default=u}).call(this,n("0de9")["default"],n("6e42")["default"])},"15f9":function(e,t,n){"use strict";n.r(t);var a=n("80a2"),i=n("d02b");for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);n("f9cb");var o=n("2877"),s=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,null,null);t["default"]=s.exports},"19f6":function(e,t,n){},"80a2":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i})},cdde:function(e,t,n){"use strict";(function(e){n("2899"),n("921b");a(n("66fd"));var t=a(n("15f9"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},d02b:function(e,t,n){"use strict";n.r(t);var a=n("0edb"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);t["default"]=i.a},f9cb:function(e,t,n){"use strict";var a=n("19f6"),i=n.n(a);i.a}},[["cdde","common/runtime","common/vendor"]]]);
});
require('pages/mine/order_detail.js');
__wxRoute = 'pages/mine/personal';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mine/personal.js';

define('pages/mine/personal.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/personal"],{"3f5f":function(e,n,o){"use strict";o.r(n);var a=o("51fc"),s=o("e068");for(var r in s)"default"!==r&&function(e){o.d(n,e,function(){return s[e]})}(r);o("fc01");var t=o("2877"),c=Object(t["a"])(s["default"],a["a"],a["b"],!1,null,null,null);n["default"]=c.exports},"4bef":function(e,n,o){"use strict";(function(e){o("2899"),o("921b");a(o("66fd"));var n=a(o("3f5f"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,o("6e42")["createPage"])},"51fc":function(e,n,o){"use strict";var a=function(){var e=this,n=e.$createElement;e._self._c;e._isMounted||(e.e0=function(n){e.modalName=null},e.e1=function(n){e.modalName=null})},s=[];o.d(n,"a",function(){return a}),o.d(n,"b",function(){return s})},"8b79":function(e,n,o){},b593:function(e,n,o){"use strict";(function(e,o){var a;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s={name:"mine",data:function(){return{tuchaoAppid:"wx8abaf00ee8c3202e",extraData:{},modalName:null,avatarUrl:"",nickname:"",modalMPShow:0,StatusBar:this.StatusBar,CustomBar:this.CustomBar,info:[{number:0,name:"钱包",url:"mywallet"},{number:0,name:"卡券",url:"coupon"},{number:0,name:"积分",url:"points"},{number:0,name:"订单",url:"orderlist"},{number:0,name:"挂单",url:"publishbid"}],changygn:[{cuIcon:"calendar",color:"olive",name:"我的挂单",url:"../mine/publishbid",sessionFrom:""},{cuIcon:"moneybag",color:"red",name:"我是商家",url:"../home/businesshome",sessionFrom:""},{cuIcon:"scan",color:"black",name:"扫码核销",url:"smhx",sessionFrom:""},{cuIcon:"service",color:"orange",name:"客服热线",url:"4000851667",sessionFrom:"phone"},{cuIcon:"message",color:"cyan",name:"在线客服",url:"1",sessionFrom:"message"},{cuIcon:"more",color:"red",name:"更多精彩",url:"2",sessionFrom:"more"}],sellerFuns:[{cuIcon:"calendar",color:"olive",name:"推荐返现",url:"../mine/publishbid",sessionFrom:""},{cuIcon:"moneybag",color:"red",name:"我的保险",url:"../home/businesshome",sessionFrom:""},{cuIcon:"scan",color:"black",name:"我的红包",url:"smhx",sessionFrom:""},{cuIcon:"service",color:"orange",name:"我的信息",url:"myinfo"}],otherFuns:[{cuIcon:"calendar",color:"olive",name:"员工中心",url:"../mine/publishbid",sessionFrom:""},{cuIcon:"moneybag",color:"red",name:"客服中心",url:"../home/businesshome",sessionFrom:""},{cuIcon:"scan",color:"black",name:"关于我们",url:"smhx",sessionFrom:""}],scanTaskResult:{vc_id:"",tp_ordersn:"",log_ordersn:"",tp_id:0,tp_title:"",tp_price:"",seller_id:0,seller_title:"",uid:0,nickname:"",number:"",vc_status:0,tp_status:0,log_status:0,vc_use_time:""}}},mounted:function(){a=this,this.avatarUrl=""==e.getStorageSync("headimg")?"http://cscbnew.kelinteng.com/uploads/20191011/b6374b5b92af069b58b13e0e0bf98090.png":e.getStorageSync("headimg"),this.nickname=""==e.getStorageSync("nickname")?"张三":e.getStorageSync("nickname")},onLoad:function(){},onTabItemTap:function(e){},methods:{showModalMP:function(){1==a.modalMPShow?a.modalMPShow=0:a.modalMPShow=1,console.log(o(a.modalMPShow," at pages\\mine\\personal.vue:288"))},getUserInfo:function(n){e.setStorageSync("avatarUrl",n.detail.userInfo.avatarUrl)},navigateTo:function(n){"4000851667"!=n?"smhx"!=n?"goMP"!=n?e.navigateTo({url:n}):a.showModalMP():e.scanCode({success:function(e){var n={vc_id:e.result};a.scanTask(n)},fail:function(e){}}):e.makePhoneCall({phoneNumber:n})},scanTask:function(e){a.$api.postWithData(a.api.scanTask,e,function(e){1==e.code?(a.scanTaskResult=e.data,a.modalName="Modal",a.$api.msg(e.msg)):a.$api.msg(e.msg)})}}};n.default=s}).call(this,o("6e42")["default"],o("0de9")["default"])},e068:function(e,n,o){"use strict";o.r(n);var a=o("b593"),s=o.n(a);for(var r in a)"default"!==r&&function(e){o.d(n,e,function(){return a[e]})}(r);n["default"]=s.a},fc01:function(e,n,o){"use strict";var a=o("8b79"),s=o.n(a);s.a}},[["4bef","common/runtime","common/vendor"]]]);
});
require('pages/mine/personal.js');
__wxRoute = 'pages/mine/wallet_details';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mine/wallet_details.js';

define('pages/mine/wallet_details.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/wallet_details"],{"1f8c":function(t,n,e){"use strict";var u=e("a743"),a=e.n(u);a.a},"6aec":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{scrollTop:0}},methods:{}};n.default=u},"72ef":function(t,n,e){"use strict";e.r(n);var u=e("6aec"),a=e.n(u);for(var c in u)"default"!==c&&function(t){e.d(n,t,function(){return u[t]})}(c);n["default"]=a.a},a0f3:function(t,n,e){"use strict";(function(t){e("2899"),e("921b");u(e("66fd"));var n=u(e("cd63"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},a743:function(t,n,e){},cd63:function(t,n,e){"use strict";e.r(n);var u=e("d257"),a=e("72ef");for(var c in a)"default"!==c&&function(t){e.d(n,t,function(){return a[t]})}(c);e("1f8c");var r=e("2877"),f=Object(r["a"])(a["default"],u["a"],u["b"],!1,null,null,null);n["default"]=f.exports},d257:function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return a})}},[["a0f3","common/runtime","common/vendor"]]]);
});
require('pages/mine/wallet_details.js');
__wxRoute = 'pages/mine/wallet';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mine/wallet.js';

define('pages/mine/wallet.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/wallet"],{"1b7c":function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},c=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return c})},"71d2":function(t,n,e){"use strict";e.r(n);var u=e("e0db"),c=e.n(u);for(var o in u)"default"!==o&&function(t){e.d(n,t,function(){return u[t]})}(o);n["default"]=c.a},"8bd1":function(t,n,e){"use strict";var u=e("9491"),c=e.n(u);c.a},9491:function(t,n,e){},bb77:function(t,n,e){"use strict";e.r(n);var u=e("1b7c"),c=e("71d2");for(var o in c)"default"!==o&&function(t){e.d(n,t,function(){return c[t]})}(o);e("8bd1");var r=e("2877"),i=Object(r["a"])(c["default"],u["a"],u["b"],!1,null,null,null);n["default"]=i.exports},cb9c:function(t,n,e){"use strict";(function(t){e("2899"),e("921b");u(e("66fd"));var n=u(e("bb77"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},e0db:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=function(){return e.e("components/sticky/sticky").then(e.bind(null,"a94f"))},c={components:{tuiSticky:u},data:function(){return{scrollTop:0}},methods:{detail:function(t){this.tui.toast("详情功能尚未完善~")}},onPageScroll:function(t){this.scrollTop=t.scrollTop}};n.default=c}},[["cb9c","common/runtime","common/vendor"]]]);
});
require('pages/mine/wallet.js');
__wxRoute = 'pages/mine/mywallet';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mine/mywallet.js';

define('pages/mine/mywallet.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/mywallet"],{"0007":function(t,e,n){"use strict";n.r(e);var a=n("0eda"),u=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=u.a},"0eda":function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=function(){return n.e("components/dateTime/dateTime").then(n.bind(null,"fbc8"))},o={components:{tuiDatetime:u},data:function(){return{type:1,startYear:1980,endYear:2030,cancelColor:"#888",color:"#5677fc",setDateTime:"",result:"",scrollTop:0}},methods:{show:function(){this.cancelColor="#888",this.color="#5677fc",this.setDateTime="",this.startYear=1980,this.endYear=2030,this.type=3,this.$refs.dateTime.show()},change:function(e){console.log(t(e," at pages\\mine\\mywallet.vue:127")),this.result=e.result},navigator:function(t){a.navigateTo({url:t})}}};e.default=o}).call(this,n("0de9")["default"],n("6e42")["default"])},"29cd":function(t,e,n){},7308:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return u})},a966:function(t,e,n){"use strict";var a=n("29cd"),u=n.n(a);u.a},b87a:function(t,e,n){"use strict";(function(t){n("2899"),n("921b");a(n("66fd"));var e=a(n("dd8a"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},dd8a:function(t,e,n){"use strict";n.r(e);var a=n("7308"),u=n("0007");for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);n("a966");var r=n("2877"),i=Object(r["a"])(u["default"],a["a"],a["b"],!1,null,null,null);e["default"]=i.exports}},[["b87a","common/runtime","common/vendor"]]]);
});
require('pages/mine/mywallet.js');
__wxRoute = 'pages/mine/myinfo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mine/myinfo.js';

define('pages/mine/myinfo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/myinfo"],{"13ec":function(e,t,n){"use strict";var i=n("efb8"),o=n.n(i);o.a},"471b":function(e,t,n){"use strict";(function(e){n("2899"),n("921b");i(n("66fd"));var t=i(n("f65f"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"7dd1":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o})},"884c":function(e,t,n){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a,u=c(n("eeb8"));function c(e){return e&&e.__esModule?e:{default:e}}var r=function(){return Promise.all([n.e("common/vendor"),n.e("components/mpvue-citypicker/mpvueCityPicker")]).then(n.bind(null,"6699"))},s=n("5771"),l={components:{mpvueCityPicker:r},data:function(){return{radio:"A",imgList:[],themeColor:"#007AFF",addressResult:{label:"请选择",value:[0,0,0],cityCode:"110101"},mulLinkageTwoPicker:u.default,cityPickerValueDefault:[0,0,1]}},methods:{navigator:function(t){e.navigateTo({url:t})},showMulLinkageThreePicker:function(){this.$refs.mpvueCityPicker.show()},onCancel:function(e){console.log(i(e," at pages\\mine\\myinfo.vue:131"))},onConfirm3:function(e){this.addressResult=e},initCOS:function(){a=new s({Bucket:o.api.Bucket,Region:o.api.Region,getAuthorization:function(e,t){console.log(i(e," at pages\\mine\\myinfo.vue:141")),o.$api.postWithData(o.api.qcloud_key,{bucket:e.Bucket,region:e.Region},function(e){var n=e.credentials;t({TmpSecretId:n.tmpSecretId,TmpSecretKey:n.tmpSecretKey,XCosSecurityToken:n.sessionToken,ExpiredTime:e.expiredTime})})}})},RadioChange:function(e){this.radio=e.detail.value},clk:function(t){var n=e.getSystemInfoSync(),i=n.windowWidth;n.windowHeight;this.$refs.avatar.fChooseImg(t,{selWidth:i-50+"px",selHeight:i-50+"px",expWidth:i-50+"px",expHeight:i-50+"px",inner:"true",canRotate:"false"})},doUpload:function(e){console.log(i(e.path," at pages\\mine\\myinfo.vue:173"));var t=e.path,n=new Date,u=n.getFullYear()+"",c=n.getMonth()+1+"",r=n.getDate()+"",s=u+c+r,l=n.getTime()+".png",f="uploads/"+s+"/"+l;console.log(i(f," at pages\\mine\\myinfo.vue:182")),a.postObject({Bucket:o.api.Bucket,Region:o.api.Region,Key:f,FilePath:t,onProgress:function(e){console.log(i(JSON.stringify(e)," at pages\\mine\\myinfo.vue:189"))}},function(e,t){console.log(i(e||t," at pages\\mine\\myinfo.vue:192")),console.log(i(o.api.UPLOAD_HOST+f," at pages\\mine\\myinfo.vue:193")),o.imgList.push(o.api.UPLOAD_HOST+f),console.log(i(o.imgList," at pages\\mine\\myinfo.vue:195"))})},DelImg:function(t){var n=this;e.showModal({title:"温馨提示！",content:"确定要删除吗？",cancelText:"取消",confirmText:"确定",success:function(e){e.confirm&&n.imgList.splice(t.currentTarget.dataset.index,1)}})},doBefore:function(){console.log(i("doBefore"," at pages\\mine\\myinfo.vue:213"))},ViewImage:function(t){e.previewImage({urls:this.imgList,current:t.currentTarget.dataset.url})}},onLoad:function(){o=this,this.initCOS()}};t.default=l}).call(this,n("6e42")["default"],n("0de9")["default"])},d5fd:function(e,t,n){"use strict";n.r(t);var i=n("884c"),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);t["default"]=o.a},efb8:function(e,t,n){},f65f:function(e,t,n){"use strict";n.r(t);var i=n("7dd1"),o=n("d5fd");for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);n("13ec");var u=n("2877"),c=Object(u["a"])(o["default"],i["a"],i["b"],!1,null,null,null);t["default"]=c.exports}},[["471b","common/runtime","common/vendor"]]]);
});
require('pages/mine/myinfo.js');
__wxRoute = 'pages/mine/mycar';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mine/mycar.js';

define('pages/mine/mycar.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/mycar"],{"1cae":function(e,t,n){"use strict";var i=n("22fb"),a=n.n(i);a.a},"22fb":function(e,t,n){},5634:function(e,t,n){"use strict";n.r(t);var i=n("8149"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);t["default"]=a.a},5668:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},8149:function(e,t,n){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,o,u=c(n("eeb8"));function c(e){return e&&e.__esModule?e:{default:e}}var r=function(){return n.e("components/mpvue-picker/mpvuePicker").then(n.bind(null,"6691"))},l=function(){return Promise.all([n.e("common/vendor"),n.e("components/mpvue-citypicker/mpvueCityPicker")]).then(n.bind(null,"6699"))},s=function(){return n.e("components/dateTime/dateTime").then(n.bind(null,"fbc8"))},f=n("5771"),m={components:{tuiDatetime:s,mpvuePicker:r,mpvueCityPicker:l},data:function(){return{type:1,startYear:1980,endYear:2030,cancelColor:"#888",color:"#5677fc",setDateTime:"",dateResult:"请选择",radio:"A",imgList:[],pickerSingleArray:[{label:"1年",value:1},{label:"2年",value:2},{label:"3年",value:3},{label:"4年",value:4},{label:"5年",value:5},{label:"6年",value:6},{label:"7年",value:7},{label:"8年",value:8},{label:"9年",value:9},{label:"10年",value:10},{label:"11年",value:11},{label:"12年",value:12}],mulLinkageTwoPicker:u.default,cityPickerValueDefault:[0,0,1],themeColor:"#007AFF",addressResult:{label:"请选择",value:[0,0,0],cityCode:"110101"},carAgeResult:{label:"请选择",index:[0],value:[1]},mode:"",deepLength:1,pickerValueDefault:[0],pickerValueArray:[],form:{carno:""}}},methods:{submitForm:function(){},initCOS:function(){o=new f({Bucket:a.api.Bucket,Region:a.api.Region,getAuthorization:function(t,n){console.log(e(t," at pages\\mine\\mycar.vue:140")),a.$api.postWithData(a.api.qcloud_key,{bucket:t.Bucket,region:t.Region},function(e){var t=e.credentials;n({TmpSecretId:t.tmpSecretId,TmpSecretKey:t.tmpSecretKey,XCosSecurityToken:t.sessionToken,ExpiredTime:e.expiredTime})})}})},RadioChange:function(e){this.radio=e.detail.value},clk:function(e){var t=i.getSystemInfoSync(),n=t.windowWidth;t.windowHeight;this.$refs.avatar.fChooseImg(e,{selWidth:n-50+"px",selHeight:n-50+"px",expWidth:n-50+"px",expHeight:n-50+"px",inner:"true",canRotate:"false"})},doUpload:function(t){i.showLoading({mask:!0}),console.log(e(t.path," at pages\\mine\\mycar.vue:173"));var n=t.path,u=new Date,c=u.getFullYear()+"",r=u.getMonth()+1+"",l=u.getDate()+"",s=c+r+l,f=u.getTime()+".png",m="uploads/"+s+"/"+f;console.log(e(m," at pages\\mine\\mycar.vue:182")),o.postObject({Bucket:a.api.Bucket,Region:a.api.Region,Key:m,FilePath:n,onProgress:function(t){console.log(e(JSON.stringify(t)," at pages\\mine\\mycar.vue:189"))}},function(t,n){console.log(e(t||n," at pages\\mine\\mycar.vue:192")),console.log(e(a.api.UPLOAD_HOST+m," at pages\\mine\\mycar.vue:193")),a.imgList.push(a.api.UPLOAD_HOST+m),console.log(e(a.imgList," at pages\\mine\\mycar.vue:195")),i.hideLoading()})},DelImg:function(e){var t=this;i.showModal({title:"温馨提示！",content:"确定要删除吗？",cancelText:"取消",confirmText:"确定",success:function(n){n.confirm&&t.imgList.splice(e.currentTarget.dataset.index,1)}})},doBefore:function(){console.log(e("doBefore"," at pages\\mine\\mycar.vue:214"))},ViewImage:function(e){i.previewImage({urls:this.imgList,current:e.currentTarget.dataset.url})},show:function(){this.cancelColor="#888",this.color="#5677fc",this.setDateTime="",this.startYear=1980,this.endYear=2030,this.type=2,this.$refs.dateTime.show()},change:function(t){console.log(e(t," at pages\\mine\\mycar.vue:232")),this.dateResult=t.result},showSinglePicker:function(){this.pickerValueArray=this.pickerSingleArray,this.mode="selector",this.deepLength=1,this.pickerValueDefault=[0],this.$refs.mpvuePicker.show()},showMulLinkageThreePicker:function(){this.$refs.mpvueCityPicker.show()},onCancel:function(t){console.log(e(t," at pages\\mine\\mycar.vue:246"))},onConfirm1:function(e){this.carAgeResult=e},onConfirm3:function(e){this.addressResult=e},navigator:function(e){i.navigateTo({url:e})}},onLoad:function(){a=this,this.initCOS()}};t.default=m}).call(this,n("0de9")["default"],n("6e42")["default"])},b967:function(e,t,n){"use strict";(function(e){n("2899"),n("921b");i(n("66fd"));var t=i(n("eec3"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},eec3:function(e,t,n){"use strict";n.r(t);var i=n("5668"),a=n("5634");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("1cae");var u=n("2877"),c=Object(u["a"])(a["default"],i["a"],i["b"],!1,null,null,null);t["default"]=c.exports}},[["b967","common/runtime","common/vendor"]]]);
});
require('pages/mine/mycar.js');
__wxRoute = 'pages/mine/carmanager';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mine/carmanager.js';

define('pages/mine/carmanager.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/carmanager"],{"16c9":function(n,t,e){"use strict";e.r(t);var a=e("1f1a"),u=e("5470");for(var r in u)"default"!==r&&function(n){e.d(t,n,function(){return u[n]})}(r);e("ae11");var o=e("2877"),c=Object(o["a"])(u["default"],a["a"],a["b"],!1,null,null,null);t["default"]=c.exports},"1f1a":function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return u})},"506d":function(n,t,e){},5470:function(n,t,e){"use strict";e.r(t);var a=e("81ee"),u=e.n(a);for(var r in a)"default"!==r&&function(n){e.d(t,n,function(){return a[n]})}(r);t["default"]=u.a},"81ee":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{radio:"A",carList:["","","","","",""]}},methods:{navigator:function(t){n.navigateTo({url:t})}},onLoad:function(){this}};t.default=e}).call(this,e("6e42")["default"])},"8b49":function(n,t,e){"use strict";(function(n){e("2899"),e("921b");a(e("66fd"));var t=a(e("16c9"));function a(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},ae11:function(n,t,e){"use strict";var a=e("506d"),u=e.n(a);u.a}},[["8b49","common/runtime","common/vendor"]]]);
});
require('pages/mine/carmanager.js');
__wxRoute = 'pages/mine/orderlist';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mine/orderlist.js';

define('pages/mine/orderlist.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/orderlist"],{"09e8":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=function(){return e.e("components/loadmore/loadmore").then(e.bind(null,"357d"))},o=function(){return e.e("components/nomore/nomore").then(e.bind(null,"93d0"))},i=function(){return e.e("components/tips/tips").then(e.bind(null,"43a9"))},u={components:{tuiTips:i,tuiLoadmore:r,tuiNomore:o},data:function(){return{loadding:!0,pullUpOn:!1,tabbar:["全部","待付款","待发货","待收货","待评价","退款/售后"],winHeight:"",currentTab:0,scrollLeft:0,list1:[{state:0},{state:1},{state:2},{state:0},{state:0},{state:0}]}},onLoad:function(){var n=this;t.getSystemInfo({success:function(t){var e=t.windowHeight;n.winHeight=e}}),this.list1.length<=0&&(this.pullUpOn=!0)},methods:{switchTab:function(t){this.currentTab=t.detail.current,this.checkCor()},swichNav:function(t){var n=t.currentTarget.dataset.current;if(this.currentTab==n)return!1;this.currentTab=n},checkCor:function(){this.currentTab>3?this.scrollLeft=300:this.scrollLeft=0},ScrollDown:function(){this.$api.msg("ScrollDown")},navigator:function(n){t.navigateTo({url:n})}}};n.default=u}).call(this,e("6e42")["default"])},2068:function(t,n,e){"use strict";e.r(n);var r=e("09e8"),o=e.n(r);for(var i in r)"default"!==i&&function(t){e.d(n,t,function(){return r[t]})}(i);n["default"]=o.a},"567e":function(t,n,e){"use strict";e.r(n);var r=e("f31b"),o=e("2068");for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);e("d59b");var u=e("2877"),c=Object(u["a"])(o["default"],r["a"],r["b"],!1,null,null,null);n["default"]=c.exports},"59c3":function(t,n,e){},"5cb8":function(t,n,e){"use strict";(function(t){e("2899"),e("921b");r(e("66fd"));var n=r(e("567e"));function r(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},d59b:function(t,n,e){"use strict";var r=e("59c3"),o=e.n(r);o.a},f31b:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return r}),e.d(n,"b",function(){return o})}},[["5cb8","common/runtime","common/vendor"]]]);
});
require('pages/mine/orderlist.js');
__wxRoute = 'pages/mine/coupon';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mine/coupon.js';

define('pages/mine/coupon.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/coupon"],{"0f8a":function(t,a,e){"use strict";(function(t){e("2899"),e("921b");n(e("66fd"));var a=n(e("e909"));function n(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,e("6e42")["createPage"])},"29ba":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement;t._self._c},r=[];e.d(a,"a",function(){return n}),e.d(a,"b",function(){return r})},"397a":function(t,a,e){"use strict";var n=e("d48a"),r=e.n(n);r.a},a87a:function(t,a,e){"use strict";e.r(a);var n=e("ddad"),r=e.n(n);for(var i in n)"default"!==i&&function(t){e.d(a,t,function(){return n[t]})}(i);a["default"]=r.a},d48a:function(t,a,e){},ddad:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=function(){return e.e("components/tips/tips").then(e.bind(null,"43a9"))},r={components:{tuiTips:n},data:function(){return{tabbar:["待使用","已使用","已过期"],winHeight:"",currentTab:0,scrollLeft:0,list1:[{data:"2019-10-15",name:"优惠券1",price:"5元洗车",state:0},{data:"2019-10-15",name:"优惠券2",price:"5元洗车",state:0},{data:"2019-10-15",name:"优惠券3",price:"5元洗车",state:1},{data:"2019-10-15",name:"优惠券4",price:"5元洗车",state:2},{data:"2019-10-15",name:"优惠券5",price:"5元洗车",state:0},{data:"2019-10-15",name:"优惠券11",price:"51元洗车",state:0},{data:"2019-10-15",name:"优惠券12",price:"50元洗车",state:0},{data:"2019-10-15",name:"优惠券13",price:"52元洗车",state:1},{data:"2019-10-15",name:"优惠券14",price:"15元洗车",state:1},{data:"2019-10-15",name:"优惠券15",price:"15元洗车",state:1},{data:"2019-10-15",name:"优惠券16",price:"25元洗车",state:2},{data:"2019-10-15",name:"优惠券17",price:"35元洗车",state:2},{data:"2019-10-15",name:"优惠券18",price:"45元洗车",state:2},{data:"2019-10-15",name:"优惠券19",price:"55元洗车",state:2},{data:"2019-10-15",name:"优惠券20",price:"5元洗车",state:0},{data:"2019-10-15",name:"优惠券6",price:"5元洗车",state:1},{data:"2019-10-15",name:"优惠券7",price:"5元洗车",state:1},{data:"2019-10-15",name:"优惠券8",price:"5元洗车",state:1},{data:"2019-10-15",name:"优惠券9",price:"5元洗车",state:1},{data:"2019-10-15",name:"优惠券10",price:"5元洗车",state:1}]}},onLoad:function(){var a=this;t.getSystemInfo({success:function(t){var e=t.windowHeight;a.winHeight=e}})},methods:{switchTab:function(t){this.currentTab=t.detail.current,this.checkCor()},swichNav:function(t){var a=t.currentTarget.dataset.current;if(this.currentTab==a)return!1;this.currentTab=a},checkCor:function(){this.currentTab>3?this.scrollLeft=300:this.scrollLeft=0},detail:function(a){t.navigateTo({url:"../extend-view/newsDetail/newsDetail"})}}};a.default=r}).call(this,e("6e42")["default"])},e909:function(t,a,e){"use strict";e.r(a);var n=e("29ba"),r=e("a87a");for(var i in r)"default"!==i&&function(t){e.d(a,t,function(){return r[t]})}(i);e("397a");var c=e("2877"),s=Object(c["a"])(r["default"],n["a"],n["b"],!1,null,null,null);a["default"]=s.exports}},[["0f8a","common/runtime","common/vendor"]]]);
});
require('pages/mine/coupon.js');
__wxRoute = 'pages/mine/carbrand';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mine/carbrand.js';

define('pages/mine/carbrand.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/carbrand"],{"0094":function(t,n,e){"use strict";(function(t){e("2899"),e("921b");i(e("66fd"));var n=i(e("ea86"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},3264:function(t,n,e){"use strict";var i=e("748f"),o=e.n(i);o.a},4292:function(t,n,e){"use strict";e.r(n);var i=e("ddf4"),o=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(n,t,function(){return i[t]})}(u);n["default"]=o.a},"748f":function(t,n,e){},9184:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__map(t.lists,function(n,e){var i=t.__map(n.data,function(e,i){var o=t.last(n.data,i);return{$orig:t.__get_orig(e),m0:o}});return{$orig:t.__get_orig(n),l0:i}}));t.$mp.data=Object.assign({},{$root:{l1:e}})},o=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o})},ddf4:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("142d"),o=function(){return e.e("components/list-cell/list-cell").then(e.bind(null,"d817"))},u=function(){return e.e("components/icon/icon").then(e.bind(null,"d8ea"))},c=function(){return e.e("components/sticky/sticky").then(e.bind(null,"a94f"))},r={components:{tuiCell:o,tuiIcon:u,tuiSticky:c},computed:{last:function(){return function(t,n){return t.length-1==n}}},data:function(){return{lists:[],touchmove:!1,touchmoveIndex:-1,titleHeight:0,indexBarHeight:0,indexBarItemHeight:0,scrollViewId:"",winHeight:0,scrollTop:0}},onLoad:function(n){var e=this;setTimeout(function(){t.getSystemInfo({success:function(n){var o=n.windowHeight,u=o-t.upx2px(232);e.winHeight=o,e.indexBarHeight=u,e.indexBarItemHeight=u/25,e.titleHeight=t.upx2px(132),e.lists=i.list}})},10)},methods:{touchStart:function(t){this.touchmove=!0;var n=t.touches[0].pageY,e=Math.floor((n-this.titleHeight)/this.indexBarItemHeight),i=this.lists[e];i&&(this.scrollViewId=i.letter,this.touchmoveIndex=e)},touchMove:function(t){var n=t.touches[0].pageY,e=Math.floor((n-this.titleHeight)/this.indexBarItemHeight),i=this.lists[e];i&&(this.scrollViewId=i.letter,this.touchmoveIndex=e)},touchEnd:function(){this.touchmove=!1,this.touchmoveIndex=-1},touchCancel:function(){this.touchmove=!1,this.touchmoveIndex=-1},search:function(){},detail:function(){t.navigateTo({url:"../chat/chat"})},onScroll:function(t){this.scrollTop=t.detail.scrollTop},chooceThis:function(){t.navigateBack()}}};n.default=r}).call(this,e("6e42")["default"])},ea86:function(t,n,e){"use strict";e.r(n);var i=e("9184"),o=e("4292");for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);e("3264");var c=e("2877"),r=Object(c["a"])(o["default"],i["a"],i["b"],!1,null,null,null);n["default"]=r.exports}},[["0094","common/runtime","common/vendor"]]]);
});
require('pages/mine/carbrand.js');
__wxRoute = 'pages/home/businesshome';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/home/businesshome.js';

define('pages/home/businesshome.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/businesshome"],{"2d62":function(t,e,i){"use strict";(function(t){i("2899"),i("921b");s(i("66fd"));var e=s(i("b625"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])},"4dac":function(t,e,i){},"8eba":function(t,e,i){"use strict";i.r(e);var s=i("a1b9"),a=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);e["default"]=a.a},a1b9:function(t,e,i){"use strict";(function(t){var i;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={data:function(){return{isLoad:!0,modalMPShow:0,seller:{address:"",brand_logo:"",city:"",district:"",id:0,latitude:"",longitude:"",phone:"",price:"0",province:"",status:1,task_money:"0",task_num:0,task_sum:0,title:"",type:"1",view:347},seller_id:0,getCYTaskList:[],getMyServiceList:[],getMyIncomeList:[],index:1,msg:"",form:{page:1,size:5}}},onShow:function(){i=this,this.seller_id=t.getStorageSync("seller_id"),this.$api.post(this.api.seller,function(t){0==t.code?(i.msg=t.msg,i.modalMPShow=1):(i.seller=t.data,i.modalMPShow=0)}),this.getCYTaskListM(1,!0)},onReachBottom:function(){this.form.page++,1==this.index?this.getCYTaskListM(1,!1):2==this.index?this.getMyIncomeListM(2,!1):this.getMyServiceListM(3,!1)},methods:{getCYTaskListM:function(t,e){this.isLoad=!0,this.index=t,e&&(this.form.page=1,this.getCYTaskList=[]),this.$api.postWithData(this.api.getCYTaskList,this.form,function(t){if(0==e){if(null==t.data)return void(i.isLoad=!1);for(var s=0;s<t.data.length;s++)i.getCYTaskList.push(t.data[s])}else i.getCYTaskList=t.data;i.getCYTaskList.length<=2&&(i.isLoad=!1)})},getMyIncomeListM:function(t,e){this.isLoad=!0,this.index=t,e&&(this.form.page=1,this.getMyIncomeList=[]),this.$api.postWithData(this.api.getMyIncomeList,this.form,function(t){if(0==e){t.data.length<=0&&(i.isLoad=!1);for(var s=0;s<t.data.length;s++)i.getMyIncomeList.push(t.data[s])}else i.getMyIncomeList=t.data;i.getMyIncomeList.length<=2&&(i.isLoad=!1)})},getMyServiceListM:function(t,e){this.isLoad=!0,this.index=t,e&&(this.form.page=1,this.getMyServiceList=[]),this.$api.postWithData(this.api.getMyServiceList,this.form,function(t){if(0==e){t.data.length<=0&&(i.isLoad=!1);for(var s=0;s<t.data.length;s++)i.getMyServiceList.push(t.data[s])}else i.getMyServiceList=t.data;i.getMyServiceList.length<=2&&(i.isLoad=!1)})}}};e.default=s}).call(this,i("6e42")["default"])},b625:function(t,e,i){"use strict";i.r(e);var s=i("fb0e"),a=i("8eba");for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);i("e88d");var o=i("2877"),r=Object(o["a"])(a["default"],s["a"],s["b"],!1,null,null,null);e["default"]=r.exports},e88d:function(t,e,i){"use strict";var s=i("4dac"),a=i.n(s);a.a},fb0e:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=(t._self._c,t.__map(t.getCYTaskList,function(e,i){var s=e.image.split(",");return{$orig:t.__get_orig(e),g0:s}})),s=t.__map(t.getMyServiceList,function(e,i){var s=e.image.split(",");return{$orig:t.__get_orig(e),g1:s}});t.$mp.data=Object.assign({},{$root:{l0:i,l1:s}})},a=[];i.d(e,"a",function(){return s}),i.d(e,"b",function(){return a})}},[["2d62","common/runtime","common/vendor"]]]);
});
require('pages/home/businesshome.js');
__wxRoute = 'pages/home/business';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/home/business.js';

define('pages/home/business.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/business"],{"2f8a":function(n,t,e){"use strict";(function(n){e("2899"),e("921b");u(e("66fd"));var t=u(e("bb78"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},"53e3":function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return a})},"66c7":function(n,t,e){},"821f":function(n,t,e){"use strict";e.r(t);var u=e("a1e1"),a=e.n(u);for(var f in u)"default"!==f&&function(n){e.d(t,n,function(){return u[n]})}(f);t["default"]=a.a},a1e1:function(n,t,e){},a32f:function(n,t,e){"use strict";var u=e("66c7"),a=e.n(u);a.a},bb78:function(n,t,e){"use strict";e.r(t);var u=e("53e3"),a=e("821f");for(var f in a)"default"!==f&&function(n){e.d(t,n,function(){return a[n]})}(f);e("a32f");var r=e("2877"),c=Object(r["a"])(a["default"],u["a"],u["b"],!1,null,null,null);t["default"]=c.exports}},[["2f8a","common/runtime","common/vendor"]]]);
});
require('pages/home/business.js');
__wxRoute = 'pages/home/paysuccess';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/home/paysuccess.js';

define('pages/home/paysuccess.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/paysuccess"],{"1a0c":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a})},3360:function(e,t,n){"use strict";(function(e){n("2899"),n("921b");o(n("66fd"));var t=o(n("511d"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"368e":function(e,t,n){"use strict";var o=n("98eb"),a=n.n(o);a.a},"511d":function(e,t,n){"use strict";n.r(t);var o=n("1a0c"),a=n("afab");for(var u in a)"default"!==u&&function(e){n.d(t,e,function(){return a[e]})}(u);n("368e");var i=n("2877"),r=Object(i["a"])(a["default"],o["a"],o["b"],!1,null,null,null);t["default"]=r.exports},"98eb":function(e,t,n){},aec1:function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("9df1"),u={data:function(){return{info:{},qrcode_w:e.upx2px(150)}},onLoad:function(e){var t=JSON.parse(e.data);console.log(o(t," at pages\\home\\paysuccess.vue:65")),this.info=t,1==this.info.status?this.info.status="支付成功":2==this.info.status?this.info.status="已取消":this.info.status="未支付",this.couponQrCode(t.vip_coupon.id,"couponQrcode0")},methods:{navigationTo:function(t){e.openLocation({name:t.seller_address,address:t.seller_address,latitude:Number(t.seller_latitude),longitude:Number(t.seller_longitude)})},couponQrCode:function(e,t){new a(t,{text:e,width:this.qrcode_w,height:this.qrcode_w,colorDark:"#333333",colorLight:"#FFFFFF",correctLevel:a.CorrectLevel.H})}}};t.default=u}).call(this,n("6e42")["default"],n("0de9")["default"])},afab:function(e,t,n){"use strict";n.r(t);var o=n("aec1"),a=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);t["default"]=a.a}},[["3360","common/runtime","common/vendor"]]]);
});
require('pages/home/paysuccess.js');
__wxRoute = 'pages/mine/publishbid';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mine/publishbid.js';

define('pages/mine/publishbid.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/publishbid"],{6555:function(t,e,a){"use strict";var i=a("ef9e"),n=a.n(i);n.a},"8aeb":function(t,e,a){"use strict";(function(t){var a;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{modalName:null,isLoad:!0,myPubData:{count:0,success:0,total_price:0},orderRes:[],ciygn:[{cuIcon:"calendar",color:"theme",name:"全部订单",value:0},{cuIcon:"time",color:"gray",name:"待审核",value:100},{cuIcon:"sponsor",color:"gray",name:"服务报价",value:1},{cuIcon:"newshot",color:"gray",name:"正在服务",value:2},{cuIcon:"edit",color:"gray",name:"服务完成",value:3}],checkedIndex:0,page:1,size:10}},filters:{km:function(t){return null!=t?(Number(t)/1e3).toFixed(2)+"km":""}},onShow:function(){a=this,this.$eventBus.$on("myTaskList",function(){a.initData()})},onLoad:function(){this.initData()},onPullDownRefresh:function(){this.page=1,this.isLoad=!0,this.orderRes=[],this.myTaskList(this.ciygn[this.checkedIndex].value,this.page)},onReachBottom:function(){this.page++,this.myTaskList(this.ciygn[this.checkedIndex].value,this.page)},methods:{initData:function(){this.isLoad=!0,this.page=1,this.checkedIndex=0,this.orderRes=[],this.myTaskList(this.ciygn[this.checkedIndex].value,this.page),this.initmyPubData()},closeFuwu:function(t){this.$api.postWithData(this.api.closeTask,{task_id:t.id},function(t){t.data.code,this.$api.msg(t.data.msg)})},initmyPubData:function(){this.$api.post(this.api.myPubData,function(t){a.myPubData=t.data})},myTaskList:function(e,i){this.$api.postWithData(this.api.myTaskList,{page:i,size:10,index:e},function(e){var i=e.data;i.length>0?a.isLoad=!0:a.isLoad=!1;for(var n=0;n<i.length;n++)a.orderRes.push(i[n]);for(n=0;n<a.orderRes.length;n++)a.orderRes[n].image=""==a.orderRes[n].image?"../../static/logo.jpg":a.orderRes[n].image.split(",")[0];a.orderRes.length<=5&&(a.isLoad=!1),t.stopPullDownRefresh()})},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},checked:function(t){this.checkedIndex=t,this.orderRes=[],this.page=1,this.isLoad=!0,this.myTaskList(this.ciygn[t].value,this.page)},navigateTo:function(e){this.modalName=null,t.navigateTo({url:e})},paySuccessPage:function(e){this.$api.postWithData(this.api.payResult,{ordersn:e},function(e){0==e.code?(a.loading=!1,a.$api.msg(e.msg)):t.navigateTo({url:"../home/paysuccess?data="+JSON.stringify(e.data)})})}}};e.default=i}).call(this,a("6e42")["default"])},"8f6b":function(t,e,a){"use strict";a.r(e);var i=a("c75d"),n=a("c698");for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);a("6555");var o=a("2877"),c=Object(o["a"])(n["default"],i["a"],i["b"],!1,null,null,null);e["default"]=c.exports},c698:function(t,e,a){"use strict";a.r(e);var i=a("8aeb"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);e["default"]=n.a},c75d:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=(t._self._c,t.__map(t.orderRes,function(e,a){var i=t._f("km")(null==e.distance?0:e.distance);return{$orig:t.__get_orig(e),f0:i}}));t._isMounted||(t.e0=function(e){t.modalName=null}),t.$mp.data=Object.assign({},{$root:{l0:a}})},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},cf51:function(t,e,a){"use strict";(function(t){a("2899"),a("921b");i(a("66fd"));var e=i(a("8f6b"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},ef9e:function(t,e,a){}},[["cf51","common/runtime","common/vendor"]]]);
});
require('pages/mine/publishbid.js');
__wxRoute = 'pages/mine/sjmb';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mine/sjmb.js';

define('pages/mine/sjmb.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/sjmb"],{"00fc":function(n,e,t){"use strict";(function(n){t("2899"),t("921b");a(t("66fd"));var e=a(t("acfb"));function a(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("6e42")["createPage"])},"406d":function(n,e,t){"use strict";var a=function(){var n=this,e=n.$createElement;n._self._c},u=[];t.d(e,"a",function(){return a}),t.d(e,"b",function(){return u})},8418:function(n,e,t){"use strict";t.r(e);var a=t("bbd8"),u=t.n(a);for(var c in a)"default"!==c&&function(n){t.d(e,n,function(){return a[n]})}(c);e["default"]=u.a},acfb:function(n,e,t){"use strict";t.r(e);var a=t("406d"),u=t("8418");for(var c in u)"default"!==c&&function(n){t.d(e,n,function(){return u[n]})}(c);t("dd7d");var r=t("2877"),o=Object(r["a"])(u["default"],a["a"],a["b"],!1,null,null,null);e["default"]=o.exports},bbd8:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{List1:[{url:"test?name=余额",num:"140.00",name:"余额"},{url:"test?name=订单",num:"56",name:"订单"},{url:"test?name=项目",num:"94",name:"项目"},{url:"test?name=商品",num:"35",name:"商品"}],List2:[{url:"test?name=商品管理",cuIcon:"goods",name:"商品管理"},{url:"test?name=订单管理",cuIcon:"baby",name:"订单管理"},{url:"test?name=项目管理",cuIcon:"edit",name:"项目管理"},{url:"test?name=信息管理",cuIcon:"message",name:"信息管理"},{url:"test?name=预约管理",cuIcon:"calendar",name:"预约管理"},{url:"test?name=活动管理",cuIcon:"hot",name:"活动管理"},{url:"test?name=人员管理",cuIcon:"peoplelist",name:"人员管理"},{url:"test?name=人员管理",cuIcon:"peoplelist",name:"人员管理"}],List3:[{url:"test?name=提现设置",cuIcon:"pay",name:"提现设置"},{url:"test?name=扫码核销",cuIcon:"scan",name:"扫码核销"},{url:"test?name=运费设置",cuIcon:"deliver",name:"运费设置"},{url:"test?name=供应商城",cuIcon:"cart",name:"供应商城"},{url:"test?name=康普顿专区",cuIcon:"cardboardfill",name:"康普顿专区"}]}}};e.default=a},bd7f:function(n,e,t){},dd7d:function(n,e,t){"use strict";var a=t("bd7f"),u=t.n(a);u.a}},[["00fc","common/runtime","common/vendor"]]]);
});
require('pages/mine/sjmb.js');
__wxRoute = 'pages/mine/h5';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mine/h5.js';

define('pages/mine/h5.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/h5"],{"93da":function(t,e,n){"use strict";n.r(e);var a=n("9fad"),u=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=u.a},"9fad":function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{webviewStyles:{progress:{color:"#FF3333"}},src:this.api.http+"/index/shop/loginkpd.html"}},onLoad:function(e){this.src=this.api.http+e.url,console.log(t(e.url," at pages\\mine\\h5.vue:22"))},methods:{getMessage:function(e){n.showToast({title:e.detail.data[0].action}),console.log(t(e.detail.data," at pages\\mine\\h5.vue:29"))}}};e.default=a}).call(this,n("0de9")["default"],n("6e42")["default"])},b918:function(t,e,n){"use strict";n.r(e);var a=n("d314"),u=n("93da");for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);var i=n("2877"),r=Object(i["a"])(u["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},c319:function(t,e,n){"use strict";(function(t){n("2899"),n("921b");a(n("66fd"));var e=a(n("b918"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},d314:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return u})}},[["c319","common/runtime","common/vendor"]]]);
});
require('pages/mine/h5.js');
__wxRoute = 'pages/home/quotedprice';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/home/quotedprice.js';

define('pages/home/quotedprice.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/quotedprice"],{3583:function(t,i,e){"use strict";(function(t,s){var o,a;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e("5771"),r={data:function(){return{imgList:[],value:"",list:{},wxgs:0,modalName:null,orderInfo:{},form:{formId:"",task_id:0,price:0,items:[{name:"默认项目(点击可修改)",wxgs:"",pjjg:"",pjpp:"",wxsj:"",zbsj:""}],files:"",desc:""}}},updated:function(){var t=0;this.form.items.forEach(function(i,e){t+=parseFloat(""==i.wxgs?0:i.wxgs)+parseFloat(""==i.pjjg?0:i.pjjg)}),this.form.price=this.toDecimal(t)},onLoad:function(t){o=this,o.initCOS(),this.form.task_id=t.task_id,0==t.type?(this.taskLogDetail(),this.taskDetail()):this.taskDetail()},methods:{clk:function(i){var e=t.getSystemInfoSync(),s=e.windowWidth;e.windowHeight;this.$refs.avatar.fChooseImg(i,{selWidth:s-50+"px",selHeight:s-50+"px",expWidth:"800px",expHeight:"800px",inner:"true",canRotate:"false"})},doBefore:function(){console.log(s("doBefore"," at pages\\home\\quotedprice.vue:172"))},doUpload:function(t){console.log(s(t.path," at pages\\home\\quotedprice.vue:175"));var i=t.path,e=new Date,n=e.getFullYear()+"",r=e.getMonth()+1+"",f=e.getDate()+"",u=n+r+f,m=e.getTime()+".png",c="uploads/"+u+"/"+m;a.postObject({Bucket:o.api.Bucket,Region:o.api.Region,Key:c,FilePath:i,onProgress:function(t){console.log(s(JSON.stringify(t)," at pages\\home\\quotedprice.vue:190"))}},function(t,i){console.log(s(t||i," at pages\\home\\quotedprice.vue:193")),o.imgList.push(o.api.UPLOAD_HOST+c)})},ViewImage:function(i){t.previewImage({urls:this.imgList,current:i.currentTarget.dataset.url})},DelImg:function(i){var e=this;t.showModal({title:"温馨提示！",content:"确定要删除吗？",cancelText:"取消",confirmText:"确定",success:function(t){t.confirm&&e.imgList.splice(i.currentTarget.dataset.index,1)}})},initCOS:function(){a=new n({Bucket:o.api.Bucket,Region:o.api.Region,getAuthorization:function(t,i){console.log(s(t," at pages\\home\\quotedprice.vue:224")),o.$api.postWithData(o.api.qcloud_key,{bucket:t.Bucket,region:t.Region},function(t){var e=t.credentials;i({TmpSecretId:e.tmpSecretId,TmpSecretKey:e.tmpSecretKey,XCosSecurityToken:e.sessionToken,ExpiredTime:t.expiredTime})})}})},taskLogDetail:function(){this.$api.postWithData(this.api.taskLogDetail,{task_id:this.form.task_id},function(t){if(o.form.desc=t.data.desc,o.form.items=JSON.parse(t.data.items),null!=t.data.files){var i=t.data.files.split(",");if(""!=i[0]&&null!=i[0])for(var e=0;e<i.length;e++)o.imgList.push(i[e])}})},taskDetail:function(){this.$api.postWithData(this.api.taskDetail,{task_id:this.form.task_id},function(i){if(0==i.code)return o.$api.msg("当前挂单已关闭或不存在"),void setTimeout(function(){t.navigateBack()},2e3);o.orderInfo=i.data})},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},openDialog:function(){this.modalName="DialogModal1"},deleteitem:function(t){var i=0;t>-1&&this.form.items.splice(t,1),this.form.items.forEach(function(t,e){i+=parseFloat(""==t.wxgs?0:t.wxgs)+parseFloat(""==t.pjjg?0:t.pjjg)}),this.form.price=this.toDecimal(i)},confirm:function(){if(""!=this.value){var t=this.value;this.list={name:t,wxgs:"",pjjg:"",pjpp:"",wxsj:"",zbsj:""},this.form.items.push(this.list),this.value="",this.modalName=null}else this.$api.msg("请填写项目名称")},submit:function(i){if(console.log(s(i.detail.formId," at pages\\home\\quotedprice.vue:314")),this.form.formId=i.detail.formId,257==this.orderInfo.obj_type){for(var e=0;e<this.form.items.length;e++){if(""==this.form.items[e].name)return void this.$api.msg("第"+(e+1)+"个项目名称不能为空");if(""==this.form.items[e].pjjg)return void this.$api.msg("第"+(e+1)+"个保险价格不能为空");if(""==this.form.items[e].pjpp)return void this.$api.msg("第"+(e+1)+"个保险公司不能为空");if(""==this.form.items[e].zbsj)return void this.$api.msg("第"+(e+1)+"个保险有限期不能为空")}for(var a="",n=0;n<this.imgList.length;n++)n<this.imgList.length-1?a+=this.imgList[n]+",":a+=this.imgList[n];this.form.files=a}else for(var r=0;r<this.form.items.length;r++){if(""==this.form.items[r].name)return void this.$api.msg("第"+(r+1)+"个项目名称不能为空");if(""==this.form.items[r].wxgs)return void this.$api.msg("第"+(r+1)+"个维修工时不能为空");if(""==this.form.items[r].pjjg)return void this.$api.msg("第"+(r+1)+"个材料价格不能为空");if(""==this.form.items[r].pjpp)return void this.$api.msg("第"+(r+1)+"个材料品牌不能为空");if(""==this.form.items[r].wxsj)return void this.$api.msg("第"+(r+1)+"个维修时间不能为空");if(""==this.form.items[r].zbsj)return void this.$api.msg("第"+(r+1)+"个质保时间不能为空")}""!=this.form.desc?(console.log(s(this.form," at pages\\home\\quotedprice.vue:376")),this.$api.postWithData(this.api.bidding,{task_id:this.form.task_id,items:JSON.stringify(this.form.items),price:this.form.price,files:this.form.files,desc:this.form.desc},function(i){1==i.code&&(o.$api.msg(i.msg),t.reLaunch({url:"../index/index"}))})):this.$api.msg("维修建议不能为空")},toDecimal:function(t){var i=parseFloat(t);if(!isNaN(i))return i=Math.round(100*t)/100,i}}};i.default=r}).call(this,e("6e42")["default"],e("0de9")["default"])},"5bb8":function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement;t._self._c},o=[];e.d(i,"a",function(){return s}),e.d(i,"b",function(){return o})},a781:function(t,i,e){"use strict";(function(t){e("2899"),e("921b");s(e("66fd"));var i=s(e("d7e7"));function s(t){return t&&t.__esModule?t:{default:t}}t(i.default)}).call(this,e("6e42")["createPage"])},c7b2:function(t,i,e){"use strict";e.r(i);var s=e("3583"),o=e.n(s);for(var a in s)"default"!==a&&function(t){e.d(i,t,function(){return s[t]})}(a);i["default"]=o.a},d7e7:function(t,i,e){"use strict";e.r(i);var s=e("5bb8"),o=e("c7b2");for(var a in o)"default"!==a&&function(t){e.d(i,t,function(){return o[t]})}(a);var n=e("2877"),r=Object(n["a"])(o["default"],s["a"],s["b"],!1,null,null,null);i["default"]=r.exports}},[["a781","common/runtime","common/vendor"]]]);
});
require('pages/home/quotedprice.js');
__wxRoute = 'pages/home/orderpage';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/home/orderpage.js';

define('pages/home/orderpage.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/orderpage"],{"472f":function(t,a,e){},"7eca":function(t,a,e){"use strict";(function(t){e("2899"),e("921b");n(e("66fd"));var a=n(e("b517"));function n(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,e("6e42")["createPage"])},"8c75":function(t,a,e){"use strict";var n=e("472f"),o=e.n(n);o.a},"985e":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement;t._self._c},o=[];e.d(a,"a",function(){return n}),e.d(a,"b",function(){return o})},afa2:function(t,a,e){"use strict";e.r(a);var n=e("ea00"),o=e.n(n);for(var i in n)"default"!==i&&function(t){e.d(a,t,function(){return n[t]})}(i);a["default"]=o.a},b517:function(t,a,e){"use strict";e.r(a);var n=e("985e"),o=e("afa2");for(var i in o)"default"!==i&&function(t){e.d(a,t,function(){return o[t]})}(i);e("8c75");var r=e("2877"),s=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,null,null);a["default"]=s.exports},ea00:function(t,a,e){"use strict";(function(t,e){var n;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o={data:function(){return{loading:!1,orderInfo:{},form:{task_id:0,seller_id:0,unionid:"",paymodel:"1"}}},onShow:function(){n=this},onLoad:function(t){this.$api.postWithData(this.api.sureorder,{task_id:t.task_id,seller_id:t.seller_id},function(t){1==t.code&&(n.orderInfo=t.data)})},methods:{orderInfoPay:function(){this.loading=!0,this.form.task_id=this.orderInfo.task_id,this.form.seller_id=this.orderInfo.seller_id,this.form.unionid=t.getStorageSync("unionid"),console.log(e(this.form.unionid," at pages\\home\\orderpage.vue:77")),this.$api.postWithData(this.api.postOrder,this.form,function(a){1==a.code?1==a.data.status&&t.requestPayment({provider:"wxpay",signType:a.data.signType,timeStamp:a.data.timeStamp,nonceStr:a.data.nonceStr,package:a.data.package,paySign:a.data.paySign,orderInfo:a.data.out_trade_no,success:function(t){console.log(e(t," at pages\\home\\orderpage.vue:91")),n.payResult(a.data.task_ordersn)},fail:function(t){n.payResult(a.data.task_ordersn),n.loading=!1}}):(n.$api.msg(a.msg),n.loading=!1)})},payResult:function(a){this.$api.postWithData(this.api.payResult,{ordersn:a},function(a){0==a.code?(n.loading=!1,n.$api.msg(a.msg)):t.redirectTo({url:"paysuccess?data="+JSON.stringify(a.data)})})}}};a.default=o}).call(this,e("6e42")["default"],e("0de9")["default"])}},[["7eca","common/runtime","common/vendor"]]]);
});
require('pages/home/orderpage.js');
__wxRoute = 'pages/home/shopselect';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/home/shopselect.js';

define('pages/home/shopselect.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/shopselect"],{"2ded":function(t,e,i){"use strict";i.r(e);var a=i("8cbe"),o=i("352b");for(var r in o)"default"!==r&&function(t){i.d(e,t,function(){return o[t]})}(r);i("8b5c");var n=i("2877"),s=Object(n["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=s.exports},"352b":function(t,e,i){"use strict";i.r(e);var a=i("da9a"),o=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,function(){return a[t]})}(r);e["default"]=o.a},"8b5c":function(t,e,i){"use strict";var a=i("916b"),o=i.n(a);o.a},"8cbe":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=(t._self._c,t.__map(t.tabbar,function(e,i){var a=t.__map(t.bidshop,function(e,i){var a=e.create_time.substr(0,10);return{$orig:t.__get_orig(e),g0:a}});return{$orig:t.__get_orig(e),l0:a}}));t._isMounted||(t.e0=function(e){t.baojiaPop=!1}),t.$mp.data=Object.assign({},{$root:{l1:i}})},o=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return o})},"916b":function(t,e,i){},"992d":function(t,e,i){"use strict";(function(t){i("2899"),i("921b");a(i("66fd"));var e=a(i("2ded"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])},da9a:function(t,e,i){"use strict";(function(t,i){var a;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{modalName:"topModal",imagePreview:!1,totalprice:0,isSeller:1,uid:0,seller_id:0,task_id:0,title:"",isMember:0,modalMPShow:0,baojiaNow:{desc:"维修建议会啊实打实"},files:[],baojiao:[],seller:!1,bidding:!1,baojiaPop:!1,tabbar:["描述详情","报价商家","服务进程"],scrollLeft:0,winHeight:"",currentTab:0,active:0,orderInfo:{address:"",audit_reason:"",car_back_address:"",car_back_time:"",car_get_address:"",car_get_time:"",car_id:0,car_info:"",city:"",city_code:110100,comment:0,content:"",create_at:"",customer_reason:"",district:"",district_code:110101,experss_no:"",from_type:1,id:0,image:"",is_push:0,latitude:"",link_man:"",link_mobile:"",longitude:"",obj_type:0,obj_type2:0,obj_type2_name:"",obj_type3:"",obj_type3_name:[],obj_type_name:"",ordersn:"",pickup_service:0,predict_price:"",predict_time:"0",price:"0.00",province:"",province_code:11e4,remark:null,seller_id:0,sid_task:0,sort:0,status:0,time:"0",title:"",uid:0,views:0},bidshop:[],lookbidlog:{},orderprogress:[],areaPopshow:!0,cardCur:0,images:[],dotStyle:!1,towerStart:0,topPop:!0,height:this.CustomBar,items:{}}},onShow:function(){this.isSellers(),this.isBidding()},onLoad:function(e){a=this,t.getSystemInfo({success:function(t){var e=t.windowHeight;a.winHeight=e}}),a.task_id=e.task_id,this.seller_id=t.getStorageSync("seller_id"),this.uid=t.getStorageSync("uid");var i={task_id:e.task_id};this.$api.postWithData(this.api.taskDetail,i,function(e){if(0==e.code)return a.$api.msg("当前挂单已关闭或不存在"),void setTimeout(function(){t.navigateBack()},2e3);a.orderInfo=e.data,a.images=a.orderInfo.image.split(","),a.$api.postWithData(a.api.taskDetailLog,i,function(t){a.bidshop=t.data,a.$api.postWithData(a.api.taskDetailTimeLine,i,function(t){a.orderprogress=t.data})})})},methods:{switchTab:function(t){this.currentTab=t.detail.current,this.checkCor()},swichNav:function(t){var e=t.currentTarget.dataset.current;if(this.currentTab==e)return!1;this.currentTab=e},checkCor:function(){this.currentTab>3?this.scrollLeft=300:this.scrollLeft=0},showModalMP:function(){1==a.modalMPShow?a.modalMPShow=0:a.modalMPShow=1},isSellers:function(){this.$api.post(this.api.isSeller,function(t){2==t.code?a.seller=!0:a.seller=!1})},isBidding:function(){this.$api.postWithData(this.api.isBidding,{task_id:a.task_id},function(t){0==t.code?a.bidding=!1:a.bidding=!0})},previewImage:function(e,a){t.previewImage({current:a,urls:e,longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(t){console.log(i("选中了第"+(t.tapIndex+1)+"个按钮,第"+(t.index+1)+"张图片"," at pages\\home\\shopselect.vue:419"))},fail:function(t){console.log(i(t.errMsg," at pages\\home\\shopselect.vue:422"))}}})},lookdetail:function(t){this.items=t;var e={task_id:t.task_id,seller_id:t.seller_id};this.$api.postWithData(this.api.lookbidlog,e,function(t){a.baojiao=t.data,a.baojiao.items=JSON.parse(t.data.items),a.baojiaPop=!0,null!=t.data.files&&""!=t.data.files?a.files=t.data.files.split(","):a.files=[]})},cardSwiper:function(t){this.cardCur=t.detail.current},bidlogin:function(){t.navigateTo({url:"../mine/h5?url=/index/shop/login"})},navigateTo:function(e){t.navigateTo({url:e})},navigateToMap:function(e,i){var a,o,r,n;1==e?(a=Number(i.latitude),o=Number(i.longitude),r="位置",n=i.address):2==e?(a=Number(i.car_get_latitude),o=Number(i.car_get_longitude),r="位置",n=i.car_get_address):3==e&&(a=Number(i.car_back_latitude),o=Number(i.car_back_longitude),r="位置",n=i.car_back_address),t.openLocation({latitude:a,longitude:o,name:r,address:n})},activeTab:function(t){this.active=t.detail.index},submitorder:function(e){a.baojiaPop=!1,t.navigateTo({url:"orderpage?task_id="+e.task_id+"&seller_id="+e.seller_id})}}};e.default=o}).call(this,i("6e42")["default"],i("0de9")["default"])}},[["992d","common/runtime","common/vendor"]]]);
});
require('pages/home/shopselect.js');
__wxRoute = 'pages/index/precisefabu';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/precisefabu.js';

define('pages/index/precisefabu.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/precisefabu"],{"1ccd":function(e,t,i){"use strict";(function(e){i("2899"),i("921b");o(i("66fd"));var t=o(i("b2f4"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,i("6e42")["createPage"])},"24af":function(e,t,i){},"3e8c":function(e,t,i){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.modalName="bottomModal"},e.e1=function(t){e.modalName=null},e.e2=function(t){e.modalName=null},e.e3=function(t){e.modalName=null})},s=[];i.d(t,"a",function(){return o}),i.d(t,"b",function(){return s})},"6c38":function(e,t,i){"use strict";i.r(t);var o=i("b855"),s=i.n(o);for(var a in o)"default"!==a&&function(e){i.d(t,e,function(){return o[e]})}(a);t["default"]=s.a},b2f4:function(e,t,i){"use strict";i.r(t);var o=i("3e8c"),s=i("6c38");for(var a in s)"default"!==a&&function(e){i.d(t,e,function(){return s[e]})}(a);i("db2b");var n=i("2877"),c=Object(n["a"])(s["default"],o["a"],o["b"],!1,null,null,null);t["default"]=c.exports},b855:function(e,t,i){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,a,n=c(i("eeb8"));function c(e){return e&&e.__esModule?e:{default:e}}function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var d=i("5771"),u=i("48ee"),l=function(){return i.e("components/dateTime/dateTime").then(i.bind(null,"fbc8"))},f=function(){return Promise.all([i.e("common/vendor"),i.e("components/mpvue-citypicker/mpvueCityPicker")]).then(i.bind(null,"6699"))},m={components:{tuiDatetime:l,mpvueCityPicker:f},data:function(){var e;return e={isSelect:0,datapic:!1,currentDate:(new Date).getTime(),timetype:1,addressType:1,areaPopshow:!1,modalName:null,textareaBValue:"",selected1:0,selected2:0,classItem:[],chooceItem:[],items:[],text:'<view class="text-red">年检代办</view>',imgList:[],address:"",carInfoList:[],switched:!1,form:{formId:"",ordersn:"",car_id:0,province:"",city:"",district:"",province_code:"",city_code:"",district_code:"110101",content:"",longitude:"",latitude:"",address:"",link_man:"",link_mobile:"",obj_type:"",obj_type2:"",obj_type3:"",image:"",pickup_service:0,car_get_longitude:"",car_get_latitude:"",car_get_time:"",car_get_address:"",car_back_longitude:"",car_back_latitude:"",car_back_time:"",car_back_address:""},loading:!0,areaList:{},type:0,isupdate:!1,isClick:!1,mulLinkageTwoPicker:n.default,cityPickerValueDefault:[0,0,1],themeColor:"#007AFF",addressResult:{label:"请选择",value:[0,0,0],cityCode:"110101"}},r(e,"type",1),r(e,"startYear",1980),r(e,"endYear",2030),r(e,"cancelColor","#888"),r(e,"color","#5677fc"),r(e,"setDateTime",""),r(e,"result",""),e},mounted:function(){},onShow:function(){},onLoad:function(t){s=this,s.type=t.type,0==t.type?(s.isupdate=!1,this.bidCategoryList1(!1),e.getLocation({type:"wgs84",altitude:!0,geocode:!0,success:function(e){s.form.latitude=e.latitude,s.form.longitude=e.longitude,s.$api.get("https://api.map.baidu.com/reverse_geocoding/v3/?ak=Ulna6HAk7FsVuGeG4aOsV1wWZtxcosrC&output=json&coordtype=wgs84ll&location="+e.latitude+","+e.longitude,function(e){s.form.address=e.result.formatted_address,s.form.province=e.result.addressComponent.province,s.form.city=e.result.addressComponent.city,s.form.district=e.result.addressComponent.district,s.form.district_code=e.result.addressComponent.adcode})}})):(s.isupdate=!0,s.$api.postWithData(s.api.taskDetail,{task_id:t.task_id},function(e){s.form=e.data;var t=s.form.image.split(",");if(s.onEditorReady(),""!=t[0])for(var i=0;i<t.length;i++)s.imgList.push(t[i]);0==s.form.pickup_service?s.switched=!1:s.switched=!0,s.bidCategoryList1(!0)})),this.initCOS(),this.getCarNew()},methods:{showMulLinkageThreePicker:function(){this.$refs.mpvueCityPicker.show()},hideMulLinkageThreePicker:function(){this.$refs.mpvueCityPicker.pickerCancel()},onEditorReady:function(){var t=this;e.createSelectorQuery().select("#editor").context(function(e){t.editorCtx=e.context,t.editorCtx.insertText({text:s.form.content})}).exec()},initCOS:function(){a=new d({Bucket:s.api.Bucket,Region:s.api.Region,getAuthorization:function(e,t){s.$api.postWithData(s.api.qcloud_key,{bucket:e.Bucket,region:e.Region},function(e){var i=e.credentials;t({TmpSecretId:i.tmpSecretId,TmpSecretKey:i.tmpSecretKey,XCosSecurityToken:i.sessionToken,ExpiredTime:e.expiredTime})})}})},getCarNew:function(){this.$api.post(this.api.getCarNew,function(e){null==e.data?s.$api.msg("暂未录入车辆信息"):s.carInfoList=e.data})},bidCategoryList1:function(e){this.$api.postWithData(this.api.bidCategoryList,{pid:0,has_child:1},function(t){null!=t.data?(s.classItem=t.data,e?s.isClick?s.bidCategoryList2(e,id):s.bidCategoryList2(e,s.form.obj_type):(s.form.obj_type=s.classItem[0].id,s.bidCategoryList2(e,s.classItem[0].id))):s.$api.msg(t.msg)})},bidCategoryList2:function(e,t){s.chooceItem=[],s.items=[],this.$api.postWithData(this.api.bidCategoryList,{pid:t,has_child:1},function(i){null!=i.data?(s.chooceItem=i.data,e?s.isClick?(s.form.obj_type2=s.chooceItem[0].id,s.bidCategoryList3(e,t)):s.bidCategoryList3(e,s.form.obj_type2):(s.form.obj_type2=s.chooceItem[0].id,s.bidCategoryList3(e,s.chooceItem[0].id))):s.$api.msg(i.msg)})},bidCategoryList3:function(e,t){s.items=[],this.$api.postWithData(this.api.bidCategoryList,{pid:t,has_child:0},function(t){if(null!=t.data){if(s.items=t.data,e)for(var i=s.items,o=s.form.obj_type3,a=0,n=i.length;a<n;++a){var c=i[a];o.indexOf(c.id)>=0?s.$set(c,"checked",!0):s.$set(c,"checked",!1)}}else s.$api.msg(t.msg)})},show:function(e){this.timetype=e,this.cancelColor="#888",this.color="#5677fc",this.startYear=1980,this.endYear=2030,this.type=1,this.setDateTime=u.formatDate((new Date).getTime(),"YY-MM-DD hh-mm"),this.$refs.dateTime.show()},change:function(e){console.log(o(e," at pages\\index\\precisefabu.vue:513"));e.result;1==this.timetype?this.form.car_get_time=e.result:this.form.car_back_time=e.result},openPopTime:function(e){this.currentDate=new Date,this.timetype=e,this.datapic=!0},switchChooce:function(e){this.switched=e.detail.value,this.switched?this.form.pickup_service=1:this.form.pickup_service=0},onConfirm3:function(e){console.log(o(e," at pages\\index\\precisefabu.vue:536"));var t=e.label.split("-");this.form.province=t[0],this.form.city=t[1],this.form.district=t[2],this.form.district_code=e.cityCode,console.log(o(this.form.province," at pages\\index\\precisefabu.vue:544"))},checkboxChange:function(e){for(var t=this.items,i=e.detail.value,a="",n=0;n<i.length;n++)a+=i[n]+",";a.length>0&&(a=a.substr(0,a.length-1)),i=i+","+s.form.obj_type3,console.log(o(i," at pages\\index\\precisefabu.vue:559"));n=0;for(var c=t.length;n<c;++n){var r=t[n];i.indexOf(r.id)>=0?this.$set(r,"checked",!0):this.$set(r,"checked",!1)}this.form.obj_type3=a},submitForm:function(t){var i=s.form.content,a=i.replace("\n","");if(this.form.content=a,console.log(o(t.detail.formId," at pages\\index\\precisefabu.vue:575")),this.form.formId=t.detail.formId,""!=this.form.content)if(""!=this.form.address)if(""!=this.form.link_man)if(""!=this.form.link_mobile){for(var n="",c=0;c<this.imgList.length;c++)c<this.imgList.length-1?n+=this.imgList[c]+",":n+=this.imgList[c];this.form.image=n,this.$api.postWithData(this.api.publishbid,this.form,function(t){console.log(o(t," at pages\\index\\precisefabu.vue:605")),1==t.code&&(s.$api.msg(t.msg),setTimeout(function(){"home"==s.from?e.redirectTo({url:"../mine/publishbid"}):(s.$eventBus.$emit("myTaskList"),e.navigateBack())},3e3))})}else this.$api.msg("请填写联系电话");else this.$api.msg("请填写联系人");else this.$api.msg("请选择地址");else this.$api.msg("请填写描述内容")},checkClass1:function(e){this.isClick=!0,this.form.obj_type=this.classItem[e].id,this.bidCategoryList2(s.isupdate,this.classItem[e].id)},checkClass2:function(e){this.isClick=!0,this.form.obj_type2=this.chooceItem[e].id,this.bidCategoryList3(s.isupdate,this.chooceItem[e].id)},selected:function(e){this.isSelect=e,this.form.car_id=this.carInfoList[e].id},textareaAInput:function(e){this.form.content=e.detail.text},getNowAddress:function(){e.chooseLocation({success:function(e){s.form.longitude=e.longitude,s.form.latitude=e.latitude,s.form.address=e.address}})},ViewImage:function(t){e.previewImage({urls:this.imgList,current:t.currentTarget.dataset.url})},DelImg:function(t){var i=this;e.showModal({title:"温馨提示！",content:"确定要删除吗？",cancelText:"取消",confirmText:"确定",success:function(e){e.confirm&&i.imgList.splice(t.currentTarget.dataset.index,1)}})},doBefore:function(){console.log(o("doBefore"," at pages\\index\\precisefabu.vue:670"))},clk:function(t){var i=e.getSystemInfoSync(),o=i.windowWidth;i.windowHeight;this.$refs.avatar.fChooseImg(t,{selWidth:o-50+"px",selHeight:o-50+"px",expWidth:"800px",expHeight:"800px",inner:"true",canRotate:"false"})},doUpload:function(e){console.log(o(e.path," at pages\\index\\precisefabu.vue:687"));var t=e.path,i=new Date,n=i.getFullYear()+"",c=i.getMonth()+1+"",r=i.getDate()+"",d=n+c+r,u=i.getTime()+".png",l="uploads/"+d+"/"+u;a.postObject({Bucket:s.api.Bucket,Region:s.api.Region,Key:l,FilePath:t,onProgress:function(e){console.log(o(JSON.stringify(e)," at pages\\index\\precisefabu.vue:702"))}},function(e,t){console.log(o(e||t," at pages\\index\\precisefabu.vue:705")),s.imgList.push(s.api.UPLOAD_HOST+l)})},setAdd:function(t){e.chooseLocation({success:function(e){1==t?(s.form.car_get_latitude=e.latitude,s.form.car_get_longitude=e.longitude,s.form.car_get_address=e.address):2==t?(s.form.car_back_latitude=e.latitude,s.form.car_back_longitude=e.longitude,s.form.car_back_address=e.address):3==t&&(s.form.latitude=e.latitude,s.form.longitude=e.longitude,s.form.address=e.address)}})}}};t.default=m}).call(this,i("6e42")["default"],i("0de9")["default"])},db2b:function(e,t,i){"use strict";var o=i("24af"),s=i.n(o);s.a}},[["1ccd","common/runtime","common/vendor"]]]);
});
require('pages/index/precisefabu.js');
__wxRoute = 'pages/index/fastfabu';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/fastfabu.js';

define('pages/index/fastfabu.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/fastfabu"],{"2d21":function(t,e,i){"use strict";i.r(e);var a=i("623b"),s=i("be69");for(var o in s)"default"!==o&&function(t){i.d(e,t,function(){return s[t]})}(o);i("c949");var n=i("2877"),r=Object(n["a"])(s["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},"623b":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},s=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return s})},6409:function(t,e,i){"use strict";(function(t){i("2899"),i("921b");a(i("66fd"));var e=a(i("2d21"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])},"71c0":function(t,e,i){"use strict";(function(t,a){var s,o;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("5771"),r=i("48ee"),c=function(){return i.e("components/dateTime/dateTime").then(i.bind(null,"fbc8"))},d={components:{tuiDatetime:c},data:function(){return{from:"",className:[],text:'<div class="text-red">年检代办</div>',imgList:[],address:"",desc2:"",form:{ordersn:"",obj_type:"",content:"",image:"",formId:"",address:"",link_man:"",link_mobile:"",province:"",city:"",district:"",district_code:"",longitude:"",latitude:"",pickup_service:0,car_get_longitude:"",car_get_latitude:"",car_get_time:"",car_get_address:"",car_back_longitude:"",car_back_latitude:"",car_back_time:"",car_back_address:""},switched:!1,datapic:!1,currentDate:(new Date).getTime(),timetype:1,addressType:1,type:1,startYear:1980,endYear:2030,cancelColor:"#888",color:"#5677fc",setDateTime:"",result:""}},onLoad:function(e){s=this,this.from=e.from,s.initCOS(),t.getLocation({type:"wgs84",altitude:!0,geocode:!0,success:function(t){console.log(a(t," at pages\\index\\fastfabu.vue:191")),s.form.latitude=t.latitude,s.form.longitude=t.longitude,s.$api.get("https://api.map.baidu.com/reverse_geocoding/v3/?ak=Ulna6HAk7FsVuGeG4aOsV1wWZtxcosrC&output=json&coordtype=wgs84ll&location="+t.latitude+","+t.longitude,function(t){s.form.address=t.result.formatted_address,s.form.province=t.result.addressComponent.province,s.form.city=t.result.addressComponent.city,s.form.district=t.result.addressComponent.district,s.form.district_code=t.result.addressComponent.adcode})}}),this.$api.postWithData(this.api.bidCategoryList,{pid:0,has_child:1},function(t){s.className=t.data,0==e.type?(s.form.obj_type=s.className[0].id,s.desc2=s.className[0].desc2):s.$api.postWithData(s.api.taskDetail,{task_id:e.task_id},function(t){s.form=t.data,s.onEditorReady();var e=s.form.image.split(",");if(""!=e[0])for(var i=0;i<e.length;i++)s.imgList.push(e[i]);0==s.form.pickup_service?s.switched=!1:s.switched=!0})})},methods:{show:function(t){this.timetype=t,this.cancelColor="#888",this.color="#5677fc",this.startYear=1980,this.endYear=2030,this.type=1,this.setDateTime=r.formatDate((new Date).getTime(),"YY-MM-DD hh-mm"),this.$refs.dateTime.show()},change:function(t){console.log(a(t," at pages\\index\\fastfabu.vue:250"));t.result;1==this.timetype?this.form.car_get_time=t.result:this.form.car_back_time=t.result},onEditorReady:function(){var e=this;t.createSelectorQuery().select("#editor").context(function(t){e.editorCtx=t.context,e.editorCtx.insertText({text:s.form.content})}).exec()},setAdd:function(e){t.chooseLocation({success:function(t){1==e?(s.form.car_get_latitude=t.latitude,s.form.car_get_longitude=t.longitude,s.form.car_get_address=t.address):2==e?(s.form.car_back_latitude=t.latitude,s.form.car_back_longitude=t.longitude,s.form.car_back_address=t.address):3==e&&(s.form.latitude=t.latitude,s.form.longitude=t.longitude,s.form.address=t.address)}})},SwitchA:function(t){this.switched=t.detail.value,this.switched?this.form.pickup_service=1:this.form.pickup_service=0},initCOS:function(){o=new n({Bucket:s.api.Bucket,Region:s.api.Region,getAuthorization:function(t,e){console.log(a(t," at pages\\index\\fastfabu.vue:301")),s.$api.postWithData(s.api.qcloud_key,{bucket:t.Bucket,region:t.Region},function(t){var i=t.credentials;e({TmpSecretId:i.tmpSecretId,TmpSecretKey:i.tmpSecretKey,XCosSecurityToken:i.sessionToken,ExpiredTime:t.expiredTime})})}})},submitForm:function(e){this.form.formId=e.detail.formId;var i=s.form.content,o=i.replace("\n","");if(this.form.content=o,""!=this.form.content)if(""!=this.form.address)if(""!=this.form.link_man)if(""!=this.form.link_mobile){for(var n="",r=0;r<this.imgList.length;r++)r<this.imgList.length-1?n+=this.imgList[r]+",":n+=this.imgList[r];this.form.image=n,this.$api.postWithData(this.api.publishbid,this.form,function(e){console.log(a(e," at pages\\index\\fastfabu.vue:352")),1==e.code&&(s.$api.msg(e.msg),setTimeout(function(){"home"==s.from?t.redirectTo({url:"../mine/publishbid"}):(s.$eventBus.$emit("myTaskList"),t.navigateBack())},3e3))})}else this.$api.msg("请填写联系电话");else this.$api.msg("请填写联系人");else this.$api.msg("请选择地址");else this.$api.msg("请填写描述内容")},checkClass:function(t){this.form.obj_type=this.className[t].id,this.desc2=this.className[t].desc2},textareaAInput:function(t){this.form.content=t.detail.text},getNowAddress:function(){t.chooseLocation({success:function(t){s.form.longitude=t.longitude,s.form.latitude=t.latitude,s.form.address=t.address,console.log(a(t.address," at pages\\index\\fastfabu.vue:382"))}})},ViewImage:function(e){t.previewImage({urls:this.imgList,current:e.currentTarget.dataset.url})},DelImg:function(e){var i=this;t.showModal({title:"温馨提示！",content:"确定要删除吗？",cancelText:"取消",confirmText:"确定",success:function(t){t.confirm&&i.imgList.splice(e.currentTarget.dataset.index,1)}})},doBefore:function(){console.log(a("doBefore"," at pages\\index\\fastfabu.vue:406"))},clk:function(e){var i=t.getSystemInfoSync(),a=i.windowWidth;i.windowHeight;this.$refs.avatar.fChooseImg(e,{selWidth:a-50+"px",selHeight:a-50+"px",expWidth:"800px",expHeight:"800px",inner:"true",canRotate:"false"})},doUpload:function(t){console.log(a(t.path," at pages\\index\\fastfabu.vue:423"));var e=t.path,i=new Date,n=i.getFullYear()+"",r=i.getMonth()+1+"",c=i.getDate()+"",d=n+r+c,u=i.getTime()+".png",f="uploads/"+d+"/"+u;console.log(a(f," at pages\\index\\fastfabu.vue:432")),o.postObject({Bucket:s.api.Bucket,Region:s.api.Region,Key:f,FilePath:e,onProgress:function(t){console.log(a(JSON.stringify(t)," at pages\\index\\fastfabu.vue:439"))}},function(t,e){console.log(a(t||e," at pages\\index\\fastfabu.vue:442")),console.log(a(s.api.UPLOAD_HOST+f," at pages\\index\\fastfabu.vue:443")),s.imgList.push(s.api.UPLOAD_HOST+f),console.log(a(s.imgList," at pages\\index\\fastfabu.vue:445"))})}}};e.default=d}).call(this,i("6e42")["default"],i("0de9")["default"])},be69:function(t,e,i){"use strict";i.r(e);var a=i("71c0"),s=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=s.a},c949:function(t,e,i){"use strict";var a=i("e139"),s=i.n(a);s.a},e139:function(t,e,i){}},[["6409","common/runtime","common/vendor"]]]);
});
require('pages/index/fastfabu.js');
__wxRoute = 'pages/more/nearby_merchants';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/more/nearby_merchants.js';

define('pages/more/nearby_merchants.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/more/nearby_merchants"],{"22ad":function(t,e,n){},"34ba":function(t,e,n){"use strict";(function(t){n("2899"),n("921b");i(n("66fd"));var e=i(n("3fb4"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"3fb4":function(t,e,n){"use strict";n.r(e);var i=n("ac24"),a=n("6c0c");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("65c7");var r=n("2877"),c=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=c.exports},"65c7":function(t,e,n){"use strict";var i=n("22ad"),a=n.n(i);a.a},"6c0c":function(t,e,n){"use strict";n.r(e);var i=n("e7d9"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},ac24:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.modalMPShow=!1})},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},e7d9:function(t,e,n){"use strict";(function(t){var n;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{tabbar:["商家项目","商家商品"],winHeight:"",currentTab:0,scrollLeft:0,modalMPShow:!1,tabs:["商家项目","商家商品"],active:0,images:[""],dotStyle:!1,seller:{},id:0}},onShow:function(){},onLoad:function(e){n=this,this.id=e.id,this.sellerinfo(),t.getSystemInfo({success:function(t){var e=t.windowHeight;n.winHeight=e}})},methods:{switchTab:function(t){this.currentTab=t.detail.current,this.checkCor()},swichNav:function(t){var e=t.currentTarget.dataset.current;if(this.currentTab==e)return!1;this.currentTab=e},checkCor:function(){this.currentTab>2?this.scrollLeft=200:this.scrollLeft=0},callPhone:function(e){t.makePhoneCall({phoneNumber:e})},ToastMsg:function(){this.modalMPShow=!0},sellerinfo:function(){this.$api.postWithData(this.api.sellerinfo,{id:this.id},function(t){n.seller=t.code})},openLocation:function(e){t.openLocation({latitude:Number(e.seller.latitude),longitude:Number(e.seller.longitude),name:e.seller.title,address:e.seller.address})},activeTab:function(t){this.active=t.detail.index}}};e.default=i}).call(this,n("6e42")["default"])}},[["34ba","common/runtime","common/vendor"]]]);
});
require('pages/more/nearby_merchants.js');
__wxRoute = 'pages/market/home';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/market/home.js';

define('pages/market/home.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/market/home"],{"1e43":function(t,e,s){"use strict";(function(t){s("2899"),s("921b");i(s("66fd"));var e=i(s("3bd3"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,s("6e42")["createPage"])},"3bd3":function(t,e,s){"use strict";s.r(e);var i=s("90b7"),o=s("d04d");for(var n in o)"default"!==n&&function(t){s.d(e,t,function(){return o[t]})}(n);s("6771");var a=s("2877"),r=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,null,null);e["default"]=r.exports},6771:function(t,e,s){"use strict";var i=s("7c7d"),o=s.n(i);o.a},"7c7d":function(t,e,s){},"90b7":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=(t._self._c,t.__map(t.getTaskList,function(e,s){var i=t._f("km")(null==e.distance?0:e.distance);return{$orig:t.__get_orig(e),f0:i}}));t.$mp.data=Object.assign({},{$root:{l0:s}})},o=[];s.d(e,"a",function(){return i}),s.d(e,"b",function(){return o})},c4a6:function(t,e,s){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,n=function(){return s.e("components/top-dropdown/top-dropdown").then(s.bind(null,"7683"))},a={name:"components",components:{tuiTopDropdown:n},filters:{km:function(t){return null!=t?(Number(t)/1e3).toFixed(2)+"km":""}},data:function(){return{seller:!1,isLoad:!0,cardCur:0,tabIndex:1,selectedName:["报价中","距离","服务类型"],selectH1:0,selectH2:0,selectH3:0,dropdownList1:[{value:1,name:"报价中",selected:!1},{value:2,name:"服务中",selected:!1},{value:3,name:"服务完成",selected:!1}],dropdownList2:[{value:0,name:"距离",selected:!1},{value:1,name:"距离最近",selected:!1},{value:2,name:"距离最远",selected:!1}],getTaskCategoryList:[],getTaskList:[],form:{latitude:0,longitude:0,keywords:"",sort_1:0,sort_2:0,sort_3:0,page:1,size:10}}},methods:{searchBykeywords:function(t){this.form.keywords=t.detail.value,this.isOpenRefresh(!0)},checked:function(e,s){var i=e;console.log(t(e," at pages\\market\\home.vue:186"));for(var o=0;o<i.length;o++)i[o].selected=s==o},px:function(t){return i.upx2px(t)+"px"},showDropdownList:function(){1==this.tabIndex&&(this.selectH1=400,this.selectH2=0,this.selectH3=0),2==this.tabIndex&&(this.selectH1=0,this.selectH2=400,this.selectH3=0),3==this.tabIndex&&(this.selectH1=0,this.selectH2=0,this.selectH3=300)},hideDropdownList:function(){1==this.tabIndex&&(this.selectH1=0,this.selectH2=0,this.selectH3=0),2==this.tabIndex&&(this.selectH1=0,this.selectH2=0,this.selectH3=0),3==this.tabIndex&&(this.selectH1=0,this.selectH2=0,this.selectH3=0)},dropdownItem2:function(t){var e=t.currentTarget.dataset;this.selectedName[0]=e.name;for(var s=0;s<this.dropdownList1.length;s++)this.dropdownList1[s].selected=!1;this.dropdownList1[e.index].selected=!0,this.form.sort_1=e.value,this.selectH1=0,this.isOpenRefresh(!0)},dropdownItem4:function(t){var e=t.currentTarget.dataset;this.selectedName[1]=e.name;for(var s=0;s<this.dropdownList2.length;s++)this.dropdownList2[s].selected=!1;this.dropdownList2[e.index].selected=!0,this.form.sort_2=e.value,this.selectH2=0,this.isOpenRefresh(!0)},dropdownItem5:function(t){var e=t.currentTarget.dataset;this.selectedName[2]=e.name;for(var s=0;s<this.getTaskCategoryList.length;s++)this.getTaskCategoryList[s].selected=!1;this.getTaskCategoryList[e.index].selected=!0,this.form.sort_3=e.value,this.selectH3=0,this.isOpenRefresh(!0)},screen:function(t){var e=t.currentTarget.dataset.index;this.tabIndex=e,1==e&&(0==this.selectH1?this.showDropdownList():this.hideDropdownList()),2==e&&(0==this.selectH2?this.showDropdownList():this.hideDropdownList()),3==e&&(0==this.selectH3?this.showDropdownList():this.hideDropdownList())},isOpenRefresh:function(t){this.isLoad=!0,t&&(this.getTaskList=[],this.form.page=1);var e={keywords:this.form.keywords,latitude:this.form.latitude,longitude:this.form.longitude,sort_1:this.form.sort_1,sort_2:this.form.sort_2,sort_3:this.form.sort_3,page:this.form.page,size:this.form.size};this.$api.postWithData(this.api.getTaskList,e,function(t){t.data.length>0?o.isLoad=!0:o.isLoad=!1;for(var e=0;e<t.data.length;e++)o.getTaskList.push(t.data[e]);for(var s=0;s<o.getTaskList.length;s++)o.getTaskList[s].image=""==o.getTaskList[s].image?"../../static/logo.jpg":o.getTaskList[s].image.split(",")[0];o.getTaskList.length<=5&&(o.isLoad=!1)})},ScrollB:function(){this.form.page++,this.isOpenRefresh(!1)},navigateTo:function(e,s){this.$api.post(this.api.getCarNew,function(n){if(-1==n)o.$eventBus.$emit("register"),i.switchTab({url:"../home/home"});else{var a=i.getStorageSync("uid");o.$api.post(o.api.isSeller,function(n){2==n.code?o.seller=!0:o.seller=!1,s.uid==a||o.seller?(console.log(t(s.uid," at pages\\market\\home.vue:357")),i.navigateTo({url:e})):o.$api.msg("仅限发布者和商家可查看详情")})}})}},onReachBottom:function(){this.form.page++,this.isOpenRefresh(!1)},mounted:function(){o=this,this.dropdownList1[0].selected=!0,this.dropdownList2[0].selected=!0,this.$api.post(this.api.getTaskCategoryList,function(t){o.getTaskCategoryList=t.data;for(var e=0;e<o.getTaskCategoryList.length;e++)o.$set(o.getTaskCategoryList[e],"selected",!1)}),this.form.longitude=this.long,this.form.latitude=this.lat,this.isOpenRefresh(!0),i.setNavigationBarColor({frontColor:"#000000",backgroundColor:"#ff0000"})}};e.default=a}).call(this,s("0de9")["default"],s("6e42")["default"])},d04d:function(t,e,s){"use strict";s.r(e);var i=s("c4a6"),o=s.n(i);for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);e["default"]=o.a}},[["1e43","common/runtime","common/vendor"]]]);
});
require('pages/market/home.js');
__wxRoute = 'pages/market/more';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/market/more.js';

define('pages/market/more.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/market/more"],{"28f0":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=(t._self._c,t.__map(t.getTaskList,function(e,s){var i=t._f("km")(null==e.distance?0:e.distance);return{$orig:t.__get_orig(e),f0:i}}));t.$mp.data=Object.assign({},{$root:{l0:s}})},o=[];s.d(e,"a",function(){return i}),s.d(e,"b",function(){return o})},"3d61":function(t,e,s){"use strict";var i=s("5873"),o=s.n(i);o.a},5873:function(t,e,s){},"746c":function(t,e,s){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,a=function(){return s.e("components/top-dropdown/top-dropdown").then(s.bind(null,"7683"))},n={name:"components",components:{tuiTopDropdown:a},filters:{km:function(t){return null!=t?(Number(t)/1e3).toFixed(2)+"km":""}},data:function(){return{seller:!1,isLoad:!0,cardCur:0,tabIndex:1,selectedName:["报价中","距离","服务类型"],selectH1:0,selectH2:0,selectH3:0,dropdownList1:[{value:1,name:"报价中",selected:!1},{value:2,name:"服务中",selected:!1},{value:3,name:"服务完成",selected:!1}],dropdownList2:[{value:0,name:"距离",selected:!1},{value:1,name:"距离最近",selected:!1},{value:2,name:"距离最远",selected:!1}],getTaskCategoryList:[],getTaskList:[],form:{latitude:0,longitude:0,keywords:"",sort_1:0,sort_2:0,sort_3:0,page:1,size:10},location:"定位中",avatarUrl:""}},onLoad:function(e){o=this,this.dropdownList1[0].selected=!0,this.dropdownList2[0].selected=!0,o.avatarUrl=t.getStorageSync("headimg"),this.$api.post(this.api.getTaskCategoryList,function(t){o.getTaskCategoryList=t.data;for(var e=0;e<o.getTaskCategoryList.length;e++)o.$set(o.getTaskCategoryList[e],"selected",!1)}),this.form.longitude=this.long,this.form.latitude=this.lat,o.isOpenRefresh(!0),0!=this.lat&&this.$api.get("https://api.map.baidu.com/reverse_geocoding/v3/?ak=Ulna6HAk7FsVuGeG4aOsV1wWZtxcosrC&output=json&coordtype=wgs84ll&location="+this.lat+","+this.long,function(t){o.location=t.result.addressComponent.city})},methods:{swithTab:function(){t.switchTab({url:"../mine/personal"})},searchBykeywords:function(t){this.form.keywords=t.detail.value,this.isOpenRefresh(!0)},checked:function(t,e){var s=t;console.log(i(t," at pages\\market\\more.vue:259"));for(var o=0;o<s.length;o++)s[o].selected=e==o},px:function(e){return t.upx2px(e)+"px"},showDropdownList:function(){1==this.tabIndex&&(this.selectH1=400,this.selectH2=0,this.selectH3=0),2==this.tabIndex&&(this.selectH1=0,this.selectH2=400,this.selectH3=0),3==this.tabIndex&&(this.selectH1=0,this.selectH2=0,this.selectH3=300)},hideDropdownList:function(){1==this.tabIndex&&(this.selectH1=0,this.selectH2=0,this.selectH3=0),2==this.tabIndex&&(this.selectH1=0,this.selectH2=0,this.selectH3=0),3==this.tabIndex&&(this.selectH1=0,this.selectH2=0,this.selectH3=0)},dropdownItem2:function(t){console.log(i(t.currentTarget.dataset," at pages\\market\\more.vue:306"));var e=t.currentTarget.dataset;this.selectedName[0]=e.name;for(var s=0;s<this.dropdownList1.length;s++)this.dropdownList1[s].selected=!1;this.dropdownList1[e.index].selected=!0,this.form.sort_1=e.value,this.selectH1=0,this.isOpenRefresh(!0)},dropdownItem4:function(t){console.log(i(t.currentTarget.dataset," at pages\\market\\more.vue:318"));var e=t.currentTarget.dataset;this.selectedName[1]=e.name;for(var s=0;s<this.dropdownList2.length;s++)this.dropdownList2[s].selected=!1;this.dropdownList2[e.index].selected=!0,this.form.sort_2=e.value,this.selectH2=0,this.isOpenRefresh(!0)},dropdownItem5:function(t){console.log(i(t.currentTarget.dataset," at pages\\market\\more.vue:330"));var e=t.currentTarget.dataset;this.selectedName[2]=e.name;for(var s=0;s<this.getTaskCategoryList.length;s++)this.getTaskCategoryList[s].selected=!1;this.getTaskCategoryList[e.index].selected=!0,this.form.sort_3=e.value,this.selectH3=0,this.isOpenRefresh(!0)},screen:function(t){var e=t.currentTarget.dataset.index;console.log(i(e," at pages\\market\\more.vue:343")),this.tabIndex=e,1==e&&(0==this.selectH1?this.showDropdownList():this.hideDropdownList()),2==e&&(0==this.selectH2?this.showDropdownList():this.hideDropdownList()),3==e&&(0==this.selectH3?this.showDropdownList():this.hideDropdownList())},isOpenRefresh:function(e){this.isLoad=!0,e&&(this.getTaskList=[],this.form.page=1);var s={keywords:this.form.keywords,latitude:this.form.latitude,longitude:this.form.longitude,sort_1:this.form.sort_1,sort_2:this.form.sort_2,sort_3:this.form.sort_3,page:this.form.page,size:this.form.size};this.$api.postWithData(this.api.getTaskList,s,function(e){t.stopPullDownRefresh(),e.data.length>0?o.isLoad=!0:o.isLoad=!1;for(var s=0;s<e.data.length;s++)o.getTaskList.push(e.data[s]);for(var i=0;i<o.getTaskList.length;i++)o.getTaskList[i].image=""==o.getTaskList[i].image?"../../static/logo.jpg":o.getTaskList[i].image.split(",")[0];o.getTaskList.length<=5&&(o.isLoad=!1)})},navigateTo:function(e,s){var a=t.getStorageSync("uid");o.$api.post(o.api.isSeller,function(n){2==n.code?o.seller=!0:o.seller=!1,s.uid==a||o.seller?(console.log(i(s.uid," at pages\\market\\more.vue:422")),t.navigateTo({url:e})):o.$api.msg("仅限发布者和商家可查看详情")})}},onPullDownRefresh:function(){this.isOpenRefresh(!0)},onReachBottom:function(){this.form.page++,this.isOpenRefresh(!1)},onHide:function(){console.log(i("onHide"," at pages\\market\\more.vue:440"))}};e.default=n}).call(this,s("6e42")["default"],s("0de9")["default"])},9768:function(t,e,s){"use strict";(function(t){s("2899"),s("921b");i(s("66fd"));var e=i(s("a1b2"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,s("6e42")["createPage"])},a1b2:function(t,e,s){"use strict";s.r(e);var i=s("28f0"),o=s("b677");for(var a in o)"default"!==a&&function(t){s.d(e,t,function(){return o[t]})}(a);s("3d61");var n=s("2877"),r=Object(n["a"])(o["default"],i["a"],i["b"],!1,null,null,null);e["default"]=r.exports},b677:function(t,e,s){"use strict";s.r(e);var i=s("746c"),o=s.n(i);for(var a in i)"default"!==a&&function(t){s.d(e,t,function(){return i[t]})}(a);e["default"]=o.a}},[["9768","common/runtime","common/vendor"]]]);
});
require('pages/market/more.js');
__wxRoute = 'pages/mine/home';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mine/home.js';

define('pages/mine/home.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/home"],{4930:function(e,n,a){"use strict";(function(e,a){var o;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={name:"mine",data:function(){return{tuchaoAppid:"wx8abaf00ee8c3202e",extraData:{},modalName:null,avatarUrl:"",nickname:"",modalMPShow:0,StatusBar:this.StatusBar,CustomBar:this.CustomBar,changygn:[{cuIcon:"calendar",color:"olive",name:"我的挂单",url:"../mine/publishbid",sessionFrom:""},{cuIcon:"moneybag",color:"red",name:"我是商家",url:"../home/businesshome",sessionFrom:""},{cuIcon:"scan",color:"black",name:"扫码核销",url:"smhx",sessionFrom:""},{cuIcon:"service",color:"orange",name:"客服热线",url:"4000851667",sessionFrom:"phone"},{cuIcon:"message",color:"cyan",name:"在线客服",url:"1",sessionFrom:"message"},{cuIcon:"more",color:"red",name:"更多精彩",url:"2",sessionFrom:"more"}],sellerFuns:[],otherFuns:[],scanTaskResult:{vc_id:"",tp_ordersn:"",log_ordersn:"",tp_id:0,tp_title:"",tp_price:"",seller_id:0,seller_title:"",uid:0,nickname:"",number:"",vc_status:0,tp_status:0,log_status:0,vc_use_time:""}}},mounted:function(){o=this,e.setNavigationBarColor({frontColor:"#ffffff",backgroundColor:"#182E6C"}),this.avatarUrl=e.getStorageSync("headimg"),this.nickname=e.getStorageSync("nickname")},methods:{showModalMP:function(){1==o.modalMPShow?o.modalMPShow=0:o.modalMPShow=1,console.log(a(o.modalMPShow," at pages\\mine\\home.vue:216"))},getUserInfo:function(n){e.setStorageSync("avatarUrl",n.detail.userInfo.avatarUrl)},navigateTo:function(n){"4000851667"!=n?"smhx"!=n?"goMP"!=n?e.navigateTo({url:n}):o.showModalMP():e.scanCode({success:function(e){var n={vc_id:e.result};o.scanTask(n)},fail:function(e){}}):e.makePhoneCall({phoneNumber:n})},scanTask:function(e){o.$api.postWithData(o.api.scanTask,e,function(e){1==e.code?(o.scanTaskResult=e.data,o.modalName="Modal",o.$api.msg(e.msg)):o.$api.msg(e.msg)})}}};n.default=t}).call(this,a("6e42")["default"],a("0de9")["default"])},"4cc1":function(e,n,a){"use strict";(function(e){a("2899"),a("921b");o(a("66fd"));var n=o(a("d073"));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,a("6e42")["createPage"])},6351:function(e,n,a){"use strict";a.r(n);var o=a("4930"),t=a.n(o);for(var s in o)"default"!==s&&function(e){a.d(n,e,function(){return o[e]})}(s);n["default"]=t.a},b9c2:function(e,n,a){},c64a:function(e,n,a){"use strict";var o=a("b9c2"),t=a.n(o);t.a},d073:function(e,n,a){"use strict";a.r(n);var o=a("df85"),t=a("6351");for(var s in t)"default"!==s&&function(e){a.d(n,e,function(){return t[e]})}(s);a("c64a");var r=a("2877"),c=Object(r["a"])(t["default"],o["a"],o["b"],!1,null,null,null);n["default"]=c.exports},df85:function(e,n,a){"use strict";var o=function(){var e=this,n=e.$createElement;e._self._c;e._isMounted||(e.e0=function(n){e.modalName=null},e.e1=function(n){e.modalName=null})},t=[];a.d(n,"a",function(){return o}),a.d(n,"b",function(){return t})}},[["4cc1","common/runtime","common/vendor"]]]);
});
require('pages/mine/home.js');
__wxRoute = 'pages/more/home';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/more/home.js';

define('pages/more/home.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/more/home"],{"014d":function(e,t,i){"use strict";var s=i("d976"),o=i.n(s);o.a},5005:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=(e._self._c,e.__map(e.getSellerList,function(t,i){var s=e._f("km")(null==t.distance?0:t.distance),o=e._f("views")(t.view),n=e._f("views")(t.commit_count);return{$orig:e.__get_orig(t),f0:s,f1:o,f2:n}}));e.$mp.data=Object.assign({},{$root:{l0:i}})},o=[];i.d(t,"a",function(){return s}),i.d(t,"b",function(){return o})},"5a94":function(e,t,i){"use strict";(function(e){i("2899"),i("921b");s(i("66fd"));var t=s(i("8469"));function s(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,i("6e42")["createPage"])},"6edc":function(e,t,i){"use strict";(function(e,s){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(i("eeb8"));function n(e){return e&&e.__esModule?e:{default:e}}var r,a=function(){return Promise.all([i.e("common/vendor"),i.e("components/mpvue-citypicker/mpvueCityPicker")]).then(i.bind(null,"6699"))},d=function(){return i.e("components/top-dropdown/top-dropdown").then(i.bind(null,"7683"))},l={name:"components",components:{tuiTopDropdown:d,mpvueCityPicker:a},filters:{views:function(e){return Number(e)>999?"999+":e.toFixed(0)},km:function(e){return null!=e?(Number(e)/1e3).toFixed(2)+"km":""}},data:function(){return{CustomBar:this.CustomBar,loading:!0,areaList:{},swiperList:[],isLoad:!0,cardCur:0,tabIndex:1,selectedName:["区域","距离","服务类型"],selectH1:0,selectH2:0,selectH3:0,dropdownList1:[{value:1,name:"报价中",selected:!1},{value:2,name:"服务中",selected:!1},{value:3,name:"服务完成",selected:!1}],dropdownList2:[{value:1,name:"距离最近",selected:!1},{value:2,name:"距离最远",selected:!1}],gettypelist:[],getSellerList:[],district_code:"",form:{latitude:0,longitude:0,keywords:"",page:1,size:5,condition1:"",condition2:"1",condition3:[]},isfixed:!1,mulLinkageTwoPicker:o.default,cityPickerValueDefault:[0,0,1],themeColor:"#007AFF",addressResult:{label:"请选择",value:[0,0,0],cityCode:"110101"}}},methods:{showMulLinkageThreePicker:function(){this.$refs.mpvueCityPicker.show()},hideMulLinkageThreePicker:function(){},onCancel:function(t){this.hideDropdownList(),console.log(e(t," at pages\\more\\home.vue:197"))},onConfirm3:function(t){console.log(e(t," at pages\\more\\home.vue:200"));var i=t.label.split("-");this.form.condition1=i[0]+"/"+i[1]+"/"+i[2],console.log(e(this.form.condition1," at pages\\more\\home.vue:203")),this.hideDropdownList(),this.isOpenRefresh(!0)},searchBykeywords:function(e){this.form.keywords=e.detail.value,this.isOpenRefresh(!0)},checked:function(t,i){var s=t;console.log(e(t," at pages\\more\\home.vue:213"));for(var o=0;o<s.length;o++)s[o].selected=i==o},showDropdownList:function(){1==this.tabIndex&&(this.showMulLinkageThreePicker(),this.selectH1=400,this.selectH2=0,this.selectH3=0),2==this.tabIndex&&(this.hideMulLinkageThreePicker(),this.selectH1=0,this.selectH2=400,this.selectH3=0),3==this.tabIndex&&(this.hideMulLinkageThreePicker(),this.selectH1=0,this.selectH2=0,this.selectH3=300)},hideDropdownList:function(){1==this.tabIndex&&(this.hideMulLinkageThreePicker(),this.selectH1=0,this.selectH2=0,this.selectH3=0),2==this.tabIndex&&(this.hideMulLinkageThreePicker(),this.selectH1=0,this.selectH2=0,this.selectH3=0),3==this.tabIndex&&(this.hideMulLinkageThreePicker(),this.selectH1=0,this.selectH2=0,this.selectH3=0)},dropdownItem2:function(e){this.selectH1=0,this.isOpenRefresh(!0)},dropdownItem4:function(t){console.log(e(t.currentTarget.dataset," at pages\\more\\home.vue:267"));var i=t.currentTarget.dataset;this.selectedName[1]=i.name;for(var s=0;s<this.dropdownList2.length;s++)this.dropdownList2[s].selected=!1;this.dropdownList2[i.index].selected=!0,this.form.condition2=i.value,this.selectH2=0,this.isOpenRefresh(!0)},dropdownItem5:function(t){console.log(e(t.currentTarget.dataset," at pages\\more\\home.vue:279"));var i=t.currentTarget.dataset;this.gettypelist[i.index].selected=!this.gettypelist[i.index].selected},getCondition:function(){this.selectH3=0;for(var e=0;e<this.gettypelist.length;e++)this.gettypelist[e].selected&&this.form.condition3.push(this.gettypelist[e].id);this.isOpenRefresh(!0)},screen:function(t){var i=t.currentTarget.dataset.index;console.log(e(i," at pages\\more\\home.vue:295")),this.tabIndex=i,1==i&&(0==this.selectH1?this.showDropdownList():this.hideDropdownList()),2==i&&(0==this.selectH2?this.showDropdownList():this.hideDropdownList()),3==i&&(0==this.selectH3?this.showDropdownList():this.hideDropdownList())},isOpenRefresh:function(e){this.isLoad=!0,e&&(this.getSellerList=[],this.form.page=1);var t={keywords:this.form.keywords,latitude:this.form.latitude,longitude:this.form.longitude,condition1:this.form.condition1,condition2:this.form.condition2,condition3:this.form.condition3,page:this.form.page,size:this.form.size};this.$api.postWithData(this.api.getSellerList,t,function(e){e.data.length>0?r.isLoad=!0:r.isLoad=!1;for(var t=0;t<e.data.length;t++)r.getSellerList.push(e.data[t]);r.getSellerList.length<=4&&(r.isLoad=!1),r.form.condition3=[]})},openLocation:function(e){s.openLocation({latitude:Number(e.latitude),longitude:Number(e.longitude),name:e.title,address:e.address})},px:function(e){return s.upx2px(e)},getY:function(t){console.log(e(this.px(375)," at pages\\more\\home.vue:373")),t.detail.scrollTop>this.px(375)?this.isfixed=!0:this.isfixed=!1},ScrollB:function(){this.form.page++,this.isOpenRefresh(!1)},navigateTo:function(e){this.$api.post(this.api.getCarNew,function(t){-1==t?(r.$eventBus.$emit("register"),s.switchTab({url:"../home/home"})):s.navigateTo({url:e})})}},onReachBottom:function(){this.form.page++,this.isOpenRefresh(!1)},onPageScroll:function(e){e.scrollTop>this.px(375)?this.isfixed=!0:this.isfixed=!1},mounted:function(){r=this,this.dropdownList1[0].selected=!0,this.dropdownList2[0].selected=!0,this.$api.postWithData(this.api.adlist,{type:3},function(t){console.log(e(t," at pages\\more\\home.vue:416")),r.swiperList=t.data}),this.$api.post(this.api.gettypelist,function(e){r.gettypelist=e.data;for(var t=0;t<r.gettypelist.length;t++)r.$set(r.gettypelist[t],"selected",!1)}),r.isOpenRefresh(!0),0!=this.lat&&this.$api.get("https://api.map.baidu.com/reverse_geocoding/v3/?ak=Ulna6HAk7FsVuGeG4aOsV1wWZtxcosrC&output=json&coordtype=wgs84ll&location="+this.lat+","+this.long,function(e){var t=e.result.addressComponent.province,i=e.result.addressComponent.city,s=e.result.addressComponent.district;r.form.condition1=t+"/"+i+"/"+s,r.district_code=e.result.addressComponent.adcode}),s.setNavigationBarColor({frontColor:"#000000",backgroundColor:"#ff0000"})},onShow:function(){},onHide:function(){}};t.default=l}).call(this,i("0de9")["default"],i("6e42")["default"])},"70b2":function(e,t,i){"use strict";i.r(t);var s=i("6edc"),o=i.n(s);for(var n in s)"default"!==n&&function(e){i.d(t,e,function(){return s[e]})}(n);t["default"]=o.a},8469:function(e,t,i){"use strict";i.r(t);var s=i("5005"),o=i("70b2");for(var n in o)"default"!==n&&function(e){i.d(t,e,function(){return o[e]})}(n);i("014d");var r=i("2877"),a=Object(r["a"])(o["default"],s["a"],s["b"],!1,null,null,null);t["default"]=a.exports},d976:function(e,t,i){}},[["5a94","common/runtime","common/vendor"]]]);
});
require('pages/more/home.js');
__wxRoute = 'pages/more/shop';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/more/shop.js';

define('pages/more/shop.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/more/shop"],{"12b5":function(t,e,n){"use strict";n.r(e);var o=n("e7c5"),a=n("a3c4");for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);var c=n("2877"),r=Object(c["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=r.exports},a3c4:function(t,e,n){"use strict";n.r(e);var o=n("c496"),a=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);e["default"]=a.a},c496:function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{webviewStyles:{progress:{color:"#FF3333"}},src:this.api.http+"/index/shop/loginkpd.html"}},onLoad:function(e){this.src=this.api.http+e.url,console.log(t(e.url," at pages\\more\\shop.vue:22"))},methods:{getMessage:function(e){n.showToast({title:e.detail.data[0].action}),console.log(t(e.detail.data," at pages\\more\\shop.vue:29"))}}};e.default=o}).call(this,n("0de9")["default"],n("6e42")["default"])},e7c5:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},f06c:function(t,e,n){"use strict";(function(t){n("2899"),n("921b");o(n("66fd"));var e=o(n("12b5"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["f06c","common/runtime","common/vendor"]]]);
});
require('pages/more/shop.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

