// Cake Constructor JavaScript

// State management
let cakeState = {
    tiers: null,
    size: null,
    base: null,
    filling: null,
    cream: null,
    decorations: [],
    price: 0
};

let cart = [];

// Price base for different cake sizes
const basePrices = {
    small: 800,
    medium: 1200,
    large: 1800
};

// Color schemes for different cake components
const cakeStyles = {
    tiers: {
        1: {
            name: 'Одноярусный торт',
            description: 'Классический торт в один ярус. Идеален для небольших праздников и семейных торжеств.',
            nutrition: { calories: 0, proteins: 0, fats: 0, carbs: 0 }, // Базовые значения
            multiplier: 1
        },
        2: {
            name: 'Двухярусный торт',
            description: 'Элегантный двухярусный торт для особых случаев. Создает впечатляющий визуальный эффект.',
            nutrition: { calories: 0, proteins: 0, fats: 0, carbs: 0 },
            multiplier: 1.8
        },
        3: {
            name: 'Трёхярусный торт',
            description: 'Роскошный трёхярусный торт для больших торжеств. Настоящий шедевр кондитерского искусства.',
            nutrition: { calories: 0, proteins: 0, fats: 0, carbs: 0 },
            multiplier: 2.5
        }
    },
    base: {
        vanilla: { 
            background: '#F5DEB3', 
            name: 'Ванильный бисквит',
            nutrition: { calories: 290, proteins: 5.2, fats: 8.1, carbs: 48.3 },
            description: 'Классический ванильный бисквит с нежным вкусом и воздушной текстурой. Изготавливается из лучших ингредиентов с добавлением натуральной ванили.'
        },
        chocolate: { 
            background: '#8B4513', 
            name: 'Шоколадный бисквит',
            nutrition: { calories: 315, proteins: 6.1, fats: 9.2, carbs: 52.7 },
            description: 'Насыщенный шоколадный бисквит с глубоким какао-вкусом. Приготовлен с использованием бельгийского какао высшего качества.'
        },
        'red-velvet': { 
            background: '#DC143C', 
            name: 'Красный бархат',
            nutrition: { calories: 340, proteins: 4.8, fats: 12.5, carbs: 55.2 },
            description: 'Изысканный бисквит красного цвета с неповторимым вкусом. Традиционный американский рецепт с кремовым сыром.'
        },
        carrot: { 
            background: '#FF8C00', 
            name: 'Морковный',
            nutrition: { calories: 280, proteins: 4.5, fats: 7.8, carbs: 46.1 },
            description: 'Полезный и вкусный морковный бисквит с добавлением орехов и специй. Богат витамином А и клетчаткой.'
        }
    },
    cream: {
        buttercream: { 
            background: '#FFF8DC', 
            name: 'Масляный крем',
            nutrition: { calories: 385, proteins: 2.1, fats: 28.4, carbs: 32.7 },
            description: 'Классический масляный крем на основе сливочного масла высшего качества. Легко наносится и держит форму.'
        },
        cheese: { 
            background: '#FFFACD', 
            name: 'Сливочный сыр',
            nutrition: { calories: 320, proteins: 5.8, fats: 22.1, carbs: 26.3 },
            description: 'Нежный крем из сливочного сыра с деликатным вкусом. Идеально подходит для красного бархата и морковного торта.'
        },
        whipped: { 
            background: '#F8F8FF', 
            name: 'Взбитые сливки',
            nutrition: { calories: 250, proteins: 3.2, fats: 18.7, carbs: 18.9 },
            description: 'Легкий воздушный крем из натуральных взбитых сливок. Менее калорийный вариант с нежной текстурой.'
        }
    },
    filling: {
        strawberry: { 
            name: 'Клубничная начинка',
            nutrition: { calories: 95, proteins: 1.2, fats: 0.8, carbs: 22.4 },
            description: 'Свежая клубничная начинка из отборных ягод. Содержит натуральные витамины и антиоксиданты.'
        },
        chocolate: { 
            name: 'Шоколадная начинка',
            nutrition: { calories: 180, proteins: 3.5, fats: 8.9, carbs: 24.1 },
            description: 'Густая шоколадная начинка из темного шоколада премиум-класса. Насыщенный вкус какао.'
        },
        caramel: { 
            name: 'Карамельная начинка',
            nutrition: { calories: 165, proteins: 1.8, fats: 6.2, carbs: 28.7 },
            description: 'Соленая карамель с деликатным балансом сладкого и соленого. Приготовлена по французскому рецепту.'
        },
        cherry: { 
            name: 'Вишневая начинка',
            nutrition: { calories: 85, proteins: 1.1, fats: 0.5, carbs: 20.2 },
            description: 'Кислая вишня в собственном соку с легкой кислинкой. Богата витамином C и антиоксидантами.'
        }
    },
    decorations: {
        flowers: { 
            icon: '🌸', 
            name: 'Цветы из крема',
            nutrition: { calories: 45, proteins: 0.8, fats: 3.2, carbs: 4.1 },
            description: 'Изящные цветы из масляного крема, выполненные вручную кондитером. Украшение высшего класса.'
        },
        berries: { 
            icon: '🫐', 
            name: 'Свежие ягоды',
            nutrition: { calories: 35, proteins: 0.6, fats: 0.2, carbs: 8.4 },
            description: 'Микс из свежих сезонных ягод: черника, малина, ежевика. Натуральное украшение, богатое витаминами.'
        },
        'chocolate-chips': { 
            icon: '🍫', 
            name: 'Шоколадная крошка',
            nutrition: { calories: 85, proteins: 1.8, fats: 5.1, carbs: 9.7 },
            description: 'Мелкая крошка из темного шоколада. Добавляет хрустящую текстуру и насыщенный шоколадный вкус.'
        },
        nuts: { 
            icon: '🥜', 
            name: 'Орехи',
            nutrition: { calories: 120, proteins: 4.2, fats: 9.8, carbs: 3.1 },
            description: 'Микс из обжаренных орехов: миндаль, фундук, грецкие орехи. Источник полезных жиров и белка.'
        }
    }
};

