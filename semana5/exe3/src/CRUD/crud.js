class CRUD{
    constructor(repository){
        this.repository = repository
    }

    create(item){
        return this.repository.push(item)
    }

    read(){
        return this.repository
    }

    update(index, item){
            this.repository.splice(index, 0)
            return this.repository[index] = item
    }

    delete(index){
            this.repository.splice(index, 0)
            return this.repository[index] = '[deleted]'
    }
}

module.exports = CRUD