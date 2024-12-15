import { INotification } from '@interfaces/notification.interface';

export class Notification implements INotification {
    className: string;
    title: string;
    icon: string;
    message: string;

    constructor(notification?: INotification) {
        this.className = notification?.className ?? '';
        this.title = notification?.title ?? '';
        this.icon = notification?.icon ?? '';
        this.message = notification?.message ?? '';
    }
}