// DOM elements
const optionCards = document.querySelectorAll('.option-card');
const totalPriceElement = document.getElementById('total-price');
const addToCartButton = document.getElementById('add-to-cart');
const cartCountElement = document.getElementById('cart-count');
const cartItemsElement = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const checkoutButton = document.getElementById('checkout-btn');
const previewCake = document.getElementById('preview-cake');
const cakeBase = document.getElementById('cake-base');
const cakeCream = document.getElementById('cake-cream');
const cakeDecorations = document.getElementById('cake-decorations');
const cakeTexture = document.getElementById('cake-texture');

// Nutrition elements
const caloriesElement = document.getElementById('calories');
const proteinsElement = document.getElementById('proteins');
const fatsElement = document.getElementById('fats');
const carbsElement = document.getElementById('carbs');

// Modal elements
const modal = document.getElementById('ingredient-modal');
const modalClose = document.getElementById('modal-close');
const modalCancel = document.getElementById('modal-cancel');
const modalSelect = document.getElementById('modal-select');
const infoButtons = document.querySelectorAll('.info-btn');

// Progress elements
const progressSteps = document.querySelectorAll('.progress-step');
const progressLine = document.querySelector('.progress-line');

// Current modal ingredient
let currentModalIngredient = null;

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    updatePreview();
    updateCart();
});

