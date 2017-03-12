var le = require('greenlock').create({ server: 'staging' });

var opts = {
    domains: ['smcoco.com'], email: 'oorococo@gmail.com', agreeTos: true
};

le.register(opts).then(function (certs) {
    console.log(certs);
    // privkey, cert, chain, expiresAt, issuedAt, subject, altnames
}, function (err) {
    console.error(err);
})
