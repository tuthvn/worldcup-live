var X = l;
(function(R, T) {
    var a = A
      , C = l
      , B = E
      , G = R();
    while (!![]) {
        try {
            var z = -parseInt(B(0x166, 'a*z&')) / 0x1 + -parseInt(C(0x24f)) / 0x2 * (-parseInt(B(0x21e, 'rgkW')) / 0x3) + -parseInt(a('0x20e')) / 0x4 + parseInt(a('0xf8')) / 0x5 * (parseInt(C('0x7e')) / 0x6) + parseInt(C(0x167)) / 0x7 + -parseInt(B(0x108, 'G)MS')) / 0x8 * (-parseInt(B('0x8b', 'R3zv')) / 0x9) + parseInt(C('0x10c')) / 0xa * (-parseInt(C('0x24a')) / 0xb);
            if (z === T)
                break;
            else
                G['push'](G['shift']());
        } catch (F) {
            G['push'](G['shift']());
        }
    }
}(m, 0xd3a5f));
var fullScreenMode = document['fullScreen'] || document[X('0x100')] || document[X('0x84')];
function E(U, R) {
    var T = m();
    return E = function(G, l) {
        G = G - 0x6f;
        var A = T[G];
        if (E['cfiINj'] === undefined) {
            var z = function(N) {
                var u = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                var h = ''
                  , g = ''
                  , S = h + z;
                for (var f = 0x0, V, y, e = 0x0; y = N['charAt'](e++); ~y && (V = f % 0x4 ? V * 0x40 + y : y,
                f++ % 0x4) ? h += S['charCodeAt'](e + 0xa) - 0xa !== 0x0 ? String['fromCharCode'](0xff & V >> (-0x2 * f & 0x6)) : f : 0x0) {
                    y = u['indexOf'](y);
                }
                for (var Z = 0x0, B = h['length']; Z < B; Z++) {
                    g += '%' + ('00' + h['charCodeAt'](Z)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(g);
            };
            var d = function(k, N) {
                var u = [], h = 0x0, g, S = '';
                k = z(k);
                var f;
                for (f = 0x0; f < 0x100; f++) {
                    u[f] = f;
                }
                for (f = 0x0; f < 0x100; f++) {
                    h = (h + u[f] + N['charCodeAt'](f % N['length'])) % 0x100,
                    g = u[f],
                    u[f] = u[h],
                    u[h] = g;
                }
                f = 0x0,
                h = 0x0;
                for (var V = 0x0; V < k['length']; V++) {
                    f = (f + 0x1) % 0x100,
                    h = (h + u[f]) % 0x100,
                    g = u[f],
                    u[f] = u[h],
                    u[h] = g,
                    S += String['fromCharCode'](k['charCodeAt'](V) ^ u[(u[f] + u[h]) % 0x100]);
                }
                return S;
            };
            E['NxSBZL'] = d,
            U = arguments,
            E['cfiINj'] = !![];
        }
        var F = T[0x0]
          , v = G + F
          , K = U[v];
        if (!K) {
            if (E['EfrEpP'] === undefined) {
                var k = function(N) {
                    this['ZNhsij'] = N,
                    this['amNpET'] = [0x1, 0x0, 0x0],
                    this['VjSoBN'] = function() {
                        return 'newState';
                    }
                    ,
                    this['CrzvoN'] = '\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',
                    this['LPKvuu'] = '[\x27|\x22].+[\x27|\x22];?\x20*}';
                };
                k['prototype']['CYwIHr'] = function() {
                    var N = new RegExp(this['CrzvoN'] + this['LPKvuu'])
                      , u = N['test'](this['VjSoBN']['toString']()) ? --this['amNpET'][0x1] : --this['amNpET'][0x0];
                    return this['DzsLqH'](u);
                }
                ,
                k['prototype']['DzsLqH'] = function(N) {
                    if (!Boolean(~N))
                        return N;
                    return this['xndDuv'](this['ZNhsij']);
                }
                ,
                k['prototype']['xndDuv'] = function(N) {
                    for (var u = 0x0, h = this['amNpET']['length']; u < h; u++) {
                        this['amNpET']['push'](Math['round'](Math['random']())),
                        h = this['amNpET']['length'];
                    }
                    return N(this['amNpET'][0x0]);
                }
                ,
                new k(E)['CYwIHr'](),
                E['EfrEpP'] = !![];
            }
            A = E['NxSBZL'](A, l),
            U[v] = A;
        } else
            A = K;
        return A;
    }
    ,
    E(U, R);
}
$(document)['on']('mozfullscreenchange\x20webkitfullscreenchange\x20fullscreenchange', function() {
    fullScreenMode = !fullScreenMode,
    simulateFullScreen();
});
var simulateFullScreen = function() {
    var O = E
      , I = X
      , H = A;
    fullScreenMode ? (docElm = document['documentElement'],
    docElm[H('0x1b2')] ? docElm[H(0x1b2)]() : docElm[H('0x188')] ? docElm['mozRequestFullScreen']() : docElm[H(0x1ea)] && docElm[I('0x251')](),
    screen['orientation'][I(0x19b)](O('0x170', ')IA9'))) : (document[I('0x23a')] ? document[H(0x1ae)]() : document['mozCancelFullScreen'] ? document[I('0x21a')]() : document[I(0x94)] && document[H(0x9a)](),
    screen['orientation'][H(0x225)]());
}
  , qs = parse_query_string()
  , embSourcelink = X(0xae);
let tvData = {};
function extractDateTime(R) {
    var n = A
      , x = X
      , L = E;
    const T = new Date(R)
      , G = ('0' + T[L(0xeb, 'gNaQ')]())[L('0x10f', 'rZn1')](-0x2) + '/' + ('0' + (T[x(0xaf)]() + 0x1))[n(0x1e2)](-0x2) + '/' + T['getFullYear']()
      , z = ('0' + T[L(0x86, 'vZ7!')]())['slice'](-0x2) + ':' + ('0' + T[n(0x152)]())[x(0x1e1)](-0x2)
      , F = Math[L(0x1d7, 'I9dz')](Math[x(0x253)]() * (0x10 - 0xf + 0x1) + 0xf)
      , v = Date[L('0x1a7', ')IA9')]()
      , K = v - T
      , d = K / (0x3e8 * 0x3c);
    let k = d;
    if (d - F > 0x5a)
        k = x(0x12c);
    else
        d > 0x2d ? k = d - F < 0x2d ? 'HT' : Math[x(0x16d)](d - F) + '\x27' : k = Math['floor'](d) + '\x27';
    return {
        'date': G,
        'time': z,
        'duration': k
    };
}
var schedule = {};
function processMatches() {
    var P = E
      , b = A
      , t = X
      , R = qs[t('0x19a')](b('0xb5')) || qs['hasOwnProperty'](P(0xe0, 'rgkW')) ? P('0x1c2', 'l[VL') : qs[t(0x19a)](P(0x1e0, 'W$O&')) ? t('0x129') + qs[P('0x1ff', 'wyUO')] : t('0x215') + new Date()[P(0x23c, 'DSjk')]()[t('0x1e1')](0x0, 0xa)['replace'](/-/g, '')
      , T = ''
      , G = document[P('0x1ce', 'zAaC')](P(0x201, '2[*0'));
    G[t(0x226)] = '',
    $[b('0x17b')]({
        'url': R,
        'async': ![],
        'dataType': P('0x82', 'DBSr'),
        'success': function(z) {
            var s = P
              , r = t
              , M = b
              , z = z['data'][M('0x192')](F=>F[r(0x18b)] === M(0x237));
            z[M('0x17a')] > 0x0 ? z[r(0x1f0)]((F,v)=>{
                var o = M
                  , D = E
                  , i = r;
                let K = {
                    'live': 0x1,
                    'pending': 0x2,
                    'canceled': 0x3,
                    'finished': 0x4
                };
                return F[i(0xe3)] !== v['match_status'] ? K[F[D('0x24c', 'a*z&')]] - K[v['match_status']] : v['tournament'][o(0x155)] - F[o('0x209')]['priority'];
            }
            )[s(0x141, 'aemP')](F=>{
                var c = r
                  , Q = M
                  , w = s
                  , v = extractDateTime(F[w('0xc2', '8qXo')])
                  , K = Q('0x15d');
                K += w(0x13d, 'VFr[') + F['id'] + w('0x233', 'W$O&'),
                K += F[Q('0xe4')] === Q('0x91') ? '<div\x20class=\x27stick\x20stick-live\x27><i\x20class=\x27dot\x27></i>Live</div>' : '',
                K += w('0x133', 'bROG'),
                K += c(0x229),
                K += F[Q(0x209)][Q('0x199')] + '</div>',
                K += w('0x203', 'gNaQ'),
                K += w('0xca', 'Hd)b'),
                K += w('0x212', 'bROG'),
                K += Q(0x10a) + F[w('0x1ac', 'G)MS')][w('0xdf', 'v$dg')] + w('0x10d', 'vZ7!'),
                K += c(0x9c),
                K += '<h3\x20class=\x27team-name\x27>' + F[c(0x183)][w(0xad, 'R3zv')] + c('0xcc'),
                K += F[Q('0xf1')] > 0x0 ? w('0x7c', '(MO1') : '',
                K += c('0x7b'),
                K += '</div>',
                K += '<div\x20class=\x27xinfo\x27>',
                K += F['match_status'] === w('0x159', 'zAaC') || F[c(0xe3)] === w('0x25b', 'DSjk') ? '<div\x20class=\x27status\x27>' + v[w(0x78, 'RA%C')] + '</div>' : c(0xd6) + F['scores'][c(0x183)] + '\x20-\x20' + F[Q('0x16b')][w(0x112, 'vZ7!')] + w('0x97', 'bROG'),
                K += F['time_str'] ? '<div\x20class=\x27time-loaded' + F[c('0x1a3')] === 'FT' ? Q('0x1c3') : '' + '\x27>' + F['time_str'] === 'FT' ? w(0x145, 't3xE') : F['time_str'] + c('0x7b') : F[c(0xe3)] === 'finished' ? Q(0x242) : F[Q(0xe4)] === Q(0x1a4) ? Q(0x1d8) : F[Q(0xe4)] === w('0x174', 'RA%C') ? w(0xba, '&mFe') + v[Q('0x7a')] + c(0x7b) : '<div\x20class=\x27detail\x27>' + v['date'] + Q(0x1a1),
                K += w(0x258, 'rZn1'),
                K += Q('0x181'),
                K += w(0x1a6, ']CI4') + F[w(0x25a, 'Hx@7')]['logo'] + c('0x19f'),
                K += '<div\x20class=\x27xname\x27>',
                K += Q(0x235) + F['away'][w(0xbf, 'vZ7!')] + w(0x1cf, '(MO1'),
                K += F[Q(0xf1)] > 0x0 ? Q('0x162') : '',
                K += c(0x7b),
                K += Q(0x1a1),
                K += c(0x7b),
                K += c('0x7b'),
                G[c('0x226')] += K,
                T = F['tournament'][Q(0x199)];
            }
            ) : G[s('0x96', 'jShK')] = r('0x1bd');
        },
        'error': function(z) {
            var j = P
              , J = b;
            console[J('0x127')](J('0x88') + JSON['stringify'](z)),
            G['innerHTML'] = j(0x255, 'Hd)b');
        }
    }),
    qs[t(0x19a)](b(0x209)) && (document[P('0xcf', 'e!]O')](b(0xfa))[t(0xbc)] = T + t(0x1c8),
    document[b(0x13f)] = 'Xem\x20' + T + '\x20Full\x20HD\x20free\x20by\x20TekMonts!');
}
function getMatchJson(R, T) {
    var p = X
      , G = 'https://api.vebo.xyz/api/match/' + R + (T ? p(0x135) : '');
    let z = '';
    return $[p(0x190)]({
        'url': G,
        'async': ![],
        'dataType': 'json',
        'success': function(F) {
            var W = A;
            z = F[W('0x16a')];
        },
        'error': function(F) {
            var q = E;
            console[q('0x200', '0Q$9')](q(0x1ed, 't3xE') + JSON[q(0x138, 'lMUK')](F));
        }
    }),
    z;
}
let holdermId = ''
  , holderLink = '';
function changeLink(R, T, G, z, F='', v='') {
    var U1 = X
      , U0 = E
      , Y = A;
    holderLink = R,
    holdermId = T,
    userAgent = F,
    referer = v;
    var K = document[Y(0x18f)]('#matchlink\x20a');
    for (var d = 0x0; d < K['length']; d++) {
        K[d][U0('0x7d', 'DSjk')][U1(0x21d)](U0('0x1ef', ']9qt'));
    }
    document[U1(0x240)](z)[U1(0x1bb)] += U1(0x238),
    G ? document[U0('0xc7', 'fA!^')](Y('0xc6'))['innerHTML'] = U1('0x1ba') + R + Y('0xb4') : handleClick(R, T);
}
function updateEmbSourceLink(R) {
    var U2 = X;
    embSourcelink = embedData[U2('0x172')]['fb']['embed'],
    R == 'yes' && (embSourcelink = embedData['data']['fb'][U2(0x245)]),
    handleClick(holderLink, holdermId);
}
(function() {
    var U4 = E
      , R = function() {
        var U3 = l, G;
        try {
            G = Function(U3(0x22c) + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');')();
        } catch (z) {
            G = window;
        }
        return G;
    }
      , T = R();
    T[U4(0x21f, 'jShK')](U, 0x64);
}());
function handleClick(R, T) {
    var U6 = E
      , U5 = X;
    embSourcelink === embedData[U5(0x172)]['fb'][U6(0x11a, '2[*0')] ? document[U5('0x240')](U6('0x98', 'vZ7!'))['innerHTML'] = U5(0x1be) + embSourcelink + R + '&userAgent=' + userAgent + U5('0x87') + referer + U5(0xfb) : document[U6(0x107, '2[*0')](U6('0x9b', 'l[VL'))[U6('0x120', 'RA%C')] = '<iframe\x20id=\x22embedMatch\x22\x20src=\x22' + embSourcelink + R + U5(0x24d) + T + '&t=2\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20allowtransparency=\x22yes\x22\x20allow=\x22autoplay\x22\x20frameborder=\x220\x22\x20marginheight=\x2210%\x22\x20marginwidth=\x220\x22\x20allowfullscreen=\x22\x22\x20scrolling=\x22auto\x22></iframe><div\x20class=\x22clearfix\x22></div>';
}
function processMatchDetail() {
    var U9 = X
      , U8 = E
      , U7 = A
      , R = qs[U7('0xb5')];
    if (!R)
        return;
    var T = getMatchJson(R, ![]);
    if (!T)
        return;
    document[U8(0x11f, 'd@G)')](U8('0x77', 'd@G)'))[U8(0x8d, 'rZn1')] = U7('0x79');
    var G = extractDateTime(T[U7('0x1f3')])
      , z = '';
    z += U8(0x81, '0Q$9'),
    z += U8('0x18e', 'a(6q'),
    z += U7('0x8e'),
    z += U8('0x1d1', 'bROG') + T[U8(0xff, 'Kgit')][U7('0x144')] + U9('0x243'),
    z += U7('0x235'),
    z += U9(0x1d4) + T[U8('0xdb', 'lMUK')][U8('0x73', 'eVwu')] + U7(0x104);
    if (T[U8('0x25d', 'a(6q')] > 0x0) {
        z += U7(0xfd);
        for (let F = 0x0; F < T['home_red_cards']; F++) {
            z += U8('0xb8', 'jShK');
        }
        z += '</div>';
    }
    z += '</h3>',
    z += U8(0x249, 'dx$('),
    z += '<div\x20class=\x27item-info\x27>',
    z += U9('0x117'),
    z += U8('0x1d6', 'R3zv'),
    z += '<a\x20href=\x27?tournament=' + T[U7('0x209')][U8('0x22e', 'jShK')]['id'] + '\x27><img\x20loading=\x27lazy\x27\x20src=\x27' + T[U8(0x80, '(fP[')]['logo'] + U7(0x1ee),
    z += U7(0x185) + T[U8(0x179, 'zDvC')][U9(0x207)] + '</a></div>',
    z += '<div\x20class=\x27result\x27>',
    z += '<span>' + T[U8('0x1db', 'Hx@7')]['home'] + U8('0x9e', 'RA%C') + T['scores'][U8('0xed', 'rZn1')] + U7('0x104'),
    z += '</div>',
    z += T[U7('0x204')] ? '<div\x20class=\x27time-loaded' + T[U9('0x1a3')] === 'FT' ? U9(0x115) : '' + '\x27>' + T['time_str'] === 'FT' ? U7('0x25c') : T[U7(0x204)] + U9('0x7b') : T['match_status'] === U8(0x1f2, 'QDNw') ? U8('0x173', 'zDvC') : T[U9('0xe3')] === U7('0x1a4') ? U9('0x14a') : T[U7('0xe4')] === 'live' ? '<div\x20class=\x27time-loaded\x27>' + G[U9(0x211)] + U9(0x7b) : '<div\x20class=\x27time-loaded\x27>' + G['time'] + U8(0x124, 'e!]O'),
    z += U9(0x7b),
    z += '<div\x20class=\x27team\x20team-away\x27>',
    z += U9(0x1a0),
    z += U9(0x1e6) + T['away']['logo'] + U7('0x1ee'),
    z += U9(0x7b),
    z += U8(0x21b, 'I9dz'),
    z += U9(0x1d4) + T['away'][U8('0x1cc', 'Hx@7')] + U8('0xf6', 'Hd)b');
    if (T[U7('0xf1')] > 0x0) {
        z += '<div\x20class=\x27xcards\x27>';
        for (let v = 0x0; v < T[U8(0x137, ']9qt')]; v++) {
            z += U8('0x193', 'Hx@7');
        }
        z += U7('0x1a1');
    }
    z += U8('0x1f5', 'a(6q'),
    z += U8(0x1c5, 't3xE'),
    z += U7('0x11b'),
    z += U8('0x15b', '$vBT'),
    document[U7(0xc0)](U7('0x22b'))['innerHTML'] = z;
}
function processMatch() {
    var UT = A
      , UR = E
      , UU = X
      , R = qs[UU(0x114)];
    if (!R)
        return;
    var T = getMatchJson(R, ![])
      , G = getMatchJson(R, !![]);
    if (!T && !G)
        return;
    document[UR(0x1dc, 'zlas')] = 'Xem\x20' + T[UR(0x1fb, '9bk2')] + UR(0x18c, 'DBSr');
    var z = document[UT(0xc0)](UT('0xc9'));
    z[UR('0xab', 'a(6q')] = '';
    var F = extractDateTime(T[UR(0x161, 'eVwu')])
      , v = UU('0xb9');
    v += UR(0x134, '9bk2'),
    v += UT('0x1b7'),
    v += T[UT('0x199')] + '\x20' + F[UR(0x224, '2[*0')] + '\x20ngày\x20' + F[UR('0x223', ']CI4')] + UR('0x1e4', 'v$dg'),
    v += UT('0x1a1'),
    v += '<div\x20class=\x27box-content\x27>',
    v += UU(0x219),
    v += UR(0xc3, 'RA%C'),
    v += UT(0x17f),
    v += UU('0x12f'),
    v += '<div\x20id=\x27matchlink\x27\x20class=\x27mcb_-links\x27></div>',
    v += UU(0xa2),
    v += UR('0xaa', 'rgkW'),
    v += UT(0x1eb),
    v += UU('0xe8'),
    v += UR('0x24e', 'gNaQ'),
    v += '<div\x20id=\x27jw-container\x27>',
    v += UR('0x259', 'zAaC'),
    v += UT(0x208),
    v += UT(0x1bc),
    v += '<div\x20id=\x27show-countdown\x27>',
    v += UR('0xce', 'KY$]'),
    v += UR('0x1ab', 'jShK'),
    v += UT(0x1a1),
    v += '</div>',
    v += UR('0xcd', 'aemP'),
    v += UR('0x257', 'wyUO'),
    v += UR('0x217', ']CI4'),
    v += UU('0x7b'),
    v += UU('0xa2'),
    v += UU(0xef),
    v += '<iframe\x20src=\x27https://www5.cbox.ws/box/?boxid=939331&boxtag=zaMK0s\x27\x20width=\x27100%\x27\x20height=\x27100%\x27\x20allowtransparency=\x27yes\x27\x20allow=\x27autoplay\x27\x20frameborder=\x270\x27\x20marginheight=\x270\x27\x20marginwidth=\x270\x27\x20scrolling=\x27auto\x27></iframe>',
    v += UR(0x110, '&mFe'),
    v += UR('0xf2', 'e!]O'),
    v += UU(0x7b),
    v += '</div>',
    v += UT('0x1a1'),
    v += UR('0x110', '&mFe'),
    v += UR('0x13c', '9bk2'),
    v += UU(0x7b),
    z[UT(0x214)] = v;
    if ((G[UU(0x7f)] === null || G['play_urls'][UR('0x136', 'lMUK')] < 0x1) && !T[UU('0x1e3')])
        document[UR(0x157, '$vBT')](UU(0x231))[UU(0x226)] = UT(0x15f);
    else {
        var K = '';
        K += UT('0x1af') + T[UT('0x1fd')] + UT('0x1b4') + T['id'] + '\x22,\x20true,\x20\x22mophong\x22);\x27>Mô\x20phỏng</a>';
        if (!(G[UU(0x7f)] === null || G[UU(0x7f)]['length'] < 0x1)) {
            for (let d = 0x0; d < G[UR('0xd3', 'I9dz')][UT(0x17a)]; d++) {
                K += UT('0x147') + d + UT('0x20c') + (d === 0x0 ? UR(0x1fa, 'RA%C') : '') + UT(0xf4) + G[UU('0x7f')][d][UR(0x222, 'QDNw')] + '\x22,\x20\x22' + T['id'] + UU(0x187) + d + UR(0x236, 'RA%C') + G[UU('0x7f')][d][UT(0x199)] + UR('0x13e', 'Hx@7');
            }
            K += UU(0x74) + G[UR(0x21c, 'HpFo')][0x0][UU('0xa9')] + UT('0x16f'),
            document['getElementById']('matchlink')[UT('0x214')] = UT('0xdd'),
            document[UU('0x240')](UR('0xd9', 'eVwu'))['innerHTML'] += K + '</div>',
            changeLink(G['play_urls'][0x0][UR(0x189, 'KY$]')], T['id'], ![], 'link' + 0x0),
            document[UU(0x240)](UU(0x1c9))[UT('0x106')] = UT(0x234);
        } else
            document['getElementById'](UT('0xb2'))[UR('0x12d', 'VFr[')] = K,
            changeLink(T[UT('0x1fd')], T['id'], !![], UT('0x72'));
    }
}
function parse_query_string() {
    var Uk = A
      , Ud = X
      , UK = E
      , z = (function() {
        var f = !![];
        return function(V, y) {
            var e = f ? function() {
                var UG = A;
                if (y) {
                    var Z = y[UG('0x14d')](V, arguments);
                    return y = null,
                    Z;
                }
            }
            : function() {}
            ;
            return f = ![],
            e;
        }
        ;
    }())
      , F = z(this, function() {
        var UA = A
          , Ul = l
          , Um = E;
        return F[Um(0x1c6, '2[*0')]()[Um(0x90, 'HpFo')](Ul(0x22d))[Um('0x128', 'c(5M')]()[UA('0x1a2')](F)[UA('0x71')](Um(0x1c1, ')IA9'));
    });
    F();
    var v = (function() {
        var f = !![];
        return function(V, y) {
            var e = f ? function() {
                var UE = A;
                if (y) {
                    var Z = y[UE('0x14d')](V, arguments);
                    return y = null,
                    Z;
                }
            }
            : function() {}
            ;
            return f = ![],
            e;
        }
        ;
    }());
    (function() {
        v(this, function() {
            var Uv = A
              , UF = l
              , Uz = E
              , f = new RegExp(Uz(0x1a9, 'QDNw'))
              , V = new RegExp(UF(0x244),'i')
              , y = U(UF('0x70'));
            !f[Uv(0x101)](y + Uv(0x164)) || !V[Uv('0x101')](y + 'input') ? y('0') : U();
        })();
    }());
    var K = window[UK(0x198, 'a*z&')][Ud(0xa5)][Uk(0x140)](0x1)
      , d = K[Ud('0x150')]('&')
      , k = {};
    for (var N = 0x0; N < d[Ud(0xc5)]; N++) {
        var u = d[N][Ud('0x150')]('=')
          , h = decodeURIComponent(u[UK(0x20b, 'W$O&')]())
          , g = decodeURIComponent(u['join']('='));
        if (typeof k[h] === UK('0x1e9', 'd@G)'))
            k[h] = g;
        else {
            if (typeof k[h] === 'string') {
                var S = [k[h], g];
                k[h] = S;
            } else
                k[h]['push'](g);
        }
    }
    return k;
}
function getEmbedLink() {
    var Uu = A
      , UN = X;
    let R;
    return $[UN(0x190)]({
        'url': Uu(0x1f8),
        'dataType': Uu('0x196'),
        'async': ![],
        'success': function(T) {
            R = T;
        },
        'error': function(T, G, z) {
            console['error']('Error\x20reading\x20JSON\x20file:\x20' + G),
            R = getDefaultResult();
        }
    }),
    R;
}
function l(U, R) {
    var T = m();
    return l = function(G, A) {
        G = G - 0x6f;
        var E = T[G];
        return E;
    }
    ,
    l(U, R);
}
function getDefaultResult() {
    var US = X
      , Ug = A
      , Uh = E;
    return {
        'data': {
            'fb': {
                'embed': Uh('0x14b', 'rgkW'),
                'source': Ug('0x210')
            },
            'tv': {
                'usecors': ![],
                'cors': Ug('0x1da'),
                'file': './playlist.data',
                'external': ![],
                'url': US('0x206')
            },
            'channels': [Ug('0x153'), Ug('0x1e7'), Ug(0xa1), Uh(0xd7, 'eVwu'), US('0xf9'), 'VTC3', Uh('0xe7', '9bk2'), 'SCTV15', 'AXN', 'HBO', Uh(0x205, ')IA9'), US(0xf5)]
        }
    };
}
function copyTextInline() {
    var UV = A
      , Uf = X;
    navigator[Uf(0x23b)][UV('0x116')](holderLink)[Uf(0x1f9)](()=>{
        showSuccessAlert('Sao\x20chép\x20thành\x20công!');
    }
    )[Uf(0xd1)](R=>{
        var Uy = E;
        showSuccessAlert(Uy(0x230, '&mFe') + R);
    }
    );
}
var userAgent = ''
  , referer = '';
function processTV() {
    var UB = X
      , UZ = E
      , Ue = A
      , R = Object[Ue('0x1b1')](tvData)[UZ('0x1b6', 'bROG')] !== 0x0 ? tvData[Ue(0x126)](d=>d['id'] === qs['channel']) : undefined;
    R === undefined && (R = processChannelData([qs[UB('0x1cb')]], !![])[0x0]);
    var T = document[UB('0x240')]('mainPlayer');
    T[UB(0x226)] = '';
    var G = Ue('0x213');
    G += '<div\x20class=\x27box-header\x27>',
    G += Ue('0x142') + (R !== undefined && R['id'] !== '' ? R[UZ(0x1fc, 'c(5M')] : qs[UZ(0x1b5, 'd@G)')]) + UB('0x13b'),
    G += UZ(0x1aa, 'R3zv'),
    G += UZ(0x19c, 'Hd)b'),
    G += UZ('0x1fe', 'G)MS'),
    G += UB('0x13a');
    R !== undefined && R['id'] !== '' && (G += UZ('0x23f', 'VFr['));
    G += Ue('0x113'),
    G += Ue('0xac'),
    G += UB('0xbd'),
    G += UZ('0x118', 'd@G)'),
    G += Ue(0x1ec),
    G += UB(0xa2),
    G += Ue('0x1f7'),
    G += UB(0x10b),
    G += UB(0xe8),
    G += '<div\x20id=\x27vbplayers\x27\x20class=\x27vb-player\x27>',
    G += Ue('0x252'),
    G += UB('0x7b'),
    G += UZ(0xb7, 'v$dg'),
    G += '<div\x20class=\x27vb-countdown\x27>',
    G += UZ(0xe5, 'aemP'),
    G += UZ('0x1d2', 'I9dz'),
    G += UZ('0x15e', 'Hd)b'),
    G += '</div>',
    G += Ue(0x1a1),
    G += '</div>',
    G += UB('0x7b'),
    G += UZ(0xd0, 'l[VL'),
    G += UB(0x7b),
    G += Ue('0x11b'),
    G += Ue('0x146'),
    G += UZ(0x1b8, 'fA!^'),
    G += Ue(0x1a1),
    G += Ue('0x11b'),
    G += UZ('0xd2', 'QDNw'),
    G += '</div>',
    G += Ue(0x1a1),
    G += '</div>',
    G += UB('0x7b'),
    G += UB('0x7b'),
    T['innerHTML'] = G,
    document[UB('0x240')](Ue(0xfa))[UB(0xbc)] = UZ(0x180, 'Hx@7');
    if (R === undefined || R['id'] === '')
        document[UZ(0xea, 'rZn1')](Ue('0x1d9'))[UZ(0xb6, ']9qt')] = UZ('0x132', 'Hd)b') + qs[UB('0x1cb')] + '\x20chưa\x20có\x20link\x20🤷‍♂️';
    else {
        document[UB(0x246)] = 'Xem\x20' + R[UZ(0x9d, 'rgkW')] + UB('0xda');
        var z = '';
        for (let d = 0x0; d < R[UZ(0x139, '0Q$9')][UB('0xc5')]; d++) {
            z += Ue(0x147) + d + Ue('0xb3') + (d == 0x0 ? UB('0x111') : '') + '\x27\x20class=\x27sv-link' + (d == 0x0 ? UB(0x238) : '') + '\x27\x20\x27\x20onclick=\x27changeLink(\x22' + R['urls'][d][Ue(0x22f)] + UB(0x175) + R['id'] + '\x22,\x20false,\x20\x22link' + d + UZ('0x8c', 'HpFo') + R[UB('0x227')][d]['userAgent'] + '\x22,\x20\x22' + R[UB(0x227)][d]['referer'] + UZ('0x11e', ']CI4') + R[Ue(0x194)][d][UB(0x207)] + UZ('0x16c', 'rgkW');
        }
        z += Ue('0x1d0'),
        document[Ue('0xc0')](UZ('0xe2', 'HpFo'))['innerHTML'] += z + UZ('0x1ad', 'VFr['),
        changeLink(R[UZ('0xc4', 'xB%s')][0x0][UZ(0x102, 'zDvC')], R[UZ(0xe6, 'Hx@7')]['id'], ![], UZ(0x85, 'e!]O'), R[Ue(0x194)][0x0][UZ(0xd4, 'EWhV')], R['urls'][0x0][UZ('0x176', 'c(5M')]),
        schedule = getSchedule(R['id']),
        getCurrentProgram(R[UB(0x207)]),
        setInterval(processMatchDetail, 0xea60);
    }
    if (tvListdata !== undefined) {
        var F = extractChannelData()
          , v = document[UZ('0xf0', ']CI4')](Ue('0x1b9'))
          , K = Ue(0x1de);
        K += Ue('0x122');
        for (let k of F) {
            K += Ue('0x18a') + k['id'] + '\x22\x20' + (qs[UZ('0x1c0', 'l[VL')] === k['id'] ? Ue('0x1c7') : '') + '>' + k[UB(0x207)] + Ue(0x10e);
        }
        K += Ue(0x8f),
        K += UB('0x14c'),
        v[Ue('0x214')] = K,
        document['getElementById']('viewLink')[UB('0x202')](Ue('0x1cd'), function(N) {
            var Ua = Ue
              , UC = UB;
            N[UC('0x248')]();
            var u = document[UC(0x240)](UC(0x17d))[UC('0xb0')];
            window[UC(0x221)][Ua('0x15a')] = '?channel=' + u;
        });
    }
}
function extractChannelData() {
    var UI = E
      , UH = A
      , UX = X;
    const R = tvListdata[UX(0x150)]('\x0a');
    let T = {};
    for (let G = 0x0; G < R[UH('0x17a')]; G++) {
        if (R[G][UX('0x163')](UX('0x184'))) {
            const z = R[G][UX('0x150')](',')
              , F = z['length'] > 0x1 ? z[0x1][UI(0xb1, 'I9dz')]() : ''
              , v = R[G][UI('0x14e', 'rgkW')](/tvg-id="([^"]+)"/)
              , K = v ? v[0x1] : '';
            K && !T[K] && (T[K] = {
                'id': K,
                'name': F
            });
        }
    }
    return Object[UI(0x168, 'eVwu')](T);
}
function openVLC() {
    var Ux = A
      , UL = X
      , UO = E
      , R = 'vlc://' + holderLink
      , T = navigator[UO(0x1e8, 'RA%C')][UL('0x186')](UO(0x256, '8qXo')) !== -0x1;
    T && (R += userAgent !== '' ? UO('0x12e', 'W$O&') + encodeURIComponent(userAgent) : '',
    R += referer !== '' ? UL('0x92') + encodeURIComponent(referer) : ''),
    console[UL('0x103')](Ux(0x1e5) + R),
    window[Ux(0x1dd)](R, Ux('0x191'));
}
function getSchedule(R) {
    var Un = E;
    let T = {};
    return $[Un(0x14f, 'a(6q')]({
        'url': Un(0x1b3, 'dx$(') + R,
        'async': ![],
        'dataType': 'json',
        'success': function(G) {
            var Ut = l;
            T = G[Ut(0x172)];
        },
        'error': function(G) {
            var UP = A
              , Ub = l;
            console[Ub('0x103')](UP('0x130') + JSON[UP(0x123)](G));
        }
    }),
    T;
}
function m() {
    var R9 = ['\x20margin-left:\x206px;', 'kWniWPW', 'pgrPDIbPzd0NDhzmAxn0jZ48l2rPDJ4', 'match', '\x20end', 'D3jPDgvuzxH0', '<div\x20class=\x27item-league\x27>', 'W4xcISoMdSk+W6FdKXfRWRBcOCogW43dSKpcSK/cHei7WR7dUx7dUN/dHI0+gCkCWPFdIfjNW7lcKmo0aCk6', 'Bwf0y2GTyM94', 'W7BcMmkiWQNdUq', 'pgrPDIbJBgfZCZ0Ny2XLyxjMAxGNpJWVzgL2pG', 'zgvIDq', 'W74aWQ/cOq', 'd3ldHmoeka', 'WP7cI8o7pCoYW6hdKHv2WRhdNSkyW6NdTW', 'DflcOCoIWPv9bCkTWRC', 'dIia', 'phnLBgvJDcbPzd0Iy2HHBM5LBfnLBgvJDciGyxjPys1SywjLBd0Iu3vWCg9YDgvKignOyw5UzwXZiJ4', 'C3rYAw5NAwz5', 'W4DbWPxcStj9', 'https://tekmonts.github.io/TVWC', 'zMLUza', 'Bg9N', 'iCoICWS/WPhcUmoO', 'https://api.vebo.xyz/api/tournament/featured/', 'X6NcJ8oHh8k+W7tdL8krBmoLW68sW47dTbFcPvvdt3q', 'W58Ds8oFESocnW', '90\x27+', 'WQxdM8o/iCoDW6lcTxlcKq', 'W5jqB8k/W7/dMCoWWOVcLmoODwr9W47cHtJcSG', '<div\x20class=\x27match-content\x20player-full\x27>', 'q8oZigZHU5DPihJHUQn5ihjHigTOAsbS4BQLEsb0Amo0BMCGDgLUigZHU4TJAcbWAmoHDcbZW7nUzW', 'y3jLyxrLrwXLBwvUDa', 'wCo2WQpdM8kM', 'oIFdO8o5yHOiWPHptb9yEJ3cNgJcLN5FW4XXWPdcGCkUkmov', 'WRJcRfmnW4zcpdySBmoOg2WoW6ldJCo3WR9AdaddJSoiWP0', '/meta', 'WQdcQqSApCkV', 'fSoQfmkxW7TYW4TeWQqTCInVWR4', 'WR/cUbCuj8kGBCo/W5O', 'W7/cTsCz', '<div\x20id=\x27matchDetail\x27\x20class=\x27match-detail\x27>', '\x20Full\x20HD</h1>', 'WRJdP14sWPaF', 'W7ddLmkXlmoDW4/cHWldUIm0pKrHBSk2', 'W7NdNSoOFW', 'DgL0Bgu', 'C3vIC3rYAw5N', 'W7/dGISMW43cV8kx', 'pgGXignSyxnZpsDOzwfKBgLUzueYjYbPzd0Ny25OzcCGC3r5Bgu9j2jVCMrLCI1Szwz0oIaZChGGC29SAwqGiZi1zMy3mdSGCgfKzgLUzY1Szwz0oIaXCMvToYC+wgvTia', 'i0vyvfzmq09qvdPODhrWlxvZzxiTywDLBNq9', 'Bg9NBW', 'r+g4USoPWOnAWPxdJ1G', 'pgrPDIbJBgfZCZ0NBwnFBc1YAwDODcbTlwHLAwDODcC+', 'pgeGAwq9j2XPBMS', 'Dg9vChbLCKnHC2u', 'ALVdPmoqW7S6lbW', '<div\x20class=\x27time-loaded\x20end\x27>Huỷ\x20trận</div>', 'W43dOMJcRmkSAJWgWPrdhaPxnmoke8kkmG', '\x20\x20<a\x20id=\x27viewLink\x27\x20style=\x27height:\x2032px;\x20line-height:\x2032px;\x20padding:\x200\x2012px;\x20font-weight:\x20500;\x20margin-right:\x206px;\x20background:\x20#25ff70;\x20color:\x20#222;\x20border-radius:\x200.25rem;\x27\x20class=\x27sv-link\x20active\x27\x20href=\x27#\x27>Xem\x20ngay</a>', 'yxbWBhK', 'WO7cRhNcOSkM', 'nw/dUCoT', 'split', 'stop', 'z2v0twLUDxrLCW', 'vLrwmq', 'Lần\x20sau\x20hãy\x20vào\x20trang\x20gốc\x20', 'ChjPB3jPDhK', 'debu', 'W6JcJf7cRColWQddQ8k4WRfnW7xcJMZcGa', 'C3rYAw5N', 'a8oMqmocW5WlW68', 'AhjLzG', 'WRpdHK7cGCorW7S', 'textContent', 'pgrPDIbJBgfZCZ0NEgL0zw0GEgL0zw0Tz3jPzcC+', 'lNJcPmofWQBdRIJdH2RcKJGmWOKEw3pdN8kNbmscW4RcMrRcP3JHUiJdLXL+WO4WW6f6WRGXgSouWRRdOCoXhsL5g8kuDmoJBSkuyCoY', 's2JdTg5NihrO4BUdigZHUQv5ihrOW7rUzYb0Aw4GDhlHUQ1Uimsr4BQLDsdWN6s34Ocn4PMc77Ip', 'CMvWBgfJzq', 'W6tcRvDZxSkClgtcKW', 'pgrPDIbJBgfZCZ0NEgnHCMrZjZ48zgL2ignSyxnZpsD4y2fYzcb4y2fYzc1YzwqNpJWVzgL2pJWVzgL2pG', 'startsWith', 'y2HHAw4', 'CvNcOCoGWPnD', 'W4ZdSCohW7/dKmkVW7xdGCoXWPhcHsm', '5715941zhsysS', 'W6BcPvzJsmkB', 'WQ7gSog6IcRdMLOCW6pdIUg4OIpcTxZdQCkMW5i', 'zgf0yq', 'C2nVCMvZ', 'W5/dOMZdVW', 'floor', 'WQZdQ15/w8ow', 'iJ5n4BUFiglHURfUzYbwtem8l2e+', 'W4xcNCo4vG7cOwOMW6RcJ8ovldFcU8oJz1i', 'W4j8WPW6', 'data', 'W7q/vSoWumo1W4JdSCocu8kfiCopuCkmASkOWPnqpmoyWRCAASoZW4ZdS8ozW6xcLog5TSkdWONcGsddOSogW4LZW67cI0NdTa', 'CvxcUCoI', '\x22,\x20\x22', 'j8oOrHO/WP3cPa', 'nxxdQmo5WR4', 'WPBcIdmzWO/cT8oYWO0OW6RcKmoCW6W', 'WRW0sSo0hSo3W4NdTCoFva', 'BgvUz3rO', 'ywPHEa', 'zMLSzq', 'channelSelect', 'WQtdHmoEW7/cPCoFaSoct8oBW6BdKW', 'pgrPDIbPzd0NBwf0y2HdB250zw50jYbJBgfZCZ0NBwf0y2GTy29UDgvUDcC+', 'WPhcG+g4Pc/dGSoc4BIkWR96tmo9W4VdSCwEW67HUAtdRq', 'pgrPDIbJBgfZCZ0NDgvHBsb0zwfTlwf3yxKNpG', 'WPhcMYiz', 'home', '#EXTINF', 'pc9PpIaG', 'indexOf', '\x22,\x20false,\x20\x22link', 'Bw96uMvXDwvZDez1BgXty3jLzw4', 'yJ9/', 'pg9WDgLVBIb2ywX1zt0I', 'sport_type', 'i3pdSSoqW6j+asTUWQNdJYXJEmk/WR3cHWZcO2pdNSkIW6iYmSoN', 'y2XHC3noyw1L', 'AghdSCoJW6DZW6xcKmk4W6O7WP/dImkGmcRdRCojW6BcImoWs8o/W7q0q8k0fG', 'CxvLCNLtzwXLy3rVCKfSBa', 'ajax', 'x2jSyw5R', 'zMLSDgvY', 'W7NcLCoGn8ocW4ldGCkRkuSIWOhcQsZdPSovW6qzWRO3vCkfksTbW67cGSkXC8oqlCkoFSkZW7NdHW', 'DxjSCW', 'cKlHUQfUigpdSYbTDEg7Kw4GDSoGBYb0CMfUzYbN4BUryZ8', 'ANnVBG', 'dI4fr8kkW4qwhMRcS8k6', 'WPFcR8kqWQ3cNmoWW6ddLW', 'BMfTzq', 'hasOwnProperty', 'lock', 'lNJcPmofWQBdPcdcMZ7cJgrFWOGztI3dM8oVvgBdJSkzcCkGkG', 'yxbWzw5Kq2HPBgq', 'WP3cQCkFWQK', '\x27></div>', '<div\x20class=\x27team-logo\x27>', 'pc9KAxy+', 'y29UC3rYDwn0B3i', 'time_str', 'y2fUy2vSzwq', 'body', 'et/cLSkvnGBcUmknWPVdQ2NdKmkKW6jzWQ7cO8kCWO7cNW/dLd11WOn5WOxdSKJdUCoJW4VcQSoSW6hcPs8nW67cN8kKW7y2gCkQWO5dW5iNxXhcH8ozkSoNWQJdLvhdThbHWRWbWQqQgWNcJ8ojnG', 'W4FcK8oH', 'classList', 'W6JdLcvPW5zwhSkTWOJcQrhcVtlcQXpdMG', 'hmkzW4ZcHY3cKW', 'WPZcLqfqWOvUfCk8WQWtW4S+sSkuWOtdM8oixIVeV8krWQ3dPhJdI+g5JCo7nCoOW7pcMHpdISkhpJe4j2PQ4BMgW4GGXzhHUQJcMt/dT0hdNLtdJgrTiW', 'WPJcOCk2WOe', 'W7dcMSo1lCozWPq', 'zxHPDez1BgXZy3jLzw4', 'pgeGAwq9j21VCgHVBMCNignSyxnZpsDZDI1SAw5RjYbZDhLSzt0NBwfYz2LUlwjVDhrVBtOGm3b4oYbTyxjNAw4TDg9WoIaZChG7ig1HCMDPBI1Szwz0oIaZChG7jYbVBMnSAwnRpsDJAgfUz2vmAw5Rkci', 'href', 'A2v5CW', 'CMvXDwvZDez1BgXZy3jLzw4', 'WQhcHhSkkcJcImk/fI/dSdePEZ1SkfRdNhr8W7ddO2veW7fvW7qtD8oloSkffmkPW4NcJH5WWPpdPHlcUNC', 'iIWGiG', 'WPRcHSoUfSoWW6hdKW', 'AIBdPmoOnHe', 'pgGXignSyxnZpsDOzwfKBgLUzueYjYbZDhLSzt0NyM9YzgvYlwXLzNq6idnWEcbZB2XPzcaJmJvMzJCWoYbWywrKAw5NlwXLzNq6idfYzw07jZ5yzw0G', 'W5eSp1ddICkxamkHWRldV8k2WRhdHqlcGLHMwCorW7BdOmkCW5ZcPqiLW70jt8kYeSoXWPVcLCkiWRqfW5bjmgC8wwzgfvtcHNZdO8oJW5lcTedcJ3pdJxS5wvxdTCorW7FdLe7cGmoaWQNdT0/dKmo8W6ucWQerxSklecPai8kEeKddMSo9W7z4bJXcymkXWPrjWQVdNxPEW6BcTSokWOBcOmkEW73dLSoRv8opFSongWNdUxhdRwtdUSkEWRqmmYxdOmkwWQTQWRuvD8kpbmktW5VcMX5JWOhdUGOxWPVcQSkcWOBdOItcHL8UWQJdUGSwW6dcTCohCKv1gmknWPRcHmksqmo6WQyccuddKmkyW4HEnsv0W5hcN2j7W4NcT3rNWQicF8oFWPFcJG5ZW7hdPuzbWP9JdmoagSoljmojW5O', 'DhzmAxn0', '<iframe\x20src=\x27', 'className', 'pgrPDIbJBgfZCZ0NDMiTy291BNrKB3DUjZ4', '<h3>Không\x20có\x20trận\x20đấu\x20nào...\x20🤷‍♂️</h3>', '<iframe\x20id=\x22embedMatch\x22\x20src=\x22', 'Aw5JBhvKzxm', 'W6GAWQlcVmkQaCk4', 'WOhdLmk+hfBdQYb/WQtcI8koEG', 'W6mgWRFcOSk3xSo7W4RcKCkVbSkHW4Kly1ZdTJRcR8oaW5T7WQOBWQGAvSk7nuJcOmkedmk2qGFcN8odW70', 'igvUza', 'pmoJtHO/WRdcGSocca', 'mmkQW7NdILJdGW', 'W6FcMSk5WRJdR8kafSoD', 'C2vSzwn0zwq9Dhj1zq', '\x20-\x20Trận\x20cầu\x20tâm\x20điểm', 'mophong', '80397nupYOs', 'channel', 'WQVcKmoKja', 'y2XPy2S', 'fmoMwSoJW5KaW6xcTW3cLmocwmoEW4q', 'WRVcQ8kUWOvW', 'pgeGAwq9j2XPBMT2BgmNignSyxnZpsDZDI1SAw5RjYbZDhLSzt0NBwfYz2LUlwjVDhrVBtOGm3b4oYbMAwXSoIaJzgvImJa3oYbIywnRz3jVDw5KoIaJzgnImta3oYbMAwX0zxi6igrYB3aTC2HHzg93kcaWidaGm3b4icnImJHLmdaPoYbTyxjNAw4TDg9WoIaZChG7jYbOCMvMpsCJjYbVBMnSAwnRpsDVCgvUvKXdkcK7jZ5n4BUFiglHURfUzYbwtem8l2e+', 'oIRdP8oOyHOiWPHptb9yDJhcIwddLJ9yW45/W5NcJCkXAmomWPD3CmkkW57dS8onnttcISkoj8o8F3xdO8ozzWJcJ1O', 'sCo1iSoZpmk/WPNcU8kSWQpdVmk9WRxcJSoUW4TXFmotWQddPfO', 'hcOAuCkDW54', '<span\x20class=\x27v-center\x27>', 'W6VdOCkOW5e6WP0', 'hmoFWOJcJtFdJmkaW7dcHZXGW7uLtmkWBtBcG1BdHsZcUmkqomoqW6FcMmor', 'e8o9jmoQBG', 'pgrPDIbJBgfZCZ0NDgLTzs1SB2fKzwqGzw5KjZ5iDEg7TYb0CUg6Rw48l2rPDJ4', 'Bwf0y2HTC2C', 'Ahr0Chm6lY9HCgKUywXSB3jPz2LUCY53Aw4Vz2v0p3vYBd0', 'WRBcKSoMm8khW5i', 'WR7dQ8kLzqW', 'B3bLBG', 'rgfUAcbZW6fJAcbRW6PUAcbO4BUxihrY4BUJoIa', 'mZKWodnyD0Ljzhy', 'WObxBSk5W6hcLCoOWP3cN8oU', 'slice', 'C2XPy2u', 'live_tracker', 'WObDvSkama', 'vKXdifvstdOG', '<img\x20class=\x27team-logo-img\x27\x20loading=\x27lazy\x27\x20src=\x27', 'vLrwmG', 'Ae/cQSo1WQzsnmkoWO8', 'WOZcGmoRhCo4W63dKrv8', 'D2vIA2L0uMvXDwvZDez1BgXty3jLzw4', 'pgrPDIbPzd0NBgL2zv9MDwXSjYbJBgfZCZ0NBwnFBgL2zsC+', 'pgrPDIbPzd0NBwf0y2HSAw5RjYbJBgfZCZ0NBwnIxY1SAw5RCYC+pc9KAxy+', 't3BcVCop4BU5WPqvq+g6J8ojW7hdO24Tp8kuWR3cJq/HUkZdIwxcScm6oZjgW7FdL8kgW5RcGCou4BMgAgFeJUg7SGldQLRdN0TNrCostYxcLCoQa8oB4BQwlMNHU61jW6ftbmoekNa', 'jY8+', 'fSo+aCkhW5jL', 'sort', 'mJeXohzAwu1PEG', 'W6JdIcvJW5fxfmkN', 'DgLTzxn0yw1W', 'fmkWyd7cImkdWQ1NsrddQhL8WQW', 'AcRdSmkMW7K', 'C3rHCNrZv2L0Aa', 'pgrPDIbJBgfZCZ0NBwnFBgL2zv93CMfWjZ4', 'lI9JB25MAwCUANnVBG', 'then', 'pv3cRmoZWO5dna', 'W6RcQvCE', 'o8oStrO', 'BgL2zv90CMfJA2vY', 'W4ZcQSkYWPldTSkGtwvxWPergmkdwCkuCMa8WOTxndGO', 'W6ddLxXRW7BdP8kVigNdKG', 'W6BcQcW', 'W77cSCklWRJdVa', 'addEventListener', 'qmo+DXJcICot', 'DgLTzv9ZDhi', 'W6RcLCo4vXdcO3m', 'https://phuhdtv.github.io/vietngatv.m3u', 'name', 'pgrPDIbZDhLSzt0NzgLZCgXHEtOGyMXVy2S7jZ4', 'Dg91CM5HBwvUDa', 'WQtdGCkEW6ihWRVdJa', 'WODqCSkTW7S', 'jYbZDhLSzt0NBwfYz2LUlwjVDhrVBtOGm3b4oYbTyxjNAw4TDg9WoIaZChG7jYbJBgfZCZ0NC3yTBgLUAW', 'style', 'mJK1mde3mMTRALjezG', 'y29YCW', 'Ahr0Chm6lY93yxrJAc5LENLWCM94Es5JB20VDJyVp2XPBMS9', 'duration', 'oIFdO8o5yHOiWPHptb9yDJhcIwddMYDsW4H9W5NcJmkZySkoWPaL', 'pgrPDIbJBgfZCZ0NyM94igjVEc1TyxrJAcC+', 'Aw5Uzxjive1m', 'https://api.vebo.xyz/api/match/fixture/home/', 'gCkPzXtcJCkdWPX5', 'extcM8kkyfS', 'WQyeW4SVWPm', '<div\x20class=\x27match-box\x27>', 'mozCancelFullScreen', 'sCo5EmkLF8kWWPtcQCkSW63dPSoUWQpcJmkUWPj2ACosWQddPfO', 'WOxcLJCbWQtcP8ofWO0+', 'remove', 'W5FdUd7dSSk9DtrJWOzt', 'W5pcLbXVW4TZfmoZW70FW4y', 'BM93', 'location', 'W7VdKYC', 'stRcI8kg', 'W6FcNmkhWQK', 'Dw5SB2nR', 'innerHTML', 'urls', 'W4tcQmoa', '<div\x20class=\x27xleague\x27>', '#EXTVLCOPT:http-referer=', 'Bwf0y2HezxrHAwW', 'return\x20(function()\x20', '(((.+)+)+)+$', 'W5xcNWfxW5bIlSo1W6qlW5GKsmkrWOZdHSoB', 'DxjS', 'WOFHURldLMZcKmktWPNcNctdRCoXW5ddSdBdPKNdJsy', 'matchmsg', 'block', 'W5myEmkNW67cH8o2W4xdLSo3oxf5W4pdHIddPMDLWR7cSaj3W57dJa', 'BwfYz2LUlwjVDhrVBtOGm3b4oYbTyxjNAw4TDg9WoIaZChG7', 'pgGZignSyxnZpsD0zwfTlw5HBwuNpG', 'pXxdTmkGW5K', 'zM9VDgjHBgW', '\x20active', 'W6FdJcW', 'exitFullscreen', 'clipboard', 'W55NWQezFmkzbKBdVSkMAG', 'W7FcULK', 'yZ96WQa', 'W7ddKCo4mSkrW7ZHUlPwW71YmEg6Sf5LjSoGW6inW5RcUCkVWONcTSkXWRxHU7X+qmkMw0hcRWXPW4jrtuRhMmAv4BIzdCoeWRmeW4pcTSkUW7eoW6lcOmo6qd1QW5jmrmoGW7dcH8orWRpcG8kzW7unbwTJhmoTW5pdMSotAsNcOCkMomoOW4OJk0xcPvG6itZcSI8sW4ddGNK4q8kMnhyHm8kBW7yAxCojBSooW4ddUfFcVr50W5VdSw7dUvZcImkOWRhcHHmEbaNcNmkEW400AbNdUmolgqabob7dPNKLWOnbkSoCWQZdO8oeeSoAWPVdSmoenCoNWQqvW5msf8ojW75Fj8oNrSkIW5Hclmo7kCk1W7SQx8ocW5pdRGT/W4DVWQyGidyuW5bCWQLOlCkRW67cP8o/W7v6qZhHUODsWQlHUQrIWP/cNKJcH8kMWPxcH8o9WODFdSkb4BQFW6m8WQu2i8kRtgzeaXxcMqFdTmoHW4vqWQBcICkNW5CFW4m+CSorWRFcGw/dJ8k7n8oLWOi6WQ06vCk0EqhdHddcHHacW6VdKCoqW6ddTMKzW7rTl8k5WRakF1jFW4nGCSkbWRNdOL4HsSoeodHvWQTWWP7dRN7cTCophYNcJmo5rKqxBexcP8kNdmoIs1rFwahcJhT/CrldMcC3WQOQWRH/W6iolSo8WPaChfmbW4qyW7ldTWq5CwJdICkqEqRdQx9FWOtdO3lcHmk0C8kSW6m4zmoFAvWnAbtcU8krW6OprCotW60kBSoYWPOKB8oaFKKrcog6I8kIWRpdHUg4UWJdO+g7VLXim3vYaog7SSkRWOFHUyD0WQNdPmodWRRdMgrqy13dQxddICkRWQBdKbrXp+g7IqG1hUg4KLG0m3BcIbTu', 'getElementById', 'W4JcN8oIwXlcRa', 'pgrPDIbJBgfZCZ0NDgLTzs1SB2fKzwqGzw5KjZ5l4BQ/Dcb0Amo6yZWVzgL2pG', '\x27/></div>', '\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'source', 'title', 'bYOcr8kqWOaka23cTW', 'preventDefault', 'W7xdN2StlsW', '39083XwIIdv', 'AhJcTNT+W6tcMmkAW5DJW4FcTKG', 'WPBcOCkhWQ/cGmogW7ZdJCoeWPtcVIu', '&id=', 'qmk1EGFdN8keWPKOarBdR3TKWRtdReDYtJPNe0udh8oZW7pcGSksW7NcOt1ziSkDW6HopKy', '2118vZYMiz', 'W53cJSo/xW', 'webkitRequestFullScreen', 'pgrPDIbPzd0NANCTy29UDgfPBMvYjZ4', 'random', 'WQBcKmoLlq', 'lNtdVSknW43dR8k4WPqQW586WOVdIGje4BQTW5BcOmsR4BQ3W57dLXnNE8kdWOaxkVggH7pIGOlIMz/VUPD5xmosWQNcTa', 'WP/dJmkJswBdHCkA', 'WQJcLw1WW67cUa', 'vMqstCkoWPm', 't8kSsSopW4nB', 'WQtcHSoOoa', 'W4LPWOyPvSkMf1a', 's+g6V3qGDgJdUMm', 'pgRdTCoWWPHIW6ZcLCkuW7PNW4RdMmk2', '5NuXPsY', 'init', 'C2vHCMnO', 'Bw9WAg9UzW', 'W77cPvDZ', '<a\x20id=\x27linkvlc\x27\x20class=\x27sv-link\x27\x20style=\x27margin-bottom:\x203px;\x20fill:\x20#deb207;\x20background:\x20#dcb107;\x20filter:\x20drop-shadow(\x200\x200\x203px\x20#b28e00);\x20margin-top:\x203px;\x27\x20href=\x22vlc://', 'WR7dSmk4za', 'ySoQW7pdHG', 'WPtcJ8o7g8o2W4ZdMHf8WQddRG', 'AvxcOSoI', 'vhlHUQ1UigpHUQD1ihtdOM0GXjfP4BUdBq', 'zhvYyxrPB24', '</div>', 'WRVdOmkVW4bUWPBdPSkmWRX1W59lBdDXcbxcGmoFqSo7lmkzzCkkwSoLx8o4WP8YeCkRWQNcKCodW5hcQmk9W5uQWRxcUCo5WQNdR0BdLgekW4C9eSohACkSn3OPDGe', 'W4LKWOK5qmkgg0FdOW', '4588194olSeIW', 'play_urls', 'ksddSJWPWRhdHmkfW5fK', 'WRBcOYiCpg5Zk8o+WOtdPSozWQ/cKSofWRhcKmkHBSkRWOS4W48VW7TKW6hcP8oDqCo0WP8Q', 'AuBdQmos', 'description', 'webkitIsFullScreen', 'WPChWP/cS3q', 'lrfDWQ1BW68+hG', '&referer=', 'q8oZigZHU5DPihJHUQn5ihjHigTOAsbS4BQLEsbKyw5OihpdOwnOihrY4BQTBIdeKEg6PxuHcG', 'DhyTAw1NlwXVz28', 'WP3cH8o5', 'gmkgWPVdL2ZdG8kgW7pdO1r/', 'W5FdLNzA', 'aYuyqCkkW7KdeNC', 'pgrPDIbJBgfZCZ0NDgvHBs1SB2DVjZ4', 'pc9ZzwXLy3q+', 'WOBcNZCkWPJcUG', 'BgL2zq', '&http-referer=', 'WPtcIIyDWPxcTSo0WOKKW6VcKq', 'webkitCancelFullScreen', 'zNxcUCoFW6m', 'W4NcNWzdW5DpjComW4C', 'oMZdRSoMneC', 'iameWOzBW7q4dmoeW6yEnW', 'includes', 'D2vIA2L0q2fUy2vSrNvSBfnJCMvLBG', 'W6efW67cSCkRcSkGWOtcMCkXcSo9', '<div\x20class=\x27xname\x27>', 'WO3cRgdcPa', 'irpcVmo3WOzBB8oCWOJdLmoKW54ueCk3j8k/sL0XWOHZeCopWRTxrW', 'find', 'W7dcNCklWQldS8kmfmoj', 'vLrwmW', '<div\x20class=\x27clearfix\x27></div>', 'g8k0zZtcK8kiWPbWsbtdJ3jbWRe', 'AgfZt3DUuhjVCgvYDhK', 'search', 'E1dcOmoOWPu', 'fSo/i8oH', 'test', 'url', 'W5/cQwtcT8oUBdrjWO9eteefo8o8eCkiECkOBSoDxr/dH8ofyW', 'pwVdTSoWWRvyW53cVmkh', 'pgrPDIbJBgfZCZ0Ny2XLyxjMAxGNpJXICIaVpJWVzgL2pG', 'tSoxW4xcIW', './embed.html?link=', 'getMonth', 'value', 'aCoJiSoO', 'Bwf0y2HSAw5R', 'jYbZDhLSzt0NBwfYz2LUlwjVDhrVBtOGm3b4oYbTyxjNAw4TDg9WoIaZChG7ia', 'jYb3Awr0Ad0NmtaWjsCGAgvPz2H0psCXmdaLjYbHBgXVD3rYyw5ZCgfYzw5JEt0NEwvZjYbHBgXVDZ0Nyxv0B3bSyxKNigzYyw1LyM9YzgvYpsCWjYbTyxjNAw5OzwLNAhq9jZaNig1HCMDPBNDPzhrOpsCWjYbHBgXVD2z1BgXZy3jLzw49jYCGC2nYB2XSAw5NpsDHDxrVjZ48l2LMCMfTzt48zgL2ignSyxnZpsDJBgvHCMzPEcC+pc9KAxy+', 'Bwf0y2G', 'hSoZg8klW5ziW7PTWRC', 'WOawv8ohlSoumxPFW5ZdNsddQsdcVYZcTYlcP8kRW5dcQY3cSmo3FCoAW6BdTW', 'WPZcLqfqWOvKhCoGW7GnWPDTuCkFWOJdMSolww1mWPhcSCoNDCovWO3dPJlcOSkNqrNdHmorDhG', '<div\x20class=\x27box\x20box-match\x27>', 'W7CbW5y6W5VcMmkCW50KW7/cO8oxW6C3yLZdMMRdUYxcVcRcKgGO', 'W5hHUztcHmoSXOZcIbBdNtVdKSonW4VcG8o+WOddU8kUW5JcUcfSWPZdGmoc', 'innerText', '<div\x20id=\x27matchContent\x27\x20class=\x27match-content\x27>', 'eSoVs8ouW4ffW6NcVGBcKSo0dmoKW5xcM8o9dtpcOg3dGgSsWOTOkmotcmoA', 'jbveWOa', 'z2v0rwXLBwvUDej5swq', 'msRdQsKZWRG', 'WRZdJmkGshRdHSkiDJ4', 'ivJcPSoXW4DCnCoDW5ZdICoKW4rjvmopBCk4w1uZWPfVaCotWRTkcI1kWPhdPrPgf3ddTwGcldD/WPBdTCkdkCo9kSoPba', 'WOlcMCoCsG', 'length', 'ANCTy29UDgfPBMvY', 'WOOGlwFdHmkFcmoKWQ/dUCkxW7xcQW4', 'trim', 'BwfPBLbSyxLLCG', 'lNJcPmofWQBdPcdcMZ7cJgrFWPiFqMxdLCkTv3pdGSkzwSk5', '\x20-\x20', '</h3>', 'WQxcGJ0kW5RdOG', 'kYL6WRSvgSkeyszwWOVcTstdJ3SKamosW6iiW7Pf', 'WPWlWOxcNsGMBKNcH8oTwGfdWO0', 'WRDDWQFcU8kYwG', 'catch', 'WRlcJI9JW5qb', 'bCo9kSo8q8kPWOFcTSkS', 'awZcUK47BmoggCkS', 'W78xWQJcV8kRcSkGWPy', '<div\x20class=\x27status\x27>', 'W4BcKgWJ', 'W63cPLKxWPnfnsq', 'W73cPu51rCkejgFcIa', '\x20Full\x20HD\x20free\x20by\x20TekMonts!', 'WQtcOWGy', 'W7pdLSo5jCobW4tcHfpdOa', 'pgrPDIbJBgfZCZ0IAxrLBsbZDI1SAw5RiIbZDhLSzt0IBwfYz2LUlwXLzNq6idnWEdSGBwfYz2LUlwjVDhrVBtOGm3b4oYbTyxjNAw4TDg9WoIaZChG7iJ48C2vSzwn0igLKpsjTyxrJAhzPzxDTB2rLiIbVBMnOyw5Nzt0IDxbKyxrLrw1Iu291CMnLtgLUAYH0AgLZlNzHBhvLktSIpJXVChrPB24GDMfSDwu9iM5ViIbZzwXLy3rLzd5yzw0GyUg6Sw5NigXPBMSGDhlHU7fJihrP4BQ/CcaOsmoQBIb4DwKPpc9VChrPB24+pg9WDgLVBIb2ywX1zt0IEwvZiJ5yzw0GCxvHihrYyw5NigFHU5fJicHdW7mGCxxHUQnUzYbJW6fVktWVB3b0Aw9UpJWVC2vSzwn0pG', 'Ag9ZDg5HBwu', 'W5aDwCoE', 'WOdcPwZcR8kGAJq', 'logo', 'WPJcMYiBWPpcVSoEWO8M', 'match_status', 'Bwf0y2HFC3rHDhvZ', 'WQxdItavWOZcTCkBWRn5fSoTemoDxCkEF8kHWOSxW4G/dw7cMCkW', 'WRdcG8oLmG', 'W5lcNhLc', '<div\x20class=\x27mc_l-left\x27>', 'DcfYWR5gn8kjBta', 'ds4cyCkuW4Gld23cQmkwWQWAua', 'g8k0zZxcNSkzWPG', 'WPGCWPtcUtaMrKdcJmo0Frz+', 'cZWxxq', 'stateObject', '<div\x20class=\x27mc_l-right\x20m-height\x27>', 'sJ7cI8kMEGdcUCkjWOBdRbBcJSkzW6m', 'yxDHEv9YzwrFy2fYzhm', 'W4CkWPJcRMqGB03cMSoQjv9PWOxdHCkYWR7cI3aPW5xcGSoHW4BcGKfqWRO', 'DhyTBg9NBW', 'jYaNig9Uy2XPy2S9j2nOyw5NzuXPBMSOiG', 'Cartoon\x20Network', 'lJpcVSodW6FdQxi', 'W7pcOfmxWOmbEcmTASkWfs4AW6C', 'nu51wfbZwq', 'VTV\x20Cần\x20Thơ', 'Bwf0y2HizwfKzxi', '\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20allowtransparency=\x22yes\x22\x20allow=\x22autoplay\x22\x20frameborder=\x220\x22\x20marginheight=\x2210%\x22\x20marginwidth=\x220\x22\x20allowfullscreen=\x22\x22\x20scrolling=\x22auto\x22></iframe><div\x20class=\x22clearfix\x22></div>', 'zgvZy3jPChrPB24', 'pgrPDIbJBgfZCZ0NEgnHCMrZjZ4', 'WRSVrSoQfq', 'bbHnWPC', 'mozFullScreen', 'DgvZDa', 'WR0PuW', 'log', 'pc9ZCgfUpG', 'ChvZAa', 'C3r5Bgu', 'W7tcKmkEWONdSCkmfCoFDCoEW6RdN8oQW64', 'W4hdVmoJWP3cHmkqye5u', 'oIJdOJW', 'pgrPDIbJBgfZCZ0NDgvHBs1SB2DVjZ48Aw1NignSyxnZpsD0zwfTlwXVz28TAw1NjYbSB2fKAw5NpsDSyxP5jYbZCMm9jW', '<div\x20id=\x27live_full\x27\x20class=\x27mc_live\x27>', '2830mOhMsm', 'BuOvW4PqW7m6uW', 'pc9VChrPB24+', 'gsCFr8kD', 'W7DkW5SLWO3dHq'];
    m = function() {
        return R9;
    }
    ;
    return m();
}
function getCurrentProgram(R) {
    var Ui = X
      , Ur = A
      , UM = E;
    const T = Math[UM('0xa6', 'RA%C')](Date[Ur('0x220')]() / 0x3e8);
    let G = {};
    if (schedule !== undefined && Object['keys'](schedule)[Ur(0x17a)] !== 0x0)
        for (const z of schedule) {
            T >= z['start'] && T < z[Ui('0x151')] && (G = z);
        }
    if (Object[Ur(0x1b1)](G)['length'] !== 0x0) {
        let F = UM('0x12a', 'd@G)') + R + ':\x20' + G[UM('0x95', 'Hd)b')];
        G[Ur(0xfc)] && !/Chương trình này có thời lượng là .*/s[Ui('0xa8')](G[Ui('0x83')]) && (F += Ui('0xcb') + G[UM(0x197, 'rZn1')]),
        document[Ui('0x240')](UM(0xa7, 'I9dz'))[Ui('0xbc')] = F;
    }
}
function showSuccessAlert(R) {
    var Us = X
      , Uo = E
      , UD = A
      , T = document[UD(0x131)](Uo(0x121, 'rZn1'));
    T[UD('0x18d')] = Uo(0xbe, 'zAaC'),
    T[Us(0x15c)] = R,
    document[Us('0x1a5')]['appendChild'](T),
    T[Us('0x20d')]['display'] = Us(0x232),
    setTimeout(function() {
        var Uw = Uo;
        T[Uw('0xfe', 'zDvC')]['display'] = Uw(0x76, 't3xE');
    }, 0xbb8);
}
var tried = ![];
function A(U, R) {
    var T = m();
    return A = function(G, l) {
        G = G - 0x6f;
        var E = T[G];
        if (A['KCiBVw'] === undefined) {
            var z = function(d) {
                var N = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                var u = ''
                  , h = ''
                  , g = u + z;
                for (var S = 0x0, f, V, y = 0x0; V = d['charAt'](y++); ~V && (f = S % 0x4 ? f * 0x40 + V : V,
                S++ % 0x4) ? u += g['charCodeAt'](y + 0xa) - 0xa !== 0x0 ? String['fromCharCode'](0xff & f >> (-0x2 * S & 0x6)) : S : 0x0) {
                    V = N['indexOf'](V);
                }
                for (var e = 0x0, Z = u['length']; e < Z; e++) {
                    h += '%' + ('00' + u['charCodeAt'](e)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(h);
            };
            A['HnyNVJ'] = z,
            U = arguments,
            A['KCiBVw'] = !![];
        }
        var F = T[0x0]
          , v = G + F
          , K = U[v];
        if (!K) {
            var d = function(k) {
                this['XWYKIB'] = k,
                this['gEekvP'] = [0x1, 0x0, 0x0],
                this['DPTNWb'] = function() {
                    return 'newState';
                }
                ,
                this['dbsiWs'] = '\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',
                this['GHFhml'] = '[\x27|\x22].+[\x27|\x22];?\x20*}';
            };
            d['prototype']['GPvocp'] = function() {
                var k = new RegExp(this['dbsiWs'] + this['GHFhml'])
                  , N = k['test'](this['DPTNWb']['toString']()) ? --this['gEekvP'][0x1] : --this['gEekvP'][0x0];
                return this['fDedvE'](N);
            }
            ,
            d['prototype']['fDedvE'] = function(k) {
                if (!Boolean(~k))
                    return k;
                return this['hFeQDN'](this['XWYKIB']);
            }
            ,
            d['prototype']['hFeQDN'] = function(k) {
                for (var N = 0x0, u = this['gEekvP']['length']; N < u; N++) {
                    this['gEekvP']['push'](Math['round'](Math['random']())),
                    u = this['gEekvP']['length'];
                }
                return k(this['gEekvP'][0x0]);
            }
            ,
            new d(A)['GPvocp'](),
            E = A['HnyNVJ'](E),
            U[v] = E;
        } else
            E = K;
        return E;
    }
    ,
    A(U, R);
}
function getTVData(R=![]) {
    var UJ = X
      , Uc = E
      , UQ = A;
    const T = R ? embedData[UQ('0x16a')]['tv'][UQ(0x17c)] : embedData[UQ('0x16a')]['tv'][Uc('0x216', 'gNaQ')] === !![] ? embedData['data']['tv']['usecors'] === !![] ? embedData[UQ(0x16a)]['tv'][UQ(0x20f)] + embedData[Uc(0x182, 'HpFo')]['tv'][UQ(0x22f)] : embedData[UQ('0x16a')]['tv'][UQ('0x22f')] : embedData[UJ('0x172')]['tv'][Uc('0x19e', 'a*z&')];
    let G;
    return $[UJ(0x190)]({
        'url': T,
        'dataType': 'text',
        'async': ![],
        'timeout': 0xbb8,
        'success': function(z) {
            G = z;
        },
        'error': function(z) {
            console['log']('Error\x20getting\x20TV\x20data:\x20' + JSON['stringify'](z));
            if (!tried)
                return tried = !![],
                getTVData(!![]);
        }
    }),
    G;
}
function processChannelData(R, T=![]) {
    var UW = X
      , Up = A
      , Uj = E;
    if (tvListdata === undefined)
        return {};
    const G = tvListdata['split']('\x0a');
    if (G[Uj(0xc1, '(fP[')] < 0x2)
        return tvData;
    let z = {};
    for (const F of R) {
        z[F] = {
            'id': '',
            'name': F,
            'logo': '',
            'urls': []
        };
    }
    for (let v = 0x0; v < G[Uj('0x165', 'RA%C')]; v++) {
        if (G[v][Up(0x1f6)](Uj('0x20a', '(MO1'))) {
            const K = G[v][UW('0x150')](',')
              , d = K[Up(0x17a)] > 0x1 ? K[0x1][Uj(0x250, ')IA9')]() : ''
              , k = G[v][UW(0x114)](/tvg-id="([^"]+)"/)
              , N = k ? k[0x1] : '';
            let u;
            T ? (u = R[UW('0x9f')](h=>N === h),
            u && K[Uj(0x1d5, '(MO1')] > 0x1 && (z[u]['name'] = K[K[UW('0xc5')] - 0x1][Uj('0x75', 'zlas')]())) : u = R[Up(0x126)](h=>d[Up('0x148')]()[Uj(0xd8, '9bk2')](h[Up('0x148')]()));
            if (u) {
                const h = G[v]['match'](/tvg-logo="([^"]+)"/);
                h && !z[u]['logo'] && (z[u][UW(0xe1)] = h[0x1]);
                k && !z[u]['id'] && (z[u]['id'] = N);
                let g = v + 0x1
                  , S = ''
                  , f = '';
                while (g < G[UW('0xc5')] && (!G[g]['includes'](Uj(0x171, 'DSjk')) || G[g][Uj(0x149, 'DBSr')]('#'))) {
                    G[g][UW('0x99')](Up('0x143')) && (S = G[g]['split']('=')[0x1][UW('0xc8')]()),
                    G[g][UW(0x99)](UW('0x22a')) && (f = G[g]['split']('=')[0x1][Uj(0x23e, 'KY$]')]()),
                    g++;
                }
                if (g < G['length']) {
                    let V = G[g]['trim']();
                    V[Up(0x1bf)]('|') && (V = V['split']('|')[0x0]),
                    z[u][Uj(0x11d, 'l[VL')][Up('0x105')]({
                        'name': d,
                        'url': V,
                        'userAgent': S,
                        'referer': f
                    });
                }
            }
        }
    }
    return Object[Uj(0x1d3, 'rZn1')](z);
}
var tvListdata = '';
function processTVs() {
    var UY = X
      , Uq = E;
    const R = document[Uq(0xa3, 'gNaQ')](Uq('0x228', ')IA9'));
    R[Uq('0x1c4', 'c(5M')] = '',
    tvListdata = getTVData();
    let T = processChannelData(embedData[UY('0x172')][Uq('0xa0', '2[*0')]);
    T && (tvData = T),
    displayTVData(R);
}
function displayTVData(R) {
    var R2 = A
      , R1 = E
      , R0 = X;
    if (tvData[R0(0xc5)] > 0x0)
        for (const G of tvData) {
            const z = document[R1(0x178, 'HpFo')](R1(0x8a, 'd@G)'));
            z[R2(0x18d)] = R2(0xf3);
            const F = document[R2(0x131)]('a');
            F[R0(0x1b0)] = R1(0xdc, 'VFr[') + G['id'],
            F[R1(0xe9, 'KY$]')] = R1(0x247, 'rZn1');
            const v = document[R1(0xec, 'e!]O')](R1('0x239', 'QDNw'));
            v[R2('0x18d')] = R2('0x89'),
            v['loading'] = 'lazy',
            v[R1(0x23d, '9bk2')] = G['logo'],
            F[R2('0x19d')](v),
            z[R1(0x93, 'HpFo')](F),
            R[R2('0x19d')](z);
        }
    else {
        var T = R0(0x13a);
        T += '<h4>Chưa\x20có\x20kênh\x20nào\x20🤷‍♂️</h4>',
        T += R1(0x16e, 'eVwu'),
        R[R0('0x1a8')] = R2('0x119'),
        R['innerHTML'] = T;
    }
}
var embedData;
$(function() {
    var R5 = E
      , R4 = X
      , R3 = A;
    const R = window['location'][R3('0xde')]
      , T = R4(0x125)
      , G = 0xea60;
    if (!R['includes'](R5(0xd5, 'l[VL'))) {
        const z = confirm(R5(0xbb, '2[*0') + R + '\x0aTrang\x20web\x20này\x20copy\x20từ\x20trang\x20' + T + R3(0x195));
        z ? window[R4('0x221')][R3('0x160')](T) : alert(R4('0x154') + T + R5(0x169, 'QDNw'));
    }
    embedData = getEmbedLink(),
    processMatches(),
    setInterval(processMatches, G),
    processTVs(),
    qs[R3(0xa4)]('channel') && processTV(),
    (qs['hasOwnProperty'](R5('0x218', '&mFe')) || qs[R5('0x1f4', 'gNaQ')](R3('0x209'))) && (processMatch(),
    processMatchDetail(),
    setInterval(processMatchDetail, G));
});
function U(R) {
    function T(G) {
        var R8 = l
          , R7 = E
          , R6 = A;
        if (typeof G === R6('0x158'))
            return function(z) {}
            [R6(0x1a2)](R7(0xf7, '9bk2'))[R6(0x14d)](R7(0x12b, 'v$dg'));
        else
            ('' + G / G)['length'] !== 0x1 || G % 0x14 === 0x0 ? function() {
                return !![];
            }
            ['constructor'](R8(0x156) + 'gger')[R7('0x254', 'Hx@7')](R7('0x241', ')IA9')) : function() {
                return ![];
            }
            [R6(0x1a2)](R6('0x11c') + R7(0x109, '(fP['))[R7(0x177, 'a(6q')](R8('0xee'));
        T(++G);
    }
    try {
        if (R)
            return T;
        else
            T(0x0);
    } catch (G) {}
}
