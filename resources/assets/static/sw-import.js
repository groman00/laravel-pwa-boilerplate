self.addEventListener('push', function(event) {
    var notification = {
        title: 'Build Series Reminder',
        body: 'Event starting soon',
        icon: 'https://s3.amazonaws.com/aol-build/images/pwa/Icon-76%402x.png',
        data: {}
    };
    if (event.data) {
        var data = event.data.json();
        notification = {
            'title': data.notification.title,
            'body': data.notification.body,
            'icon': data.notification.icon,
            'data': data.data
        };
    }
    console.log('Push message data', notification);

    event.waitUntil(
        self.registration.showNotification(notification.title, notification)
    );
});

self.addEventListener('notificationclick', function(event) {
    console.log('Notification clicked, notification data:', event.notification.data);

    // Android doesn't close the notification when you click on it. See: http://crbug.com/463146
    event.notification.close();

    // This looks to see if the current is already open and focuses if it is
    event.waitUntil(
        clients
            .matchAll({ type: "window" })
            .then(function(clientList) {
                for (var i = 0; i < clientList.length; i++) {
                    var client = clientList[i];
                    var appUrl = location.protocol + '//' + location.host;
                    if (client.url == '/' || client.url == appUrl || client.url == appUrl + '/#' && 'focus' in client) {
                        return client.focus();
                    }
                }
                if (clients.openWindow) {
                    return clients.openWindow('/');
                }
            })
    );
});

