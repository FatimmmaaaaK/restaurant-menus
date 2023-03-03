const {sequelize} = require('./db')
const {Restaurant, Menu} = require('./models/index')
const {
    seedRestaurant,
    seedMenu,
  } = require('./seedData');

describe('Restaurant and Menu Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    });

    test('can create a Restaurant', async () => {
        // TODO - write test
        const newRestaurant = await Restaurant.create({
            name: 'The Sushi Bar',
            location: 'Hackensack',
            cuisine: 'Japanese'

        });

        expect(newRestaurant.name).toEqual('The Sushi Bar'),
        expect(newRestaurant.location).toEqual("Hackensack"),
        expect(newRestaurant.cuisine).toEqual('Japanese')

    });

    test('can create a Menu', async () => {
        // TODO - write test
        const newMenu = await Menu.create({
            title: 'Be our Guest'
        });
        
        expect(newMenu.title).toEqual('Be our Guest')
 
    });

    test('can find Restaurants', async () => {
        // TODO - write test
        const newRestaurant = await Restaurant.create({
            name: 'The Sushi Bar',
            location: 'Hackensack',
            cuisine: 'Japanese'

        });
        const allRestaurants = await Restaurant.findByPk(1);

        expect(allRestaurants.name).toEqual('The Sushi Bar')
    });

    test('can find Menus', async () => {
        // TODO - write test
        const newMenu = await Menu.create({
            title: 'Be our Guest'
        });

        const firstMenu = await Menu.findByPk(1);
        expect(firstMenu.title).toEqual('Be our Guest');
    });

    test('can delete Restaurants', async () => {
        // TODO - write tests
        const newRestaurant = await Restaurant.create({
            name: 'The Diner',
            location: 'Main street',
            cuisine:'American'
        });

        const deletedRestaurant = await Restaurant.destroy({
            where:{
                id:1
            }
        });
        const foundRestaurant = await Restaurant.findByPk(1);
        console.log(foundRestaurant);

        expect(foundRestaurant).toBe(null)
    });
}) 