function initializeEventListeners() {
    // Option card selection
    optionCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking on info button
            if (!e.target.closest('.info-btn')) {
                handleOptionSelection(this);
            }
        });
    });

    // Info button listeners
    document.addEventListener('click', function(e) {
        if (e.target.closest('.info-btn')) {
            e.preventDefault();
            e.stopPropagation();
            const btn = e.target.closest('.info-btn');
            const ingredient = btn.dataset.ingredient;
            showIngredientModal(ingredient, btn.closest('.option-card'));
        }
    });

    // Modal event listeners
    modalClose.addEventListener('click', closeModal);
    modalCancel.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) closeModal();
    });
    
    modalSelect.addEventListener('click', function() {
        if (currentModalIngredient) {
            handleOptionSelection(currentModalIngredient.card);
            closeModal();
        }
    });

    // Add to cart button
    addToCartButton.addEventListener('click', addToCart);

    // Checkout button
    checkoutButton.addEventListener('click', checkout);

    // Mobile menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Keyboard support for modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

function handleOptionSelection(card) {
    const type = card.dataset.type;
    const value = card.dataset.value;
    const price = parseInt(card.dataset.price) || 0;

    // Handle different selection types
    if (type === 'decoration') {
        toggleDecoration(card, value, price);
    } else {
        selectSingleOption(card, type, value, price);
    }

    updatePrice();
    updatePreview();
    updateProgress();
    updateNutrition();
    validateCake();
}

function selectSingleOption(card, type, value, price) {
    // Remove selection from other cards in the same group
    const groupCards = card.parentElement.querySelectorAll('.option-card');
    groupCards.forEach(groupCard => {
        groupCard.classList.remove('selected');
    });

    // Select current card
    card.classList.add('selected');
    cakeState[type] = { value, price };
}

function toggleDecoration(card, value, price) {
    const isSelected = card.classList.contains('selected');
    
    if (isSelected) {
        // Remove decoration
        card.classList.remove('selected');
        cakeState.decorations = cakeState.decorations.filter(
            decoration => decoration.value !== value
        );
    } else {
        // Add decoration
        card.classList.add('selected');
        cakeState.decorations.push({ value, price });
    }
}

function updatePrice() {
    let totalPrice = 0;
    let tierMultiplier = 1;

    // Get tier multiplier
    if (cakeState.tiers) {
        tierMultiplier = cakeStyles.tiers[cakeState.tiers.value]?.multiplier || 1;
        totalPrice += cakeState.tiers.price; // Add tier base price
    }

    // Add base price for size (affected by tiers)
    if (cakeState.size) {
        totalPrice += cakeState.size.price * tierMultiplier;
    }

    // Add prices for other components (affected by tiers)
    ['base', 'filling', 'cream'].forEach(component => {
        if (cakeState[component]) {
            totalPrice += cakeState[component].price * tierMultiplier;
        }
    });

    // Add decoration prices (less affected by tiers)
    cakeState.decorations.forEach(decoration => {
        totalPrice += decoration.price * Math.min(tierMultiplier, 2);
    });

    cakeState.price = totalPrice;
    totalPriceElement.textContent = `${Math.round(totalPrice).toLocaleString()} ₽`;
}

function updatePreview() {
    // Update cake base
    if (cakeState.base && cakeStyles.base[cakeState.base.value]) {
        const baseStyle = cakeStyles.base[cakeState.base.value];
        cakeBase.style.background = baseStyle.background;
        cakeBase.style.display = 'block';
    }

    // Update cake cream
    if (cakeState.cream && cakeStyles.cream[cakeState.cream.value]) {
        const creamStyle = cakeStyles.cream[cakeState.cream.value];
        cakeCream.style.background = creamStyle.background;
        cakeCream.style.display = 'block';
    }

    // Update decorations
    let decorationIcons = '';
    cakeState.decorations.forEach(decoration => {
        if (cakeStyles.decorations[decoration.value]) {
            decorationIcons += cakeStyles.decorations[decoration.value].icon + ' ';
        }
    });
    cakeDecorations.textContent = decorationIcons;

    // Update cake size
    if (cakeState.size) {
        const sizeMultiplier = cakeState.size.value === 'small' ? 0.8 : 
                              cakeState.size.value === 'large' ? 1.2 : 1;
        
        const baseWidth = 200 * sizeMultiplier;
        const baseHeight = 80 * sizeMultiplier;
        
        cakeBase.style.width = `${baseWidth}px`;
        cakeBase.style.height = `${baseHeight}px`;
        
        const creamWidth = 180 * sizeMultiplier;
        cakeCream.style.width = `${creamWidth}px`;
    }
}

