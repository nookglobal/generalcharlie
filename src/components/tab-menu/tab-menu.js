import React, { useState } from 'react';
import posed from 'react-pose';
import { Container, CategoryBody, Sidebar, MenuContainer, StyledList, StyledLi,  SidebarBody, DescriptionBody } from './tab-menu.css';

const AnimatedMenu = posed.ul({
    open: {
        applyAtStart: { display: 'block' },
        x: '0%',
        delayChildren: 200,
        staggerChildren: 50
    },
    closed: { applyAtStart: { display: 'none' }, x: '-100%', delay: 300 }
});

const AnimatedItemsH3 = posed.h3({
    open: { y: 0, opacity: 1 },
    closed: { y: 20, opacity: 0 }
});

const AnimatedItems = posed.li({
    open: { y: 0, opacity: 1 },
    closed: { y: 20, opacity: 0 }
});

const renderItem = (category, item) => {
    const { name, price, tags, description } = item;
    if(tags.includes(category)) {
        return (
            <AnimatedItems>
                <div className="container">
                    <h2>{name}</h2>
                    <div className="dots">&nbsp;</div>
                    <span>${price}</span>
                </div>
                { description && <p dangerouslySetInnerHTML={{
                __html: description}} /> }
            </AnimatedItems>
        );
    }

    return null;
}

const isVisible = (currentTag, tag) => (currentTag === tag) ? 'open' : 'closed';

const TabMenu = ({ categories, items }) => {
    const [selectedCategory, setSelectedCategory] = useState({
        tag: 'all-day',
        index: 0
    });

    const selectCategory = (tag, index) => {
        window.scrollTo(0, 0);
        setSelectedCategory({
            tag: tag,
            index: index
        });
    };

    const groupedItems = {
        'all-day': items.map((item) => renderItem('all-day', item)),
        'limited-filo': items.map((item) => renderItem('limited-filo', item)),
        'limited-filo-desserts': items.map((item) => renderItem('limited-filo-desserts', item)),
        //TODO make this dynamic
        'drinks-milkshakes': items.map((item) => renderItem('milkshakes', item)),
        'drinks-specialty': items.map((item) => renderItem('specialty', item)),
        'drinks-espresso': items.map((item) => renderItem('espresso', item)),
        'drinks-non-coffee': items.map((item) => renderItem('non-coffee', item)),
        'drinks-organic-tea': items.map((item) => renderItem('organic-tea', item)),
        'drinks-bottled-canned': items.map((item) => renderItem('bottled-canned', item)),
    };

    return (
        <Container>
            <StyledList>
                {
                    categories.map((category, index) => (
                        <StyledLi key={category.tag} isSelected={(selectedCategory.tag === category.tag)} onClick={() => selectCategory(category.tag, index)}>
                            <center>{category.title}</center>
                        </StyledLi>
                    ))
                }
            </StyledList>
            <DescriptionBody dangerouslySetInnerHTML={{
                __html: categories[selectedCategory.index].description.childMarkdownRemark.html,
                }}/>
            <CategoryBody>
                <MenuContainer>
                    <AnimatedMenu pose={isVisible(selectedCategory.tag, 'all-day')}>
                        { groupedItems['all-day'] }
                    </AnimatedMenu>
                    <AnimatedMenu pose={isVisible(selectedCategory.tag, 'limited-filo')}>
                        { groupedItems['limited-filo'] }
                    </AnimatedMenu>
                    <AnimatedMenu pose={isVisible(selectedCategory.tag, 'limited-filo-desserts')}>
                        { groupedItems['limited-filo-desserts'] }
                    </AnimatedMenu>
                    <AnimatedMenu pose={isVisible(selectedCategory.tag, 'drinks')}>
                        <AnimatedItemsH3>Milkshakes</AnimatedItemsH3>
                        { groupedItems['drinks-milkshakes'] }
                        <AnimatedItemsH3>Specialty</AnimatedItemsH3>
                        { groupedItems['drinks-specialty'] }
                        <AnimatedItemsH3>Espresso</AnimatedItemsH3>
                        { groupedItems['drinks-espresso'] }
                        <AnimatedItemsH3>Non-coffee</AnimatedItemsH3>
                        { groupedItems['drinks-non-coffee'] }
                        <AnimatedItemsH3>Organic Tea</AnimatedItemsH3>
                        { groupedItems['drinks-organic-tea'] }
                        <AnimatedItemsH3>Bottled/Canned</AnimatedItemsH3>
                        { groupedItems['drinks-bottled-canned'] }
                    </AnimatedMenu>
                </MenuContainer>
                <Sidebar>
                    <SidebarBody dangerouslySetInnerHTML={{
                    __html: categories[selectedCategory.index].description.childMarkdownRemark.html,
                    }}/>
                </Sidebar>
            </CategoryBody>
            <br/>
            <StyledList>
                {
                    categories.map((category, index) => (
                        <StyledLi key={category.tag} isSelected={(selectedCategory.tag === category.tag)} onClick={() => selectCategory(category.tag, index)}>
                            {category.title}
                        </StyledLi>
                    ))
                }
            </StyledList>
        </Container>
    )
};

export default TabMenu;
