import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { Button,Input,Header } from 'semantic-ui-react';
import './Main.css';


class Main extends Component {
  render() {
    return (
        <div className='Main-mast'>
   <Grid padded={true} >
       <Grid.Row columns={2} >
           <Grid.Column floated='left'>
                <Image src='./images/logo.png' width='250' height='43' />
           </Grid.Column>  
            <Grid.Column floated='right'>
               <Button  color='white' floated='right'>Grey</Button>
               <Button  color='white' floated='right'>Grey</Button>
           </Grid.Column>   
       </Grid.Row>
       </Grid >
       <Grid  padded={true}>
       <Grid.Row className='Main-content' columns={2} >
      <Grid.Column className='Main-text'>
            <h1 className='Main-title'>Consulting At Its Peak</h1>
            <Grid>
                <Grid.Row columns={1}>
                     <Grid.Column padded='true' textAlign='center'>
               <Button  color='blue' size ='massive'  >Grey</Button>
              <Button color='blue' size='massive'  >Grey</Button>
           </Grid.Column>  
                </Grid.Row>    
            </Grid>    
      </Grid.Column>
        <div className="card card-4">
            <Header as='h2' color='white' >Drop Us Your Contact</Header>
            <Input className='Main-card-content' fluid  placeholder='Name' size='large' />
            <Input className='Main-card-content' fluid  placeholder='E-mail' size='large' />
            <Input className='Main-card-content' fluid  placeholder='Phone Number' size='large' />
             <Button color='blue' className='Main-card-content' size='large'fluid>Submit</Button>
             <Header as='h5' color='#fff' >We will not share your email and contacts. Read our privacy policy.</Header>
        </div>
      <Grid.Column>
        
      </Grid.Column>
    </Grid.Row>
   </Grid>  
   </div>  
    );
  }
}

export default Main;