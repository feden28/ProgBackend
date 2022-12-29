import knex from "knex";

class Contenedor {
    constructor(databaseConfig, tableName){
        this.database = knex(databaseConfig);
        this.table = tableName;
    }

    async save(document){
        const resp = await this.database(this.table).insert(document);
        return response;        
    } catch (err) {
        console.log(err);
    }

    async replace(id, document){
        const resp = await this.database(this.table).where({id}).update(document);
        
        return response;        
    } catch (err) {
        console.log(err);
    }

    async getById(id){
        try {
            const response = await this.database.from(this.table).select("*").where({ id });
      
        return response;    
        } catch (err) {
            console.log(err);
        }
    }
    async getAll() {
        try {
          const response = await this.database.from(this.table).select("*");
          return response;
        } catch {
          return { error: 'no encontro producto' };
        }
      }
    
      async deleteById(id) {
        try {
          await this.database(this.table).del().where({ id });
    
          return true;
        } catch (err) {
          throw new Error(`Error al borrar: ${err}`);
        }
      }
    
      async deleteAll() {
        try {
          await this.database(this.table).del();
        } catch (err) {
          throw new Error(`Error al escribir: ${err}`);
        }
      }
}
    
    export default Contenedor;