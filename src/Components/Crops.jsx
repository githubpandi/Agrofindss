import React, { useState } from 'react';
import './Crops.css';

// Modal Component
const Modal = ({ show, onClose, crop }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>{crop.name}</h2>
        <p>{crop.details}</p>
        <ul>
          <li><strong>Yield:</strong> {crop.yield}</li>
          <li><strong>Growth Period:</strong> {crop.growthPeriod}</li>
          <li><strong>Income:</strong> {crop.income}</li>
        </ul>
      </div>
    </div>
  );
};

const Crops = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCrop, setSelectedCrop] = useState(null);

  const crops = [
    {
      name: 'Wheat',
      image: 'https://img.freepik.com/premium-photo/wheat-background-hd-wallpaper-photographic-image_993236-3015.jpg',
      description: 'Wheat is a staple crop grown worldwide.',
      details: 'Wheat thrives in well-drained soils with good fertility. Optimal pH is between 6.0 and 7.0. It requires moderate temperatures (10-20°C) and should be planted in early spring or fall. Ensure proper irrigation, especially during dry periods, and practice crop rotation to prevent disease.',
      yield: '3-4 tons per hectare',
      growthPeriod: '120-150 days',
      income: '$500 - $800 per hectare'
    },
    {
      name: 'Corn',
      image: 'https://png.pngtree.com/thumb_back/fh260/background/20230426/pngtree-yellow-corn-plant-with-dark-background-image_2518503.jpg',
      description: 'Maximize corn yields with insights into planting techniques, nutrient management, and disease prevention.',
      details: 'Corn prefers well-drained, fertile soils with a pH of 5.8 to 7.0. It needs full sun and warm temperatures (16-24°C) for optimal growth. Space plants 20-30 inches apart and ensure consistent watering. Regularly check for pests and diseases.',
      yield: '4-6 tons per hectare',
      growthPeriod: '90-120 days',
      income: '$600 - $900 per hectare'
    },
    {
      name: 'Rice',
      image: 'https://wallpaperaccess.com/full/1463773.jpg',
      description: 'Rice is a key food crop globally.',
      details: 'Rice requires abundant water and grows best in flooded fields. It thrives in warm temperatures (20-30°C) and needs a pH of 5.5 to 7.0. Prepare fields with proper leveling and water control. Monitor for weeds and pests throughout the growing season.',
      yield: '4-7 tons per hectare',
      growthPeriod: '120-150 days',
      income: '$700 - $1000 per hectare'
    },
    {
      name: 'Soybean',
      image: 'https://img.freepik.com/free-photo/soybean-sauce-soybean-wooden-floor-soy-sauce-food-nutrition-concept_1150-26321.jpg',
      description: 'Unlock the potential of soybeans with guidance on planting density, crop rotation, and harvest timing.',
      details: 'Soybeans prefer well-drained, loamy soils with a pH of 6.0 to 7.0. They grow well in warm temperatures (20-30°C) and need full sun. Space plants 15-30 inches apart. Manage weeds and pests with appropriate control measures and ensure proper irrigation.',
      yield: '2-3 tons per hectare',
      growthPeriod: '90-120 days',
      income: '$500 - $700 per hectare'
    },
    {
      name: 'Tomato',
      image: 'https://t4.ftcdn.net/jpg/03/54/24/17/360_F_354241708_IrEvwS6AeMei4ZZJHTSOC1xqtl79rS10.jpg',
      description: 'Learn how to grow juicy tomatoes with tips on pruning, pest control, and optimal sun exposure.',
      details: 'Tomatoes need well-drained, fertile soil with a pH of 6.0 to 6.8. They require full sun and warm temperatures (20-25°C). Space plants 18-24 inches apart and provide staking or cages for support. Regularly water and check for common pests like aphids and hornworms.',
      yield: '30-50 tons per hectare',
      growthPeriod: '60-85 days',
      income: '$800 - $1200 per hectare'
    },
    {
      name: 'Potato',
      image: 'https://static.vecteezy.com/system/resources/previews/036/491/729/non_2x/ai-generated-summer-harvest-potatoes-freshly-picked-arranged-in-a-farmers-field-for-social-media-post-size-free-photo.jpg',
      description: 'Potatoes are versatile crops. Discover strategies for planting, hilling, and disease management.',
      details: 'Potatoes grow best in loose, well-drained soil with a pH of 4.8 to 5.4. They prefer cool temperatures (15-20°C) and should be planted in rows with adequate space for hilling. Regularly water and control pests such as potato beetles and blight.',
      yield: '20-30 tons per hectare',
      growthPeriod: '70-120 days',
      income: '$600 - $900 per hectare'
    },
    {
      name: 'Carrot',
      image: 'https://c4.wallpaperflare.com/wallpaper/204/872/868/carrots-vegetables-harvest-wallpaper-preview.jpg',
      description: 'Enhance carrot growth with insights on soil health, spacing, and pest resistance.',
      details: 'Carrots prefer loose, well-drained soil with a pH of 6.0 to 6.8. They need cool temperatures (15-20°C) and should be sown directly into the soil. Space seeds 1-2 inches apart and thin seedlings as they grow. Keep soil consistently moist and manage pests like carrot flies.',
      yield: '20-30 tons per hectare',
      growthPeriod: '70-80 days',
      income: '$400 - $600 per hectare'
    },
    {
      name: 'Lettuce',
      image: 'https://c1.wallpaperflare.com/preview/768/968/969/lettuce-green-vegetables-greens.jpg',
      description: 'Grow fresh lettuce with advice on watering techniques, spacing, and pest control.',
      details: 'Lettuce thrives in cool weather (10-20°C) and well-drained, fertile soil with a pH of 6.0 to 7.0. Space plants 6-12 inches apart and ensure regular watering. Use mulch to keep soil cool and manage pests such as aphids and slugs.',
      yield: '15-20 tons per hectare',
      growthPeriod: '60-80 days',
      income: '$300 - $500 per hectare'
    },
    {
      name: 'Strawberry',
      image: 'https://static.vecteezy.com/system/resources/previews/027/006/834/large_2x/ripe-red-strawberries-on-a-branch-in-the-garden-at-sunset-a-branch-with-natural-strawberries-on-a-blurred-background-of-a-strawberry-field-at-golden-hour-ai-generated-free-photo.jpg',
      description: 'Strawberries are a favorite fruit. Learn about soil preparation, pest management, and harvesting techniques.',
      details: 'Strawberries prefer well-drained, sandy loam soil with a pH of 5.5 to 6.8. They require full sun and cool temperatures (15-25°C). Space plants 12-18 inches apart and mulch to retain moisture and control weeds. Monitor for pests like spider mites and disease.',
      yield: '10-15 tons per hectare',
      growthPeriod: '90-120 days',
      income: '$700 - $1000 per hectare'
    },
    {
      name: 'Banana',
      image: 'https://img.freepik.com/premium-photo/banana-background-fruit-background-hd-8k-wallpaper-stock-photographic-image_890746-50314.jpg',
      description: 'Bananas require specific conditions. Discover tips on soil, irrigation, and pest management for a fruitful yield.',
      details: 'Bananas need rich, well-drained soil with a pH of 5.5 to 7.0. They thrive in warm, tropical climates (25-30°C) with high humidity. Space plants 8-10 feet apart and provide consistent moisture. Control pests like banana weevils and fungal diseases.',
      yield: '30-40 tons per hectare',
      growthPeriod: '9-12 months',
      income: '$1200 - $1500 per hectare'
    }
  ];

  const handleLearnMore = (crop) => {
    setSelectedCrop(crop);
    setShowModal(true);
  };

  return (
    <div className="crops-page">
      <header className="crops-header">
        <h1>Crops Management</h1>
        <p>Explore our featured crops and learn how to maximize your yields.</p>
      </header>

      <section className="crop-overview">
        <div className="overview-content">
          <h2>Crop Overview</h2>
          <p>Learn about the various crops and how to grow them effectively.</p>
        </div>
        <img src="https://tse2.mm.bing.net/th?id=OIP.fExEQPR9GkgS3DaveK6pAgHaEK&pid=Api&P=0&h=220/600x400" alt="Crop Overview" className="overview-image" />
      </section>

      <section className="featured-crops">
        <h2>Featured Crops</h2>
        <div className="crop-grid">
          {crops.map((crop) => (
            <div key={crop.name} className="crop-card">
              <img src={crop.image} alt={crop.name} />
              <h3>{crop.name}</h3>
              <p>{crop.description}</p>
              <button className="learn-more-button" onClick={() => handleLearnMore(crop)}>Learn More</button>
            </div>
          ))}
        </div>
      </section>

      <section className="crop-management-tips">
        <h2>Crop Management Tips</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <h4>Soil Preparation</h4>
            <p>Ensure soil is well-drained and rich in organic matter for optimal crop growth.</p>
          </div>
          <div className="tip-card">
            <h4>Watering</h4>
            <p>Regular watering is crucial, but avoid overwatering to prevent root rot.</p>
          </div>
          <div className="tip-card">
            <h4>Pest Control</h4>
            <p>Implement integrated pest management practices to minimize crop damage.</p>
          </div>
          <div className="tip-card">
            <h4>Nutrient Management</h4>
            <p>Apply fertilizers and soil amendments based on crop needs and soil testing for balanced nutrient supply.</p>
          </div>
        </div>
      </section>

      <Modal show={showModal} onClose={() => setShowModal(false)} crop={selectedCrop} />
    </div>
  );
};

export default Crops;
