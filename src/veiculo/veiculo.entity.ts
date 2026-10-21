import {
    Entity, 
    PrimaryGeneratedColumn, 
    Column
} from 'typeorm';

@Entity('veiculo')

export class veiculo { 
    
    @PrimaryGeneratedColumn()
    id!: number; 

    @Column({length: 50})
    marca!: string;

    @Column({length: 100, unique:true})
    modelo!: string; 

    @Column({type:'int'})
    placa!: string;

    @Column ({type:'int'})
    ano!:number;

    @Column ({type:'decimal'})
    valorDiaria!:number;


    @Column ({default:true})
    disponivel!:boolean;
}