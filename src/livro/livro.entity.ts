import {
    Entity, 
    PrimaryGeneratedColumn, 
    Column
} from 'typeorm';

@Entity('livro')

export class livro { 
    
    @PrimaryGeneratedColumn()
    id!: number; 

    @Column({length: 150})
    titulo!: string;

    @Column({length: 100, unique:true})
    autor!: string; 

    @Column({type:'int'})
    isbn!: string;

    @Column ({type:'int'})
    anoPublicacao!:number;

    @Column ({default:true})
    disponivel!:boolean;
}