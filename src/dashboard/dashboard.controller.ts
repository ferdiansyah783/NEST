import { Controller, Get, Param } from '@nestjs/common';

@Controller('dashboard')
export class DashboardController {
    public data = [
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

    @Get()
    index() {
        return "Dashboard Page";
    }

    @Get('contact')
    contact(filter:string) {
        if(filter == undefined) {
            return "All contact";
        }

        return "filter contact by : " + filter;
    }

    @Get('filter')
    filterContact() {
        return this.contact('ferdi');
    }

    @Get('user')
    user() {
        return this.data;
    }

    @Get('user/:id')
    otherUser(@Param() param){
        const dataUser = this.data.filter(val => val['id'] == param.id);
        
        if(!dataUser.length) {
            return "Not found";
        }
        
        return dataUser;
    }
    
}

console.log('tester');

