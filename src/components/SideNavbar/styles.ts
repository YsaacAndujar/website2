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
      button: () => {
        return {
            fontSize: '18px',
            color: 'var(--white)',
            transition: 'all 0.3s ease-out',
            '&:hover': {
                color: 'var(--blue)',
                backgroundColor: 'var(--black-w)',
                borderLeft: "5px solid var(--blue)",
            },
          };
      },
}