function validateCake() {
    const isValid = cakeState.tiers && cakeState.size && cakeState.base && cakeState.cream;
    addToCartButton.disabled = !isValid;
    
    if (isValid) {
        addToCartButton.innerHTML = '<i class="fas fa-shopping-cart"></i> Добавить в корзину';
    } else {
        const missing = [];
        if (!cakeState.tiers) missing.push('ярусы');
        if (!cakeState.size) missing.push('размер');
        if (!cakeState.base) missing.push('основу');
        if (!cakeState.cream) missing.push('крем');
        addToCartButton.textContent = `Выберите: ${missing.join(', ')}`;
    }
}

function addToCart() {
    if (!cakeState.tiers || !cakeState.size || !cakeState.base || !cakeState.cream) {
        alert('Пожалуйста, выберите количество ярусов, размер, основу и крем для торта');
        return;
    }

    // Create cake description
    const cakeDescription = createCakeDescription();
    
    // Add to cart
    const cartItem = {
        id: Date.now(),
        description: cakeDescription,
        price: cakeState.price,
        components: { ...cakeState }
    };

    cart.push(cartItem);
    updateCart();
    
    // Reset cake state
    resetCakeState();
    
    // Show success message
    showNotification('Торт добавлен в корзину!');
}

function createCakeDescription() {
    let description = '';
    
    if (cakeState.tiers) {
        const tierNames = { 1: 'Одноярусный', 2: 'Двухярусный', 3: 'Трёхярусный' };
        description += tierNames[cakeState.tiers.value] + ' ';
    }
    
    if (cakeState.size) {
        const sizeNames = { small: 'маленький', medium: 'средний', large: 'большой' };
        description += sizeNames[cakeState.size.value] + ' торт';
    }

    if (cakeState.base && cakeStyles.base[cakeState.base.value]) {
        description += ` - ${cakeStyles.base[cakeState.base.value].name}`;
    }

    if (cakeState.filling && cakeStyles.filling[cakeState.filling.value]) {
        description += `, ${cakeStyles.filling[cakeState.filling.value].name}`;
    }

    if (cakeState.cream && cakeStyles.cream[cakeState.cream.value]) {
        description += `, ${cakeStyles.cream[cakeState.cream.value].name}`;
    }

    if (cakeState.decorations.length > 0) {
        const decorationNames = cakeState.decorations.map(decoration => 
            cakeStyles.decorations[decoration.value]?.name
        ).filter(Boolean);
        
        if (decorationNames.length > 0) {
            description += `. Декор: ${decorationNames.join(', ')}`;
        }
    }

    return description;
}

function resetCakeState() {
    cakeState = {
        tiers: null,
        size: null,
        base: null,
        filling: null,
        cream: null,
        decorations: [],
        price: 0
    };

    // Remove all selections
    optionCards.forEach(card => {
        card.classList.remove('selected');
    });

    // Reset all tiers visibility
    for (let i = 1; i <= 3; i++) {
        const tier = document.getElementById(`tier-${i}`);
        if (tier) {
            if (i === 1) {
                tier.style.display = 'block';
            } else {
                tier.style.display = 'none';
            }
        }
    }

    // Reset decorations
    if (cakeDecorations) {
        cakeDecorations.textContent = '';
    }

    updatePrice();
    updateProgress();
    updateNutrition();
    updatePreview();
    validateCake();
}

