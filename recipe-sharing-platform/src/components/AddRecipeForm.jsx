import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [image, setImage] = useState('');
  const [errors, setErrors] = useState({
    title: '',
    ingredients: '',
    instructions: '',
    image: ''
  });
  const [success, setSuccess] = useState('');

  // Validate form fields
  const validate = () => {
    const errors = {};
    if (!title) errors.title = 'Recipe title is required';
    if (!ingredients) errors.ingredients = 'Ingredients are required';
    if (!instructions) errors.instructions = 'Preparation steps are required';
    if (!image) errors.image = 'Recipe image URL is required';
    else if (!/^https?:\/\/.+/.test(image)) errors.image = 'Please enter a valid URL';

    // Check if ingredients list has at least 2 items
    const ingredientsList = ingredients.split('\n').map((ingredient) => ingredient.trim()).filter(Boolean);
    if (ingredientsList.length < 2) errors.ingredients = 'Please provide at least two ingredients';

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    if (!validate()) return;

    // Mock submission (you can replace this with actual form submission logic)
    setSuccess('Recipe added successfully!');
    setTitle('');
    setIn
