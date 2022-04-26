module.exports = {
  // ========================================================================
  // Global
  // ========================================================================
  currency: 'eur',
  paymentMethods: ['card', 'ideal', 'bancontact'],
  // ========================================================================
  // Branding
  // ========================================================================
  branding: {
    logo: '/images/furni-logo.svg',
    brandColor: '#154960',
    accentColor: '#3C9BAA'
  },
  // ========================================================================
  // Products to be shown in the demo
  // ========================================================================
  products: [
    {
      name: 'Chair',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec lorem risus. Vivamus fermentum, ante nec scelerisque facilisis, dui lorem ornare nisl, ut vulputate risus lacus et leo. Vestibulum lacinia arcu sed eros consectetur, non semper nulla eleifend. In hac habitasse platea dictumst. Praesent condimentum nisl sed tellus finibus gravida. Praesent ullamcorper sed nisl ut eleifend. In non lacinia magna.',
      price: 7000,
      image: 'https://images.unsplash.com/photo-1622147681210-d7da05b4a7d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1588&q=80'
    },
    {
      name: 'Sofa',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec lorem risus. Vivamus fermentum, ante nec scelerisque facilisis, dui lorem ornare nisl, ut vulputate risus lacus et leo. Vestibulum lacinia arcu sed eros consectetur, non semper nulla eleifend. In hac habitasse platea dictumst. Praesent condimentum nisl sed tellus finibus gravida. Praesent ullamcorper sed nisl ut eleifend. In non lacinia magna.',
      price: 97000,
      image: 'https://images.unsplash.com/photo-1616627451515-cbc80e5ece35?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80'
    },
    {
      name: 'Wooden Stool',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec lorem risus. Vivamus fermentum, ante nec scelerisque facilisis, dui lorem ornare nisl, ut vulputate risus lacus et leo. Vestibulum lacinia arcu sed eros consectetur, non semper nulla eleifend. In hac habitasse platea dictumst. Praesent condimentum nisl sed tellus finibus gravida. Praesent ullamcorper sed nisl ut eleifend. In non lacinia magna.',
      price: 6000,
      image: 'https://images.unsplash.com/photo-1503602642458-232111445657?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80'
    },
    {
      name: 'Retro Chair',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec lorem risus. Vivamus fermentum, ante nec scelerisque facilisis, dui lorem ornare nisl, ut vulputate risus lacus et leo. Vestibulum lacinia arcu sed eros consectetur, non semper nulla eleifend. In hac habitasse platea dictumst. Praesent condimentum nisl sed tellus finibus gravida. Praesent ullamcorper sed nisl ut eleifend. In non lacinia magna.',
      price: 12000,
      image: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80'
    }
  ],
  // ========================================================================
  // Pages
  // ========================================================================
  pages: {
    // Global are for elements that show on all/most pages like footer, headers, etc.
    global: {
      banner: {
        show: true,
        text: "Get free delivery on orders over $499"
      }
    },
    // Index is the homepage
    index: {
      hero: {
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=3349&q=80",
        text: "Modern furniture for any space",
        lead: "The new arrivals have, well, newly arrived. Check out the latest sofas, chairs, tables and bedroom collections to make your space more your style.",
        cta: "Start Shopping",
      },
      categories: {
        show: true,
        1: {
          image: "https://images.unsplash.com/photo-1551298370-9d3d53740c72?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80",
          text: "Chairs"
        },
        2: {
          image: "https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80",
          text: "Sofas"
        },
        3: {
          image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80",
          text: "Tables"
        },
        4: {
          image: "https://images.unsplash.com/photo-1526657782461-9fe13402a841?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1538&q=80",
          text: "Workspace"
        },
        5: {
          image: "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80",
          text: "Sale"
        }
      },
      collections: {
        show: true,
        1: {
          image: "https://images.unsplash.com/photo-1542928658-22251e208ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3264&q=80",
          text: "Light filled living rooms collection",
          lead: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Curabitur sit amet convallis neque."
        },
        2: {
          image: "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg",
          text: "Organized desk collection",
          lead: "Interdum et malesuada fames ac ante ipsum primis in faucibus, sed eu libero ac turpis sodales ornare."
        },
        3: {
          image: "https://images.unsplash.com/photo-1532344214108-1b6d425db572?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3298&q=80",
          text: "Cozy bedrooms collection",
          lead: "Vivamus vehicula urna sit amet elit euismod placerat id eu nunc, commodo quam id, lacinia urna"
        },
      }
    },
    // Products is the product listing page. NOT products themselves
    products: {
      categoryFilters: {
        show: true,
        options: [
          "New",
          "Seasonal",
          "Preorder",
          "Sale"
        ]
      },
      attributeFilters: {
        show: true,
        label: "Color",
        options: [
          "White",
          "Beige",
          "Blue",
          "Brown",
          "Green"
        ]
      }
    }
  }
}
