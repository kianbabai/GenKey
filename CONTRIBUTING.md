# Contributing to GenKey

Thank you for your interest in contributing to GenKey! This document provides guidelines for contributing to this project.

## 🤝 How to Contribute

### 🐛 Reporting Bugs
- Use the [GitHub issue tracker](https://github.com/kianbabai/GenKey/issues)
- Provide clear steps to reproduce the bug
- Include your Chrome version and OS
- Add screenshots if applicable
- Use the "bug" label

### 💡 Suggesting Features
- Open an issue with the "enhancement" label
- Describe the feature and its benefits
- Consider if it fits the project's scope
- Provide mockups or examples if possible

### 🔧 Code Contributions
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 🛠️ Development Setup

### Prerequisites
- Google Chrome browser
- Git
- Basic knowledge of HTML, CSS, and JavaScript

### Setup Steps
1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/GenKey-Chrome-Extension.git
   cd GenKey-Chrome-Extension
   ```

2. **Load the extension in Chrome**
   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode" (toggle in top-right)
   - Click "Load unpacked"
   - Select the `GenKey-Chrome-Extension` folder

3. **Make your changes**
   - Edit the relevant files
   - Test your changes in the browser

4. **Test thoroughly**
   - Test all generation functions
   - Verify copy functionality
   - Check responsive design
   - Test on different screen sizes

## 📝 Code Style Guidelines

### General
- Use consistent indentation (2 spaces)
- Add comments for complex logic
- Follow existing code patterns
- Use meaningful variable and function names

### HTML
- Use semantic HTML elements
- Include proper accessibility attributes
- Keep structure clean and organized

### CSS
- Use consistent naming conventions
- Group related styles together
- Use CSS variables for colors and sizes
- Follow mobile-first approach

### JavaScript
- Use modern ES6+ features
- Add JSDoc comments for functions
- Handle errors gracefully
- Keep functions small and focused

## 🧪 Testing

### Manual Testing
1. **Functionality Testing**
   - Test password generation with different options
   - Test UUID generation (both v4 and v1)
   - Test API key generation with and without prefix
   - Test copy functionality for all generators

2. **UI/UX Testing**
   - Test responsive design
   - Test button interactions
   - Test form validation
   - Test accessibility

3. **Cross-browser Testing**
   - Test in different Chrome versions
   - Test on different operating systems
   - Test on different screen sizes

### Test Checklist
- [ ] All generators work correctly
- [ ] Copy functionality works
- [ ] UI is responsive
- [ ] No console errors
- [ ] All buttons are clickable
- [ ] Form validation works
- [ ] Animations are smooth

## 📋 Pull Request Process

### Before Submitting
1. **Ensure your code works correctly**
   - Test all functionality
   - Check for console errors
   - Verify UI responsiveness

2. **Update documentation if needed**
   - Update README.md if you add new features
   - Update comments in code
   - Update this file if you change contribution guidelines

3. **Add tests if applicable**
   - Add manual test cases
   - Document new features

4. **Follow the PR template**
   - Use the provided PR template
   - Fill out all sections
   - Add screenshots if UI changes

### PR Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested locally
- [ ] All tests pass
- [ ] No console errors

## Screenshots (if applicable)
Add screenshots here

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No breaking changes
```

### After Submitting
1. **Respond to feedback promptly**
   - Address review comments
   - Make requested changes
   - Ask questions if unclear

2. **Keep PRs focused**
   - One feature per PR
   - Keep changes small
   - Clear commit messages

## 🏷️ Issue Labels

We use the following labels to categorize issues:

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements or additions to documentation
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed
- `question` - Further information is requested

## 📞 Getting Help

If you need help or have questions:

1. **Check existing issues** - Your question might already be answered
2. **Search discussions** - Look through GitHub Discussions
3. **Create an issue** - Use the "question" label
4. **Join our community** - Link to Discord/Slack if available

## 🎉 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- GitHub contributors page

## 📄 Code of Conduct

### Our Pledge
We are committed to providing a welcoming and inspiring community for all. Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

### Expected Behavior
- Be respectful and inclusive
- Use welcoming and inclusive language
- Be respectful of differing viewpoints
- Accept constructive criticism gracefully
- Focus on what's best for the community

## 📚 Resources

- [Chrome Extension Development Guide](https://developer.chrome.com/docs/extensions/)
- [Manifest V3 Migration Guide](https://developer.chrome.com/docs/extensions/migrating/)
- [Chrome Extension Best Practices](https://developer.chrome.com/docs/extensions/mv3/devguide/)

## 🙏 Thank You

Thank you for contributing to GenKey! Your contributions make this project better for everyone.

---

**Happy coding! 🚀**
