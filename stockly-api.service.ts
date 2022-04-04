import { Body, Injectable } from '@nestjs/common';
import { HttpException, HttpStatus } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'nestjs-prisma';
import axios from 'axios';
require('isomorphic-fetch');
@Injectable()
export class StocklyApiService {

    constructor(
        private readonly prisma: PrismaService,
      ) {}

    async checkmail(){
        const data = await axios({
            url: url,
            method: 'post',
            data: {
                query: `
                query{
                    checkEmail(email:"grvsanas@gmail.com"){
                        available
                      }
                  }`
            }
          }).catch(err=> console.log("ERROR", err));
        
        console.log(data['data'])
        return data['data'].data.checkEmail
        }
        
        // async signup({firstname,lastname,email,password}){
        //     const data = await axios({
        //         url: url,
        //         method: 'post',
        //         params: {
        //             mutation: `
        //             mutation{
        //                 signup(data:{email:"gsanas@woyce.io",firstname:${firstname},lastname:${lastname},password:${password}}){
        //                     accessToken
        //                     id
        //                     firstname
        //                     lastname
        //                     emailaddress
        //                 }
        //             }`
        //         }
        //     }).catch(err=> console.log("ERROR", err))
        //     // .then(res => console.log(data));;

        //     return data['data'].data
        // }

        async signup({firstname,lastname,email,password}) {
            const data = {
              query: `query GET_POSTS($first: Int) {
                posts(first: $first) {
                  edges {
                    node {
                      postId
                      title
                      excerpt
                      date
                      content
                      author {
                        node {
                          username
                        }
                      }
                    }
                  }
                }
              }`,
              variables: {
                first: 5
              }
            }
            
            const options = {
              method: 'POST',
              headers: { 'content-type': 'application/json' },
              data: data,
              url: url
            };
                
            try {
              const response = await axios(options);
            
              console.log(response.data.data.posts.edges);
              console.log(response.data.data.posts.edges.length);
            } catch (error) {
              console.error(error);
            }
        }
}
