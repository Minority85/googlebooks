import React, { Component } from "react";
import Jumbotron from "./../components/Jumbotron/Jumbotron"
import API from "../utils/API";
import { Input, Button } from "./../components/Form/Form"
import { Container } from "../components/Grid/Grid";

class Search extends Component {
    state = {
        books: [],
        title: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        if (this.state.title) {
            API.getBooks(this.state.title)
                .then(res =>
                    console.log(res)
                )
                .catch(err => console.log(err));
        }
    }

    render() {
        return (
            <Container>
                <Jumbotron>
                    <h1>(React) Google Books Search</h1>
                    <h4>Search for and Save Books of Interest</h4>
                </Jumbotron>
                <div className="card">
                    <div className="card-body">
                        <p><strong>Book Search</strong></p>
                        <br />
                        <p>Book</p>
                        <br />
                        <Input
                            title={this.state.title}
                            onChange={this.handleInputChange}
                            name="title"
                        />
                        <br />
                        <Button
                            onClick={this.handleFormSubmit}
                        />
                    </div>
                </div>
                <br />
                <h4>Results</h4>
            </Container>

        )
    }
}

export default Search;