function updateCart() {
    // Update cart count
    cartCountElement.textContent = cart.length;

    // Update cart items
    if (cart.length === 0) {
        cartItemsElement.innerHTML = '<p class="empty-cart">Корзина пустая. Создайте свой первый торт!</p>';
        checkoutButton.disabled = true;
    } else {
        cartItemsElement.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h5>Торт #${index + 1}</h5>
                    <div class="cart-item-details">${item.description}</div>
                </div>
                <div class="cart-item-price">${item.price.toLocaleString()} ₽</div>
            </div>
        `).join('');
        checkoutButton.disabled = false;
    }

    // Update total
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotalElement.textContent = `${total.toLocaleString()} ₽`;
}

function checkout() {
    if (cart.length === 0) {
        alert('Корзина пустая!');
        return;
    }

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const itemCount = cart.length;
    
    if (confirm(`Оформить заказ на ${itemCount} торт(а/ов) на сумму ${total.toLocaleString()} ₽?`)) {
        // Simulate order processing
        showNotification('Заказ оформлен! Мы свяжемся с вами для подтверждения.');
        
        // Clear cart
        cart = [];
        updateCart();
    }
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #ff6b9d 0%, #c44569 100%);
        color: white;
        padding: 1rem 2rem;
        border-radius: 25px;
        box-shadow: 0 10px 30px rgba(255, 107, 157, 0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        max-width: 300px;
    `;

    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);

    document.body.appendChild(notification);

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
            if (style.parentNode) {
                style.parentNode.removeChild(style);
            }
        }, 300);
    }, 3000);
}

// Initialize skill progress bars animation on scroll
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.dataset.width;
                entry.target.style.width = width;
            }
        });
    });

    skillBars.forEach(bar => observer.observe(bar));
}

// Call skill bar animation
document.addEventListener('DOMContentLoaded', animateSkillBars);

// Add floating animation to cake layers
function addCakeAnimations() {
    const cakeLayers = document.querySelectorAll('.cake-layer');
    cakeLayers.forEach((layer, index) => {
        layer.style.animationDelay = `${index * 0.2}s`;
    });
}

// Progress bar management
function updateProgress() {
    const steps = ['tiers', 'size', 'base', 'filling', 'cream', 'decoration'];
    let completedSteps = 0;
    
    steps.forEach((step, index) => {
        const stepElement = document.querySelector(`[data-step="${step}"]`);
        if (!stepElement) return;
        
        let isCompleted = false;
        
        if (step === 'decoration') {
            isCompleted = cakeState.decorations.length > 0;
        } else {
            isCompleted = cakeState[step] !== null;
        }
        
        if (isCompleted) {
            stepElement.classList.add('completed');
            completedSteps = index + 1;
        } else {
            stepElement.classList.remove('completed');
        }
        
        // Set active step
        if (index === completedSteps && completedSteps < steps.length) {
            stepElement.classList.add('active');
        } else {
            stepElement.classList.remove('active');
        }
    });
    
    // Update progress line
    const progressPercentage = (completedSteps / steps.length) * 100;
    if (progressLine) {
        progressLine.style.setProperty('--progress-width', `${progressPercentage}%`);
    }
}

