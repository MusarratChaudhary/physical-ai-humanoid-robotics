// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: ['intro'],
    },

    {
      type: 'category',
      label: 'Module 1 - The Robotic Nervous System (ROS 2)',
      items: [
        'module1-ros2/index',
        'module1-ros2/intro',
        'module1-ros2/theory',
        'module1-ros2/key-concepts',
        'module1-ros2/tools',
        'module1-ros2/challenges',
        'module1-ros2/safety',
        'module1-ros2/quiz',
        {
          type: 'category',
          label: 'Labs',
          items: [
            'module1-ros2/labs/lab1',
            'module1-ros2/labs/lab2',
            'module1-ros2/labs/lab3',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Module 2 - The Digital Twin (Gazebo & Unity)',
      items: [
        'module2-digital-twin/index',
        'module2-digital-twin/intro',
        'module2-digital-twin/theory',
        'module2-digital-twin/key-concepts',
        'module2-digital-twin/tools',
        'module2-digital-twin/challenges',
        'module2-digital-twin/safety',
        'module2-digital-twin/quiz',
        {
          type: 'category',
          label: 'Labs',
          items: [
            'module2-digital-twin/labs/lab1',
            'module2-digital-twin/labs/lab2',
            'module2-digital-twin/labs/lab3',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Module 3 - The AI-Robot Brain (NVIDIA Isaac™)',
      items: [
        'module3-ai-brain/index',
        'module3-ai-brain/intro',
        'module3-ai-brain/theory',
        'module3-ai-brain/key-concepts',
        'module3-ai-brain/tools',
        'module3-ai-brain/challenges',
        'module3-ai-brain/safety',
        'module3-ai-brain/quiz',
        {
          type: 'category',
          label: 'Labs',
          items: [
            'module3-ai-brain/labs/lab1',
            'module3-ai-brain/labs/lab2',
            'module3-ai-brain/labs/lab3',
          ],
        },
      ],
    },
     {
   type: 'category',
   label: 'Module 4 - Vision-Language-Action (VLA)',
   items: [
     'module4-vla/index',
     'module4-vla/intro',
     'module4-vla/theory',
     'module4-vla/key-concepts',
     'module4-vla/tools',
     'module4-vla/challenges',
     'module4-vla/safety',
     'module4-vla/quiz',
     {
       type: 'category',
       label: 'Labs',
       items: [
         'module4-vla/labs/lab1',
         'module4-vla/labs/lab2',
         'module4-vla/labs/lab3',
       ],
     },
   ],
 },
  {
   type: 'category',
   label: 'Capstone Project - The Autonomous Humanoid',
   items: [
     'capstone/index',
     'capstone/overview',
     'capstone/system-architecture',
     'capstone/voice-command-pipeline',
     'capstone/llm-planning',
     'capstone/navigation-manipulation',
     'capstone/integration-testing',
     'capstone/evaluation',
   ],
 },
],
};

module.exports = sidebars;
