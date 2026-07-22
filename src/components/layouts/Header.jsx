import Button from '../ui/Button';

const Header = () => {

  return (
    <header className="flex flex-row justify-around mb-4 bg-bento-light dark:bg-bento-dark">
      <p className='text-3xl my-2 font-bold text-typography-light dark:text-typography-light'>Simon Badin</p>
      <div className=''>
        <Button>
          Projets
        </Button>

        <Button>
          Parcours
        </Button>

        <Button>
          Contact
        </Button>
      </div>
       
    </header>
  );
};

export default Header;