// Nutrition calculator
function updateNutrition() {
    let totalNutrition = { calories: 0, proteins: 0, fats: 0, carbs: 0 };
    let tierMultiplier = 1;
    
    // Get tier multiplier for nutrition
    if (cakeState.tiers) {
        tierMultiplier = cakeStyles.tiers[cakeState.tiers.value]?.multiplier || 1;
    }
    
    // Calculate base nutrition (size and tiers affect portion)
    if (cakeState.size && cakeState.base) {
        const sizeMultiplier = cakeState.size.value === 'small' ? 0.6 : 
                              cakeState.size.value === 'large' ? 1.4 : 1;
        const baseNutrition = cakeStyles.base[cakeState.base.value]?.nutrition;
        if (baseNutrition) {
            const finalMultiplier = sizeMultiplier * tierMultiplier;
            totalNutrition.calories += baseNutrition.calories * finalMultiplier;
            totalNutrition.proteins += baseNutrition.proteins * finalMultiplier;
            totalNutrition.fats += baseNutrition.fats * finalMultiplier;
            totalNutrition.carbs += baseNutrition.carbs * finalMultiplier;
        }
    }
    
    // Add filling nutrition (affected by tiers)
    if (cakeState.filling) {
        const fillingNutrition = cakeStyles.filling[cakeState.filling.value]?.nutrition;
        if (fillingNutrition) {
            totalNutrition.calories += fillingNutrition.calories * tierMultiplier;
            totalNutrition.proteins += fillingNutrition.proteins * tierMultiplier;
            totalNutrition.fats += fillingNutrition.fats * tierMultiplier;
            totalNutrition.carbs += fillingNutrition.carbs * tierMultiplier;
        }
    }
    
    // Add cream nutrition (affected by tiers)
    if (cakeState.cream) {
        const creamNutrition = cakeStyles.cream[cakeState.cream.value]?.nutrition;
        if (creamNutrition) {
            totalNutrition.calories += creamNutrition.calories * tierMultiplier;
            totalNutrition.proteins += creamNutrition.proteins * tierMultiplier;
            totalNutrition.fats += creamNutrition.fats * tierMultiplier;
            totalNutrition.carbs += creamNutrition.carbs * tierMultiplier;
        }
    }
    
    // Add decorations nutrition (less affected by tiers)
    cakeState.decorations.forEach(decoration => {
        const decorationNutrition = cakeStyles.decorations[decoration.value]?.nutrition;
        if (decorationNutrition) {
            const decorationMultiplier = Math.min(tierMultiplier, 2);
            totalNutrition.calories += decorationNutrition.calories * decorationMultiplier;
            totalNutrition.proteins += decorationNutrition.proteins * decorationMultiplier;
            totalNutrition.fats += decorationNutrition.fats * decorationMultiplier;
            totalNutrition.carbs += decorationNutrition.carbs * decorationMultiplier;
        }
    });
    
    // Update display
    if (caloriesElement) caloriesElement.textContent = `${Math.round(totalNutrition.calories)} ккал`;
    if (proteinsElement) proteinsElement.textContent = `${totalNutrition.proteins.toFixed(1)} г`;
    if (fatsElement) fatsElement.textContent = `${totalNutrition.fats.toFixed(1)} г`;
    if (carbsElement) carbsElement.textContent = `${totalNutrition.carbs.toFixed(1)} г`;
}

// Modal functions
function showIngredientModal(ingredientKey, card) {
    const type = card.dataset.type;
    const value = card.dataset.value;
    
    let ingredientData = null;
    let categoryData = null;
    
    // Find ingredient data
    if (type && cakeStyles[type] && cakeStyles[type][value]) {
        ingredientData = cakeStyles[type][value];
        categoryData = cakeStyles[type][value];
    }
    
    if (!ingredientData) return;
    
    // Populate modal
    document.getElementById('modal-title').textContent = 'Детали ингредиента';
    document.getElementById('modal-ingredient-name').textContent = ingredientData.name;
    document.getElementById('modal-description').textContent = ingredientData.description || 'Описание временно недоступно';
    document.getElementById('modal-icon').textContent = ingredientData.icon || card.querySelector('.option-icon').textContent;
    document.getElementById('modal-price').textContent = `${card.dataset.price} ₽`;
    
    // Populate nutrition data
    if (ingredientData.nutrition) {
        document.getElementById('modal-calories').textContent = `${ingredientData.nutrition.calories} ккал`;
        document.getElementById('modal-proteins').textContent = `${ingredientData.nutrition.proteins} г`;
        document.getElementById('modal-fats').textContent = `${ingredientData.nutrition.fats} г`;
        document.getElementById('modal-carbs').textContent = `${ingredientData.nutrition.carbs} г`;
    }
    
    currentModalIngredient = { card, type, value };
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    currentModalIngredient = null;
}

