class MovieRepository {
    constructor({ movieModel }) {
        this.movieModel = movieModel;
    }

    async createMovie(data) {
        return await this.movieModel.create(data);
    }

    async getMovieByName(name) {
        return await this.movieModel.findOne({ name });
    }

    async getMovieById(id) {
        return await this.movieModel.find({ "_id": id })
    }

    async getMovieByCoren(coren) {
        return await this.movieModel.findOne({ coren });
    }

    async getMovies() {
        return await this.movieModel.find();
    }

    async updateMovieByName(name, data) {
        return await this.movieModel.updateOne({ name: name }, { $set: data });
    }

    async findMovies({ query }) {
        const { title } = query;
        return await this.movieModel.find({ title: { '$regex': title, '$options': 'i' } });
    }
}

module.exports = MovieRepository;