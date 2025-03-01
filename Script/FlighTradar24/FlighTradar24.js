let body = JSON.parse($response.body);
body.token = 'a74718cf6bef994596702b786de0516d5b362ef380306388f6be57857f9b2be3';
if (body.features) {
    body.features = {
        "app.ios": "enabled",
        "map.info.flight.ems.mach": "enabled",
        "map.layer.ndb.alt.high": "enabled",
        "map.filters.max": 25,
        "user.fleets.max.aircraft": 1000,
        "map.layer.atc": "enabled",
        "map.info.flight.ground-speed": "enabled",
        "map.view.list": "enabled",
        "map.info.flight.track": "enabled",
        "map.info.flight.ems.tas": "enabled",
        "map.layer.waypoints": "enabled",
        "map.layer.weather.auradar": "enabled",
        "map.info.flight.airspace": "enabled",
        "map.info.aircraft.type": "enabled",
        "history.playback.flight.days": 365,
        "history.playback.global.days": 365,
        "map.data.delaystats": "enabled",
        "user.fleets.max": 3,
        "map.data.flarm": "enabled",
        "map.info.flight.ems.ias": "enabled",
        "map.layer.weather.radar.global": "enabled",
        "map.info.aircraft.msn": "enabled",
        "map.view.3d.basic": 3,
        "support.level": "Yes",
        "map.data.satellite": "enabled",
        "map.info.flight.ems.wind": "enabled",
        "map.layer.ndb.charts": "enabled",
        "map.view.radar": "enabled",
        "history.flight.days": 365,
        "map.view.multi": "enabled",
        "map.info.aircraft.code": "enabled",
        "map.widgets.last_clicked_flights": "enabled",
        "map.info.flight.calibrated-altitude": "enabled",
        "user.alerts.max": 25,
        "map.layer.tracks.oceanic": "enabled",
        "map.info.airport.arrivals": "enabled",
        "map.info.flight.ems.oat": "enabled",
        "map.view.delay": "enabled",
        "map.layer.weather.naradar": "enabled",
        "map.widgets.bookmarks.max": 25,
        "user.sessions.max": 3,
        "map.info.airport.departures": "enabled",
        "map.info.aircraft": "full",
        "map.data.ads-b": "enabled",
        "map.data.mlat": "enabled",
        "history.playback.days": 365,
        "map.view.3d": "enabled",
        "map.info.flight.position": "enabled",
        "adverts": "disabled",
        "map.view.fullscreen": "enabled",
        "map.layer.ndb.alt.low": "enabled",
        "user.users": 1,
        "map.layer.weather.volcano": "enabled",
        "map.layer.weather.satellite": "enabled",
        "map.data.faa": "enabled",
        "app.android": "enabled",
        "usage.rights": "Private",
        "map.search": "enabled",
        "map.timeout.mins": -1,
        "map.info.flight.squawk": "enabled",
        "map.layer.weather": "enabled",
        "map.info.flight": "full",
        "history.aircraft.days": 365,
        "map.info.aircraft.registration": "enabled",
        "map.tracking.live": "enabled",
        "map.layer.vor": "enabled",
        "map.info.flight.ems": "enabled",
        "map.info.flight.vertical-speed": "enabled",
        "history.flight.kml": 25,
        "map.widgets.bookmarks": "enabled",
        "map.labels.rows": 4,
        "map.status.flight": "enabled",
        "map.widgets": 0,
        "map.info.aircraft.age": "enabled",
        "map.info.flight.ems.alt.gps": "enabled",
        "map.info.airport.onground.hours": 720,
        "map.layer.ndb": "enabled",
        "map.view.fleet.onground": 1,
        "map.layer.navdata": "enabled",
        "map.layer.weather.radar": "enabled",
        "user.bookmarks.max": 25
    }
}

