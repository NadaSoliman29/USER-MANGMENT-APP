import { useEffect, useState } from 'react';
import axios from 'axios';
import { BiEdit, BiTrashAlt } from 'react-icons/bi';

interface User {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
  website: string;
}