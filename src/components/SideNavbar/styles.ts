interface Styles {
    [key: string]: any;
}
export const SidebarStyle: Styles = {
    borderRight: "0px",
}
export const MenuStyle: Styles = {
    //height: '100%',
    //backgroundColor: 'var(--black-w)',
}
export const MenuItemStyle: Styles = {
      button: ({ active }: {active: boolean}) => {
        return {
            fontSize: '18px',
            color: 'var(--white)',
            transition: 'all 0.3s ease-out',
            '&:hover': {
                color: '#0096FF',
                backgroundColor: 'var(--black-w)',
            },
            //backgroundColor: active ? 'var(--black-w)' : undefined,
          };
      },
}