// Enhanced preview with 3D effects
function updatePreview() {
    // Update tier visibility and animation
    if (cakeState.tiers) {
        const tierCount = parseInt(cakeState.tiers.value);
        
        for (let i = 1; i <= 3; i++) {
            const tier = document.getElementById(`tier-${i}`);
            if (tier) {
                if (i <= tierCount) {
                    tier.style.display = 'block';
                    tier.classList.add('tier-active');
                    tier.classList.remove('tier-entering');
                    
                    // Animate tier appearance with delay
                    setTimeout(() => {
                        tier.classList.add('tier-entering');
                        setTimeout(() => {
                            tier.classList.remove('tier-entering');
                        }, 500);
                    }, i * 200);
                } else {
                    tier.style.display = 'none';
                    tier.classList.remove('tier-active', 'tier-entering');
                }
            }
        }
    }

    // Update all visible tiers with selected styles
    for (let i = 1; i <= 3; i++) {
        const tier = document.getElementById(`tier-${i}`);
        if (tier && tier.style.display !== 'none') {
            // Update cake base with texture for each tier
            if (cakeState.base && cakeStyles.base[cakeState.base.value]) {
                const baseStyle = cakeStyles.base[cakeState.base.value];
                const cakeBase = tier.querySelector('.cake-base-3d');
                if (cakeBase) {
                    const topElement = cakeBase.querySelector('.cake-top');
                    const sideElement = cakeBase.querySelector('.cake-side');
                    
                    if (topElement) topElement.style.background = baseStyle.background;
                    if (sideElement) {
                        sideElement.style.background = 
                            `linear-gradient(180deg, ${baseStyle.background} 0%, 
                             ${adjustBrightness(baseStyle.background, -20)} 50%, 
                             ${adjustBrightness(baseStyle.background, -40)} 100%)`;
                    }
                }
            }

            // Update cake cream for each tier
            if (cakeState.cream && cakeStyles.cream[cakeState.cream.value]) {
                const creamStyle = cakeStyles.cream[cakeState.cream.value];
                const cakeCream = tier.querySelector('.cake-cream-3d');
                if (cakeCream) {
                    const creamLayer = cakeCream.querySelector('.cream-layer');
                    if (creamLayer) {
                        creamLayer.style.background = 
                            `linear-gradient(135deg, ${creamStyle.background} 0%, 
                             ${adjustBrightness(creamStyle.background, -10)} 100%)`;
                    }
                }
            }
        }
    }

    // Update decorations (only on top tier or single tier)
    let decorationIcons = '';
    cakeState.decorations.forEach(decoration => {
        if (cakeStyles.decorations[decoration.value]) {
            decorationIcons += cakeStyles.decorations[decoration.value].icon + ' ';
        }
    });
    if (cakeDecorations) {
        cakeDecorations.textContent = decorationIcons;
    }

    // Update cake size with 3D scaling for all tiers
    if (cakeState.size) {
        const sizeMultiplier = cakeState.size.value === 'small' ? 0.9 : 
                              cakeState.size.value === 'large' ? 1.1 : 1;
        
        for (let i = 1; i <= 3; i++) {
            const tier = document.getElementById(`tier-${i}`);
            if (tier && tier.style.display !== 'none') {
                tier.style.transform = `scale(${sizeMultiplier})`;
            }
        }
    }
}

// Helper function to adjust brightness
function adjustBrightness(color, percent) {
    // Simple brightness adjustment for hex colors
    const num = parseInt(color.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
        (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
        (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
}

// Initialize CSS custom property for progress line
document.addEventListener('DOMContentLoaded', function() {
    if (progressLine) {
        const style = document.createElement('style');
        style.textContent = `
            .progress-line::after {
                width: var(--progress-width, 0%);
            }
        `;
        document.head.appendChild(style);
    }
});

document.addEventListener('DOMContentLoaded', addCakeAnimations);