import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardService {
    public users = [
        {
            id: 1,
            nama: 'ferdi'
        },
        {
            id: 2,
            nama: 'anang'
        },
        {
            id: 3,
            nama: 'havis'
        }
    ]

    findDataById(id: number) {
        return this.users.find(user => user.id === id);
    }
}
