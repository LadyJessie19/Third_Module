# FOLDERS ARCHITECTURE GUIDE

/* CONTROLLERS */

/* The controllers are meant to get in touch with the client.
 It's like a waitress. It's every part that "take notes from the delivering part". 
 In programming, this part can be represented by the 'req'(request) parameter of a express router request */

 /* SERVICES */

/* The services are meant to take care of the database logic. 
It's like a cooker. They take care of the food process, and in the backend case, the processed data. 
In programming, this part can be represented by gathering the data into an object or anything that will be stored in the database. */

 /* REPOSITORY */

/* The repository is meant to get in touch in the database through methods. 
It's like the table from where the customer has taken his order. 

Think about a restaurant.

The customer get inside, sit at a table and calls the waitress.
The waitress takes the food order at the customer table.
Then she delivers the order to the kitchen, where the ordered food will be prepared.
The cooker will check the order specifications and prepares the plate. 
Once is ready, the food will be delivery to the customer table. 

The customer is the client or programmer,
the waitress is the controller,
the cooker is the service, and
the table is the repository.

In programming, this part can be represented by the database methods, like get, post, put, delete, etc. 
In mongodb, it can be represented by .find(), .findOne(), .update(), etc.

*/

 /* CONTROLLER EXAMPLE - Line 43 to 44 */
 /* SERVICE EXAMPLE - Line 46 to 50 */
 /* REPOSITORY EXAMPLE - Line 52 */
 /* Question: the line 54 to 56, what type it is? controllers or services? */

 /* app.post('/orders', async (req, res) => {
    const payload = req.body
  
    const orderToPersist = {
      ...payload,
      isDelivered: false,
      createdAt: new Date()
    }
  
    await orderCollection.insertOne(orderToPersist)
  
    res.status(201).json({
      data: orderToPersist
    })
  }) */

/* This folder is nice to study: C:\Users\63\Desktop\ThirdModule\modulo-3\http\resolucoes\concessionaria */