if (body.userData) {
    body.userData.accountType = 'subscriber';
    body.userData.dateExpires = 4110251213;
    body.userData.subscriptionKey = 'D-ci4m4anzl200ROmg7EwVu3SepAZbCWkbqUVkDuKaE';
    body.userData.subscriptions = {
        "0": {
            "currencyCode": "USD",
            "typeStatus": "active",
            "paymentProvider": "Y1",
            "typePlatform": "ios",
            "idSubscription": 13,
            "idSubscriptionPackage": 11,
            "dateCreated": 1648800587,
            "sku": "subscription.premium.gold",
            "idSubscriptionLink": "8109405",
            "typeStatusAgreement": "active",
            "billingPeriod": 365,
            "originalBillingPeriod": 365,
            "subscriptionPackagePrice": 13.99,
            "dateModified": "1648800594",
            "dateExpires": 4110251213,
            "billingAmount": 0,
            "sortOrder": 3,
            "name": "Gold",
            "typeSubscription": "annually"
        }
    }

 if (body.userData.features) {
     body.userData.features = {
        "app.ios": "enabled",
        "map.info.flight.ems.mach": "enabled",
        "map.layer.ndb.alt.high": "enabled",
        "map.filters.max": 25,
        "user.fleets.max.aircraft": 1000,
        "map.layer.atc": "enabled",
        "map.info.flight.ground-speed": "enabled",
        "map.view.list": "enabled",
        "map.info.flight.track": "enabled",
        "map.info.flight.ems.tas": "enabled",
        "map.layer.waypoints": "enabled",
        "map.layer.weather.auradar": "enabled",
        "map.info.flight.airspace": "enabled",
        "map.info.aircraft.type": "enabled",
        "history.playback.flight.days": 365,
        "history.playback.global.days": 365,
        "map.data.delaystats": "enabled",
        "user.fleets.max": 3,
        "map.data.flarm": "enabled",
        "map.info.flight.ems.ias": "enabled",
        "map.layer.weather.radar.global": "enabled",
        "map.info.aircraft.msn": "enabled",
        "map.view.3d.basic": 3,
        "support.level": "Yes",
        "map.data.satellite": "enabled",
        "map.info.flight.ems.wind": "enabled",
        "map.layer.ndb.charts": "enabled",
        "map.view.radar": "enabled",
        "history.flight.days": 365,
        "map.view.multi": "enabled",
        "map.info.aircraft.code": "enabled",
        "map.widgets.last_clicked_flights": "enabled",
        "map.info.flight.calibrated-altitude": "enabled",
        "user.alerts.max": 25,
        "map.layer.tracks.oceanic": "enabled",
        "map.info.airport.arrivals": "enabled",
        "map.info.flight.ems.oat": "enabled",
        "map.view.delay": "enabled",
        "map.layer.weather.naradar": "enabled",
        "map.widgets.bookmarks.max": 25,
        "user.sessions.max": 3,
        "map.info.airport.departures": "enabled",
        "map.info.aircraft": "full",
        "map.data.ads-b": "enabled",
        "map.data.mlat": "enabled",
        "history.playback.days": 365,
        "map.view.3d": "enabled",
        "map.info.flight.position": "enabled",
        "adverts": "disabled",
        "map.view.fullscreen": "enabled",
        "map.layer.ndb.alt.low": "enabled",
        "user.users": 1,
        "map.layer.weather.volcano": "enabled",
        "map.layer.weather.satellite": "enabled",
        "map.data.faa": "enabled",
        "app.android": "enabled",
        "usage.rights": "Private",
        "map.search": "enabled",
        "map.timeout.mins": -1,
        "map.info.flight.squawk": "enabled",
        "map.layer.weather": "enabled",
        "map.info.flight": "full",
        "history.aircraft.days": 365,
        "map.info.aircraft.registration": "enabled",
        "map.tracking.live": "enabled",
        "map.layer.vor": "enabled",
        "map.info.flight.ems": "enabled",
        "map.info.flight.vertical-speed": "enabled",
        "history.flight.kml": 25,
        "map.widgets.bookmarks": "enabled",
        "map.labels.rows": 4,
        "map.status.flight": "enabled",
        "map.widgets": 0,
        "map.info.aircraft.age": "enabled",
        "map.info.flight.ems.alt.gps": "enabled",
        "map.info.airport.onground.hours": 720,
        "map.layer.ndb": "enabled",
        "map.view.fleet.onground": 1,
        "map.layer.navdata": "enabled",
        "map.layer.weather.radar": "enabled",
        "user.bookmarks.max": 25
     }
  }
}

$done({ body: JSON.stringify(body) });