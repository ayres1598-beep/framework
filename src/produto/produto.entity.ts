import {
    Entity, 
    PrimaryGeneratedColumn, 
    Column
} from 'typeorm';

@Entity('produto')

export class produto { 
    
    @PrimaryGeneratedColumn()
    id!: number; 

    @Column({length: 100})
    nome!: string;

    @Column({length: 255, unique:true})
    descricao!: string; 

    @Column({type:'decimal'})
    preco!: number;

    @Column ({type:'int'})
    quantidade!:number;

    @Column ({default:true})
    ativo!:boolean;
}